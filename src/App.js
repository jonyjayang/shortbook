import React, { Component,Fragment} from 'react';
import Header from './common/header';
import {GlobalStyle} from './style.js';
import { Icon } from './statics/iconfont/iconfont';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <Icon></Icon>
        <Header></Header>
        </Fragment>
      
    );
  }
}

export default App;
