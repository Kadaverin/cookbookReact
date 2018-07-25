import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createRecipeRequest } from '../../actions/recipes';
import RecipeForm from '../../components/RecipeForm/recipeForm';
import PropTypes from 'prop-types';

const CreateRecipe = (props) => (

      <RecipeForm
        formTitle = 'Create new recipe'
        submitText = 'Create'
        submitHandler = { props.actions.createRecipeRequest }
        cancelHandler = { () => props.history.push('/recipes') }
      />
);
  
function mapDispatchToProps(dispatch){
  return { actions : bindActionCreators({ createRecipeRequest }, dispatch) }
};

export default connect(null, mapDispatchToProps)(CreateRecipe)

CreateRecipe.propTypes = {
  actions: PropTypes.shape({
    createRecipeRequest : PropTypes.func
  }),
}