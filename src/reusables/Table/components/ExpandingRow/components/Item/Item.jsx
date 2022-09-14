import { useState } from 'react';

import './Item.css';

const Item = ({ title, pii, masked, type }) => {
    const [isPii, setIsPii] = useState(pii);
    const [isMasked, setIsMasked] = useState(masked);

    return (
        <div className="item">
            <div className='col'>
                <span className="item-title">{title}</span>
            </div>
            <div className='col'>
                <button
                    className={`item-pii label ${isPii ? 'active' : ''}`}
                    onClick={() => setIsPii(!isPii)}
                >PII</button>
            </div>
            <div className='col'>
                <button
                    className={`item-masked label ${isMasked ? 'active' : ''}`}
                    onClick={() => setIsMasked(!isMasked)}
                >MASKED</button>
            </div>
            <div className='col'>
                <div className="label item-type">{type.toUpperCase()}</div>
            </div>
        </div >
    )
}

export default Item;