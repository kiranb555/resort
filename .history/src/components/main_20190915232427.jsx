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
        header: resp.cols,
        data: resp.rows
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

                <br/>
                <hr/>

                <form action="#type your action here" method="POST" enctype="multipart/form-data">
  <div id="yourBtn" style={{height: "50px",width: "100px",border: "1px dashed #BBB", cursor:"pointer"}} onclick="getFile()">Click to upload!</div>
  <div style={{height:" 0px",width:"0px",overflow:"hidden"}}><input id="upfile" type="file" /></div>
  <input type="submit" value='submit' />
</form>
            </div>
        )
    }
}

export default Main
