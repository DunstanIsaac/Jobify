import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//create root is now the correct way to implement render()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <App />
</React.StrictMode>);


//ReactDOM.render(<App />, document.getElementById('root'));


const myelement = (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </tbody>
  </table>
);

//root.render(myelement);