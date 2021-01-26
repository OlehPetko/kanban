import React from 'react'
import Task from "./Task";


function Panel(props) {
    return (
        <div className="container">
            {props.el}
            {props.task
                .filter(el => el.status === props.el)
                .map((el) => <Task key={el.id} el={el} left={props.left} right={props.right} /> )}


        </div>


    );
}

export default Panel;
