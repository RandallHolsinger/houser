import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            items: [],
            imgUrl: '',  // need a way to add img src
            productName: '',
            price: ''
        }
        this.handleImage = this.handleImage.bind(this);
        this.handleProduct = this.handleProduct.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
    }
    
    handleImage(evt){
       this.setState({
         imgUrl: evt.target.value
       })
    }

    handleProduct(evt){
      this.setState({
          productName: evt.target.value
      })
    }

    handlePrice(evt){
      this.setState({
          price: evt.target.value
      })
    }

    addtask = () =>{
      let  {imgUrl, productName, price} = this.state;
      this.setState({
        items: [...this.state.items, imgUrl, productName, price ]
      })
    }

    cancelTask = () => {
      this.setState({
          imgUrl: '',
          productName: '',
          price: ''

      })
    }


    render(){
        let mappedItems = this.state.items.map((item, index) => {
            return <div key={index}>{item}</div>
        })
        return(
            <div>
                <h1>FORM</h1>
                <input 
                  onChange={this.handleImage}
                  value={this.state.imgUrl}
                  placeholder='Enter Image Url Here'>
                </input>
                <input 
                  onChange={this.handleProduct}
                  value={this.state.productName}
                  placeholder='Enter Product Name'>
                </input>
                <input 
                  onChange={this.handlePrice}
                  value={this.state.price}
                  placeholder='Enter A Price'>
                  </input>
                <button onClick={this.cancelTask}>CANCEL</button>
                <button onClick={this.addtask}>ADD</button>
                {mappedItems}
                
            </div>
        )
    }
}

export default Form;