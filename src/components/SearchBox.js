import React, {Component} from "react";


class SearchBox extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {searchTerm: ""};
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({searchTerm: value});
    console.log(this.state.searchTerm);
  }

  render() {
    return (
      <div id="search" className="Search">
        <input
          onChange={this.handleChange}
          onKeyUp={
            (e) => {
              if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
                this.props.loadSearch(this.state.searchTerm);
                console.log(this.state.searchTerm);
              }
            }
          }
          type="search"
          placeholder="Search for a title..." />
      </div>
    );
  }
}
export default SearchBox;
