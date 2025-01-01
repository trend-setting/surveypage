'use client';

import { useState, useEffect } from "react";
import Skeleton1 from "@/components/Skeleton1";

type StageData = string[][];

const fetchStageData = async (stage: string): Promise<StageData> => {
  try {
    const response = await fetch(`/api/getStageData?stage=${stage}`);
    if (!response.ok) {
      console.error(`Failed to fetch data for ${stage}: ${response.statusText}`);
      return [];
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data for ${stage}:`, error);
    return [];
  }
};

const Page: React.FC = () => {
  const [data, setData] = useState<Record<string, StageData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const stages = ['response'];
      const stageData: Record<string, StageData> = {};

      for (const stage of stages) {
        const stageDataFetched = await fetchStageData(stage);
        stageData[stage] = stageDataFetched;
      }

      setData(stageData);
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[85dvh] md:h-[90dvh] overflow-auto">
      {loading ? (
        <Skeleton1 />
      ) : (
        Object.keys(data).map((stageKey) => (
          <div key={stageKey} className="relative overflow-hidden shadow-md mb-6">
            <div className="flex flex-col rounded-2xl w-full max-w-[800px] bg-[#ffffff] shadow-xl mx-auto p-6">
              <div className="text-2xl font-bold text-[#374151] pb-6">{stageKey.toUpperCase()}</div>
              {data[stageKey].map((row, i) => (
                <div
                  className="flex flex-col border-b border-neutral-200 dark:border-neutral-700 pb-6 mb-6"
                  key={i}
                >
                  <p className="text-lg text-[#4B5563] mb-4">{row[3]}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-[#6B7280] font-medium">{row[1]}</div>
                    <div className="text-sm text-[#6B7280] font-medium">{row[2]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
