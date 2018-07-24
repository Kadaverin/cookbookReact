import * as actionTypes from '../constants/actionTypes'

export const fetchAllRecipes = () => ({
  type: actionTypes.FETCH_ALL_RECIPES_REQUEST
})

export const fetchAllRecipesError = () => ({
  type: actionTypes.FETCH_ALL_RECIPES_ERROR
})

export const allRecipesFetchedAndNormalized = (all , byId) => ({
  type: actionTypes.FETCH_ALL_RECIPES_SUCCESS,
  payload: {
    all: all,
    byId: byId
  }
})

export const fetchRecipeRequest = (id) => ({
  type: actionTypes.FETCH_RECIPE_SUCCESS,
  payload : { id }
})

export const fetchRecipeSuccess = (recipe) => ({
  type: actionTypes.FETCH_RECIPE_SUCCESS,
  payload: { ...recipe }
})

export const fetchRecipeError = () =>({
  type: actionTypes.FETCH_RECIPE_ERROR
})

export const deleteRecipe = () => ({
  type: actionTypes.DELETE_RECIPE_REQUEST
})


// export const 