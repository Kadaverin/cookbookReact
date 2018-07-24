import * as actionTypes from '../constants/actionTypes'

// GET ALL

export const fetchAllRecipesRequest = () => ({
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

// GET ONE

export const fetchRecipeRequest = (id) => ({
  type: actionTypes.FETCH_RECIPE_SUCCESS,
  payload : { id }
})

export const fetchRecipeSuccess = (recipe) => ({
  type: actionTypes.FETCH_RECIPE_SUCCESS,
  payload: { ...recipe }
})

export const fetchRecipeError = () => ({
  type: actionTypes.FETCH_RECIPE_ERROR
})


// POST

export const createRecipeRequest = (recipe) => ({
  type: actionTypes.CREATE_RECIPE_REQUEST,
  payload: recipe
})

export const createRecipeSuccess = (newRecipe) => ({
  type: actionTypes.CREATE_RECIPE_SUCCESS,
  payload: newRecipe
})

export const createRecipeError = () => ({
  type: actionTypes.CREATE_RECIPE_ERROR
})

// DELETE

export const deleteRecipeRequest = () => ({
  type: actionTypes.DELETE_RECIPE_REQUEST
})

export const deleteRecipeSucess = () => ({
  type: actionTypes.DELETE_RECIPE_SUCCESS
})

export const deleteRecipeError = () => ({
  type: actionTypes.DELETE_RECIPE_ERROR
})

