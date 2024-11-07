import React, { useState } from 'react';
import './Login.css'; // Import custom CSS
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip, Legend as BarLegend } from 'recharts';
import { LineChart, Line } from 'recharts'; 
import { TfiAlignJustify } from "react-icons/tfi";
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Login() {
  const [isOpen, setIsOpen] = useState('');


  const option = {
    animationEnabled: true,
    title: {
      text: "Customer Satisfaction"
    },
    data: [
      {
        type: "gauge",
        dataPoints: [
          { y: 70, indexLabel: "70%" },
        ],
        outerRadius: "100%",
        innerRadius: "60%",
        valueFormatString: "#0",
        showValue: true,
        startAngle: -90,
        endAngle: 90,
        tickColor: "#fff",
        tickThickness: 2,
        tickLength: 10,
        labelFontColor: "#fff",
        needleColor: "#ff5733",
        needleWidth: 4,
      }
    ]
  };
  


  const options = {
    animationEnabled: true,	
    title:{
      text: "Number of New Customers"
    },
    axisY : {
      title: "Number of Customers"
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "spline",
      name: "2016",
      showInLegend: true,
      dataPoints: [
        { y: 155, label: "Jan" },
        { y: 150, label: "Feb" },
        { y: 152, label: "Mar" },
        { y: 148, label: "Apr" },
        { y: 142, label: "May" },
        { y: 150, label: "Jun" },
        { y: 146, label: "Jul" },
        { y: 149, label: "Aug" },
        { y: 153, label: "Sept" },
        { y: 158, label: "Oct" },
        { y: 154, label: "Nov" },
        { y: 150, label: "Dec" }
      ]
    },
    {
      type: "spline",
      name: "2017",
      showInLegend: true,
      dataPoints: [
        { y: 172, label: "Jan" },
        { y: 173, label: "Feb" },
        { y: 175, label: "Mar" },
        { y: 172, label: "Apr" },
        { y: 162, label: "May" },
        { y: 165, label: "Jun" },
        { y: 172, label: "Jul" },
        { y: 168, label: "Aug" },
        { y: 175, label: "Sept" },
        { y: 170, label: "Oct" },
        { y: 165, label: "Nov" },
        { y: 169, label: "Dec" }
      ]
    }]
}

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if(isOpen === 'false')
      {
        setIsOpen('Close');
        
      }
      else if(isOpen === 'true')
      {
        setIsOpen('Open')
        
      }
  };

  // Pie chart data
  const pieData = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 300 },
    { name: 'Category D', value: 200 },
  ];

  const pieColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Bar chart data
  const barData = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  // Line chart data (this is a simple line chart data example)
  const lineData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3200 },
    { name: 'Mar', value: 2800 },
    { name: 'Apr', value: 3500 },
    { name: 'May', value: 4200 },
    { name: 'Jun', value: 4600 },
    { name: 'Jul', value: 4900 },
  ];

  // Chart.js bar chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="login-container">
  
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h2 className="sidebar-header">Welcome</h2>
          <ul>
            <li className="sidebar-item">Home</li>
            <li className="sidebar-item">About</li>
            <li className="sidebar-item">Services</li>
            <li className="sidebar-item">Contact</li>
          </ul>
        </div>
      </div>


      <div className="content">
 
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <TfiAlignJustify />
        </button>

       
        <div className="main-content">
          {/* Pie Chart */}
          <PieChart width={345} height={345}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>


          <BarChart width={500} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <BarTooltip />
            <BarLegend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>

 
          <LineChart width={500} height={300} data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>

       
        <div className="main-content2">
          <BarChart width={500} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <BarTooltip />
            <BarLegend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
          
          <CanvasJSChart  width= {30} height= {30}options={options} />
        </div>
      </div>
    </div>
  );
}
