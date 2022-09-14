import { useContext } from "react";
import { AppContext } from "../../../../context/app-context";
import Search from "../../../../reusables/Search/Search";
import Table from "../../../../reusables/Table/Table";

import './Content.css';

const Content = () => {
    const {data: { filteredData }} = useContext(AppContext);

    return (
        <div className="Content">
            <Search />
            <Table data={filteredData} />
        </div>
    )
}

export default Content;