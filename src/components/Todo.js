import React, { useState } from 'react'
import './todo.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToDo, deleteToDo, removeToDo } from "../actions/index";
const Todo = () => {
    const list = useSelector((state)=>state.todoReducers.list)
const dispatch = useDispatch();
    const [Inputdata, setInputdata] = useState('');
    return (
        <React.Fragment>
            <div className="parent">
                <div className="child">
                    <figure>
                        <figcaption>Add Your List Here ✌️</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" className="entry" placeholder="✍️ Add Items ..." value={Inputdata} onChange={(e)=>setInputdata(e.target.value)}/>
                        <i className="fas fa-plus plus" onClick={()=>dispatch(addToDo(Inputdata),setInputdata(''))}></i>
                    </div>


                  <div className="show">
                        {
                           list.map((elem)=>{
                                return(
                               <div className="addItems" key={elem.id}>
                               <h3 className="data">{elem.data}</h3>
                               <i className="fas fa-trash" id="del" title="DeleteItem" onClick={()=>dispatch(deleteToDo(elem.id) )}></i>
                               </div>
                                )
                           })     
                        }
                    </div> 
                    
                    <div className="remove">
                        <button className="clear" onClick={()=>dispatch(removeToDo())}><span className="check">Clear List</span></button>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default Todo