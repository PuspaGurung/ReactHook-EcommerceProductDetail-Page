import React from 'react';
import Wrapper from '../ui/Wrapper';

const ProductDetail = () => {
  const propsWrapper = {
    tagName: 'section',
    className: 'page-section--product-detail',
    id: 'product-detail',
  };
  return <Wrapper propsWrapper={propsWrapper}>Product detail page</Wrapper>;
};

export default ProductDetail;
