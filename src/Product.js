import React from "react";

class Product extends React.Component{
    render(){
        return(
            <div>
                <h3>Popular Bikes of Royal Enfield </h3>
                <p>Title :{this.props.title}</p>
                <img src={this.props.imgurl} alt={this.props.alt} width="100px" height="100px"/>
                <p> Price: {this.props.price}</p>
                <p> Description: {this.props.description}</p>
                <br/>
                <button> Add to Cart</button>
                
            </div>
        )
    }

}
export default Product;