import React from "react";
import Product from "./Product";
import data from "./data/products.json";

class List extends React.Component{
    render(){
        const bikes=data;
        return( 
            <div> 
                {    
               bikes.map(item=>(

                <Product title = {item.title}
                imgurl = {item.imgurl}
                price = {item.price}
                description = {item.description}
                alt = {item.alt}
                />

               ))
                }
            </div>
        );
    }   

}
export default List;