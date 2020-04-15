import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AllDatas } from './AllDatas'
import { CountryDatas } from './CountryDatas'

function App() {

  return (
    <div className="App">
      <NavBar />
      <AllDatas />
      <CountryDatas />
      <Footer />
    </div>
  );
}

export default App;

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark">
      <span className="navbar-brand mb-0 h1 text-warning">Coronavirus les chiffres de l'épidémie en temps réel </span>  <span className='text-warning'><Today /></span>
    </nav>
  )
}

const Footer = () => {
  return (
    <div className="jumbotron py-3" id='footer'>
      <div className="container">
        <h3 className="text-danger"> Covid -19 App.</h3>
        <p className="lead">Special thanks to <a href="https://github.com/javieraviles">Javier Aviles</a> I've used his API - thanks for your public job with covidAPI - </p>
        <p className="lead small text-light">I created this app with : ReactJS - Bootstrap 4 - Axios - <a href="https://github.com/javieraviles/covidAPI">covidAPI</a> </p>
        <p className='small text-light'>© 18-03-2020 Laurent CAMINADE || all rights reserved</p>
      </div>
    </div>
  )
}

const Today = () => {

  let theDate = new Date()
  let months = ["Jan", "Fev", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Dec"];
  let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  let year = theDate.getFullYear()
  let month = months[theDate.getMonth()]
  let day = days[theDate.getDay()]
  let nday = theDate.getDate()

  let today = `${day} ${nday} ${month} ${year}`

  return (
    today
  )
}