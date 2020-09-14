import React , {Component} from 'react';
import Header from './components/header';
import NewsFeed from './components/newsfeed';
import Data from './components/news.json'
import './App.css';

class App extends Component {

  constructor(){
     super()
     this.state={
       news:Data,
       filter:Data
     }
  }
  filter(userinput){
     let output = this.state.news.filter((data)=>{
       return (data.title.toLowerCase().indexOf(userinput) >-1 || data.feed.toLowerCase().indexOf(userinput) > -1)
     })
     this.setState({filter:output})
  }

  render(){
    return (
      <React.Fragment>
        <Header filterdata= {(data)=>{this.filter(data)}}></Header>
        <NewsFeed newsdata = {this.state.filter}></NewsFeed>
      </React.Fragment>
      
    );
  }

}

export default App;
