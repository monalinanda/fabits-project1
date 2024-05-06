import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import OnBoardingSecondpage from "./OnBoardingSecondpage";
import { useEffect, useState } from "react";
import OnBoardingFirstPage from "./OnBoardingFirstPage";
import VerificationDetails from "./VerificationDetails";
import car from "../assets/car.png";
import highway from "../assets/highway.jpeg"

type ChildData = {
  stopAnimation: boolean;
  showDiv: boolean;
  showLoadingScreen: boolean;
};
const Home = () => {
  const [isSelected, setIsSelected] = useState<number>(1);
  const [stopped, setStopped] = useState(false);
  const [showNewDiv, setShowNewDiv] = useState(false);
  const [position, setPosition] = useState("car");
  const totalPage = 2;

  const handleClick = (data: number) => {
    setIsSelected(data);
  };

  const handleAnimation = (data: ChildData) => {
    setStopped(data.stopAnimation);
    setShowNewDiv(data.showDiv);
  };

  // Move the car every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Move the car to the right by updating its position
      setPosition("");
    }, 8000);
    setPosition("car");
    return () => clearInterval(interval);
  }, [position]);

  const RenderComponent = ({ index }: { index: any }) => {
    switch (index) {
      case 1:
        return <OnBoardingFirstPage onDataChange={handleClick} />;
        break;
      case 2:
        return (
          stopped == false && (
            <OnBoardingSecondpage
              onDataChange={handleClick}
              animationData={handleAnimation}
            />
          )
        );
      case 3:
        return showNewDiv == true && <VerificationDetails />;
      default:
        break;
    }
  };

  return (
    <div
      className={
        "realtive w-[360px] h-[800px] m-auto border border-black flex justify-center items-center"
      }
    >
      <Sheet>
        <SheetTrigger className={"w-[100px] h-16 rounded-md bg-lime-500"}>
          Open
        </SheetTrigger>
        <SheetContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          side={"bottom"}
          className={` w-[360px]  m-auto p-0 rounded-tr-3xl rounded-tl-3xl bg-gradient-to-t from-[#FFFFDB] from-10%  to-[#E6E66A] to-90% ${
            showNewDiv === true ? " verification " : ""
          } h-5/6`}
        >
          <SheetHeader
            className={
              ` p-0  h-1/2  bg-no-repeat bg-bottom rounded-tr-3xl rounded-tl-3xl relative `
            }
            style={{backgroundImage: `url(${highway})`}}
          >
            {!showNewDiv ? (
              <SheetTitle>
                {stopped ? (
                  <div className="text-[#1D3B7A] flex flex-col items-start p-5">
                    <h4 className={"text-2xl  font-semibold "}>
                      Fetching your PAN Details
                    </h4>
                    <p className={"text-sm font-normal"}>
                      Getting your PAN details by your chosen method
                    </p>
                  </div>
                ) : (
                  <div className="text-[#1D3B7A] flex flex-col items-start p-5">
                    <h4 className={"text-2xl font-semibold "}>
                      Get started with Fabits
                    </h4>
                    <p className={"text-sm font-normal"}>
                      Answer a few questions to begin onboarding
                    </p>
                  </div>
                )}
              </SheetTitle>
            ) : (
              ""
            )}
            <div
              className={`${stopped === false ? position : "stopCar"} ${
                showNewDiv ? "hidden" : "block"
              } `}
              style={{
                width: "400px",
                left: `${stopped ? "50%" : "0px"}`,
                position: "absolute",
                zIndex: "2",
                top: "50%",
              }}
            >
              <img src={car} />
            </div>
          </SheetHeader>

          {/* total page pagination */}
          <p
            className={
              "absolute right-0 bg-black rounded-full px-3 text-white font-light text-sm mt-1"
            }
          >
            {isSelected}/{totalPage}
          </p>

          <RenderComponent index={isSelected} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Home;
