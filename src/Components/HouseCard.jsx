import React from 'react';
import '../Css/HouseCard.css';

const HouseCardLoader = ({ house }) => (
  <div className="housecardcontainer col-sm-4">
    <div className="housecard">

      <div className="housecardimageholder">
        <img src={house.photoURL} alt="" className="housecardimage" />
      </div>
      <div className="housecardinfo">
        <p className="housecardprice">
          $
          {house.price}
        </p>
        <p className="housecardowner">{house.homeowner}</p>
        <p className="housecardaddress">{house.address}</p>
      </div>
    </div>
  </div>
);

export default HouseCardLoader;
