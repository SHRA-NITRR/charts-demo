import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './graph';
import Barchart from './grouped-bar-chart';
import Piechart from './pie-chart';
import KT from './kt';


  const data01 = [{name: 'Group A', value: 400}];
  const data02 = [{name: 'A1', value: 80},{name: ' ', value: 20}];

  const data03 = [{name: 'Group A', value: 400}];
  const data04 = [{name: 'A1', value: 60},{name: ' ', value: 40}];

  const data05 = [{name: 'Group A', value: 400}];
  const data06 = [{name: 'A1', value: 30},{name: ' ', value: 70}];

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="page-header">
     <h1>COSMOS PROJECT CLOSURE DASHBOARD</h1>
   </div>
      <div className="row">
      <div className="panel">
      <div className="panel-body">
        <div className="col-lg-6">
        <div className="panel panel-success">
          <div className="panel-heading">Training Material for Key Users
</div>
            <div className="panel-body">
                <Graph/>
            </div>
            <div className="panel-footer">Document wise classification
            </div>
            </div>
        </div>
        <div className="col-lg-6">
        <div className="panel panel-success">
          <div className="panel-heading">Key-User Trainings
</div>
            <div className="panel-body">
                <Barchart/>
                </div>
            <div className="panel-footer">Role wise classification

            </div>
            </div>
        </div>

      </div>
        </div>
      </div>
<div className="row">
<div className="panel">
<div className="panel-body">
<div className="col-lg-6">
  <div className="panel panel-success">
    <div className="panel-heading">Knowledge Transfer
    </div>
    <div className="panel-body">
        <KT/>
    </div>
    <div className="panel-footer">Module wise classification

    </div>
  </div>
</div>

      <div className="col-lg-6">
      <div className="panel panel-success">
        <div className="panel-heading">Knowledge Academy
</div>
          <div className="panel-body">
              <Piechart data01={data01} data02={data02}/>
              </div>
              <div className="panel-footer">Setup of Knowledge Academy
portal for structured knowledge
management.</div>
          </div>
      </div>



      </div>
      </div>
    </div>
    </div>
    );
  }
}

export default App;
