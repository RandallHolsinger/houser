import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Wizard extends Component {
    constructor() {
        super()

        this.state= {
            name: '',
            address: '',
            city: '',
            state:'',
            zipCode: 0
        }

        this.handleName = this.handleName.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleZipCode = this.handleZipCode.bind(this);

    }
    

    handleName(e){
      this.setState({
          name: e.target.value
      })
    }

    handleAddress(e) {
       this.setState({
           address: e.target.value
       })
    }

    handleCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    handleState(e) {
        this.setState({
            state: e.target.value
        })
    }

    handleZipCode(e) {
      this.setState({
          zipCode: e.target.value
      })
    }

    creatHouse(name, address, city, state, zipCode) {
        Axios.post(`/api/houses`, {name, address, city, state, zipCode}).then(res => {
            const {name, address, city, state, zipCode} = res.data
            this.setState({
               name,
               address,
               city,
               state,
               zipCode
            })
        })
    }
 


  render() {
      return(
          <div>
              <p>Wizard</p>
              <Link to='/'>
                <button>Cancel</button>
              </Link>
              <input
                placeholder='Name'
                onChange={this.handleName}
                value={this.state.name}>
              </input>
              <input
                placeholder='Adresss'
                onChange={this.handleAddress}
                value={this.state.address}>
              </input>
              <input
                placeholder='City'
                onChange={this.handleCity}
                value={this.state.city}>
              </input>
              <input
                placeholder='State'
                onChange={this.handleState}
                value={this.state.state}>
              </input>
              <input
                placeholder='Zip Code'
                onChange={this.handleZipCode}
                value={this.state.zipCode}>
              </input>
              <Link to='/'>
              <button onClick={this.AddHouse}>Complete</button>
              </Link>
          </div>
      )
  }
}

export default Wizard;