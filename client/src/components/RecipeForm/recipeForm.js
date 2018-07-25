import React, { Component } from 'react';
import { Button , Form , Segment, Grid} from 'semantic-ui-react'
import PropTypes from 'prop-types';


export default class RecipeForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      title : this.props.initTitle ,
      description : this.props.initDesc 
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    const title = this.state.title.trim();
    const description = this.state.description.trim();
    if (!title || !description) return;
    this.props.submitHandler({ title, description })
  }

  handleChange = ({ target }) => {
    this.setState(state => ({
      ...state,
      [target.name]: target.value
    }))
  }

  render(){
    return(
      <Grid container centered>
        <Segment raised style = {{width: 400  , marginTop : '4rem'}}>
          <h3> { this.props.formTitle } </h3>
          <Form onSubmit = { this.handleSubmit } >
            <Form.Input
              label = 'Title'
              name = 'title'
              placeholder='recipe title'
              onChange = { this.handleChange }
              defaultValue = {this.props.initTitle}
            />
            <Form.TextArea
              label = 'Description'
              name = 'description'
              autoHeight 
              placeholder='recipe description' 
              onChange = { this.handleChange }
              defaultValue = {this.props.initDesc}
            />
            <Button.Group>
              <Button  onClick = { this.props.cancelHandler }>Go back</Button>
              <Button.Or/>
              <Button type='submit' color = 'teal'>{ this.props.submitText }</Button>
            </Button.Group>
          </Form>
        </Segment> 
      </Grid>
    )
  }
}

RecipeForm.defaultProps = { 
  initDesc: '',
  initTitle: '',
}

RecipeForm.propTypes = {
  submitText: PropTypes.string,
  initDesc: PropTypes.string,
  initTitle: PropTypes.string,
  cancelHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired
}