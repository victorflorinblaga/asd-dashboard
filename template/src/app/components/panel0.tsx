"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";

ChartJS.register(...registerables);

const salesData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1,
    },
  ],
};

const visitorsData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Visitors',
      data: [200, 300, 250, 400],
      fill: true,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      tension: 0.1,
    },
  ],
};

export default function PanelXYZ() {
  return (
    <SidebarProvider>
      <div className="w-full h-full flex">
        <Sidebar>
          <SidebarHeader title="Dashboard" />
          <SidebarContent>
            <SidebarGroup title="Overview" />
            <SidebarGroup title="Reports" />
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
        <div className="w-full h-full p-4 overflow-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 className="text-xl font-semibold mb-4">Sales Area Chart</h2>
            <Line data={salesData} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Visitors Area Chart</h2>
            <Line data={visitorsData} />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}