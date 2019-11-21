import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";


const SearchBar = props => {
    return (
        <Form inline onSubmit={props.handleFormSubmit} style={{marginLeft:"80px"}}>
	        <FormGroup>
		        <Label for="searchTerm" hidden>Search by Location</Label>
                <Input 
                    type="text" 
                    name="searchTerm" 
                    id="searchTerm" 
                    placeholder="City and State" 
                    value={props.searchTerm}
                    onChange={props.handleInputChange}
                />
	        </FormGroup>
                <Button 
                style={{backgroundColor:"#000"}} 
                onClick={props.handleFormSubmit}
                >Search</Button>
        </Form>
    )
}

export default SearchBar;