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
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function PanelXYZ() {
  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const data2 = {
    labels: ['Apples', 'Oranges', 'Bananas', 'Grapes', 'Pineapples'],
    datasets: [
      {
        label: 'Dataset 2',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="w-full h-full flex flex-col space-y-4 p-4">
      <div className="flex flex-wrap justify-between">
        <Card className="w-full md:w-1/2 lg:w-1/3 mb-4">
          <CardHeader>
            <CardTitle>Chart 1</CardTitle>
            <CardDescription>Bar Chart Example</CardDescription>
          </CardHeader>
          <CardContent>
            <Bar data={data1} options={{ maintainAspectRatio: false, responsive: true }} height={300} />
          </CardContent>
          <CardFooter>
            <p>Footer Content for Chart 1</p>
          </CardFooter>
        </Card>

        <Card className="w-full md:w-1/2 lg:w-1/3 mb-4">
          <CardHeader>
            <CardTitle>Chart 2</CardTitle>
            <CardDescription>Bar Chart Example</CardDescription>
          </CardHeader>
          <CardContent>
            <Bar data={data2} options={{ maintainAspectRatio: false, responsive: true }} height={300} />
          </CardContent>
          <CardFooter>
            <p>Footer Content for Chart 2</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}