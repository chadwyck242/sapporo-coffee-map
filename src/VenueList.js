import React, { Component } from 'react';
import { Divider, Header, Input, List } from 'semantic-ui-react'
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types';

class VenueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      selectedVenues: this.props.venues,
      selectedMarkers: this.props.markers
    }
    console.log(this.state.selectedMarkers);
    console.log(this.state.selectedVenues);
  }

  // Udate query helper function
  updateQuery = (query) => {
    this.setState({
       query: query.trim()
     }, this.handleDisplayedVenues(query))
  }

  // Handles the sync of list venues and map markers state
  handleDisplayedVenues = (query) => {
    let self = this;
    let showingVenues, showingMarkers;

    if (query) {
        const match = new RegExp(escapeRegExp(query), 'i');

        // Add matching venues to the array if matches a query
        showingVenues = this.props.venues.filter((venue) => match.test(venue.name));

        // Add matching markers to the array if matches a query
        showingMarkers = this.props.markers.filter((marker) => match.test(marker.title));

        this.setState({
          selectedVenues: showingVenues,
          selectedMarkers: showingMarkers
        })
    } else {
      this.setState({
        selectedVenues: this.props.venues,
        selectedMarkers: this.props.markers
      })
      console.log('Moar venues', this.state.selectedVenues)
      console.log('Moar venues', this.props.venues)
    }
  }

  render() {
    const { selectedVenues, query } = this.state;

    return (
      <div>
        <label className="hidden" htmlFor='s'>Search Venues</label>
        <Input
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
        <List relaxed selection verticalAlign='middle'>
        {selectedVenues.map((venue) => (
          <List.Item
            key={venue.id}
            role='button'
            tabIndex='0'
            // onClick={() => this.setSelectedMarker}
            // onKeyPress={() => this.setSelectedMarker}
          >
            <Header as='h4' color='teal'>{venue.name}</Header>
          </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

VenueList.propTypes = {
  venues: PropTypes.array.isRequired,
  markers: PropTypes.array.isRequired
}

export default VenueList;
