import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>CTPY </th>
                        <th className="expand">Product</th>
                        <th>MW</th>
                        <th>£</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => {
                        const statusText =
                            row.status.charAt(0).toUpperCase() + row.status.slice(1);

                        return (
                            <tr key={idx}>
                                <td>{row.ctpy}</td>
                                <td className="expand">{row.product}</td>
                                <td>
                                    <span className={`label label-${row.status}`}>
                                        {statusText}
                                    </span>
                                </td>
                                <td className="fit">
                                    <span className="actions">
                                        <BsFillTrashFill
                                            className="delete-btn"
                                            onClick={() => deleteRow(idx)} />
                                        <BsFillPencilFill className="edit-btn" onClick={() => editRow(idx)} />
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};