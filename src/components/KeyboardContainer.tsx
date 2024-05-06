import { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<any>;
  showKeyBoard: (data: any) => void;
}

const KeyboardContainer: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
  showKeyBoard,
}) => {
  const [layoutName, setLayoutName] = useState("default");


  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
    if (button === "{enter}") {
      showKeyBoard(false);
    }
  };

 
  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default KeyboardContainer;
