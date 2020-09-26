import React from 'react'
import {Bar} from 'react-chartjs-2'
import {connect} from 'react-redux'

 const Graphs = (props) => {
     console.log(props.details)
    const state = {
        labels: ['Tested','Confirmed','Recovered'],
        datasets: [
          {
            label: 'statistics',
            backgroundColor: ['rgba(75,192,192,1)','red','green'],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [props.details.tested,props.details.confirmed,props.details.recovered]
          }
        ]
      }
    return (
        <div className="bar-div">
            <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'',
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
        details:state.first
    }

}


export default connect(mapStateToProps)(Graphs)