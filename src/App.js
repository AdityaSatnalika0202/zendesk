import {useForm} from "react-hook-form";
import './App.css';
import {useEffect, useState} from "react";
import Headers from "./Header";
import TicketData from "./TicketData";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

function App() {

    const [data, setData] = useState([])
    const [ticketData , setTicketData] = useState({})

    const valueGetter = params => {
        let colName = params.column.colId
        if (params.data[colName] == null)
            return "-"
        return params.data[colName]
    };

    const rowDoubleClick=(e)=>{
        setTicketData(e.data)
    }

    useEffect(() => {
        fetch('https://eflask-app-zendesk.herokuapp.com/getData')
            .then(response => response.json())
            .then(data => setData(data['tickets']))
            .catch((error) => {
                    console.error('Error:', error);
                    alert(error)
                });
    }, [])

    return (
        <div>
            <div className="row" style={{textAlign: "center"}}>
                <div className={"col"}>
                    <Headers/>
                </div>
            </div>
            <div className="row">
                <div className={"col-8"} >

                    <div className="ag-theme-alpine-dark" style={{ height: "80vh"}}>
                        <AgGridReact
                            pagination={true}
                            onRowDoubleClicked={rowDoubleClick}
                            paginationPageSize={25}
                            rowData={data}>
                            <AgGridColumn field="id" width  = {100} sortable={ true } filter={ true }></AgGridColumn>
                            <AgGridColumn field="priority" valueGetter={valueGetter} width  = {100} sortable={ true } filter={ true }></AgGridColumn>
                            <AgGridColumn field="subject" width  = {400} sortable={ true } filter={ true }></AgGridColumn>
                            <AgGridColumn field="status" sortable={ true } filter={ true }></AgGridColumn>
                            <AgGridColumn field="created_at" sortable={ true } filter={ true }></AgGridColumn>
                            <AgGridColumn field="updated_at" sortable={ true } filter={ true }></AgGridColumn>
                        </AgGridReact>
                    </div>
                </div>
                <div className={"col-4"} style={{border :"solid 1px grey" , borderRadius : "5px"}} >
                    <TicketData ticketData={ticketData} />
                </div>
            </div>
        </div>
    );
}

export default App;
