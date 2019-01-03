import React, {Component} from 'react';
import MapGL, { Marker } from 'react-map-gl';
import icon from '../map_marker.png'
const TOKEN = 'pk.eyJ1IjoiaGlsbGFyeS1qb3ljZSIsImEiOiJjanB3eXdiZnkwZ3drNDNwaGwxcGoyOTVrIn0.MxZ8sFQYvBQkURsKoOQIaw';

export default class Map extends Component {
constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 0,
        longitude: 0,
        zoom: 6,
        bearing: 0,
        pitch: 0,
        width: 250,
        height: 250,
      }
    };
  }

componentDidMount() {
  let lat = parseInt(this.props.park.latLong.split(',')[0].split(":")[1])
  let long = parseInt(this.props.park.latLong.split(',')[1].split(":")[1])
  console.log(lat, long)

  const newViewPort = {...this.state.viewport, latitude:lat, longitude: long}
  this.setState({
    viewport: newViewPort
  })
}

render() {
    const {viewport} = this.state;
return (
      <MapGL style={{ borderRadius: '100%', overflow: "hidden", margin: "20px auto", padding:"-10px"}}
        {...viewport}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={TOKEN}>
        <Marker latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude}>
         <img src={icon} alt="map marker"/>
       </Marker>
      </MapGL>
    );
  }
}
