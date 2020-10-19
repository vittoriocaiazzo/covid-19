import React from "react";
import { useMediaQuery } from "react-responsive";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "./Graphs.css";
import { dateFormat } from "../../helpers/utilities";

const CustomTooltip = (props) => {
  if (props.active) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{dateFormat(props.label, false)}</p>
        <p className="tooltip-content" style={{ color: props.color }}>{`${
          props.labelStyle
        } : ${props.payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }

  return null;
};

const Graph = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 676px)" });

  return (
    <div className="graph">
      {props.graphInput.type === "Bar" && (
        <ResponsiveContainer>
          <BarChart data={props.data} className="chart">
            <CartesianGrid
              stroke="rgb(150, 150, 150, 0.1)"
              vertical={false}
              horizontal={isMobile ? false : true}
            />

            <XAxis
              dataKey="data"
              tickFormatter={(tick) => dateFormat(tick, false)}
              // tick={isMobile ? false : true}
              hide={isMobile ? true : false}
            />

            <YAxis tickCount={6} hide={isMobile ? true : false} />

            <Bar
              dataKey={props.graphInput.input}
              animationDuration={750}
              fill={props.color}
              barSize={isMobile ? 1.2 : 5}
            />
            <Tooltip
              cursor={{ fill: props.color, opacity: 0.4 }}
              labelStyle={props.label}
              color={props.color}
              content={<CustomTooltip />}
            />
          </BarChart>
        </ResponsiveContainer>
      )}

      {props.graphInput.type === "Area" && (
        <ResponsiveContainer>
          <AreaChart data={props.data} className="chart">
            <CartesianGrid
              stroke="rgb(150, 150, 150, 0.1)"
              vertical={false}
              horizontal={isMobile ? false : true}
            />

            <XAxis
              dataKey="data"
              tickFormatter={(tick) => dateFormat(tick, false)}
              // tick={isMobile ? false : true}
              hide={isMobile ? true : false}
            />

            <YAxis tickCount={6} hide={isMobile ? true : false} />

            <Area
              dataKey={props.graphInput.input}
              type="basis"
              animationDuration={750}
              fill={props.color}
              fillOpacity={0.5}
              stroke={props.color}
              strokeWidth={isMobile ? 1 : 1}
            />
            <Tooltip
              cursor={{
                fill: props.color,
                opacity: 0.4,
                stroke: props.color,
                strokeWidth: isMobile ? 1.5 : 5,
              }}
              labelStyle={props.label}
              color={props.color}
              content={<CustomTooltip />}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Graph;
