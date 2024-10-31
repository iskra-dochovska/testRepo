// api/pages/api/data.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Define the data point interface
interface DataPoint {
  timestamp: string;
  value: number;
}

// Function to generate random data points
const generateRandomDataPoints = (): DataPoint[] => {
  const dataPoints: DataPoint[] = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dataPoints.push({
      timestamp: date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
      value: Math.floor(Math.random() * 30) + 1, // Random value between 1 and 30
    });
  }

  return dataPoints.reverse(); // Reverse to have the latest date first
};

// Define the API endpoint
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dataPoints = generateRandomDataPoints();
  res.status(200).json(dataPoints);
}
