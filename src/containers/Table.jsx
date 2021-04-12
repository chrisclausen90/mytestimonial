/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { useTable, useFilters } from 'react-table';
// A great library for fuzzy filtering/sorting items
import { matchSorter } from 'match-sorter';

import tableData from '../helpers/tableData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

// Define a default UI for filtering
function DefaultColumnFilter() {
  return null;
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
  // Calculate the min and max
  // using the preFilteredRows
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={e => {
          setFilter(parseInt(e.target.value, 10))
        }}
      />
      <span>({filterValue || min})</span>
    </>
  )
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

// Our table component
function Table({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
  )

  // We don't want to render all of the rows for this example, so cap
  // it for this use case
console.log(rows);
  const firstPageRows = rows.sort((a, b) => a.original.position - b.original.position);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th key={i} {...column.getHeaderProps()}>
                  {column.render('Header')}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row)
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return <td key={i} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

Table.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
};

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'

function TableWrapper() {
  const columns = React.useMemo(
    () => [
        {
            accessor: 'position',
            },
            {
            accessor: 'name',
          },
          {
            Header: 'Games',
            accessor: 'games',
          },
          {
            Header: 'Points',
            accessor: 'points',
            Filter: SliderColumnFilter,
            filter: filterGreaterThan,
          },
          {
            Header: 'S',
            accessor: 'wins',
            Filter: SliderColumnFilter,
            filter: filterGreaterThan,
          },
          {
            Header: 'U',
            accessor: 'draws',
            Filter: SliderColumnFilter,
            filter: filterGreaterThan,
          },
          {
            Header: 'N',
            accessor: 'precipitation',
            Filter: SliderColumnFilter,
            filter: filterGreaterThan,
          },
          {
            Header: 'Goals',
            accessor: 'goals',
          },
          {
            Header: 'Diff',
            accessor: 'diff',
            Filter: SliderColumnFilter,
            filter: filterGreaterThan,
          },
    ],
    []
  )

  const data = React.useMemo(() => tableData(), [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default TableWrapper
