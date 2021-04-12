/* eslint-disable react/react-in-jsx-scope */
import { PureComponent } from 'react';
import Table from '../containers/Table.jsx';

export class RoutePrivate extends PureComponent {
  render() {
    return (
      <div className="App-Container">
        <Table />  
      </div>
    );
  }
}

export default RoutePrivate;
