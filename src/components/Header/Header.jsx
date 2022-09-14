import React from "react";
import './Header.css';
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";


const Header = ({ data }) => {
    const { method, api, path } = data;

    return (
        <div className="header">
            <div className="title">
                <span className="method">{method.toUpperCase()}</span>
                <span className="path">{path}</span>
            </div>
            <div className="content">
                <Breadcrumbs
                    home="All APIs"
                    apiName={api}
                    path={path}
                />
            </div>
        </div>
    );
}

export default Header;