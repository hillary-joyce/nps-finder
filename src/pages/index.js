import React from 'react';
import parkData from '../npsData';

import Header from '../components/header';
import ParkCard from '../components/parkCard';
import ParkContainer from '../components/parkContainer';
import SearchBar from '../components/searchBar';


class IndexPage extends React.Component {
  state = {
    currentParks: []
  }

  findParks = (e) => {
    let event = e.target.value.toLowerCase()
    let foundParks = parkData.filter(park => park.state.toLowerCase().includes(event))
    this.setState({
      currentParks: foundParks
    })
  }

  showPark = () => {

  }

  render(){
    return(
      <div>
        <Header />
        <SearchBar searchStates={this.findParks}/>
        <ParkContainer>
          {this.state.currentParks.map(park => (
            <ParkCard key={park.id} showParkDetail={this.showPark} park={park}/>
          ))}
        </ParkContainer>
      </div>
    )
  }
}

export default IndexPage
