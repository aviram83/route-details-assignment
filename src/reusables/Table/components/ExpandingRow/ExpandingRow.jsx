import { useState } from "react";
import Item from "./components/Item/Item";

import './ExpandingRow.css';

const ExpandingRow = ({ title, items }) => {
    const [isExpand, setIsExpand] = useState(false);

    const toggleExpand = () => {
        setIsExpand(!isExpand);
    }

    return (
        <div className="expanding-row">
            <button className="expand-button" onClick={toggleExpand}>
                {
                    isExpand ?
                        <span className="expanding-icon material-symbols-outlined">arrow_drop_down</span>
                        :
                        <span className="expanding-icon material-symbols-outlined">arrow_right</span>
                }
                <span className="title">{title}</span>
            </button>
            {isExpand &&
                <ul className="items-list">
                    {
                        items.map(({ name, pii, masked, type }) => (
                            <Item
                                key={name}
                                title={name}
                                pii={pii}
                                masked={masked}
                                type={type}
                            />
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default ExpandingRow;