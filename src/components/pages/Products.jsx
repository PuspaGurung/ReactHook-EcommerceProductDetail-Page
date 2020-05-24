import React from 'react';
import Wrapper from '../ui/Wrapper';

function Products() {
  const propsWrapper = {
    tagName: 'section',
    className: 'page-section page-section--product-detail',
    id: 'products',
  };
  return <Wrapper propsWrapper={propsWrapper}>Products page</Wrapper>;
}

export default Products;
