import React, { Component } from 'react';
import "typeface-roboto";
import MapStyles from './MapStyles.json';
import { getData } from './apiData.js';
import './App.css';

const apiUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDEneiCQJX6yzN_Yh1M4FeR7C3_Oo4rYZc&libraries=drawing,geometry,places&callback=initMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      markers: [],
      infowindows: [],
      map: {},
      visible: false
    };
    // This binding is necessary to make `this` work in the callbacks
    // that will be used in the app
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    // Get FourSquare data provided by Axios and pull
    // it into the app for Map to use
    getData(result => {
      const { data, error } = result;
      if (error) {
        console.log("There has been an error loading the data: " + error);
        alert(`Sorry, there has been an error retrieving the FourSquare data: ${error}`);
        return;
      }
      if (data) {
        this.setState({
          venues: data
        }, this.displayMap());
      }
      console.log(this.state.venues);
    });
  }

  displayMap = () => {
      // Asynchronously load the Google Maps API script, adding the Drawing,
      // Geometry and Places, then the callback to initMap()
      createScript(apiUrl);

      // Set the global context of initMap() to window so
      // Google Maps can access it
      window.initMap = this.initMap;
  }

  // Initialize the Google Map
  initMap = () => {
    const { venues, markers, infowindows } = this.state;
    // Set initial location of the map center at Sapporo TV Tower
    let sapporoTvTower = {
      lat: 43.0610,
      lng: 141.3564
    };
    // Set Initial zoom level
    let initialZoom = 15;

    // Create the map object with DOM location and initial properties
    let mapElement = document.getElementById('map');
    let map = new window.google.maps.Map(mapElement, {
      center: sapporoTvTower,
      zoom: initialZoom,
      styles: MapStyles
    });

    // keep the state in sync
    this.setState({
      map: map
    });

    // Create InfoWindow object for use with each marker
    let infoWindow = new window.google.maps.InfoWindow({ maxWidth: 200 });

    venues.forEach(function(venue){
      let contentString = `<aside>
                              <div class='info-content' tabindex='0'>
                                <h3>${venue.name}</h4>
                                <p class='info-address'>${venue.location.formattedAddress}</p>
                                <h4 class='api-attribution'>Powered by FourSquare Places</h5>
                              </div>
                            </aside>`

      let marker = new window.google.maps.Marker({
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        },
        map: map,
        title: venue.name,
        id: venue.id,
        draggable: false,
        animation: window.google.maps.Animation.DROP
      });

      // Adds click event to open InfoWindow when marker is clicked, then calls selectMarker()
      marker.addListener('click', function() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
          setTimeout(() => {marker.setAnimation(null)}, 300)}
        infoWindow.setContent(contentString);
        map.panTo(marker.getPosition());
        infoWindow.open(map, marker);
      });
      infowindows.push(infoWindow);
      markers.push(marker);
    });
    this.setState({ infowindows: this.state.infowindows })
    this.setState({ markers: this.state.markers })
    console.log('markers', this.state.markers)
    console.log('infowindows', this.state.infowindows)
  }

  render() {
    return (
      <div>
        <div id='map' role='application' tabIndex='-1' ></div>
        {/* <VenueList
          venues={this.state.venues}
          markers={this.state.markers}
          infowindows={this.state.infowindows}
        /> */}
      </div>
    );
  }
}

// Asynchronously load Google Map script
let createScript = (url) => {
  let index = window.document.getElementsByTagName('script')[0];
  let script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);

  script.onerror = function () {
    document.write('Load error: Google Maps');
    alert('There was an error loading the Google Map')
  };
}

export default App;
