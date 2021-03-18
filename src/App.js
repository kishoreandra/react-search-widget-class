import React from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  state = { results: [] };
  onSearchSubmitted = async (term) => {
    const response = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${term}`,
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );

    this.setState({ results: response.query.search });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmitted={this.onSearchSubmitted} />
        Total number of results found : {this.state.results.length}
      </div>
    );
  }
}

export default App;
