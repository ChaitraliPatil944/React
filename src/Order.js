import React from "react";

class Order extends React.Component{
    render(){
        return(
            <div>
                
                <p>customername :{this.props.customername}</p>
                <p> orderdate {this.props.orderdate}</p>
                <p> ammount: {this.props.ammount}</p>
                <p> quantity: {this.props.quantity}</p>
                <p> status: {this.props.status}</p>
                <br/>
                <button> Add to Cart</button>
                
            </div>
        )
    }

}
export default Order;