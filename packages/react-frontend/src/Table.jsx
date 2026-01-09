// src/Table.jsx
import React from "react";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}

function TableBody() {
  return <tbody />;
}

function Table() {
  return (
    <table>
        <TableHeader />
        <TableBody />
    </table>
  );
}
