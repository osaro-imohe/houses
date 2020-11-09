import React from 'react';
import '../Css/HouseCardLoader.css';
import Skeleton from '@material-ui/lab/Skeleton';

const HouseCardLoader = () => (
  <div className="housecardcontainer col-sm-4">
    <div className="housecard">
      <Skeleton variant="rect" width="100%" height="50%" animation="wave" style={{ borderRadius: 5 }} />
      <div className="info">
        <Skeleton variant="rect" width="30%" height={20} animation="wave" />
        <br />
        <Skeleton variant="rect" width="60%" height={20} animation="wave" />
        <br />
        <Skeleton variant="rect" width="100%" height={20} animation="wave" />
      </div>
    </div>
  </div>
);

export default HouseCardLoader;
