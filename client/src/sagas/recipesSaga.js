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
    const res = yield call(recipesAPI.fetchAllRecipes)
    console.log( res)
    const normalized = normalize(res.data , recipesArr)
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
    const res = yield call(recipesAPI.fetchRecipeById , action.payload.id)
    yield put (actionCreators.fetchRecipeSuccess(res.data))
  } catch (e) {
    yield put(actionCreators.fetchAllRecipesError())
  }
}

export default function* recipesSaga(){
  yield all([
    takeLatest(actionTypes.FETCH_ALL_RECIPES_REQUEST, fetchAllRecipes)
  ])
}