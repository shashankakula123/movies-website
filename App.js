import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from"./Header.js";
import Footer from "./footer.js";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from "./card.js";
// function App() {
//   return (
//     <div>
//     <Header/>
//      <Card/>
//     <Footer/>
//     </div>
//   );
// }


class App extends React.Component {
  constructor(props) {
    super(props);
  //   this.state = {  headvalue:"vwshoroom",
  //   flagEnable:true,
  //   count:0,
  // }

  this.state={
    apiData:[],
    count:0,
    loader:true,
  }
  
  console.log("first call");
  
  }


  componentDidMount(){
     console.log("third call");
    // setTimeout( ()=>{
    //   this.setState({headvalue:"buggati showroom",flagEnable:false})
    // },5000)
    
    fetch(' https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(response=>response.json())
       .then(json=> {

        setTimeout(()=> {this.setState({apiData:json.Search,count:this.state.count + 1,loader:false})},5000);
       
       }
       )
  
      }
   shouldComponentUpdate(nextProps,nextState){
    // if(this.state.count!==nextState.count&&this.state.count>=5){
    //   return false;
    // }
    // else{
    //   return true;
    // }
    console.log("fourth call");

   return true;
  

  }
  render() { 
    // let {headvalue,flagEnable,count}=this.state
      let {loader,apiData,count}=this.state

    console.log("second call");
    console.log(this.state.apiData);
    return ( 
      <>
      <Header/>
        
       
       <div className="main">
      
        {
        
           loader? <h1 id="loader">Loading...</h1> :
           
           
         
           
             apiData.map((item,pos)=>{

          return (
           
           
             <div className="card">

               <img src={item.Poster} className="thumbnail" alt="movie"/>
               <h3 className="title">{item.Title} {pos}</h3>
           </div>
           
             );
          })
             
          
        } 
          </div>
      </>

        
    // <div>
    //   {flagEnable?<div> <h1>Loading...</h1></div>
    //                     :<div>
    //                     <Header headervalue={headvalue} changeValue={(value)=>this.setState({headvalue:value})}/>
              
    //                      <button onClick={()=>this.setState({count:this.state.count+1})} >countvalue-{count}</button>
              
    //                       <Card />
    //                      <Footer/>
    //                      </div>
    //   }
    //        </div>  );

     



    );
  }
}
 


export default App;
