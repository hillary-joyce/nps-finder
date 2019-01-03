import React from 'react'
import Map from './map'
import {Link} from 'react-router-dom';


const ParkDetailContainer = props => (
  <div className="details-container">
    <h1 className="park-details-name">{props.park.fullName.toUpperCase()}</h1>
    <div className='mapdiv'>
      <Map park={props.park}/>
    </div>
    <p>{props.park.description}</p>
    <a className="park-website" target="_blank" href={props.park.url}><h2>WEBSITE</h2></a>
    <Link className="button-main" to="/">Back to Homepage</Link>
  </div>
)

export default ParkDetailContainer
