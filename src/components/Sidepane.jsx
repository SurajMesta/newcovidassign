import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
 
 const Sidepane = (props) => {
     const{chk}=props
     const[datas,setDatas]=useState(true)
   

    //  console.log(chk)
     console.log(props.isCh.isChk)    
     

     useEffect(()=>{
        props.getst(chk)
     },[chk])
    return (
        
        <div>
            <div>
        
            <input type="checkbox" value={chk[0]} onClick={()=>{
                console.log(chk[1])
                if(props.isCh.isChk==true){
                    props.getChk(1,false,chk[1])
                }
                else{
                    props.getUnchk(1,true,chk[1])
                }
      
                
                
            }} defaultChecked={props.isCh}/>
             <span>{chk[0]}</span>
            </div>
      
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        isCh:state.first
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        getChk:(val1,val2,val3)=>{
            dispatch({type:"UNCHK",payload:{val1,val2,val3}})

        },
        getUnchk:(val1,val2,val3)=>{
            dispatch({type:"CHK",payload:{val1,val2,val3}})
        },
                 getst:(val1)=>{
     dispatch({type:'GET_ST',payload:{val1}})
        }
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(Sidepane)
