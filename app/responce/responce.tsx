"use client";
import { useState, useEffect } from "react";

type SheetData = string[][];

const fetchStageData = async (stage: string): Promise<SheetData> => {
  const response = await fetch(`/api/getStageData?stage=${stage}`);
  if (!response.ok) {
    console.error(`Failed to fetch data for ${stage}: ${response.statusText}`);
    return [];
  }
  console.log("connected");
  return response.json();
};

const page: React.FC = () => {
  const [data, setData] = useState<Record<string, SheetData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const stageData: Record<string, SheetData> = {};
        const stageDataFetched = await fetchStageData("response");
      setData(stageData);
      setLoading(false);
      console.log(stageDataFetched);
    };
    loadData();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default page;
