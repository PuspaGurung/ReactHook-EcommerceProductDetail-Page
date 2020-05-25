import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout';
import Products from './components/pages/Products';
import ProductDetail from './components/pages/ProductDetail';
import NotFoundPage from './components/pages/NotFoundPage';

const Router = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/"
          component={Products}
          exact
        />
        <Route
          path="/product/:id"
          component={ProductDetail}
          exact
        />
        <Route
          path="*"
          component={NotFoundPage}
        />
      </Switch>
    </Layout>
  );
};

export default Router;
