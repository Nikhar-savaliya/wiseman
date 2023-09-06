import React from "react";
import { useState } from "react";

export const MyApp = () => {
  // advice state
  const [advice, setAdvice] = useState("");

  // fetch api
  async function getAdvise(params) {
    let res = await fetch("https://api.adviceslip.com/advice");
    let data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-emerald-900 font-serif">
        <div className="container p-4 mx-auto flex items-center justify-between">
          <span className="uppercase font-bold ">Wiseman</span>
          <a className="text-slate-200 hover:text-slate-400 cursor-pointer ">
            Github
          </a>
        </div>
      </div>
      {/* Body */}
      <div className="bg-slate-300 h-screen flex justify-center items-center overflow-y-hidden font-serif">
        <div className="container bg-emerald-900 max-w-screen-lg  p-3 m-4 rounded-md">
          <div className="flex flex-col gap-20">
            <div className="flex justify-center ">
              <button
                className="focus:outline-none hover:border-green-300 mx-auto mt-6 "
                onClick={getAdvise}
              >
                New Advise
              </button>
            </div>

            <div className="flex justify-center">
              <p className="text-2xl mb-6 text-center max-w-md ">{advice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
