import React, { useState, useEffect, useReducer } from 'react';
import Axios from 'axios';

export const DarkModeContext = React.createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

export const ProductsContext = React.createContext();
export const ProductDetailContext = React.createContext();

const initialStateProducts = {
  loading: true,
  data: [],
  error: '',
};
const initialStateProductDetail = {
  loading: true,
  data: [],
  error: '',
};

// Products reducer
const reducerProducts = (state, action) => {
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

// Product-detail reducer
const reducerProductDetail = (state, action) => {
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

  // Products useReducer
  const [stateProducts, dispatchProducts] = useReducer(
    reducerProducts,
    initialStateProducts
  );

  // Product-detail useReducer
  const [stateProductDetail, dispatchProductDetail] = useReducer(
    reducerProductDetail,
    initialStateProductDetail
  );

  useEffect(() => {
    /*
    In order to overcome from CORS policy error (No 'Access-Control-Allow-Origin' header is present on the requested resource) 
    just prefix  https://cors-anywhere.herokuapp.com/ with the API URL os that it makes the request to get that serverâ€™s response.    
    */

    // Fetch Products
    const apiProducts =
      'https://cors-anywhere.herokuapp.com/https://ecommerce.ktmcoders.com/api/products';

    Axios.get(apiProducts)
      .then((response) => {
        const { data } = response.data;
        dispatchProducts({ type: 'SUCCESS_FETCH_DATA', payload: data });
      })
      .catch(() => {
        dispatchProducts({ type: 'ERROR_FETCH_DATA' });
      });

    // Fetch Product Detail
    const apiProductDetail =
      'https://cors-anywhere.herokuapp.com/https://ecommerce.ktmcoders.com/api/products/1';

    Axios.get(apiProductDetail)
      .then((response) => {
        const data = response.data.product_details;
        dispatchProductDetail({ type: 'SUCCESS_FETCH_DATA', payload: data });
      })
      .catch(() => {
        dispatchProductDetail({ type: 'ERROR_FETCH_DATA' });
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
      <ProductsContext.Provider value={stateProducts}>
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
          <ProductDetailContext.Provider value={stateProductDetail}>
            {children}
          </ProductDetailContext.Provider>
        </DarkModeContext.Provider>
      </ProductsContext.Provider>
    </>
  );
};
export default ContextApi;
