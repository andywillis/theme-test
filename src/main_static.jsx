// import * as fs from 'fs';
// import { render } from 'preact';
import render from 'preact-render-to-string';

// import { h } from 'preact';
// jsx h

import App from './App';

import './index.css';

// const html = render(<App />);
// console.dir(html);

// fs.writeFile('./journal.html', html, 'utf8', () => {
//   console.log('File written');
// });

export default render(<App />);
