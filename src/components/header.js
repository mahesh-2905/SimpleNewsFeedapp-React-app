import React,{Component} from 'react';
import './header.css'

class Header extends Component{

    constructor(){
        super()
        this.state = {
            keywords:"userinput",
        }
    }
    
    render(){
        return (
            <header>
                <center>
                  <h1>News Feed / React-app</h1>
                  <div className="form-group">
                    <input type="text" onChange={this.userInputs.bind(this)}
                      className="form-control"id="search"  placeholder="Search for the feed" autoComplete="off"/>
                  </div>
                </center>
            </header>
        )
    }
    userInputs(events){
        console.log(events.target.value)
        this.setState({keywords:events.target.value})
        this.props.filterdata(events.target.value) 
    }
}

export default Header;