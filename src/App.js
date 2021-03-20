import React from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ShowResults from "./components/ShowResults";

class App extends React.Component {
  state = { results: [] };
  onSearchSubmitted = async (term) => {
    const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: "query",
        format: "json",
        origin: "*",
        list: "search",
        srsearch: { term },
      },
    });
    this.setState({ results: response.data.query.search });
  };

  componentDidMount() {
    this.onSearchSubmitted("cars");
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmitted={this.onSearchSubmitted} />
        <ShowResults results={this.state.results} />
      </div>
    );
  }
}

export default App;
