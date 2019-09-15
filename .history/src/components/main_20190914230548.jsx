import React, { Component } from 'react'
import {ExcelRenderer, OutTable} from 'react-excel-renderer';


export class Main extends Component {
    state={
        header :[],
        data:[]
    }

    clickHandler= () => {
        alert("click me)
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Upload</button>
                {console.log(this.state)}
            </div>
        )
    }
}

export default Main
