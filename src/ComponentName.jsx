import "./ComponentNameStyles.css";
import React from "react";
import { useState } from "react";



//functional component - must be Capitalised
function ComponentName(props){
    return(
        <div onClick={props.onAttempt} className="btns">
           <h3></h3>{props.label}
        </div>
    )
}
export default ComponentName
