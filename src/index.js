import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import { BrowserRouter } from 'react-router-dom'
import { create } from 'jss'
import JssProvider from 'react-jss/lib/JssProvider'

import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import 'lazysizes'
import 'typeface-roboto'
import './index.css'

import rootSaga from './saga'
import Amplify from 'aws-amplify'
import { AmplifyConfig } from './config'

Amplify.configure(AmplifyConfig);

document.addEventListener('lazybeforeunveil', function(e){
  let bg = e.target.getAttribute('data-bg');
  if(bg){
      e.target.style.backgroundImage = 'url(' + bg + ')';
  }
});

const styleNode = document.createComment('insertion-point-jss');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'insertion-point-jss';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  }
});

const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
 key: 'root',
 storage: storage,
 whitelist: ['favorites']
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);
persistStore(store);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <App />
        </JssProvider>
      </BrowserRouter>
      </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
