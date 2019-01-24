import React, { Component } from 'react';
const {
    PieChart, Pie, Legend, Tooltip, Cell, CartesianGrid
  } = window.Recharts;


  const COLORS = ['#0088FE', '#FFBB28'];

class Piechart extends Component {
render () {
  return (
    <PieChart width={360} height={300}>
    <Legend
                        payload={
                            [
                                {
                                    id: 'previousYrRes',
                                    type: 'square',
                                    value:'Compeleted (%)',
                                    color: '#0088FE'
                                },
                                {
                                    id: 'currentMthRes',
                                    type: 'square',
                                    value:'Uncompleted (%)',
                                    color: '#FFBB28'
                                }

                            ]
                        }
                    />
        <Pie data={this.props.data01} cx={180} cy={200}           startAngle={180}
          endAngle={0} outerRadius={30} fill="#8884d8"></Pie>
        <Pie data={this.props.data02}           startAngle={180}
          endAngle={0}cx={180} cy={200} innerRadius={30} outerRadius={120} fill="#82ca9d" label >	{
            this.props.data02.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={index}/>)
          }</Pie>
       </PieChart>
  );
}
}
export default Piechart;
