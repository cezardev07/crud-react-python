import { Dispatch, SetStateAction, useState } from "react";
import { Container } from "./style";

interface TypeOpen {
    openPopUp: boolean;
    setOpenPopUp: Dispatch<SetStateAction<boolean>>;
    idUpdate: number | undefined;
    setIdUpdate: Dispatch<SetStateAction<number | undefined>>;
    get: () => Promise<string>;
}

export const PopUp = ({ open }: { open: TypeOpen }) => {
    const [value, setValue] = useState<string>("")

    const handleUpdateTask = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if(value){
            fetch("http://127.0.0.1:5000",{
                method:"PUT",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify({id: open.idUpdate ,task : value})
            })
            .then(() => open.get())

            open.setOpenPopUp((prev: boolean) => !prev);

            setValue("")
        }
    };
    return (
        <Container $viewPopUp={open.openPopUp} className="pop-up">
        <div className="wrapper-pop-up">
            <div className="heading-pop-up">
                <h2>Update Task</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatibus.</p>
            </div>
            <form onSubmit={handleUpdateTask}>
                <textarea onChange={({ target }) => setValue(target.value)} value={value} placeholder="Change your task" required/>
                <button type="submit">To Add</button>
            </form>
            <button onClick={() => {
                open.setOpenPopUp((prev: boolean) => !prev);
            }} className="fechar">X</button>
        </div>
        </Container>
    );
};