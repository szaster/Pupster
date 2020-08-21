import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: "",
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>
        </Container>
        <SearchForm handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default Search;
