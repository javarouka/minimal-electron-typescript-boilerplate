import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import Application from './components/Application';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const render = (Component: () => JSX.Element) => {
    ReactDOM.render(<Component />, mainElement);
};

render(Application);
