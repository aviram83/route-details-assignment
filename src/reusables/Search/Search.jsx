import { useContext, useRef } from 'react';
import { AppContext } from '../../context/app-context';
import './Search.css';

const Search = () => {
    const checkboxRef = useRef(null);
    const inputRef = useRef(null);
    const context = useContext(AppContext)

    const handleApplyClick = () => {
        context.methods.onApply(inputRef.current.value, checkboxRef.current.checked);
    };

    const handleResetClick = () => {
        checkboxRef.current.checked = false;
        inputRef.current.value = '';
        handleApplyClick();
    };

    return (
        <div className="search">
            <div className="search-content">
                <span className="material-symbols-outlined">
                    search
                </span>
                <input className="input-field" placeholder="Search" ref={inputRef} />
                <input type="checkbox" ref={checkboxRef} />
                <span className="text">Show PII only</span>
                <button className="apply-button" onClick={handleApplyClick}>Apply</button>
            </div>
            <div className="search-reset">
                <button className="reset-button" onClick={handleResetClick}>Reset Filter</button>
            </div>
        </div>

    )
}

export default Search;