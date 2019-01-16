import React, { Component } from 'react';
const {
    PieChart, Pie, Legend, Tooltip, Cell, CartesianGrid
  } = window.Recharts;

  const data01 = [{name: 'Group A', value: 400}]

  const data02 = [{name: 'A1', value: 80},{name: ' ', value: 20}
                     ]
  const COLORS = ['#0088FE', '#fff'];

class Piechart extends Component {
render () {
  return (
    <PieChart width={300} height={220}>
        <Pie data={data01} cx={150} cy={200}           startAngle={180}
          endAngle={0} outerRadius={30} fill="#8884d8"></Pie>
        <Pie data={data02}           startAngle={180}
          endAngle={0}cx={150} cy={200} innerRadius={30} outerRadius={90} fill="#82ca9d" label>	{
          	data02.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={index}/>)
          }</Pie>
       </PieChart>
  );
}
}
export default Piechart;
