import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar"

const layout = props => {
  return (
    <Aux>
      <Toolbar>Toolbar, SideDrawer, Backdrop</Toolbar>
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
