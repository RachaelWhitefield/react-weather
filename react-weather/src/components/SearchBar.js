import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";


const SearchBar = props => {
    return (
        <Form inline onSubmit={props.handleFormSubmit}>
	        <FormGroup>
		        <Label for="searchTerm" hidden>Search by Location</Label>
                <Input 
                    type="text" 
                    name="searchTerm" 
                    id="searchTerm" 
                    placeholder="Address or Zip" 
                    value={props.searchTerm}
                    onChange={props.handleInputChange}
                />
	        </FormGroup>
	            <Button style={{backgroundColor:"#000"}} onClick={props.handleFormSubmit}>Search</Button>
        </Form>
    )
}

export default SearchBar;