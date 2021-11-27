import React from 'react';
import { Component } from 'react';

class Contact extends Component{
    constructor(){
        super()
        this.state={message:"Contact Us"}
    }
    changeMessage(){
        this.setState(
            {message:"Contact Number : 01888888888"}
        )
    }
    render(){
        return(
            <div className="centered">
            <h1 onClick={()=>this.changeMessage()}>{this.state.message}</h1>
            </div>
        );
    }
}

export default Contact;