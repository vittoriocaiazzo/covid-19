import React from "react";
import "./Table.css";

import { ReactComponent as SortAsc } from "../../icons/sort-amount-asc.svg";
import { ReactComponent as SortDesc } from "../../icons/sort-amount-desc.svg";

import { dateFormat } from "../../utilities/utilities";

import labels from "../../utilities/labels/current-total-labels.json";

const HistoricalTable = (props) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead className="thead">
          <tr className="table__row-header">
            {props.columns.map((key) => (
              <th
                key={key}
                className={
                  key === "data"
                    ? "table__th-date"
                    : key === "deceduti"
                    ? "table__th red"
                    : key === "dimessi_guariti"
                    ? "table__th green"
                    : "table__th"
                }
                onClick={() => props.onClick(key)}
              >
                {key === "data" ? (
                  <div className="th-region__div">
                    <span className="region-span">{labels[key]}</span>
                    {props.sortingBy === "DESC" ? (
                      <SortDesc
                        className={
                          props.sortingValue === "dataISO" && key === "data"
                            ? "sort-icon sorting-value"
                            : props.sortingValue === key
                            ? "sort-icon sorting-value"
                            : "sort-icon"
                        }
                      />
                    ) : (
                      <SortAsc
                        className={
                          props.sortingValue === "dataISO" && key === "data"
                            ? "sort-icon sorting-value"
                            : props.sortingValue === key
                            ? "sort-icon sorting-value"
                            : "sort-icon"
                        }
                      />
                    )}
                  </div>
                ) : (
                  <div className="th__div">
                    {props.sortingBy === "DESC" ? (
                      <SortDesc
                        className={
                          props.sortingValue === key
                            ? "sort-icon sorting-value"
                            : "sort-icon"
                        }
                      />
                    ) : (
                      <SortAsc
                        className={
                          props.sortingValue === key
                            ? "sort-icon sorting-value"
                            : "sort-icon"
                        }
                      />
                    )}
                    <span className="th-span">{labels[key]}</span>
                  </div>
                )}
              </th>
            ))}
          </tr>
          {props.data.map((obj, index) => (
            <tr key={index} className="table__row">
              {Object.keys(obj).map((el) => (
                <td
                  key={el}
                  className={
                    el === "data"
                      ? "table__row__cell-date"
                      : el === "deceduti"
                      ? "table__row__cell red"
                      : el === "dimessi_guariti"
                      ? "table__row__cell green"
                      : "table__row__cell"
                  }
                >
                  {!obj[el]
                    ? "-"
                    : el === "data"
                    ? dateFormat(obj[el])
                    : obj[el].toLocaleString()}
                </td>
              ))}
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default HistoricalTable;
