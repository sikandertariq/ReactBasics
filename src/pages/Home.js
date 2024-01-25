import { useContext } from "react";
import { AppContext } from "../App";
export const Home = () => {
    const {value}= useContext(AppContext);
    
    return <h1>I'm in the Home component and the value is: {value}</h1>;
};
