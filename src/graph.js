import React, { Component } from 'react';
const {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell
  } = window.Recharts;

  const data = [
    {name: 'User Manuals', Percentage: 60},
    {name: 'Technical Documents', Percentage: 40 },
    {name: 'Infrastructure Related', Percentage: 50},
    {name: 'Others (as applicable)', Percentage: 80 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class Graph extends Component {
render () {
  return (
    <BarChart width={600}
  height={300}
  data={data}
  layout="vertical"
  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
    <XAxis type="number" domain={[0, 100]} interval={0} unit="%"/ >
    <YAxis type="category" dataKey="name" width={200} />
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
