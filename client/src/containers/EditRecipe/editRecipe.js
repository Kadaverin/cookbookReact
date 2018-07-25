import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipeRequest, updateRecipeRequest} from '../../actions/recipes'
import { activeRecipe } from '../../reducers/recipes'
import RecipeForm from '../../components/RecipeForm/recipeForm'

class EditRecipe extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeRecipe: null
    }
  }

  static getDerivedStateFromProps(props, state){
    if( state.activeRecipe !== props.match.params.id){
      return {
        activeRecipe : props.match.params.id
      }
    }
    return null
  }

  componentDidMount(){
    console.log(this)
    if(this.state.activeRecipe){
      this.props.actions.fetchRecipeRequest(this.state.activeRecipe)
    }

  }

  handleSaveEditing = (updatedRecipe) => {
    this.props.actions.updateRecipeRequest({ ...this.props.recipeToEdit, ...updatedRecipe})
  }

  render(){
    const { recipeToEdit } = this.props
    return(
      recipeToEdit ? 
      <RecipeForm
        formTitle = 'Edit recipe'
        submitText = 'Save'
        submitHandler = { this.handleSaveEditing }
        cancelHandler = { () => this.props.history.push('/recipes') }
        initTitle = { recipeToEdit.title }
        initDesc = { recipeToEdit.description }
      />
      : 
      <div>
        is fetching
      </div>
    )
  }
}

function mapStateToProps(state){
  return { recipeToEdit : activeRecipe(state) } 
}

function mapDispatchToProps(dispatch){
  return { 
    actions : bindActionCreators(
       { fetchRecipeRequest,  updateRecipeRequest }
      , dispatch) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe)