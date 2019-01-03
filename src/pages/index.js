import React from 'react';
import parkData from '../npsData';
import {Link} from 'react-router-dom';

import Header from '../components/header';
import ParkCard from '../components/parkCard';
import ParkContainer from '../components/parkContainer';
import SearchBar from '../components/searchBar';


class IndexPage extends React.Component {
  state = {
    currentParks: [],
    currentType: ''
  }

  findParks = (e) => {
    let event = e.target.value.toLowerCase()
    let foundParks = parkData.filter(park => park.state.toLowerCase().includes(event)|| park.fullName.toLowerCase().includes(event))
    this.setState({
      currentParks: foundParks
    })
  }

  render(){
    return(
      <div>
        <Header />
        <SearchBar searchStates={this.findParks}/>
        <ParkContainer>
          {this.state.currentParks.map(park => (
            <Link to={`/park-details/${park.id}`}>
              <ParkCard key={park.id} park={park}/>
            </Link>
        ))}
        </ParkContainer>
      </div>
    )
  }
}

export default IndexPage
