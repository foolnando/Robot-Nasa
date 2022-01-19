import React, { Component } from 'react';
import "./style.css";

export class ComandBar extends Component{
    render(){
        return(
            <form className="form-comand">
                <span className="comand-title">Entre com o comando</span>
                <input
                    type="text"
                    className="form-comand_input"
                    placeholder="" 
                />
                <button className="form-comand_button">Submeter</button>
        </form>
        );
    }
}