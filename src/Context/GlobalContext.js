/* eslint-disable react/jsx-filename-extension */
import React, { createContext, useState } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState({
    default: 10,
    loading: true,
    showError: false,
    houses: [],
    currentPage: 1,
    housesPerPage: 10,
  });

  // function to load houses from the homevision api
  const loadHouses = (url) => {
    // set loading to true to show loader modals
    setState((prevState) => ({
      ...prevState,
      loading: true,
      showError: false,
    }));
    // axios get request to api
    axios.get(url)
      .then((res) => {
        switch (res.status) {
          case 200:
            // returns okay add houses to state.houses array
            setState((prevState) => ({
              ...prevState,
              houses: [...state.houses, ...res.data.houses],
              currentPage: state.currentPage + 1,
              loading: false,
              showError: false,
            }));
            return null;
          default:
            return null;
        }
      })
      .catch(() => {
        // in case of error, show error modal
        setState((prevState) => ({
          ...prevState,
          loading: false,
          showError: true,
        }));
      });
  };

  return (
    <GlobalContext.Provider value={{ state, setState, loadHouses }}>
      { children }
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
