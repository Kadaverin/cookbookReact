import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RecipeForm from '../../components/RecipeForm/recipeForm'

import { Button , Form } from 'semantic-ui-react'
// import {fetchAllRecipes , deleteRecipe} from '../../actions/recipes'
// import { allRecipes } from '../../reducers/recipes'

export default class CreateRecipe extends Component{
  render(){
    return(
      <div>
        Creating
      </div>
    )
  }
}