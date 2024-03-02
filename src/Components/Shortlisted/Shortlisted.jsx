import React, { useMemo, useState } from 'react';
import './Shortlisted.css';
import fakeData from './list.json';
import { useTable } from 'react-table';

function Shortlist() {
  const [searchTerm, setSearchTerm] = useState('');
  const data = useMemo(() => fakeData, []);
  const filteredData = useMemo(() => {
    return data.filter(team => 
      team.team_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const columns = useMemo(
    () => [
      {
        Header: 'Team Name',
        accessor: 'team_name',
      },
      {
        Header: 'College Name', 
        accessor: 'college_name',
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: filteredData });

  return (
    <div className="App">
      <div className="about_heading">
        <p className="xs"> Shortlisted Teams</p>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Team Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredData.length === 0 && (
        <h2 className="no-teams-message">No teams found with the given search term.</h2>
      )}
      {filteredData.length > 0 && (
        <div className="containert">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Shortlist;