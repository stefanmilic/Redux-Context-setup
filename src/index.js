import React from 'react';
import ReactDOM from 'react-dom';

// basic example {just uncommnent to test}
// import App from './App';

// context example
// import ContextApp from './ContextApp';

// redux example
import ReduxApp from './ReduxApp';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReduxApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
