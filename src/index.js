import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';

import './index.scss';

const data = [{
  id: '12345',
  name: 'Cyril',
  phone: '0606060606',
}, {
  id: '1234',
  name: 'Matt',
  phone: '0707070707',
}, {
  id: '123',
  name: 'David',
  phone: '0808080808',
}];

const App = () => (
  <div>
    <ul>
      {data.map((item) => <Home data={item} />)}
    </ul>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
