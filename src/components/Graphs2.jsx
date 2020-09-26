import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {connect} from 'react-redux'

 const Graphs2 = (props) => {
     const{test,conf,rec,txt}=props
    console.log(props.getvals)
    const state = {
        labels: ['Tested', 'Confirmed', 'Recovered',
                 ],
        datasets: [
          {
            label: 'Statistics',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00'
             
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000'
           
            ],
            data: [test,conf,rec]
          }
        ]
      }
    //   props.getSt(test,conf,rec)
    return (
        <div>
             <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:`${txt}`,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        getvals:state.first
    }

}
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         getSt:(val1,val2,val3)=>{
//     dispatch({type:'GET_ST',payload:{val1,val2,val3}})
//         }
//     }

// }

export default connect(mapStateToProps)(Graphs2)
