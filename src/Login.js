import React, { useState, useRef } from 'react';
import './Login.css'; // Import custom CSS
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip, Legend as BarLegend } from 'recharts';
import { LineChart, Line } from 'recharts'; 
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { TfiAlignJustify } from "react-icons/tfi";
import CanvasJSReact from '@canvasjs/react-charts';
import { FaRegFilePdf } from "react-icons/fa";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const pieData = [
  { name: 'Category A', value: 400 },
  { name: 'Category B', value: 300 },
  { name: 'Category C', value: 300 },
  { name: 'Category D', value: 200 },
];

const pieColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const barData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const lineData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3200 },
  { name: 'Mar', value: 2800 },
  { name: 'Apr', value: 3500 },
  { name: 'May', value: 4200 },
  { name: 'Jun', value: 4600 },
  { name: 'Jul', value: 4900 },
];

const options = {
  animationEnabled: true,
  title: {
    text: "Number of New Customers",
  },
  axisY: {
    title: "Number of Customers",
  },
  toolTip: {
    shared: true,
  },
  data: [
    {
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
        { y: 150, label: "Dec" },
      ],
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
        { y: 169, label: "Dec" },
      ],
    },
  ],
};

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const pdfExportComponent = useRef(null);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const exportPDFWithMethod = () => {
    const element = document.querySelector(".k-grid") || document.body;
    savePDF(element, { paperSize: "A1" });
  };

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
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
            <li className="sidebar-item"  onClick={exportPDFWithComponent}>Export pdf</li>

          </ul>
        </div>
      </div>

      <div className="content">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <TfiAlignJustify />
        </button>

        <PDFExport ref={pdfExportComponent} paperSize="A1">
          <div className="main-content">
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

            <CanvasJSChart options={options} />
          </div>
        </PDFExport>
      </div>
    </div>
  );
}

