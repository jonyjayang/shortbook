import React, { Component,Fragment} from 'react';
import {Provider} from 'react-redux'
import Header from './common/header';
import {GlobalStyle} from './style.js';
import { Icon } from './statics/iconfont/iconfont';
import { BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from "./pages/Login";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Fragment >
        <GlobalStyle></GlobalStyle>
        <Icon></Icon>
        
        <BrowserRouter>
            <div>
              <Header></Header>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
            </div>
        </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
