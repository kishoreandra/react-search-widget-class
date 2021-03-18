import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onSearchSubmitted = props.onSearchSubmitted;
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.onSearchSubmitted(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSearchSubmit}>
          <div className="ui fluid icon input">
            <input
              onChange={this.onInputChange}
              type="text"
              value={this.state.term}
              placeholder="Search..."
            />
            <i className="search icon" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
