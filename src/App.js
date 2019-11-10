import React from 'react';
import Predio from './components/Predio';
import Chao from './components/Chao';
import Sol from './components/Sol';
import './App.css';

export default class App extends React.Component {

  render() {
    const style = {
      background: 'linear-gradient(180deg,rgba(34,190,249,1) 0%, rgba(212,243,247,1) 100%)',
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '5fr 5fr 5fr 5fr 5fr',
      gridTemplateRows: '15vh 70vh 15vh'
    }

    const stylePredio = {
      gridRow: '2',
      gridColumn: '2/5'
    }

    const styleChao = {
      gridRow: '3',
      gridColumn: '1/6'
    }

    return (
      <div style={style}>
        <Sol/>
        <Predio style={stylePredio}/>
        <Chao style={styleChao}/>
      </div>
    );
  }
}
