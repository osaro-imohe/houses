import React, { useState, useEffect, useCallback } from 'react';
import '../Css/Home.css';
import HouseCard from './HouseCard';
import HouseCardLoader from './HouseCardLoader';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';
import {state} from '../definitions'
import {houses} from '../definitions'


const Home = () => {
  const [state, setState] = useState< state >({
    default: 10,
    loading: true,
    showError: false,
    houses: [],
    currentPage: 1,
    housesPerPage: 10
  });
  




  // load houses from api on initial page load
  useEffect(() => {
    loadHouses(url);
  }, []);  

  // load houses from api once scrolled to the bottom of the page
  useEffect(() => {
    let options = {
      rootMargin: '0px',
      threshold: 1
    }
  
    let target = document.querySelector("#align > div:last-child")!;
  
  
    let observer = new IntersectionObserver(intersectionCallback, options);
  
    observer.observe(target);
  })

  const intersectionCallback = (entries: any[], observer: any) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && !state.loading){
        loadHouses(url)
      }
    })
  }

  const url = `https://app-homevision-staging.herokuapp.com/api_project/houses?page=${state.currentPage}&per_page=${state.housesPerPage}`;

  //function to load houses from homevision api
  const loadHouses = async (url:string) => {
    // set loading to true to show loader modals
    setState(prevState => ({
      ...prevState,
      loading: true,
      showError: false,
    }));
    try{
      //  try to get data from homevision api
      const res = await axios.get(url);
      setState(prevState => ({
        ...prevState,
        houses: [...state.houses,...res.data.houses],
        currentPage: ++state.currentPage,
        loading: false,
        showError: false
      }))
    }catch(error){
      //if error show error message
      setState(prevState => ({
        ...prevState,
        loading:false,
        showError:true
      }))
    }

  };

  // while state.loading is true display skeleton loaders
  const displayHouseCardLoader = (number: number) => {
    const numberArray = [...Array(number).keys()];
    return numberArray.map((num) => (
      <HouseCardLoader key={num} />
    ));
  };

  // return house card for each object in state.houses array
  const displayHouseCards = () => state.houses.map((house) => (
    <HouseCard house={house} key={house.id} />
  ));

  // if state.error is true show error message
  const handleError= () => {
    switch (state.showError) {
      case true:
        return <ErrorMessage/>;
      case false:
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="home  col-sm-12">
      <div className="logo col-sm-12">
        <p className="logotext">Houses</p>
      </div>
      <p className="homeheadertext">Listings</p>
      <div className="row" id="align">
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
