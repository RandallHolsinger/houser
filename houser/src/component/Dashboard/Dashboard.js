import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
   constructor(){
       super()


       this.state = {
           houses: []
       }
   }
   componentDidMount(){
       axios.get(`/api/houses`).then(res => {
           console.log(res)
           this.setState({
               houses: res.data
           })
       })
   }

//    deleteHouse(id) {
//        axios.delete(`/api/houses/${id}`).then(res => {
//            this.setState({
//                houses: res.data
//            })
//        })
//    }



    render() {
        let mappedHouses = this.state.houses.map((house, index) =>{
            return(
                <House key={index} element={house}/>
            )
        })
        return (
            <div>
                <p>Dashboard</p>
                <House />
               <Link to='/wizard'>
                <button>Add New Property</button>
                </Link>
                {mappedHouses}
            </div>
        )
    }
}
export default Dashboard;