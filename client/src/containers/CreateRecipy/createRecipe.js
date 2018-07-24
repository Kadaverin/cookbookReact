import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createRecipeRequest } from '../../actions/recipes';
import RecipeForm from '../../components/RecipeForm/recipeForm'

const CreateRecipe = (props) => (

      <RecipeForm
        formTitle = 'Create new recipe'
        submitText = 'Create'
        submitHandler = { props.actions.createRecipeRequest }
        cancelHandler = { () => props.history.push('/recipes') }
      />
)
  
function mapDispatchToProps(dispatch){
  return { actions : bindActionCreators({ createRecipeRequest }, dispatch) }
}

export default connect(null, mapDispatchToProps)(CreateRecipe)