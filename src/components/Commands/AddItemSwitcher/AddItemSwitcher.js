import { useState, useEffect } from "react";

const AddItemSwitcher = (props) => {
    const [moduleToLoad, setModuleToLoad] = useState("Progetto");

    useEffect(() => {
        props.setItemToShow(moduleToLoad);
    }, [moduleToLoad]);

    return (
        <div className="fd-layout-switcher fd-shadow">
            Cosa vuoi aggiungere?
            <label
                onClick={() => setModuleToLoad("Progetto")}
                className={moduleToLoad === "Progetto" ? "active" : ""}
            >
                Progetto
                <input type="radio" name="additem" value="project" />
            </label>
            <label
                onClick={() => setModuleToLoad("Utente")}
                className={moduleToLoad === "Utente" ? "active" : ""}
            >
                Utente
                <input type="radio" name="additem" value="user" />
            </label>
            <label
                onClick={() => setModuleToLoad("Task")}
                className={moduleToLoad === "Task" ? "active" : ""}
            >
                Task
                <input type="radio" name="additem" value="task" />
            </label>
        </div>
    );
};

export default AddItemSwitcher;
