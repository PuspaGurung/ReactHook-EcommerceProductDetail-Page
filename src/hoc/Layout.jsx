import React from 'react';
import { Header, Footer } from '../components/headerFooter';
import Wrapper from '../components/ui/Wrapper';
import ContextApi from '../contextApi';

const Layout = (props) => {
  const { children } = props;
  const propsWrapper = {
    className: 'body-wrapper',
    tagName: 'div',
    id: 'body-wrapper',
  };
  return (
    <ContextApi>
      <Wrapper propsWrapper={propsWrapper}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </ContextApi>
  );
};

export default Layout;
