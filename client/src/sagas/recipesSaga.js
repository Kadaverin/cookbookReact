import { takeLatest ,all ,call ,put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { push } from 'connected-react-router';
// import recipesSchema
import * as actionTypes from '../constants/actionTypes';
import recipesAPI from '../api/recipesApi'
import * as actionCreators from '../actions/recipes'
import {recipesArr} from '../store/recipesStateScema'


function* fetchAllRecipes(){
  try{
    const recipes = yield call(recipesAPI.fetchAllRecipes)
    const normalized = normalize(recipes, recipesArr)
    const all = normalized.result;
    const byId = normalized.entities.byId || {}
    yield put( actionCreators.allRecipesFetchedAndNormalized(all , byId) )

  } catch (e) {
    yield put(actionCreators.fetchAllRecipesError())
  }
}


function* fetchRecipe(action){
  try {
    const recipe = yield call(recipesAPI.fetchRecipeById , action.payload.id)
    yield put (actionCreators.fetchRecipeSuccess(recipe))
  } catch (e) {
    yield put(actionCreators.fetchAllRecipesError())
  }
}

function* createRecipe(action){
  try {
    console.log(action.payload)
    const newRecipe = yield call(recipesAPI.createRecipy, action.payload)
    yield put( actionCreators.createRecipeSuccess(newRecipe) )
  } catch (e) {
    yield put( actionCreators.createRecipeError() )
  }
}

function* deleteRecipe(action){
  try {
    const deleted = yield call(recipesAPI.deleteRecipe, action.payload.id);
    yield put( actionCreators.deleteRecipeSucess(deleted) );
  } catch (e) {
    yield put( actionCreators.createRecipeError );
  } 
}

export default function* recipesSaga(){
  yield all([
    takeLatest(actionTypes.FETCH_ALL_RECIPES_REQUEST, fetchAllRecipes),
    takeLatest(actionTypes.CREATE_RECIPE_REQUEST, createRecipe),
    takeLatest(actionTypes.FETCH_RECIPE_REQUEST, fetchRecipe),
    takeLatest(actionTypes.DELETE_RECIPE_REQUEST, deleteRecipe)
  ])
}