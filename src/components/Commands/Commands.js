import LayoutSwitcher from "./LayoutSwitcher/LayoutSwitcher";
import AddProject from "./AddProject/AddProject";
import { useState } from "react";

const Commands = () => {
    const [gridLayout, setGridLayout] = useState(1);
    return (
        <div className="fd-commands">
            <div className="fd-commands__left">
                <LayoutSwitcher
                    setGridLayout={setGridLayout}
                    gridLayout={gridLayout}
                />
            </div>
            <div className="fd-commands__right">
                <AddProject />
            </div>
        </div>
    );
};

export default Commands;
