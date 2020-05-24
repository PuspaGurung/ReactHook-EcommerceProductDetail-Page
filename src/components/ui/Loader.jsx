import React from 'react';
import { Loader } from 'semantic-ui-react';

const LoaderItem = () => {
  return (
    <div className="loader">
      <Loader active inline>
        Loading
      </Loader>
    </div>
  );
};
export default LoaderItem;
