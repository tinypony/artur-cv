import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app.js'
import MediaQuery from 'react-responsive'
import Constant from './util/constant'

const getScreenSize = () => window.innerWidth <= 1024 ? Constant.SCREEN_TYPE.MOBILE : Constant.SCREEN_TYPE.LARGE


render(
  <AppContainer>
    <App screenType={getScreenSize()} />
  </AppContainer>,
  document.querySelector("#app")
)

if (module && module.hot) {
  module.hot.accept('./app.js', () => {

    const App = require('./app.js').default;
    render(
      <AppContainer>
        <App screenType={getScreenSize()} />
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
