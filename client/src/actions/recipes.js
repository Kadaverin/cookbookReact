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
  type: actionTypes.FETCH_RECIPE_REQUEST,
  payload : { id }
})

export const fetchRecipeSuccess = (recipe) => ({
  type: actionTypes.FETCH_RECIPE_SUCCESS,
  payload: recipe 
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

// UPDATE

export const updateRecipeRequest = (newRecipe) => ({
  type: actionTypes.UPDATE_RECIPE_REQUEST,
  payload : newRecipe
})

export const updateRecipeSuccess = (updatedRecipe) => ({
  type: actionTypes.UPDATE_RECIPE_SUCCESS,
  payload : updatedRecipe
})

export const updateRecipeError = () => ({
  type: actionTypes.UPDATE_RECIPE_ERROR
})

// DELETE

export const deleteRecipeRequest = (id) => ({
  type: actionTypes.DELETE_RECIPE_REQUEST,
  payload : { id }
})

export const deleteRecipeSucess = (deletedId) => ({
  type: actionTypes.DELETE_RECIPE_SUCCESS,
  payload : { id : deletedId }
})

export const deleteRecipeError = () => ({
  type: actionTypes.DELETE_RECIPE_ERROR
})


// sorting 

export const toggleSortByRatingFlag = () => ({
  type: actionTypes.TOGGLE_SORT_BY_RATING_FLAG
})

// search

export const changeRecipeTitleFIlter = (recipeTitleFilter) => ({
  type: actionTypes.CHANGE_RECIPE_TITLE_FILTER,
  payload : { recipeTitleFilter }
})

// rating  

export const changeRecipeRatingRequest = (id , rating) => ({
  type: actionTypes.CHANGE_RECIPE_RATING_REQUEST,
  payload : { id , rating }
})

export const changeRecipeRatingSuccess = (updatedRecipy) => ({
  type: actionTypes.CHANGE_RECIPE_RATING_SUCCESS,
  payload: updatedRecipy
})

export const changeRecipeRatingError = () => ({
  type: actionTypes.CHANGE_RECIPE_RATING_ERROR
})