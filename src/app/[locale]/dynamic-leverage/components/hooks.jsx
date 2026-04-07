import { useEffect, useState } from "react";
import axios from "axios";

export const useLeverageData = (locale = "en") => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('Forex'); // Default active tab

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/leverage/${locale}.json`);
        setData(response.data[activeTab]); // Assuming the JSON is structured with keys like 'Forex', 'Metals', etc.
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Resetting data on error
      }
    };
    
    fetchData();
  }, [locale, activeTab]); // Refetch when locale or activeTab changes

  return {
    data,
    activeTab,
    setActiveTab 
  };
};
