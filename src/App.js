import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import axios from 'axios'
import Second from './components/Second'
import {connect} from 'react-redux'

const App=(props)=>{
  const[results,setResults]=useState([])
  useEffect(()=>{
    axios.get('https://api.covid19india.org/v4/data.json').then((datas)=>{
      console.log(datas.data)
    
    

    setResults(Object.entries(datas.data))
    props.getSt(results)


     
    }).catch(err=>{
      console.log(err)
    })
  },[])
  console.log(results)


  return(
   
    <React.Fragment>
      <Header/>
      <Second datas={results}/>
    </React.Fragment>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getSt:(val)=>{
      dispatch({type:'GET_ST',val})
    }
  }

}

export default connect(null,mapDispatchToProps)(App);
