import React, { Component } from 'react';
import './App.css';
import Form from './component/Form';
import Header from './component/Header';
import Dashbord from './component/Dashboard';
import axios from 'axios'


class App extends Component {
  constructor(){
    super()

    this.state = {
      items: []

    }
  }
  componentDidMount(){
     axios.get(`/api/inventory`).then(res => {
       this.setState({
         items: Response.data
       })
     })
  }
  render() {
    return (
      <div className="App">
       <Header />
       <Form />
       <Dashbord />
           
       
       
      </div>
    );
  }
}

export default App;
