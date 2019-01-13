import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Using for router - do not change anything
import { Route, routerReducers } from 'react-pretence-router';

// Reducer importing
import { testReducer, TestX } from './test/test.component';

// Component importing
import { Menu } from './menu';
import { Home } from './components/home';
import { About } from './components/about';
import { Contact } from './components/contact';

// Step 1 - Must have - main state must be an object
const preloadedState = {};

// Step 2 - Combine your reducers with router reducers
const rootReducer = combineReducers({
    router: routerReducers, // Using for router - must have and do not change its name "router"
    testReducer, // Your reducers here
});

// Step 3 - Create store for your app
const store = createStore(rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Step 4 - Export your app
const App = () => (
    <Provider store={store}>
        <div>
            <Menu/>
            <Route path={'/'} component={Home}/>
            <Route path={'/about'} component={About}/>
            <Route path={'/contact'} component={Contact}/>
            <TestX/>
        </div>
    </Provider>
)
export default App;

