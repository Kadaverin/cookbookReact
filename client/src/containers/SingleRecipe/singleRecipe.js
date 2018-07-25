import { fetchRecipeRequest, changeRecipeRatingRequest } from '../../actions/recipes';
import { Button, Card, Container , Icon} from 'semantic-ui-react'; 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeRecipe } from '../../reducers/recipes';
import PropTypes from 'prop-types';
import  Rating  from 'react-rating';

class SingleRecipe extends Component{

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

  goToRecipeList = () => {
    this.props.history.push('/recipes')
  }

  render(){
    const { recipe } = this.props
    return(
      recipe && <Container text>
         <Card fluid style = {{ marginTop : '4rem' }}>
            <Card.Content>
              <Card.Header textAlign = 'center'> { recipe.title  }</Card.Header>
              <Card.Description> { recipe.description } </Card.Description>
            </Card.Content>
            <Card.Content textAlign = 'center'>
             <Card.Meta> Rate this: </Card.Meta>
              <Rating 
                initialRating = { recipe.rating }
                onChange = { (rate) => this.props.actions.changeRecipeRatingRequest(recipe._id, rate) }
                emptySymbol="far fa-star fa-sm"
                fullSymbol="fas fa-star fa-sm"
               />
            </Card.Content>
            <Button color = 'teal' onClick = { this.goToRecipeList }> 
               <Icon name='arrow left'></Icon>
                Go back
            </Button>
          </Card>
      </Container>
    )
  }
}

function mapStateToProps(state){
  return { recipe : activeRecipe(state) } 
}

function mapDispatchToProps(dispatch){
  return { 
    actions : bindActionCreators(
       { fetchRecipeRequest, changeRecipeRatingRequest  }
      , dispatch) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe)


SingleRecipe.propTypes = {

  recipe: PropTypes.shape({ 
    title : PropTypes.string,
    rating: PropTypes.number,
    decription: PropTypes.string
  }),

  actions: PropTypes.shape({
    fetchRecipeRequest : PropTypes.func.isRequired,
    changeRecipeRatingRequest: PropTypes.func.isRequired
  }),
}