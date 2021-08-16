import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.cityList = [{name: 'Goa', country: 'India'},
            {name: 'Darjeeling', country: 'India'},
            {name: 'Lonavala', country: 'India'},
        ]
    }

    render() {
        console.log(this.cityList)
        return (
            <div id="main">
                <ol>
                    {this.cityList.map((eachElement, index) => <li
                        key={`location ${index}`}>{eachElement.name}</li>)}
                </ol>
            </div>
        )
    }
}


export default App;
