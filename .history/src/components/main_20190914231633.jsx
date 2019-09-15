import React, { Component } from 'react'
import {ExcelRenderer, OutTable} from 'react-excel-renderer';


export class Main extends Component {
    state={
        header :[],
        data:[]
    }

    clickHandler= (event) => {
        let fileObj = event.target.files[0];

        //just pass the fileObj as parameter
ExcelRenderer(fileObj, (err, resp) => {
    if(err){
      console.log(err);            
    }
    else{
      this.setState({
        cols: resp.cols,
        rows: resp.rows
      });
    }
  });  
        console.log("click me", fileObj)
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <input type="file" onChange={this.clickHandler} style={{"padding":"10px"}} />
            </div>
        )
    }
}

export default Main
