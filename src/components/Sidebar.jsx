import React, { Component } from 'react';
import Data from "../api/data.json";

class Sidebar extends Component {
    constructor(props){
        super(props);

        let data = {};
    }

    getData(){
         return new Promise(function(resolve){
            setTimeout(function(){
                resolve(Data);
            }, 1000);
        }).then(function(data){
            this.data = data;
        })
    }

    render() {
        this.getData();
        
        return (
            <div>
                <h1>Sidebar</h1>
                {console.log(this.data)}
            </div>
        );
    }
}

export default Sidebar;