"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const lineChartData1 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2],
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
    },
  ],
};

const lineChartData2 = {
  labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  datasets: [
    {
      label: 'Dataset 2',
      data: [7, 12, 15, 3, 9],
      borderColor: 'rgba(153,102,255,1)',
      fill: false,
    },
  ],
};

const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(255,255,255)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

export default function PanelXYZ() {
  return (
    <div className="w-full h-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Chart 1</CardTitle>
          <CardDescription>Line Chart Example</CardDescription>
        </CardHeader>
        <CardContent>
          <Line data={lineChartData1} />
        </CardContent>
        <CardFooter>
          <p>Footer 1</p>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chart 2</CardTitle>
          <CardDescription>Line Chart Example</CardDescription>
        </CardHeader>
        <CardContent>
          <Line data={lineChartData2} />
        </CardContent>
        <CardFooter>
          <p>Footer 2</p>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chart 3</CardTitle>
          <CardDescription>Bar Chart Example</CardDescription>
        </CardHeader>
        <CardContent>
          <Bar data={barChartData} height={400} options={{ maintainAspectRatio: false, responsive: true }} />
        </CardContent>
        <CardFooter>
          <p>Footer 3</p>
        </CardFooter>
      </Card>
    </div>
  );
}