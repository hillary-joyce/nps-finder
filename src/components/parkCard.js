import React from 'react';

const ParkCard = props => (
  <div className="park-card">
    <div className="image">
      <img src={props.park.imgUrl} alt={props.park.fullName}/>
    </div>
    <div className="park-card-info">
      <h2 className="park-card-name">{props.park.fullName}</h2>
      <p className="park-card-designation">{props.park.designation}</p>
    </div>
  </div>

)

export default ParkCard
