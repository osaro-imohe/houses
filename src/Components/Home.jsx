import React, { useContext, useEffect } from 'react';
import '../Css/Home.css';
import HouseCard from './HouseCard';
import HouseCardLoader from './HouseCardLoader';
import ErrorMessage from './ErrorMessage';
import { GlobalContext } from '../Context/GlobalContext';
import HouseImage from '../images/houseimage.jpg';


const Home = () => {
  const { state, setState, loadHouses } = useContext(GlobalContext);

  useEffect(() => {
    loadHouses(`https://app-homevision-staging.herokuapp.com/api_project/houses?page=${state.currentPage}&per_page=${state.housesPerPage}`)
  }, [])

  const displayHouseCardLoader = (number) => { 
    const number_array =  [...Array(number).keys()];
    return number_array.map((num) => (
        <HouseCardLoader`` key={num}/>
    ))
  }

  const displayHouseCards = () => {
    return state.houses.map(house => (
      <HouseCard house={house} key={house.id}/>
    ))
  }

  const handleError = () => {
    switch(state.showError){
      case true:
        return <ErrorMessage />
      case false:
        return null
      default:
        return null
    }
  }

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if(bottom){
      setState(prevState => ({
        ...prevState,
        loading: true,
      }))
      loadHouses(`http://app-homevision-staging.herokuapp.com/api_project/houses?page=${state.currentPage}&per_page=${state.housesPerPage}`)
    }
  }
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
