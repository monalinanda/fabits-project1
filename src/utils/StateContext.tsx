import React, { ChangeEvent, createContext, useContext, useRef, useState } from "react";

type ContainerProps = {
    children : React.ReactNode ; 
}


const Context = createContext<any>(undefined);

export const StateContext = (props : ContainerProps)=>{
    const [selectedxperience , SetSelectedExperience] = useState<string>("");
    const [selectedVerificationMode  , setSelectedVerificationMode]= useState();
    const [userPanNumber ,setUserPanNumber] = useState<string>("");
    const[showKeyBoard , setShowKeyBoard] = useState(false);
    const [input, setInput] = useState("");
     const [isValid, setIsValid] = useState(true);
  
    const keyboard = useRef("");

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
      const input = event.target.value;
      setInput(input);
      setIsValid(validatePan(input));
      keyboard.current.setInput(input);
      setUserPanNumber(input);
    };
   
   
    const validatePan = (input: string) => {
      // Regular expression to validate PAN number
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
      return panRegex.test(input);
    };
    return (
        <Context.Provider
          value={{
            selectedxperience,
            selectedVerificationMode,
            userPanNumber,
            showKeyBoard,
            setInput,
            input,
            isValid,
            SetSelectedExperience,
            setSelectedVerificationMode,
            setUserPanNumber,
            setShowKeyBoard,
            onChangeInput,
            setIsValid,
            keyboard
          }}
        >
          {props.children}
        </Context.Provider>
      );
    };
    
    export const useStateContext = () => useContext(Context);