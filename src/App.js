import React, { Component,Fragment} from 'react';
import {Provider} from 'react-redux'
import Header from './common/header';
import {GlobalStyle} from './style.js';
import { Icon } from './statics/iconfont/iconfont';
import { BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Fragment >
        <GlobalStyle></GlobalStyle>
        <Icon></Icon>
        <Header></Header>
        <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
        </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
