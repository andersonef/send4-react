import React from 'react';
import Predio from './components/Predio';
import Chao from './components/Chao';
import Sol from './components/Sol';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDaylight: true
    }

    this.fetchSunrise = this.fetchSunrise.bind(this);

    if (!navigator.geolocation) {
      alert('Seu navegador não suporta Geolocation. Céu diurno selecionado!');
    } else {
      this.fetchSunrise();
    }
  }

  fetchSunrise() {
    navigator.geolocation.getCurrentPosition(async position => {
      console.log('position: ', position);
      const responseApi = await fetch(`https://api.sunrise-sunset.org/json?formatted=0&lat=${position.coords.latitude}&lng=${position.coords.longitude}`);
      const responseJson = await responseApi.json();
      const now = new Date();
      const sunrise = new Date(responseJson.results.sunrise);
      const sunset = new Date(responseJson.results.sunset);
      if (now > sunrise && now < sunset) {
        this.setState((state, props) => {
          return {isDaylight: true};
        });
        return;
      }
      this.setState((state, props) => {
        return {isDaylight: false};
      });
    });
    setTimeout(this.fetchSunrise, 60 * 1000);
  }

  render() {

    const stylePredio = {
      gridRow: '2',
      gridColumn: '2/5'
    }

    const styleChao = {
      gridRow: '3',
      gridColumn: '1/6'
    }
    const styleGlobal = {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '5fr 5fr 5fr 5fr 5fr',
        gridTemplateRows: '15vh 70vh 15vh'
    }
    if (this.state.isDaylight) {
      styleGlobal.background = 'linear-gradient(180deg,rgba(34,190,249,1) 0%, rgba(212,243,247,1) 100%)';
    } else {
      styleGlobal.background = 'linear-gradient(180deg, rgba(15,56,61,1) 0%, rgba(34,190,249,1) 100%)';
    }
    const sol = (this.state.isDaylight) ? <Sol/> : '';
    return (
      <div style={styleGlobal}>
        {sol}
        <Predio style={stylePredio}/>
        <Chao style={styleChao}/>
      </div>
    );
  }
}
