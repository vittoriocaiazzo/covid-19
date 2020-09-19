import React from "react";
import "./ProvincialSection.css";

import SearchInput from "../SearchInput/SearchInput";

const ProvincialSection = (props) => {
  return (
    // <div className="provincial-data">
    <>
      <SearchInput onChange={props.onChange} value={props.value} />
      <div className="provincial-sections">
        {Object.keys(props.data).map(
          (region, index) =>
            props.data[region].length > 0 && (
              <div key={index} className="provincial-sections__section">
                <div className="region-name" id={region}>
                  {region}
                </div>
                <div className="provinces">
                  {props.data[region].map((province, index) => (
                    <div
                      key={index}
                      className={
                        province.totale_casi > 0
                          ? "province highlighted"
                          : "province"
                      }
                    >
                      {province.denominazione_provincia}: {province.totale_casi}
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </>
    // </div>
  );
};

export default ProvincialSection;
