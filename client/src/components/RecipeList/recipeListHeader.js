import React, { Component } from 'react';

import { Grid , Checkbox, Button} from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'


export default class RecipeListHeader extends Component{

  handleSearchInput = ({target}) =>{
    this.props.handleSearch(target.value)
  }

  render(){
    return(
         <Grid centered style = { {marginTop : '2rem'} }>
          <Grid.Row > 
            <Input 
               icon='search' 
               iconPosition='left'
               placeholder='Search by title' 
               style = { {marginRight : '2rem'}}
               onChange = { this.handleSearchInput }
             />
            <Button color='teal' onClick = {this.props.goToCreatRecipeComponent}>Add recipe</Button>
          </Grid.Row>
          <Grid.Row>
             <Checkbox 
               toggle 
               label='sort by rating'
               onChange = { this.props.handleSwitchSorting }
             />
          </Grid.Row>
        </Grid>       
    )
  }
}