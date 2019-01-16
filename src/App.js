import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './graph';
import Barchart from './grouped-bar-chart';
import Piechart from './pie-chart';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="page-header">
     <h1>Manage Customer Experience - TRANSITION JUMPSTART DASHBOARD</h1>
   </div>
      <div className="row panel">
        <div className="col-lg-4">
        <div className="panel panel-default">
          <div className="panel-heading">Training Material for Key Users
</div>
            <div className="panel-body">
                <Graph/>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
        <div className="panel panel-default">
          <div className="panel-heading">Key-User Trainings
</div>
            <div className="panel-body">
                <Barchart/>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
        <div className="panel panel-default">
          <div className="panel-heading">Knowledge Transfer
</div>
            <div className="panel-body">
                <Graph/>
                </div>
            </div>
        </div>
      </div>
<div className="row">
<h2>PROCESS AND TOOL SETUP</h2>
      <div className="col-lg-3">
      <div className="panel panel-default">
        <div className="panel-heading">Knowledge Academy
</div>
          <div className="panel-body">
              <Piechart/>
              </div>
              <div className="panel-footer">Setup of Knowledge Academy
portal for structured knowledge
management.</div>
          </div>
      </div>
      <div className="col-lg-3">
      <div className="panel panel-default">
        <div className="panel-heading">Network Connectivity</div>
          <div className="panel-body">
              <Piechart/>
              </div>
              <div className="panel-footer">Connectivity between Volvo Cars
and Infosys delivery location</div>
          </div>
      </div>
      <div className="col-lg-3">
      <div className="panel panel-default">
        <div className="panel-heading">Transition Accelerators</div>
          <div className="panel-body">
              <Piechart/>
              </div>
              <div className="panel-footer">Tools identification, setup &
configuration
Customized Templates and
Checklist
Transition Plan
</div>
          </div>
      </div>
      <div className="col-lg-3">
      <div className="panel panel-default">
        <div className="panel-heading">Data Collection and Analysis</div>
          <div className="panel-body">
              <Piechart/>
              </div>
              <div className="panel-footer">Collate available documents for
pre-study
Detailed ITSM Ticket analysis
using AI driven Problem Analytics
Tool
</div>
          </div>
      </div>
    </div>
    </div>
    );
  }
}

export default App;
