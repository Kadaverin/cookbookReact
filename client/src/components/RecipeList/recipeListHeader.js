import React from 'react';
import { Grid , Checkbox, Button} from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'



const RecipeListHeader = (props) => (
    <Grid centered style = { {marginTop : '2rem'} }>
      <Grid.Row > 
        <Input 
            icon='search' 
            iconPosition='left'
            placeholder='Search by title' 
            style = { {marginRight : '2rem'}}
            onChange = { ({ target }) =>  props.handleSearch(target.value) }
          />
        <Button 
            color='teal' 
            onClick = { props.goToCreatRecipeComponent}
         >
            Add recipe
        </Button>
      </Grid.Row>
      <Grid.Row>
          <Checkbox 
            toggle 
            label='sort by rating'
            onChange = {  props.handleSwitchSorting }
            checked = { props.isSortedByRating }
          />
      </Grid.Row>
  </Grid>       
);

export default RecipeListHeader
  
RecipeListHeader.propTypes = {
  handleSwitchSorting: PropTypes.func.isRequired,
  goToCreatRecipeComponent: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  isSortedByRating : PropTypes.bool
}