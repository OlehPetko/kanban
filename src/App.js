import React, {useState} from 'react'
import Panel from "./Panel";
import faker from 'faker'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



const statuses = ['todo', 'progress', 'review', 'done']
const initialTasks = [
    {id: Math.random(), name: faker.random.words(), status: statuses[0], priority: 1},
    {id: Math.random(), name: faker.random.words(), status: statuses[1], priority: 2},
    {id: Math.random(), name: faker.random.words(), status: statuses[2], priority: 2},
    {id: Math.random(), name: faker.random.words(), status: statuses[3], priority: 1},
]

function App() {

    const [task, setTask] = useState(initialTasks)
    const previosStatus = (status) => {
        return statuses[statuses.indexOf(status) - 1]
    }
    const nextStatus = (status) => {
        return statuses[statuses.indexOf(status) + 1]
    }

    const left = (id) => {
        const updateTask = task.map(el => el.id === id ? {...el, status: previosStatus(el.status)} : el)
        setTask(updateTask)
    }
    const right = (id) => {
        const updateTask = task.map(el => el.id === id ? {...el, status: nextStatus(el.status)} : el)
        setTask(updateTask)

    }
    return (

        <div className="container">
            <button type="button" className="btn btn-outline-secondary">Add new card</button>
            <div className="row align-items-start">
                {statuses.map((el, index) =>
                    <div key={el} className="col">
                        <Panel task={task} el={el} left={left} right={right}/>
                    </div>
                )}


            </div>
        </div>
    );
}

export default App;
