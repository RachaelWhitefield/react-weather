import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SearchBar = props => {

    return (
    <Form inline>
	    <FormGroup>
		    <Label for="searchTerm" hidden>Search by Location</Label>
		    <Input type="text" name="searchTerm" id="searchTerm" placeholder="Address or zip" />
	    </FormGroup>
	<Button>Search</Button>
</Form>
    )
}

export default SearchBar;