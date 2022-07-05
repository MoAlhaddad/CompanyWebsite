import "./styles";
import React, { useState, useEffect } from "react";

export default function Rates(){
    
    const targetBudget = Number(window.localStorage.getItem("targetBudget") || 2000);
    const currentBudget = Number(window.localStorage.getItem("currentBudget") || 4000);
    const maintanceBudget = Number(window.localStorage.getItem("maintanceBudget") || 100);
    const ContributionFrequency = Number(window.localStorage.getItem("contributionFrequency") || "Monthly");
    const projectDuration = Number(window.localStorage.getItem("projectDuration") || 2);

    const [projDuration, setProjDuration] = useState(projectDuration);
    const [targBudget, setTargBudget] = useState(targetBudget);
    const [curBudget, setCurBudget] = useState(currentBudget);
    const [mainBudget, setMainBudget] = useState(maintanceBudget);
    const [contributeFrequency, setContributeFrequency] = useState(ContributionFrequency);

    const formater = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    })

    useEffect(() => {
        window.localStorage.setItem("targetBudget", targBudget);
        window.localStorage.setItem("currentBudget", curBudget);
        window.localStorage.setItem("maintanceBudget", mainBudget);
        window.localStorage.setItem("contributionFrequency", contributeFrequency);
        window.localStorage.setItem("projectDuration", projDuration);
        
        let Estimate = ( curBudget + contributeFrequency + (mainBudget * projDuration));

        let updatedCost = (targetBudget + Estimate) / 2;

        setTargBudget(updatedCost);


    },  [targetBudget, currentBudget, ContributionFrequency, projectDuration, mainBudget])
    return(
        <div className="rates">
            <h1>Novigo Service Calculator </h1>
            <h2>Get An Estimate for Your Vison!{projectDuration}</h2>
            <div>Target Product Budget: {formater.format(targetBudget)}</div>
            <form className="budget-form">
                <label>
                    Current Budget
                    <input type="number" value={currentBudget} onChange={(e) => setCurBudget(parseInt(e.target.value) || 0)}/>
                </label>
                <label>
                    Maintance Budget
                    <input type="number" value={maintanceBudget} onChange={(e)=>  setMainBudget(parseInt(e.target.value) || 0)}/>                   
                </label>
                  <label>
                    Contribution Frequency
                    <input type="number" value={ContributionFrequency} onChange={(e)=>  setContributeFrequency(parseInt(e.target.value) || 0)}/> 
                    </label>
                    <label>
                        <input type="number" value={projectDuration} onChange={(e) => setProjDuration(parseInt(e.target.value) || 0)} />
                     </label>   
                    <select>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                  
            </form>
        </div>
    )

}