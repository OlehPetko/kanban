import React from 'react';


function Task(props) {
    return (

        <div className="card text-secondary bg-primary mb-3">
            <div className="card-header">{props.el.name}</div>
            <div className="card-body">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    {props.el.status !== 'todo' &&
                    <button onClick={() => props.left(props.el.id)} type="button"
                            className="btn btn-outline-secondary">Left</button>}
                    {props.el.status !== 'done' &&
                    <button onClick={() => props.right(props.el.id)} type="button"
                            className="btn btn-outline-secondary">Right</button>}
                    <button type="button" className="btn btn-outline-secondary">Delete</button>

                </div>
            </div>
        </div>

    );
}

export default Task;
