"use client";

import { FaLocationArrow } from "react-icons/fa6";

import {AutoScrollImages} from "./ui/AutoScroll"


import { travels } from "@/data";
import { PinContainer } from "./ui/3d-pin";


const Travel1 = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        My travel {" "}
        <span className="text-purple">experiences</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {travels.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title=""
              href={item.link}
            >
              <AutoScrollImages images={item.imgs}/>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travel1;