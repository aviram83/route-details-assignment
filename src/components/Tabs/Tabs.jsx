import { useState, useContext } from "react";
import { AppContext } from "../../context/app-context";
import Panel from "./components/Content/Content";

import './Tabs.css'

const Tabs = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const context = useContext(AppContext);

    const checkActive = (index, className) => activeIndex === index ? className : "";

    const handleTabClick = (index) => {
        const {types} = context.consts;
        setActiveIndex(index);
        const type = index === 1 ? types.REQUEST : types.RESPONSE;
        context.methods.setPageType(type);
    };

    return (
        <>
            <div className="tabs">
                <button
                    className={`tab ${checkActive(1, "active")}`}
                    onClick={() => handleTabClick(1)}
                >
                    Request
                </button>
                <button
                    className={`tab ${checkActive(2, "active")}`}
                    onClick={() => handleTabClick(2)}
                >
                    Response
                </button>                
            </div>
            <div className="panels">
                <div className={`panel ${checkActive(1, "active")}`}>
                    <Panel />
                </div>
                <div className={`panel ${checkActive(2, "active")}`}>
                    <Panel />
                </div>
            </div>
        </>
    );
};
export default Tabs;