import React from 'react'
import CountUp from 'react-countup'
import {connect} from 'react-redux'
import Graphs from './Graphs'
import Graphs2 from './Graphs2'

 const Secondpane = (props) => {
     const {dataslist}=props
     console.log(dataslist)
    //  props.getSt(dataslist)
//    const{lens,num1,num2,num3}=props

     
    return (
        <div className="secondp">
             <div className="card-inn">
          
          <div className="card" >
            <div className="card-header">Selected States</div>
           <div className="card-body"><p><CountUp start={0} end={props.datas.datalen} separator=","/>{}</p></div>
        </div>

        <div className="card">
            <div className="card-header">Tested</div>
            <div className="card-body"><p><CountUp start={0} end={props.datas.tested} separator=","/>{}</p></div>
        </div>

        <div className="card">
            <div className="card-header">Confirmed</div>
            <div className="card-body"><p><CountUp start={0} end={props.datas.confirmed} separator=","/>{}</p></div>
        </div>

        <div className="card">
            <div className="card-header">Recovered</div>
            <div className="card-body"><p><CountUp start={0} end={props.datas.recovered} separator=","/>{}</p></div>
        </div>
         
       
      </div>


      <div className="graphs">
          
       <Graphs/>
      

       <div></div>
      </div>

      <div>
           {dataslist.map((item)=>{
           
               return(
                   <div>
                      
                       <Graphs2 test={item[1].total.tested} conf={item[1].total.confirmed} rec={item[1].total.recovered} txt={item[0]}/>
                   </div>
               )
           })}
       </div>


        </div>
       
    )
}

const mapStateToProps=(state)=>{

    return{
        datas:state.first
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getSt:(val)=>{
        dispatch({type:'GET_ST',payload:val})
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Secondpane)
