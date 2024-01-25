import { useContext, useState } from "react";
import { AppContext } from "../App";

export const About = () => {
    const {value}= useContext(AppContext);
    return <h1>I'm in the About component and the value is: {value}</h1>;
};

//export default About;
