import "./ComponentNameStyles.css";
import React from "react";
import { useState } from "react";



//functional component - must be Capitalised
function ComponentName({onAttempt, label}) {
    return(
        
        <div onClick={onAttempt} className="btns">
            {label}
    
        </div>
    )
}
export default ComponentName
