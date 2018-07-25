import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allVissibleAndSortedRecipes } from '../../reducers/recipes';

import RecipeList from '../../components/RecipeList/recipeList';
import RecipeListHeader from '../../components/RecipeList/recipeListHeader';
import { 
  fetchAllRecipesRequest, deleteRecipeRequest, 
  toggleSortByRatingFlag, changeRecipeTitleFIlter 
} from '../../actions/recipes';


import { Container } from 'semantic-ui-react'

class MainRecipesPage extends Component {

  componentDidMount(){
    this.props.actions.fetchAllRecipesRequest();
  }

  handleDeleteRecipe = (id) => {
    this.props.actions.deleteRecipeRequest(id)
  }

  handleEditRecipeClick = (id) => {
    this.props.history.push(`/recipes/${id}`)
  }

  handleAddRecipeClick = () => { 
    this.props.history.push('/recipes/new')
  }

  handleRateRecipe = (id, rate) => {
    this.props.actions.rateRecipeRequest(id, rate)
  }



  render() {
    const { recipes } = this.props;
    return (
      <div>
        <Container >
        <RecipeListHeader
          goToCreatRecipeComponent = { this.handleAddRecipeClick }
          handleSearch = { this.props.actions.changeRecipeTitleFIlter }
          handleSwitchSorting = { this.props.actions.toggleSortByRatingFlag }
        />
        <RecipeList 
          recipes = {recipes}
          handleDeleteRecipe = { this.handleDeleteRecipe }
          handleRateRecipe = { this.rateRacipe }
          goToEditRecipe = { this.handleEditRecipeClick }
        />
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { recipes : allVissibleAndSortedRecipes(state) } 
}

function mapDispatchToProps(dispatch){
  return { 
    actions : bindActionCreators(
       {
        fetchAllRecipesRequest, deleteRecipeRequest,
        toggleSortByRatingFlag, changeRecipeTitleFIlter    
       }
      , dispatch) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRecipesPage)