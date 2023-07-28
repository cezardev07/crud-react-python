import { useEffect, useState } from "react"
import { Container, Wrapper } from "./style"
import { PopUp } from "../components/pop-up"

export const Home = () => {
    const [tasks ,setTasks] = useState([])
    const [value, setValue] = useState<string>("")
    const [idUpdate, setIdUpdate] = useState<number>()

    const [openPopUp, setOpenPopUp] = useState(false)

    const api = "http://127.0.0.1:5000"

    const get = async () => {
        const res = await fetch(api)
        const data = await res.json()

        setTasks(data.dados)
        return "success";
    }

    useEffect(() => {
        get()
    }, [])

    const handleCreateTask = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if(value){
            const newTask = {
                id: tasks.length += 1,
                task: value
            }
    
            fetch(api,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(newTask)
            })
            .then(() => get())
            setValue("")
        }
    }

    const deleteTask = (id : number) => {
        fetch(api,{
            method:"delete",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify({
                id
            })
        })
        .then(() => get())
    }

    const updateTask = (id : number) => {
        setIdUpdate(id)
        setOpenPopUp(prev => !prev)
    }

   

    return(
        <Container>
            <Wrapper>
                <form onSubmit={handleCreateTask} className="heading">
                    <textarea onChange={({ target }) => setValue(target.value)} value={value} placeholder="Create your task" required/>
                    <button type="submit">to add</button>
                </form>
                <hr />
                <div className="tasks">

                    {
                        tasks.map(({id, task}, index) => {
                            return(
                                <div key={index} className="task">
                                    <p>{task}</p>
                                    <div className="buttons-wrapper">
                                        <button onClick={() => updateTask(id)} className="btn-editar">editar</button>
                                        <button onClick={() => deleteTask(id)} className="btn-apagar">apagar</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <PopUp open={{
                    openPopUp,
                    setOpenPopUp,
                    idUpdate,
                    setIdUpdate,
                    get
                }}/>
            </Wrapper>
        </Container>
    )
}