import React from 'react';
import logo from './logo.svg';
import './App.css';
import produce from 'immer';
// import { Map } from 'immutable';
/*
state = {
  data: Map( { a: 'b' } )
}
this.setState( { data: this.state.data.set( 'a', 'new-value' ) } );
 */

class MyComponent extends React.Component {
  state = {
    key: 'value',
    user: {
      id: 1,
      name: 'John',
      email: 'john@example.com'
    },
    items: [
      1, 2, 3, 4, 5
    ]
  };
  componentDidMount() {
    console.log( this.state );
    // this.setState( { key: 'new-value' } );
    // this.setState(
    //   {
    //     user: {
    //       ...this.state.user,
    //       name: 'Peter',
    //     }
    //   }, () => {
    //   console.log( this.state );
    // } )
    // const { items } = this.state;
    // this.setState({
    //   items: [
    //     ...items.slice( 0, 2 ),
    //     999,
    //     ...items.slice( 2 ),
    //   ]
    // }, () => console.log( this.state ));
    //items.splice( 2, 0, 999 );
    // const newState = { ...this.state }; // state 통채로 복사
    // newState.user.name = 'Peter';
    // this.setState( newState );
    //
    // const items = [ ...this.state.items ]; // 복사
    // items.splice( 2, 0, 999 );
    // this.setState( {
    //   items,
    // }, () => console.log( this.state ) );
    // 불변성 immutable

    this.setState( produce(
      draft => {
        draft.key = 'new-value';
        draft.user.name = 'Peter';
        draft.user.email = 'peter@example.com';
        draft.items.splice( 2, 0, 999 );
      }
    ), () => console.log( this.state ) );

    // this.setState( {
    //   key: 'another-value'
    // } ); // 동작
  }
  render() {
    return <div>
      it works
    </div>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MyComponent;
