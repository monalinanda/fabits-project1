import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import KeyboardContainer from "./KeyboardContainer";
import { useStateContext } from "../utils/StateContext";

type ChildData = {
  stopAnimation: boolean;
  showDiv: boolean;
  showLoadingScreen: boolean;
};
type ChildComponentProps = {
  onDataChange: (data: number) => void;
  animationData: (data: ChildData) => void;
};

const OnBoardingSecondpage: React.FC<ChildComponentProps> = ({
  onDataChange,
  animationData,
}) => {
  const [stopped, setStopped] = useState(false);
  const [showNewDiv, setShowNewDiv] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  const {
    userPanNumber,
    selectedVerificationMode,
    setSelectedVerificationMode,
    setShowKeyBoard,
    showKeyBoard,
    isValid,
    input,
    setInput,
    onChangeInput,
    keyboard,
  } = useStateContext();

  // car stop

  const handleStopClick = () => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    setStopped(stopped);
    setShowLoading(showLoading);
    animationData({
      stopAnimation: true,
      showDiv: false,
      showLoadingScreen: true,
    });
    if (!stopped) {
      timeout = setTimeout(() => {
        setShowNewDiv(showNewDiv);
        onDataChange(3);
        animationData({
          stopAnimation: false,
          showDiv: true,
          showLoadingScreen: true,
        });
      }, 8000);
    }
    return () => clearTimeout(timeout);
  };

  const handleFoucsedKeyboard = () => {
    setShowKeyBoard(true);
  };

  const toggleKeyboard = (
    data: boolean | ((prevState: boolean) => boolean)
  ) => {
    setShowKeyBoard(data);
  };
  return (
    <div className="grid gap-7 p-4 bg-gradient-to-t from-[#FFFFDB] from-10%  to-[#E6E66A] to-90%">
      <h4 className={"text-xl   font-semibold"}>
        Please enter your PAN Details to complete verification
      </h4>
      <Card className={"  bg-transparen border-none"}>
        <CardContent className="p-0">
          <p className={"text-sm font-light"}> Verification Mode</p>
          <div className={"flex justify-around "}>
            <button
              className={`p-3 w-40  text-base bg-transparent ${
                selectedVerificationMode === "Manual" &&
                "border-2 border-lime-700 bg-lime-200 rounded-2xl"
              }  `}
              onClick={() => setSelectedVerificationMode("Manual")}
            >
              Manual
            </button>

            <button
              className={`p-3 w-40  text-base bg-transparent ${
                selectedVerificationMode === "Automatic" &&
                "border-2 border-lime-700 bg-lime-200 rounded-2xl"
              } `}
              onClick={() => setSelectedVerificationMode("Automatic")}
            >
              Automatic
            </button>
          </div>
          <div className={"flex justify-around  mt-2"}>
            <button
              className={
                "p-3 w-40  text-sm bg-transparent hover:border-2 hover:border-lime-700 hover:bg-lime-200 hover: rounded-2xl"
              }
            >
              PAN Card Number
            </button>
            <div
              className={`${showKeyBoard ? "bottom-0 w-full absolute" : ""}`}
            >
              <input
                className={`p-3 ${
                  showKeyBoard
                    ? "w-full border bg-slate-50"
                    : "w-40  text-base bg-transparent hover:border-2 hover:border-lime-700 hover:bg-lime-200 rounded-xl focus:border-lime-700"
                }`}
                value={input}
                placeholder={"DKWPAXXXXM"}
                onChange={(e) => onChangeInput(e)}
                onFocusCapture={handleFoucsedKeyboard}
              />
              {!isValid && <p style={{ color: "red" }}>Invalid PAN Number</p>}
              {showKeyBoard && (
                <KeyboardContainer
                  keyboardRef={keyboard}
                  onChange={setInput}
                  showKeyBoard={toggleKeyboard}
                />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className={"flex w-full justify-evenly items-center"}>
        <button
          className={
            " bg-lime-200 text-lime-600  rounded-xl border-none  w-14 h-12 "
          }
          onClick={() => onDataChange(1)}
        >
          <ChevronLeftIcon className="h-4 w-4 m-auto" />
        </button>
        <button
          className={`flex justify-between items-center bg-lime-600 text-white p-4 rounded-xl border-none w-[250px] h-12 ${
            userPanNumber == ""
              ? "disabled: pointer-events-none bg-opacity-50"
              : " enabled:pointer-events-auto"
          }`}
          onClick={!stopped ? handleStopClick : undefined}
        >
          Next
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default OnBoardingSecondpage;
