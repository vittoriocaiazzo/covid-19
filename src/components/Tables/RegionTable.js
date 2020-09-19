import React from "react";
import "./Table.css";

import { ReactComponent as SortAsc } from "../../icons/sort-amount-asc.svg";
import { ReactComponent as SortDesc } from "../../icons/sort-amount-desc.svg";

const RegionTable = (props) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead className="thead">
          <tr className="table__row-header">
            <th className="table__th-rank">#</th>
            {props.columns.map((key) => (
              <th
                key={key}
                className={
                  key === "regione"
                    ? "table__th-region"
                    : key === "deceduti"
                    ? "table__th red"
                    : key === "dimessi_guariti"
                    ? "table__th green"
                    : "table__th"
                }
                onClick={() => props.onClick(key)}
              >
                {key === "regione" ? (
                  <div className="th-region__div">
                    <span className="region-span">{props.labels[key]}</span>
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
                    <span className="th-span">{props.labels[key]}</span>
                  </div>
                )}
              </th>
            ))}
          </tr>
          {props.data.map((obj, index) => (
            <tr key={index} className="table__row">
              <td className="table__row__cell-rank">{index + 1}</td>
              {Object.keys(obj).map((el) => (
                <td
                  key={el}
                  className={
                    el === "regione"
                      ? "table__row__cell-region"
                      : el === "deceduti"
                      ? "table__row__cell red"
                      : el === "dimessi_guariti"
                      ? "table__row__cell green"
                      : "table__row__cell"
                  }
                >
                  {el === "regione" ? (
                    <a className="region-link" href={`#${obj[el]}`}>
                      {obj[el]}
                    </a>
                  ) : (
                    obj[el].toLocaleString()
                  )}
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

export default RegionTable;
