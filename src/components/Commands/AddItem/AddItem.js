import { useState } from "react";

import Portal from "@/components/HOC/Portal";
import Modal from "@/components/UI/Modal/Modal";

import { BsPlus } from "react-icons/bs";
import AddItemSwitcher from "../AddItemSwitcher/AddItemSwitcher";

const addItem = () => {
    const [isActive, setIsActive] = useState(false);
    const [itemToShow, setItemToShow] = useState(null);
    console.log(itemToShow);
    return (
        <>
            <div
                className="fd-commands__additem"
                onClick={() => setIsActive(!isActive)}
            >
                <BsPlus />
            </div>
            {isActive && (
                <Portal>
                    <Modal closeModal={() => setIsActive(!isActive)}>
                        <AddItemSwitcher setItemToShow={setItemToShow} />
                        {itemToShow === "Progetto" && <h1>Progetto</h1>}
                        {itemToShow === "Utente" && <h1>Utente</h1>}
                        {itemToShow === "Task" && <h1>Task</h1>}
                        {/* AGGIUNGERE I 3 MODULI CHE SI VISUALIZZANO IN BASE ALLA SELEZIONE DI ADDITEMSWITCHER */}
                    </Modal>
                </Portal>
            )}
        </>
    );
};

export default addItem;
