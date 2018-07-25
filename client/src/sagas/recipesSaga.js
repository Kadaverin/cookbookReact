import { takeLatest ,all ,call ,put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { push } from 'connected-react-router';
import * as actionTypes from '../constants/actionTypes';
import recipesAPI from '../api/recipesApi';
import * as actionCreators from '../actions/recipes';
import {recipesArr} from '../store/recipesStateScema';


function* fetchAllRecipes(){
  try{
    const recipes = yield call(recipesAPI.fetchAllRecipes)
    const normalized = normalize(recipes, recipesArr)
    const all = normalized.result;
    const byId = normalized.entities.byId || {}
    yield put( actionCreators.allRecipesFetchedAndNormalized(all , byId) )

  } catch (e) {
    console.log(e)
    yield put(actionCreators.fetchAllRecipesError())
  }
}


function* fetchRecipe(action){
  try {
    const recipe = yield call(recipesAPI.fetchRecipeById , action.payload.id)
    yield put (actionCreators.fetchRecipeSuccess(recipe))
  } catch (e) {
    console.log(e)
    yield put(actionCreators.fetchAllRecipesError())
  }
}

function* createRecipe(action){
  try {
    const newRecipe = yield call(recipesAPI.createRecipy, action.payload)
    yield put( actionCreators.createRecipeSuccess(newRecipe) )
    yield put(push('/recipes'));
  } catch (e) {
    console.log(e)
    yield put( actionCreators.createRecipeError() )
  }
}

function* deleteRecipe(action){
  try {
    yield call(recipesAPI.deleteRecipe, action.payload.id);
    yield put( actionCreators.deleteRecipeSucess(action.payload.id) );
  } catch (e) {
    console.log(e)
    yield put( actionCreators.deleteRecipeError() );
  } 
}

function* updateRecipe(action){
  try {
    const updated = yield call(recipesAPI.updateRecipe, action.payload._id , action.payload)
    yield put(actionCreators.updateRecipeSuccess(updated))
    yield put(push('/recipes'));
  } catch (e) {
    console.log(e)
    yield put (actionCreators.updateRecipeError())    
  }
}

function* changeRecipeRating(action){
  try {
    yield call (recipesAPI.patchRecipeRating, action.payload.id, action.payload.rating)
    yield put(actionCreators.changeRecipeRatingSuccess(action.payload))
  } catch (e) {
    console.log(e)
    yield put(actionCreators.changeRecipeRatingError())
  }
}

export default function* recipesSaga(){
  yield all([
    takeLatest(actionTypes.FETCH_ALL_RECIPES_REQUEST, fetchAllRecipes),
    takeLatest(actionTypes.CREATE_RECIPE_REQUEST, createRecipe),
    takeLatest(actionTypes.FETCH_RECIPE_REQUEST, fetchRecipe),
    takeLatest(actionTypes.DELETE_RECIPE_REQUEST, deleteRecipe),
    takeLatest(actionTypes.UPDATE_RECIPE_REQUEST, updateRecipe),
    takeLatest(actionTypes.CHANGE_RECIPE_RATING_REQUEST, changeRecipeRating)
  ])
}