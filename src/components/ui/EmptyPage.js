import React, { Fragment } from 'react';
import classes from './EmptyPage.module.css';

const EmptyPage = () => {
  return (
    <Fragment>
      <div className={classes.empty}>
        <p>Empty 💨</p>
      </div>
    </Fragment>
  );
};

export default EmptyPage;
