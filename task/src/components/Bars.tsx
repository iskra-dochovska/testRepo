import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import '../styles/globals.css';
import DataPoint from "../interfaces/dataPoint";

const Bars: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/data'); // This will be proxied to http://localhost:5000/api/data
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: DataPoint[] = await response.json();
        setData(result);
      } catch (error) {
        setError("Failed to fetch data");
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-end justify-between h-32">
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        data.map((point, index) => (
          <Bar key={point.timestamp || index} {...point} />
        ))
      )}
    </div>
  );
};

export default Bars;
