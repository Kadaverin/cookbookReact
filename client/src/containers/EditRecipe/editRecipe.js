import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchAllRecipes , deleteRecipe} from '../../actions/recipes'
import { allRecipes } from '../../reducers/recipes'

export default class EditRecipe extends Component{
  render(){
    return(
      <div>
        Editing
      </div>
    )
  }
}