import React, { Component } from 'react';
import { Divider, Input } from 'semantic-ui-react'
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types';

class VenueList extends Component {
  static propTypes = {
    venues: PropTypes.array.isRequired,
    markers: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  // Udate query helper function
  updateQuery = (query) => {
      this.setState({query: query.trim() });
  }

  // Clear query helper function
  clearQuery = () => {
      this.updateQuery('');
  }

  render() {
    const { venues, markers } = this.props;
    const { query } = this.state;

    let showingVenues;
    if (query) {
        const match = new RegExp(escapeRegExp(query), 'i');
        showingVenues = venues.filter((contact) => match.test(contact.name));
    } else {
        showingVenues = venues;
    }

    return (
      <div>
        <label className="hidden" htmlFor='s'>Search Venues</label>
        <Input
          focus
          placeholder='Search...'
          type='text'
          value={query}
          onChange={(event) => this.updateQuery(event.target.value)}
          aria-required='true'
          aria-label='Search venues'
          aria-describedby='search-header'
          name='s'
        />
        <Divider />

      </div>
    );
  }
}



export default VenueList;
