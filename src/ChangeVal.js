import React, { useState,useContext } from 'react';
import { AppContext } from "./App";

export const ChangeVal = (props) => {
    const {setValue}= useContext(AppContext);
    const [inputValue, setInputValue] = useState("");

   

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => setValue(inputValue)}>Change Value</button>
        </div>
    );
};


