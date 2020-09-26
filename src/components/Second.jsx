import React,{useState} from 'react'
import Sidepane from './Sidepane'
import Secondpane from './Secondpane'
import {connect} from 'react-redux'
import Graphs from './Graphs'

 const Second = (props) => {
     const{datas}=props
     
     console.log(datas)
    let nums1=0
    let nums2=0
    let nums3=0

     datas.map((item)=>{
        nums1=nums1+item[1].total.tested
        nums2=nums2+item[1].total.confirmed
        nums3=nums3+item[1].total.recovered
       
     })

     console.log(nums1)
     console.log(nums2)
     console.log(nums3)
     props.getTest(nums1)
     props.getConf(nums2)
     props.getRec(nums3)
     props.getLen(datas.length)
    

    
    return (
        <div className="container">


<div className="second-div">
            <div className="sidepane">
            {datas.map((item)=>{
                console.log(item)
               
               return <Sidepane chk={item}/>
            })}
            </div>

            <div className="card-div" >
                <Secondpane lens={datas.length} num1={nums1} num2={nums2} num3={nums3} dataslist={datas}/>
            </div>

            
            
        </div>


        </div>
       
    )
}

const mapStateToProps=(state)=>{


}

const mapDispatchToProps=(dispatch)=>{
    return{
        getTest:(val)=>{
            dispatch({type:"GET_TEST",payload:val})

        },
        getConf:(val)=>{
            dispatch({type:"GET_CONF",payload:val})

        },
        getRec:(val)=>{
            dispatch({type:"GET_REC",payload:val})
        },
        getLen:(val)=>{
            dispatch({type:"GET_LEN",payload:val})

        },
     
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Second)
