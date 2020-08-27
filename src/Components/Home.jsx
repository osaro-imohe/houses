import React, { useContext, useEffect } from 'react';
import '../Css/Home.css';
import HouseCard from './HouseCard';
import HouseCardLoader from './HouseCardLoader';
import ErrorMessage from './ErrorMessage';
import { GlobalContext } from '../Context/GlobalContext';

const Home = () => {
  const { state, loadHouses } = useContext(GlobalContext);
  const url = `https://app-homevision-staging.herokuapp.com/api_project/houses?page=${state.currentPage}&per_page=${state.housesPerPage}`;

  // load houses from api on initial page load
  useEffect(() => {
    loadHouses(url);
  }, []);

  // while state.loading is true display skeleton loaders
  const displayHouseCardLoader = (number) => {
    const numberArray = [...Array(number).keys()];
    return numberArray.map((num) => (
      <HouseCardLoader key={num} />
    ));
  };

  // return house card for each object in state.houses
  const displayHouseCards = () => state.houses.map((house) => (
    <HouseCard house={house} key={house.id} />
  ));

  // if state.error is true show error message
  const handleError = () => {
    switch (state.showError) {
      case true:
        return <ErrorMessage />;
      case false:
        return null;
      default:
        return null;
    }
  };

  // once a user scrolls to the bottom fire function to load more houses
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom & !state.loading) {
      loadHouses(url);
    }
  };

  return (
    <div className="home  col-sm-12 col-lg-10" onScroll={handleScroll}>
      <div className="logo d-block d-lg-none col-sm-12">
        <p className="logotext">Houses</p>
      </div>
      <p className="homeheadertext">Listings</p>
      <div className="row">
        {displayHouseCards()}
        {state.loading ? (
          displayHouseCardLoader(state.default)
        ) : (
          null
        )}
        {handleError()}
      </div>
    </div>
  );
};

export default Home;
