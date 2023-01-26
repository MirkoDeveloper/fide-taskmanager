import { BsList } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";

const LayoutSwitcher = (props) => {
    return (
        <div className="fd-layout-switcher fd-shadow">
            <label
                onClick={() => props.setGridLayout(1)}
                className={props.gridLayout === 1 ? "active" : ""}
            >
                <BsList />
                <input type="radio" name="layout" value="list" />
            </label>
            <label
                onClick={() => props.setGridLayout(2)}
                className={props.gridLayout === 2 ? "active" : ""}
            >
                <BsGrid />
                <input type="radio" name="layout" value="grid" />
            </label>
        </div>
    );
};

export default LayoutSwitcher;
