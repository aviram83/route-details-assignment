import ExpandingRow from './components/ExpandingRow/ExpandingRow';
import './Table.css';

const rowTitle = {
    urlParams: "URL Parameters",
    queryParams: "Query Parameters",
    headers: "Headers",
    body: "Body"
};

const Table = ({ data }) => {
    return (
        <div className="table">
            <div className="header">
                <div className="col">NAME</div>
                <div className="col">PII</div>
                <div className="col">MASKING</div>
                <div className="col">TYPE</div>
            </div>

            <div className="body">
                {
                    Object.keys(data).map(key => (
                        <ExpandingRow key={key} title={rowTitle[key]} items={data[key]}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Table;