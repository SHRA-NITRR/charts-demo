import React, { Component } from 'react';
const {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell
  } = window.Recharts;

  const data = [
    {name: 'Call Bookings', Percentage: 40 },
    {name: 'RIS Validation', Percentage: 70},
    {name: 'Complaint', Percentage: 80},
    {name: 'SAP & WeBSH.NET & FiCo integration', Percentage: 60},
    {name: 'Technician Management', Percentage: 50}
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#8884d8"];

class Graph extends Component {
render () {
  return (
    <BarChart width={400}
  height={300}
  data={data}
  layout="vertical"
  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
    <XAxis type="number" domain={[0, 100]} interval={0} unit="%"/ >
    <YAxis type="category" dataKey="name"  />
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip/>

     <Bar dataKey="Percentage" fill="#8884d8" >
     {
           	data.map((entry, index) => {
             	const color = COLORS[index];
             	return <Cell fill={color} key={index}/>;
             })
           }
           </Bar>
    </BarChart>
  );
}
}
export default Graph;
