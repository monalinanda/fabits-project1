import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useStateContext } from "../utils/StateContext";
import address from "../assets/address.png";
import authentication from "../assets/authentication.png";
import user from "../assets/user.png";

const verifydetails = [
  {
    id: 1,
    featchedVia: "NSDL",
    panNumber: "CMRPMXXXXF",
    deatils: "ASHAR RAI  MUJHEEB",
    icon: user,
    lastUpdated: "24/04/2024",
  },
  {
    id: 2,
    featchedVia: "Digio",
    title: "Address",
    deatils: "Aadhaar",
    icon: authentication,
    lastUpdated: "",
    dob: "18/10/1994",
  },
  {
    id: 3,
    featchedVia: "Digio",
    title: "Address",
    deatils: "16/2 , 8 jat regiment , c/o 56 APO",
    icon: address,
    lastUpdated: "",
    addressType: "Coresspondence",
  },
];

const VerificationDetails = ()=>{
  const { userPanNumber } = useStateContext();

  return (
    <div className="grid gap-4 p-4  absolute top-0 overflow-scroll  rounded-t-3xl backdrop-blur  h-full w-full transition-opacity duration-500">
      <div className="text-[#1D3B7A] flex flex-col items-start p-5">
        <h4 className={"text-2xl  font-semibold "}>Verify your Details</h4>
        <p className={"text-sm font-normal"}>Adhaar link found</p>
      </div>

      {verifydetails.map((item) => {
        return (
          <Link
            to="https://www.linkedin.com/in/monali-nanda-466408155/"
            target="_blank"
          >
            <Card className={"bg-[#FFFFFF] border-none w-[328px] h-40 m-auto"}>
              <CardContent className={"p-2  flex gap-5 flex-col"}>
                <div className={"flex justify-around "}>
                  <div
                    className={
                      "w-16 h-16 bg-[#445689] rounded-full flex items-center justify-center"
                    }
                  >
                    <img src={item.icon} className={" w-10 h-10"} />
                  </div>
                  <p className={"flex flex-col "}>
                    <span className={"font-semibold text-xl text-[#1D3B7A]"}>
                      {item.panNumber ? userPanNumber : item.title}
                    </span>
                    <span className={"font-medium text-sm text-[#5E78AE]"}>
                      {item.deatils}
                    </span>
                  </p>
                </div>

                <div className={"flex justify-around "}>
                  <p className={"flex flex-col"}>
                    <span className={"text-xs font-medium text-[#5E78AE]"}>
                      Fetched Via
                    </span>
                    <span className={"font-semibold text-base text-[#1D3B7A]"}>
                      {item.featchedVia}
                    </span>
                  </p>
                  {item.lastUpdated && (
                    <p className={"flex flex-col"}>
                      <span className={"text-xs font-medium text-[#5E78AE]"}>
                        Last Updated
                      </span>
                      <span
                        className={"font-semibold text-base text-[#1D3B7A]"}
                      >
                        {item.lastUpdated}
                      </span>
                    </p>
                  )}
                  {item.dob && (
                    <p className={"flex flex-col"}>
                      <span className={"text-xs font-medium text-[#5E78AE]"}>
                        Date of Birth
                      </span>
                      <span
                        className={"font-semibold text-base text-[#1D3B7A]"}
                      >
                        {item.dob}
                      </span>
                    </p>
                  )}
                  {item.addressType && (
                    <p className={"flex flex-col"}>
                      <span className={"text-xs font-medium text-[#5E78AE]"}>
                        Address Type
                      </span>
                      <span
                        className={"font-semibold text-base text-[#1D3B7A]"}
                      >
                        {item.addressType}
                      </span>
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default VerificationDetails;
