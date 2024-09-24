import React from 'react';

const WorkflowSteps = ({ steps }) => {
    return (
        <div className="workflow-container">
            <h3>Workflow</h3>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>
                        <strong>{step.name_title}</strong>: {step.name} (Status: {step.status})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkflowSteps;
