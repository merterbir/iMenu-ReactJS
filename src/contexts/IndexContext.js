import React, { useState, createContext } from "react";
export const IndexContext = createContext();

export const IndexProvider = (props) => {

    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    

   
    return (
        <IndexContext.Provider value={[UserName, setUserName,Password, setPassword]}>
            {props.children}
        </IndexContext.Provider>

    );

};