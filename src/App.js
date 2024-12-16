// import { useState } from "react";

// import "./App.css";
// import { Modal } from "./components/Modal";
// import { Table } from "./components/Table";

// function App() {
//   const [ModalOpen, setModalOpen] = useState(false);

//   const [rows, setRows] = useState([
//     { ctpy: "CTPY", product: "Prod", mw: "MW", price: "£", status: "Status" },
//   ]);

//   const [rowToEdit, setRowToEdit] = useState(null);

//   const [lastTimestamp, setLastTimestamp] = useState(null); // State to store the latest timestamp

//   const handleDeleteRow = (targetIndex) => {
//     setRows(rows.filter((_, idx) => idx !== targetIndex));
//   };

//   const handleEditRow = (idx) => {
//     setRowToEdit(idx);
//     setModalOpen(true);
//   };

//   const handleSubmit = (newRow) => {
//     rowToEdit === null
//       ? setRows([...rows, newRow])
//       : setRows(
//         rows.map((currRow, idx) => {
//           if (idx !== rowToEdit) return currRow;
//           return newRow;
//         })
//       );

//     // Update the lastTimestamp with the current time
//     setLastTimestamp(new Date().toLocaleString());

//     setModalOpen(false);
//     setRowToEdit(null);
//   };

//   return (
//     <div className="App">
//       <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
//       <button onClick={() => setModalOpen(true)}> Add</button>
//       {ModalOpen && (
//         <Modal
//           closeModal={() => {
//             setModalOpen(false);
//             setRowToEdit(null);
//           }}
//           onSubmit={handleSubmit}
//           defaultValue={rowToEdit !== null ? rows[rowToEdit] : undefined}
//         />
//       )}
//       {/* Footer displaying the latest timestamp */}
//       {lastTimestamp && (
//         <footer className="footer">
//           Last added/edited at: {lastTimestamp}
//         </footer>
//       )}
//     </div>
//   );
// }

// export default App;
// // --------------------------- above is correct version 


import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
