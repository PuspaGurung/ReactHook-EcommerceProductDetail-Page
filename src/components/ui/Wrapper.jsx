import React, { useContext } from 'react';
import { DarkModeContext } from '../../contextApi';

// The toggle-color-mode functionlaity might be use in multiple components
// to reduce the code redundant, create a component 'Wrapper' and apply toggle-color-mode functionaly
// and use that component 'Wrapper' in multiple other components if needed

// get all properties of tag via props, such as tag type(i.e div, section e.t.c), className, and id
// props className might be more than one className
// store all props className in an array

// set new className in new Tag is depends on props 'id', add affix on it (i.e id--dark-mode or id--light-mode depends on condition)
// if ther is no id pass through props then set the className with first index of arr classes i.e arrClass[0] and add affix on it

const Wrapper = ({ propsWrapper, children }) => {
  const { className, id } = propsWrapper;
  const arrClasses = className.split(' ');
  const { darkMode } = useContext(DarkModeContext);
  return (
    <propsWrapper.tagName
      className={`${className} ${
        darkMode
          ? `${id ? id : arrClasses[0]}--dark-mode`
          : `${id ? id : arrClasses[0]}--light-mode`
      }`}
      id={id ? id : ''}
    >
      {children}
    </propsWrapper.tagName>
  );
};

export default Wrapper;
