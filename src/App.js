import React, { Component} from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';

import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Write from './pages/write';
import Login from './pages/login/loadable';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle/>
          <IconFont/>
          <BrowserRouter>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact  component={Login}></Route>
            <Route path='/write' exact  component={Write}></Route>
            <Route path='/detail/:id' exact  component={Detail}></Route>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
  
}

export default App;
