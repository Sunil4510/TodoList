const initialstate = {
    list:[]
}

const todoReducers = (state=initialstate, action)=>{
    switch(action.type){
        case "ADD_TODO" :
            const {id, data} = action.payload;
            if(data.length>2){
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                    id,
                    data
                }]
            }
        }
        
        case "DELETE_TODO":
            const newList = state.list.filter((curEle)=> curEle.id !== action.payload);
            return{
                ...state,
                list:newList
            }    
            
        case "REMOVE_TODO":
            return{
                list:[]
            }   
              
                 
        default :return state;   
    }
}

export default todoReducers;