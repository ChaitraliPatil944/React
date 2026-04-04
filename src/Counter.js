import React from "react";

class Counter extends React.Component{
    render(){
        return (
            <div>
                <button onClick={()=>{
                    console.log("Unlike");
                    this.props.count=this.props.count-1;
                    console.log(this.props.count);
                }}>-</button>

                <input value={this.props.count} type="text" />

                <button onClick={()=>{
                    this.props.count=this.props.count+1;
                    console.log("Like");
                }}>+</button>
            </div>
        );

    }
}
export default Counter;