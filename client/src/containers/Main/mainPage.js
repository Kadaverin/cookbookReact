import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchAllRecipes , deleteRecipe} from '../../actions/recipes';
import { allRecipes } from '../../reducers/recipes';

import RecipeList from '../../components/RecipeList/recipeList';
import RecipeListHeader from '../../components/RecipeList/recipeListHeader';

class MainRecipesPage extends Component {


  componentDidMount(){
    this.props.actions.fetchAllRecipes();
  }

  handleDeleteRecipy = (id) => {
    this.props.atcions.deleteRecipe(id)
  }

  handleEditRecipe(id){
    this.props.history.push(`/recipes/${id}`)
  }

  handleAddRecipeClick =() =>{
    this.props.history.push('/recipes/new')
  }



  render() {
    const { recipes } = this.props;
    return (
      <div>
        <RecipeListHeader
          goToCreatRecipeComponent = { this.handleAddRecipeClick }
        />
        <RecipeList/>
        {recipes}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { recipes : allRecipes(state) } 
}

function mapDispatchToProps(dispatch){
  return { actions : bindActionCreators({ fetchAllRecipes, deleteRecipe }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRecipesPage)