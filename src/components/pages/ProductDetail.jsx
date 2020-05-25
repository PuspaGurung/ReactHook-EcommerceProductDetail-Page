import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext, ProductDetailContext } from '../../contextApi';
import Loader from '../ui/Loader';

const ProductDetail = (props) => {
  const products = useContext(ProductsContext);
  const firstProduct = useContext(ProductDetailContext);

  const productId = props.match.params.id;

  const getProductDetail = (id) => {
    const firstProductData = firstProduct.data;
    const firstProductLayout = (
      <div className="product-wrapper">
        <header className="section-header">
          <ul className="breadcrumb ">
            <li>
              <Link to="/"> Home </Link>
              <span className="seperator" />
            </li>
            <li className="active">Product</li>
          </ul>
        </header>
        <div className="row">
          <div className="product">
            <div className="product__img">
              <div className="product__img-secondary">
                {firstProductData.images.other_images.map((image) => {
                  return (
                    <div key={image} className="image_item">
                      <img src={image} alt="product" />
                    </div>
                  );
                })}
              </div>

              <div className="product__img-main">
                <img src={firstProductData.images.main_image} alt="product" />
              </div>
            </div>
            <div className="product__detail">
              <h2 className="product-title heading-secondary">
                {firstProductData.title}
              </h2>
              <span className="product-price">$ {firstProductData.price}</span>
              <p className="product-desc">{firstProductData.description}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="related-product">
            <header className="section-header">
              <div className="section-title">
                <span>Related Products </span>
              </div>
            </header>
            <div className="product-item-wrapper">
              {firstProductData.category.products.map((product) => {
                return (
                  <div className="product-item">
                    <div className="product-item__img">
                      <img src={product.images.main_image} alt="product" />
                    </div>
                    <div className="product-item__info">
                      <h3 className="heading-tertiary">{product.title}</h3>
                      <span className="product-price">{product.price}</span>
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="product-item__anchor"
                    >
                      {' '}
                      Link to product detail{' '}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );

    return id == 1
      ? firstProductLayout
      : products.data.map((product) => {
          const htmlContent = (
            <div key={product.id} className="product-wrapper">
              <header className="section-header">
                <ul className="breadcrumb ">
                  <li>
                    <Link to="/"> Home </Link>
                    <span className="seperator" />
                  </li>
                  <li className="active">Product</li>
                </ul>
              </header>
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
                    <span className="product-price">$ {product.price}</span>
                    <p className="product-desc">{product.description}</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="related-product">
                  <header className="section-header">
                    <div className="section-title">
                      <span>Related Products </span>
                    </div>
                  </header>
                  <div className="product-wrapper">
                    <div className="product-item">
                      <img src={product.category.image} alt="product" />
                      <Link
                        to={`/product/${product.id}`}
                        className="product-item__anchor"
                      >
                        Link to product detail{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );

          return product.id == id ? htmlContent : '';
        });
  };

  return (
    <section id="product-detail" className="product-detail">
      <div className="container">
        {productId == 1 ? (
          firstProduct.loading ? (
            <Loader />
          ) : (
            getProductDetail(productId)
          )
        ) : products.loading ? (
          <Loader />
        ) : (
          getProductDetail(productId)
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
