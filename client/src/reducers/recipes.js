import { combineReducers } from 'redux'
import * as actionTypes from '../constants/actionTypes'

// const initialState = {
//   byId : {},
//   all : [],
// }

const initialState = {
  byId : {},
  all : [],
  recipeTitleFilter : '',
  sortByRating : false
}


function recipeTitleFilter(state = initialState.recipeTitleFilter, action){
  switch(action.type){
    case actionTypes.CHANGLE_RECIPE_TITLE_FILTER:
      return action.payload.recipeTitleFilter
    default: return state
  }
}

function sortByRating(state = initialState.sortByRating, action){
  switch(action.type){
    case actionTypes.TOGGLE_SORT_BY_RATING_FLAG:
      return !state
    default: return state
  }
}


function all (state = initialState.all, action) {
  switch(action.type){
    case actionTypes.FETCH_ALL_RECIPES_SUCCESS:
      return action.payload.all;

    case actionTypes.DELETE_RECIPE_SUCCESS:
      return state.filter( id => id!== action.payload.id)

    case actionTypes.CREATE_RECIPE_SUCCESS:
      return [ ...state, action.payload._id]

    default: return state
  }
}

function byId(state = initialState.byId, action){
  switch(action.type){
    case actionTypes.FETCH_RECIPE_SUCCESS:
    case actionTypes.UPDATE_RECIPE_SUCCESS:
      return { ...state ,  [action.payload._id]: action.payload }

    case actionTypes.FETCH_ALL_RECIPES_SUCCESS: 
      return action.payload.byId

    case actionTypes.CREATE_RECIPE_SUCCESS:
     return { ...state , [action.payload._id]: action.payload}

    default: return state
  }
}

export default combineReducers({
  all,
  byId,
  recipeTitleFilter,
  sortByRating
})

// export const allRecipes = ({ recipes }) => recipes.all.map(id => recipes.byId[id]);
export const recipeById = id => ({ recipes }) => recipes.byId[id]


// или вынести это в логику компонента ..

export const allVissibleAndSortedRecipes = ({ recipes }) => {
  let res = recipes.all.map(id => recipes.byId[id]);
  if (recipes.sortByRating) {
    res.sort( (rec1, rec2) => rec1.rating - rec2.rating )
  }
  if (recipes.recipeTitleFilter){
    res  = res.filter( recipe => new RegExp(recipes.recipeTitleFilter , 'i').test(recipe.title));
  }
  return res 
} 