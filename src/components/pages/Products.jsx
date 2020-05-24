import React, { useContext, useState } from 'react';
import Loader from '../ui/Loader';
import { ProductContext } from '../../contextApi';
import ProductCard from '../ui/ProductCard';

const Products = () => {
  const fetchData = useContext(ProductContext);
  return (
    <section id="products" className="page-section page-section--products">
      <div className="container">
        {fetchData.loading ? (
          <Loader />
        ) : (
          <div className="product-item-wrapper">
            {fetchData.data.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  id={product.id}
                  price={product.price}
                  imagePrimary={product.images.main_image}
                  imagesSecondary={[product.images.other_images]}
                  categoryId={product.category_id}
                  categoryName={product.category.name}
                  categoryImage={product.category.image}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
