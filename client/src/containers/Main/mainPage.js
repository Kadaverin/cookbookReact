import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allVissibleAndSortedRecipes, isSortedByRating} from '../../reducers/recipes';

import RecipeList from '../../components/RecipeList/recipeList';
import RecipeListHeader from '../../components/RecipeList/recipeListHeader';
import { 
  fetchAllRecipesRequest, deleteRecipeRequest, 
  toggleSortByRatingFlag, changeRecipeTitleFIlter ,
  updateRecipeRequest, changeRecipeRatingRequest
} from '../../actions/recipes';

import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class MainRecipesPage extends Component {

  componentDidMount(){
    this.props.actions.fetchAllRecipesRequest();
  }

  handleDeleteRecipe = (id) => {
    this.props.actions.deleteRecipeRequest(id)
  }

  handleEditRecipeClick = (id) => {
    this.props.history.push(`/recipes/${id}/edit`)
  }

  handleAddRecipeClick = () => { 
    this.props.history.push('/recipes/new')
  }

  handleRateRecipe = (recipe, rating ) => {
    this.props.actions.updateRecipeRequest( 
      {
         ...recipe,
        rating: rating 
      }
    );
  }

  handleVeiwRecipe = (recipe) => {
    this.props.history.push(`/recipes/${recipe._id}`)
  }

  handleRateRecipe = (recipeId , rate ) => {
    this.props.actions.changeRecipeRatingRequest(recipeId , rate )
  }


  render() {
    const { recipes } = this.props;
    return (
      <Container >
        <RecipeListHeader
          goToCreatRecipeComponent = { this.handleAddRecipeClick }
          handleSearch = { this.props.actions.changeRecipeTitleFIlter }
          handleSwitchSorting = { this.props.actions.toggleSortByRatingFlag }
          isSortedByRating = { this.props.isSortedByRating }
        />
        <RecipeList 
          recipes = {recipes}
          handleDeleteRecipe = { this.handleDeleteRecipe }
          handleRateRecipe = { this.handleRateRecipe }
          goToEditRecipe = { this.handleEditRecipeClick }
          handleVeiwRecipe = { this.handleVeiwRecipe }
          hangleRateRecipe = { this.handleRateRecipe}
        />
      </Container>
    );
  }
}

function mapStateToProps(state){
  return { 
    recipes : allVissibleAndSortedRecipes(state),
    isSortedByRating : isSortedByRating(state)
  } 
}

function mapDispatchToProps(dispatch){
  return { 
    actions : bindActionCreators(
       {
        fetchAllRecipesRequest, deleteRecipeRequest,
        toggleSortByRatingFlag, changeRecipeTitleFIlter,
        updateRecipeRequest, changeRecipeRatingRequest
       }
      , dispatch) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRecipesPage)


MainRecipesPage.propTypes = {

  recipes: PropTypes.arrayOf(PropTypes.shape({
    title : PropTypes.string,
    rating: PropTypes.number,
    decription: PropTypes.string
  })),

  isSortedByRating: PropTypes.bool,

  actions: PropTypes.shape({
    fetchAllRecipesRequest : PropTypes.func.isRequired,
    deleteRecipeRequest: PropTypes.func.isRequired,
    toggleSortByRatingFlag : PropTypes.func.isRequired,
    changeRecipeTitleFIlter: PropTypes.func.isRequired,
    updateRecipeRequest : PropTypes.func.isRequired,
    changeRecipeRatingRequest: PropTypes.func.isRequired
  }),
}