import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useStateContext } from "../utils/StateContext";

const tradingExp = [
  {
    id: "1",
    type: "None",
    experience: "< 1Y",
  },
  {
    id: "2",
    type: "Begineer",
    experience: "1Y - 3Y",
  },
  {
    id: "3",
    type: "Mid",
    experience: "3Y - 5Y",
  },
  {
    id: "4",
    type: "Pro",
    experience: "> 5Y",
  },
];
type ChildComponentProps = {
  onDataChange: (data: number) => void;
};

const OnBoardingFirstPage: React.FC<ChildComponentProps> = ({
  onDataChange,
}) => {
  const { SetSelectedExperience, selectedxperience } = useStateContext();

  return (
    <div className="grid gap-12 p-4 bg-gradient-to-t from-[#FFFFDB] from-10%  to-[#E6E66A] to-90%">
      <h4 className={"text-xl   font-semibold"}>
        How much trading experience do you have ?
      </h4>
      <div className={"flex w-full justify-around items-center"}>
        {tradingExp.map((item) => {
          return (
            <Card
              key={item.id}
              className={`  bg-transparent ${
                selectedxperience === item.id &&
                "border-2 border-lime-700 bg-lime-200"
              }  text-center `}
              onClick={() => {
                SetSelectedExperience(item.id);
              }}
            >
              <CardHeader className={"p-2 "}>
                <CardTitle className={"p-2  text-base font-normal"}>
                  {item.type}
                </CardTitle>
              </CardHeader>
              <CardContent className={"p-0 text-xs font-normal"}>
                <p>{item.experience}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className={"flex w-full justify-evenly"}>
        <button
          className={
            "flex justify-between items-center bg-lime-600 text-white p-4 rounded-xl border-none w-[328px] h-12"
          }
          onClick={() => onDataChange(2)}
        >
          Next
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default OnBoardingFirstPage;
