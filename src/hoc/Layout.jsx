import React from 'react';
import { Header, Footer } from '../components/headerFooter';
import Wrapper from '../components/ui/Wrapper';
import ContextAPI from '../contextAPI';

const Layout = (props) => {
  const { children } = props;
  const propsWrapper = {
    className: 'body-wrapper',
    tagName: 'div',
    id: 'body-wrapper',
  };
  return (
    <ContextAPI>
      <Wrapper propsWrapper={propsWrapper}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </ContextAPI>
  );
};

export default Layout;
