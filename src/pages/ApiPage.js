import { useState,useContext } from "react";
import Axios from "axios";
import { AppContext } from "../App";
import { ChangeVal } from "../ChangeVal";

export const ApiPage = () => {
    const [output, setOutput] = useState(null);
    // const {value}= useContext(AppContext);

  
    const fetchPartyData = () => {
      Axios.get("https://excuser-three.vercel.app/v1/excuse/party/")
        .then((res) => {
          console.log("Party data:", res.data);
          setOutput(res.data[0]);
        })
        .catch((error) => {
          console.error("Error fetching party data:", error);
        });
    };
  
    const fetchOfficeData = () => {
      Axios.get("https://excuser-three.vercel.app/v1/excuse/office/")
        .then((res) => {
          setOutput(res.data[0]);
        })
        .catch((error) => {
          console.error("Error fetching office data:", error);
        });
    };
  
    const fetchFamilyData = () => {
      Axios.get("https://excuser-three.vercel.app/v1/excuse/family/")
        .then((res) => {
          setOutput(res.data[0]);
        })
        .catch((error) => {
          console.error("Error fetching family data:", error);
        });
    };
  
    return (
      <>
        <ChangeVal />
        <button onClick={fetchPartyData}>Party</button>
        <button onClick={fetchOfficeData}>Office</button>
        <button onClick={fetchFamilyData}>Family</button>
        <h1>Excuse: {output?.excuse} </h1>
        <h1>Category: {output?.category} </h1>
        </>
    );
    };

