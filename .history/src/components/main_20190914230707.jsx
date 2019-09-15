import React, { Component } from 'react'
import {ExcelRenderer, OutTable} from 'react-excel-renderer';


export class Main extends Component {
    state={
        header :[],
        data:[]
    }

    clickHandler= (event) => {
        let fileObj = event.target.files[0];
        console.log("click me", fileObj)
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler(event)}>Upload</button>
                {console.log(this.state)}
            </div>
        )
    }
}

export default Main
