import React from 'react';

const TableView = ({ headers, data }) => {
    return (
        <div className="table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, i) => (
                                <td key={i}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableView;
