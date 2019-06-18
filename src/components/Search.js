import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Search extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  search = (event) => {
    this.props.history.push(`/search/${this.state.query}`);
    event.preventDefault();
  };

  render() {
    return (
      <div className={`search ${this.props.className}`}>
        <input type="search" className="search__field" value={this.state.query} onChange={this.handleChange.bind(this)}/>
        <input type="button" className="search__btn" value="Search" onClick={this.search.bind(this)}/>
      </div>
    );
  }
}

export default withRouter(Search);
