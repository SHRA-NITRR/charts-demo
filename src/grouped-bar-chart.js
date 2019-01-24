import React, { Component } from 'react';
const {
    BarChart,LabelList, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
  } = window.Recharts;

  const data = [
        {name: 'BSH Agents', functional: 40, technical: 50},
        {name: 'Customer Care Centre', functional: 60, technical: 50},
        {name: 'External Users', functional: 80, technical: 70}

  ];
class Barchart extends Component {
render () {
  return (
    <BarChart width={600}
  height={300}
  data={data}
  layout="vertical"
  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
    <XAxis type="number" domain={[0, 100]} interval={0} unit="%"/ >
    <YAxis type="category" dataKey="name"  width={200}/>
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip/>
    <Legend />
         <Bar dataKey="functional" fill="#8884d8" background={{ fill: '#eee' }}/>
         <Bar dataKey="technical" fill="#82ca9d" />
        </BarChart>
  );
}
}
export default Barchart;
