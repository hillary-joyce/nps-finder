import React from 'react';
import npsData from '../npsData'
import mainLogo from '../nps-finder-logo.png'
import ParkDetailContainer from '../components/parkDetail'

const ParkDetailPage = ({match}) => {
  function findParkDetails() {
    const currPark = npsData.find(park => park.id === parseInt(match.params.id))
    return(
      <ParkDetailContainer park={currPark}/>
    )
  }
  return(
    <div>
      <img className="logo-small" src={mainLogo} alt='page logo'/>
      <h3 className="page-name-small">National Park Finder</h3>
      {findParkDetails()}
    </div>
  )
}

export default ParkDetailPage
