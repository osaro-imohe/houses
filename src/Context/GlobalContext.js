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

  const loadHouses = (url) => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
      showError: false,
    }));
    axios.get(url)
      .then((res) => {
        // don't forget to catch error for no internet
        switch (res.status) {
          case 200:
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
      .catch((err) => {
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
