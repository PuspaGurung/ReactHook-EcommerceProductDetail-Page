import React, { createContext, useState, useEffect, useReducer } from 'react';
import Axios from 'axios';

export const DarkModeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

export const ProductContext = React.createContext();
const initialState = {
  loading: true,
  data: [],
  error: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS_FETCH_DATA':
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case 'ERROR_FETCH_DATA':
      return {
        loading: false,
        data: [],
        error: 'Something went wrong !',
      };
    default:
      return state;
  }
};

const ContextApi = (props) => {
  const { children } = props;
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    /*
    In order to overcome from CORS policy error (No 'Access-Control-Allow-Origin' header is present on the requested resource) 
    just prefix  https://cors-anywhere.herokuapp.com/ with the API URL os that it makes the request to get that serverâ€™s response.    
    */
    const api =
      'https://cors-anywhere.herokuapp.com/https://ecommerce.ktmcoders.com/api/products';
    Axios.get(api)
      .then((response) => {
        const { data } = response.data;
        dispatch({ type: 'SUCCESS_FETCH_DATA', payload: data });
      })
      .catch(() => {
        dispatch({ type: 'ERROR_FETCH_DATA' });
      });
  }, []);

  // execute useEffect only when darkMode is changs
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((dark) => !dark);
  }

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const userPrefersDarkMode = getPreferColorMode();
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    // 1.) if suer already visited the page and mode was saved either 'dark' or 'light' return saved mode
    // 2.) if prefered color mode is dark return true
    // 3.) otherwise return  false i.e dark mode would be false in firit visit of the site
    return isReturningUser ? savedMode : userPrefersDarkMode ? true : false;
  }

  function getPreferColorMode() {
    if (!window.matchMedia) return '';
    return window.matchMedia('(prefers-color-scheme:dark)').matches;
  }

  return (
    <>
      <ProductContext.Provider value={state}>
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
          {children}
        </DarkModeContext.Provider>
      </ProductContext.Provider>
    </>
  );
};
export default ContextApi;
