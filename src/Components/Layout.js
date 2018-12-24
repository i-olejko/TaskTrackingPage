import React from 'react';
import { Container } from 'reactstrap';

//css
import './Styling/Layout.css';

//components
import NavMenu from './NavMenu';
export default props => (
  <div className="app_main_wrapper">
    <NavMenu />
    <Container>
      <div className="app_content_wrapper">
        {props.children}
      </div>
    </Container>
  </div>
);