import React from "react";
import data from "./data/orders.json";
import Order from "./Order";

class Orders extends React.Component{
    render(){
        const orders=data;
        return( 
            <div> 
                <h3>List of Orders</h3>
                <hr/>
                {    
               orders.map(item=>(

                <Order customername = {item.customername}
                orderdate = {item.orderdate}
                ammount = {item.ammount}
                quantity = {item.quantity}
                status = {item.status}
                />

               ))
                }
            </div>
        );
    }   

}
export default Orders;