import React from "react";

export default (props) => {
    let ticketData = props.ticketData
    const ticketHeads = ["Ticket Number", "Ticket Type", "Due Data", "Requester Id", "Submitter Id", "Subject", "Description", "Last Updated"]
    const ticketFields = ["id", "type", "due_at", "requester_id", "submitter_id", "subject", "description", "updated_at"]

    return (
        <div style={{marginBottom: 10, textAling: "center"}}>
            <h1 className="h1" style={{marginTop: 10, marginBottom: 10}}>
                Ticket Details
            </h1> <br/>
                {
                    Object.keys(ticketData).length > 0 ?
                    ticketHeads.map((ele, index) => (
                        <div className={"row mb-3"}>
                            <div className={"col-4"}> {ele}</div>
                            <div className={"col-8 scroll" } style={{maxHeight : 400}}> {ticketData[ticketFields[index]] ? ticketData[ticketFields[index]]  : "-" } </div>
                        </div>
                    ))
                        :
                        <p> <i>Please Double Click Any Row to View More Details</i>  </p>
                }
        </div>
    );
};
