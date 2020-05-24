import React, { useContext } from 'react';
import { ProductContext } from '../../contextApi';
import Loader from '../ui/Loader';

const ProductDetail = (props) => {
  const fetchData = useContext(ProductContext);
  console.log(fetchData);
  const productId = props.match.params.id;
  console.log(productId);

  const getProduct = () => {
    return fetchData.data.map((product) => {
      const htmlContent = (
        <div key={product.id} className="product-wrapper">
          <div className="row">
            <div className="product">
              <div className="product__img">
                <div className="product__img-secondary">
                  {product.images.other_images.map((image) => {
                    return (
                      <div key={image} className="image_item">
                        <img src={image} alt="product" />
                      </div>
                    );
                  })}
                </div>

                <div className="product__img-main">
                  <img src={product.images.main_image} alt="product" />
                </div>
              </div>
              <div className="product__detail">
                <h2 className="product-title heading-secondary">
                  {product.title}
                </h2>
                <span className="product-price">{product.price}</span>
                <p className="product-desc">{product.description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="related-product">
              <h2 className="heading-secondary">Related Products</h2>
              <div className="product-wrapper">
                <div className="product-item">
                  <img src={product.category.image} alt="product" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

      return product.id == productId ? htmlContent : '';
    });
  };

  return (
    <section id="product-detail" className="product-detail">
      <div className="container">
        {fetchData.loading ? <Loader /> : getProduct()}
      </div>
    </section>
  );
};

export default ProductDetail;
