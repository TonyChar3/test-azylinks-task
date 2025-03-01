"use client";
import { SlidersHorizontal } from "lucide-react";
import { listings_array } from "@/links_listings";
import ListingsCards from "@/components/ListingsCards";
import Header from "@/components/layouts/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full pt-4 flex flex-col items-center border">
          <div className="w-[90%] md:w-[70%] lg:w-[40%] p-1 flex justify-between items-center">
            <p className="font-bold text-md md:text-lg">
              57 Annoucements Available
            </p>

            <button className="flex justify-center items-center py-2 px-5 rounded-2xl bg-[#2222220D]">
              <SlidersHorizontal color="black" size={16} className="mr-2" />
              <span className="text-sm font-bold">Filter</span>
            </button>
          </div>

          <div className="w-full max-h-[90%] md:w-[70%] lg:w-[40%] mt-4 p-1 flex flex-col overflow-y-auto">
            <div className="w-full pb-10 flex flex-col items-center">
              {/* Link cards */}
              {listings_array.map((listing, index) => (
                <ListingsCards
                  key={index}
                  logo={listing.logo}
                  location={listing.location}
                  title={listing.title}
                  link={listing.link}
                  slots={listing.available_slots}
                />
              ))}
              {/* Spacer */}
              <div className="h-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
