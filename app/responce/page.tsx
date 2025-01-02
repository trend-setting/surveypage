"use client";

import { useState, useEffect } from "react";
import Skeleton1 from "@/components/Skeleton1";

type StageData = string[][];

const fetchStageData = async (stage: string): Promise<StageData> => {
  try {
    const response = await fetch(`/api/getStageData?stage=${stage}`);
    if (!response.ok) {
      console.error(
        `Failed to fetch data for ${stage}: ${response.statusText}`
      );
      return [];
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data for ${stage}:`, error);
    return [];
  }
};

const Response: React.FC = () => {
  const [data, setData] = useState<Record<string, StageData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const stages = ["response"];
      const stageData: Record<string, StageData> = {};

      for (const stage of stages) {
        const stageDataFetched = await fetchStageData(stage);
        stageData[stage] = stageDataFetched;
      }

      setData(stageData);
      setLoading(false);
      console.log(stageData);
    };

    loadData();
  }, []);

  return (
    <div className="w-[98dvw] p-2 md:p-10 rounded-2xl  border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 overflow-auto">
      {loading ? (
        <Skeleton1 />
      ) : (
        Object.keys(data).map((stageKey) => (
          <div
            key={stageKey}
            className="relative overflow-hidden shadow-md mb-6"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeHyaxutu0f_PolHHlfZiPhng1HNpb2jLfnDT-t_cIzdm5ssA/viewform?usp=dialog"
              className="mb-2 bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-xl inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
            >
              <span className="pr-[10px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <g clip-path="url(#clip0_906_8052)">
                    <path d="M13.1875 9.28125H10.6875V6.8125C10.6875 6.4375 10.375 6.125 9.96875 6.125C9.59375 6.125 9.28125 6.4375 9.28125 6.84375V9.3125H6.8125C6.4375 9.3125 6.125 9.625 6.125 10.0312C6.125 10.4062 6.4375 10.7187 6.84375 10.7187H9.3125V13.1875C9.3125 13.5625 9.625 13.875 10.0312 13.875C10.4062 13.875 10.7187 13.5625 10.7187 13.1562V10.6875H13.1875C13.5625 10.6875 13.875 10.375 13.875 9.96875C13.875 9.59375 13.5625 9.28125 13.1875 9.28125Z" />
                    <path d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.8125 19.4688 10.0312 19.4688C15.25 19.4688 19.5 15.2188 19.5 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.5625 18.0625 10C18.0625 14.4375 14.4375 18.0625 10 18.0625Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_906_8052">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Add Your Opinion
            </a>
            {data[stageKey].map((row, i) => (
              <div
                className="overflow-hidden bg-neutral-700 rounded-2xl shadow-sm text-white shadow-slate-200 mb-3"
                key={i}
              >
                <div className="p-6">
                  <p className="text-xl font-medium text-white"> {row[3]} </p>
                  <header className="mt-4">
                    <h3 className="uppercase">{row[1]}</h3>
                    <p className="text-sm text-slate-400">{row[2]}</p>
                  </header>
                </div>
              </div>
            ))}
            <div></div>
          </div>
        ))
      )}
    </div>
  );
};

export default Response;
