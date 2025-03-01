import {
  MapPin,
  CalendarSearch,
  CalendarPlus2,
  MessageSquareText,
  Share2,
} from "lucide-react";

interface ListingsCardsProps {
  logo?: string;
  location?: string;
  title?: string;
  link?: string;
  slots?: number;
}

export default function ListingsCards({
  logo = "",
  location = "",
  title = "",
  link = "",
  slots = 0,
}: ListingsCardsProps) {
  return (
    <>
      <div className="w-[80%] md:w-full mb-6 px-2 py-4 flex flex-col md:flex-row justify-between bg-white shadow-md shadow-gray-300 rounded-3xl">
        <div className="h-auto flex justify-around md:justify-center items-center">
          <div className="px-6 py-4 mx-4 bg-blue-400 rounded-full">
            <span className="text-2xl md:text-4xl">{logo}</span>
          </div>

          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-center items-center mb-1">
              <MapPin size={15} color="#0071E3" className="mr-2" />
              <span className="text-xs text-[#0071E3]">{location}</span>
            </div>
            <p className="font-medium md:text-lg">{title}</p>
            <span className="text-xs md:text-sm py-1 text-gray-400">
              {link}
            </span>
          </div>
        </div>

        <div className="h-auto mt-4 md:mt-0 px-2 flex flex-col justify-between items-center">
          <div className="flex justify-center items-center">
            <CalendarSearch
              size={18}
              color={`${slots < 10 ? "red" : "black"}`}
              className="mx-1"
            />
            <span className={`text-sm ${slots < 10 ? "text-red-400" : ""}`}>
              {slots} available slots
            </span>
          </div>

          <div className="w-full mt-4 md:mt-0 flex justify-center items-center">
            <button className="flex justify-center items-center mx-2 bg-[#2222220D] p-2 rounded-xl active:scale-[0.90] ease transition-all duration-300 cursor-pointer">
              <CalendarPlus2 size={20} />
            </button>
            <button className="flex justify-center items-center mx-2 bg-[#2222220D] p-2 rounded-xl active:scale-[0.90] ease transition-all duration-300 cursor-pointer">
              <MessageSquareText size={20} />
            </button>
            <button className="flex justify-center items-center mx-2 bg-black p-2 rounded-xl active:scale-[0.90] ease transition-all duration-300 cursor-pointer">
              <Share2 size={20} color="white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
