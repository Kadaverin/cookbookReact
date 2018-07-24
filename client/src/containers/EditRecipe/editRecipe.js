import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchAllRecipes , deleteRecipe} from '../../actions/recipes'
import { allRecipes } from '../../reducers/recipes'
import RecipeForm from '../../components/RecipeForm/recipeForm'

export default class EditRecipe extends Component{
  render(){
    return(
      <RecipeForm>

      </RecipeForm>
    )
  }
}