import { render as prender } from 'preact';
import render from 'preact-render-to-string';

import App from './App';

import './index.css';

const html = render(<App />);

console.log(html);

prender(<App />, document.querySelector('#app'));
