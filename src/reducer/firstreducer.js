
const initState={
    tested:0,
    confirmed:0,
    recovered:0,
    msg:"hello",
    datalen:0,
    isChk:true,
    sttest:0,
    stcnf:0,
    strec:0,
    stdata:[]

}

const firstreducer=(state=initState,action)=>{
    switch(action.type){
        case 'GET_TEST':
            return{
                ...state,
                tested:action.payload
                
            }
        case "GET_CONF":
            return{
                ...state,
                confirmed:action.payload
            }
        case 'GET_REC':
            return{
                ...state,
                recovered:action.payload
            }
        case 'GET_LEN':
            return{
                ...state,
                datalen:action.payload
            }
        case 'UNCHK':
                  return{
                     ...state,
                    
                    datalen:state.datalen-(action.payload.val1),
                     tested:state.tested-action.payload.val3.total.tested,
                     confirmed:state.tested-action.payload.val3.total.confirmed,
                     recovered:state.tested-action.payload.val3.total.recovered,
                    //  sttest:state.sttest-action.payload.val3.total.tested,
                    //  stcnf:state.stcnf-action.payload.val3.total.confirmed,
                    //  strec:state.strec-action.payload.val3.total.recovered,
                    isChk:false
                 
               }
            // if (action.payload.val2=state.isChk){
            //     return{
            //         ...state,
                    
            //         datalen:state.datalen-(action.payload.val1),
            //         // tested:state.tested-action.payload.val3.total.tested,
            //         // confirmed:state.tested-action.payload.val3.total.confirmed,
            //         // recovered:state.tested-action.payload.val3.total.recovered,
            //         isChk:false
                 
            //     }

                

            // }
            //     else if(action.payload.val2=state.isChk){
            //         return{
            //             ...state,
                    
            //             datalen:state.datalen-action.payload.val1,
            //             isChk:!state.isChk

            //         }
            

            //     }
            // else{
            //     return{
            //         ...state,
            //         datalen:state.datalen+action.payload.val1,
            //         // tested:state.tested+action.payload.val3.total.tested,
            //         // confirmed:state.tested+action.payload.val3.total.confirmed,
            //         // recovered:state.tested+action.payload.val3.total.recovered,
            //         isChk:true

            //     }
            // }

        case 'CHK':
            return{
                ...state,
                datalen:state.datalen+action.payload.val1,
                tested:state.tested+action.payload.val3.total.tested,
                confirmed:state.tested+action.payload.val3.total.confirmed,
                recovered:state.tested+action.payload.val3.total.recovered,
                // sttest:state.sttest+action.payload.val3.total.tested,
                // stcnf:state.stcnf+action.payload.val3.total.confirmed,      
                // strec:state.strec+action.payload.val3.total.recovered,
                isChk:true
            }
        case 'GET_ST':
            return{
                ...state,
               stdata:[action.payload]

            }

            
        default:
            return state
    }

}

export default firstreducer