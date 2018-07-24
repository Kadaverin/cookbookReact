import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchAllRecipes , deleteRecipe} from '../../actions/recipes'
import { allRecipes } from '../../reducers/recipes'

export default class SingleResipe extends Component{
  render(){
    return(
      <div>
        single
      </div>
    )
  }
}