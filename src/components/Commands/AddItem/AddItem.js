import { useState } from "react";

import Portal from "@/components/HOC/Portal";
import Modal from "@/components/UI/Modal/Modal";

import { BsPlus } from "react-icons/bs";
import AddItemSwitcher from "../AddItemSwitcher/AddItemSwitcher";
import AddProject from "@/components/Project/AddProject/AddProject";
import AddTask from "@/components/Task/AddTask/AddTask";
import AddAccount from "@/components/Account/AddAccount/AddAccount";

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
                        <div className="fd-modal__head">
                            <AddItemSwitcher setItemToShow={setItemToShow} />
                        </div>
                        <div className="fd-modal__body">
                            {itemToShow === "Progetto" && <AddProject />}
                            {itemToShow === "Utente" && <AddAccount />}
                            {itemToShow === "Task" && <AddTask />}
                            {/* AGGIUNGERE I 3 MODULI CHE SI VISUALIZZANO IN BASE ALLA SELEZIONE DI ADDITEMSWITCHER */}
                        </div>
                    </Modal>
                </Portal>
            )}
        </>
    );
};

export default addItem;
