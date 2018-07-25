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

  constructor(props){
    super(props)
    this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this)
  }


  componentDidMount(){
    this.props.actions.fetchAllRecipesRequest();
  }

  handleDeleteRecipe(id){
    this.props.actions.deleteRecipeRequest(id)
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
          handleSearch = { this.props.actions.changeRecipeTitleFIlter }
          handleSwitchSorting = { this.props.actions.toggleSortByRatingFlag }
        />
        <RecipeList 
          recipes = {recipes}
          handleDeleteRecipe = { this.handleDeleteRecipe }
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