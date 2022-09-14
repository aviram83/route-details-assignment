import './Breadcrumbs.css';

const Breadcrumbs = ({ home, apiName, path }) => {
    return (
        <div className="breadcrumbs">
            <span className="home">{home}</span>
            <span className="seperator material-symbols-outlined">arrow_forward_ios</span>
            <span className="api">{apiName}</span>
            <span className="seperator material-symbols-outlined">arrow_forward_ios</span>
            <span className="path">{path}</span>
        </div>
    );
}

export default Breadcrumbs