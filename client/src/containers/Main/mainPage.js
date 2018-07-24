import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchAllRecipesRequest , deleteRecipeRequest} from '../../actions/recipes';
import { allRecipes } from '../../reducers/recipes';

import RecipeList from '../../components/RecipeList/recipeList';
import RecipeListHeader from '../../components/RecipeList/recipeListHeader';


import { Container } from 'semantic-ui-react'

class MainRecipesPage extends Component {


  componentDidMount(){
    this.props.actions.fetchAllRecipesRequest();
  }

  handleDeleteRecipy = (id) => {
    this.props.atcions.deleteRecipeRequest(id)
  }

  handleEditRecipe(id){
    this.props.history.push(`/recipes/${id}`)
  }

  handleAddRecipeClick = () =>{
    this.props.history.push('/recipes/new')
  }



  render() {
    const { recipes } = this.props;
    return (
      <div>
        <Container >
        <RecipeListHeader
          goToCreatRecipeComponent = { this.handleAddRecipeClick }
        />
        <RecipeList recipes = {recipes}/>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { recipes : allRecipes(state) } 
}

function mapDispatchToProps(dispatch){
  return { 
    actions : bindActionCreators(
      { fetchAllRecipesRequest, deleteRecipeRequest }
      , dispatch) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRecipesPage)