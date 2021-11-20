import React from "react";

export default (props) => {
    return (
        <div className={"container-fluid"}
             style={{
                 backgroundColor: "white",
                 color: "black",
                 borderRadius: 10,
                 textAlign: "left",
                 marginBottom: 10,
                 padding: 10,
                 minHeight: 100
             }}>
            <small> Created By : <i> {props.user}</i></small>
            <h5 style={{marginTop: 5}}>{props.title.toUpperCase()}</h5>
            <p>{props.content}</p>

        </div>

    );
};
