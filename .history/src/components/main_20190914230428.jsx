import React, { Component } from 'react'

export class Main extends Component {
    state={
        header :[],
        data:[]
    }
    render() {
        return (
            <div>
                <button>Upload</button>
                {console.log(this.state)}
            </div>
        )
    }
}

export default Main
