import React from 'react';

export const LogEntry = props => {
    const NewGoal = props => {
        let [enteredText, setEnteredText] = useState("");
        //let enteredText = "";
        const addGoalHandler = event => {
            event.preventDefault(); //prevents browser default to send submission to server
            const newGoal = {
                id: Math.random().toString(),
                text: enteredText
            };
    
            setEnteredText("")
    
            props.onAddGoal(newGoal);
    
        };

    const textChangeHandler = event =>{
            setEnteredText(event.target.value);
    };


    const [prevCalculations, setPrevCalculation] = useState([
        {id: "", text: ""}
      ]);

      const addNewCalculation = (event, newCalculation) => {
        event.preventDefault(); //prevents browser default to send submission to server
        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        setEnteredText("")
        props.onAddGoal(newGoal);

        setPrevCalculation(prevCalculations => prevCalculations.concat(newCalculation));
      };
    <div className = "log">

    </div>
}