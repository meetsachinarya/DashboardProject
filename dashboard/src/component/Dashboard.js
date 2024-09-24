import React, { useState } from "react";
import TableView from "./TableView";
import WorkflowSteps from "./WorkflowSteps";
import jsonData from "../data/mockData.json";

const Dashboard = () => {
  const [tableHeaders, setTableHeaders] = useState(jsonData.table_headers);
  const [tableData, setTableData] = useState(jsonData.table_data);
  const [workflowSteps, setWorkflowSteps] = useState(jsonData.workflow_steps);

  return (
    <div className="dashboard">
      <div className="left-side">
        <div className="header_container">
          <div className="header">
            <h3>Data</h3>
            <h3>Summary</h3>
            <h3>Log</h3>
          </div>
          <div className="header">
            <h3>Download</h3>
          </div>
        </div>
        <div className="content">
          <div className="data-section">
            <TableView headers={tableHeaders} data={tableData} />
          </div>
        </div>
      </div>

      <div className="workflow-section">
        <WorkflowSteps steps={workflowSteps} />
      </div>
    </div>
  );
};

export default Dashboard;
