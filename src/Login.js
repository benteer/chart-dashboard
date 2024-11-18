mport React, { useState, useEffect } from 'react';
import {
  PieChart, Pie, Tooltip, Cell, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';
import {
  LineChart, Line
} from 'recharts';

const PieChartComponent = () => {
  // Sample raw data (you will likely fetch this data from an API in a real-world scenario)
  const rawData = [
    {
      ActivityStatusValue: "Success",
      Caller: "samik.n.roy@gmail.com",
      ResourceProviderValue: "MICROSOFT.WEB",
      SubscriptionId: "fcb7d51b-418f-45a9-8418-5c0f17e343c8",
      TimeGenerated: "2024-11-13T07:20:06.8976481Z",
    },
    {
      ActivityStatusValue: "Success",
      Caller: "someone.else@example.com",
      ResourceProviderValue: "MICROSOFT.WEB",
      SubscriptionId: "fcb7d51b-418f-45a9-8418-5c0f17e343c8",
      TimeGenerated: "2024-11-13T07:21:06.8976481Z",
    },
    {
      ActivityStatusValue: "Failure",
      Caller: "samik.n.roy@gmail.com",
      ResourceProviderValue: "MICROSOFT.WEB",
      SubscriptionId: "fcb7d51b-418f-45a9-8418-5c0f17e343c8",
      TimeGenerated: "2024-11-13T07:22:06.8976481Z",
    },
    {
      ActivityStatusValue: "Success",
      Caller: "samik.n.roy@gmail.com",
      ResourceProviderValue: "MICROSOFT.WEB",
      SubscriptionId: "fcb7d51b-418f-45a9-8418-5c0f17e343c8",
      TimeGenerated: "2024-11-13T07:23:06.8976481Z",
    },
  ];

  // State to hold the transformed data for the pie chart
  const [chartData, setChartData] = useState([]);

  // Effect hook to transform the raw data into chart-compatible data
  useEffect(() => {
    // Count occurrences of each ActivityStatusValue (e.g., Success, Failure)
    const statusCount = rawData.reduce((acc, curr) => {
      const status = curr.ActivityStatusValue || "Unknown"; // Default to "Unknown" if not available
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});

    // Transform the data to be used by the PieChart and BarChart components
    const formattedData = Object.keys(statusCount).map(status => ({
      name: status,
      value: statusCount[status],
    }));

    setChartData(formattedData);
  }, [rawData]);

  // Colors for the pie chart slices
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div>
      <h3>Activity Status Distribution</h3>

      {/* PieChart Component */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/* BarChart Component */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          {/* CartesianGrid to add grid lines to the chart */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* XAxis and YAxis for the axes */}
          <XAxis dataKey="name" />
          <YAxis />

          {/* Line to represent the data on the chart */}
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />

          {/* Tooltip to show the value when hovering over the chart */}
          <Tooltip />

          {/* Legend */}
          <Legend />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default PieChartComponent;




