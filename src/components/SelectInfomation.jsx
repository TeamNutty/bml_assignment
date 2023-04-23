import React from "react";
import { years } from "../configs/mockup";

export const SelectInfomation = ({ data, setDistrict, setFrom, setTo, from, to, district }) => {
  const handleChangefrom = e => {
    setFrom(e.target.value);
  };

  const handleChangeTo = e => {
    setTo(e.target.value);
  };

  const handleChangeDistrict = e => {
    setDistrict(e.target.value);
  };

  return (
    <div className="select-container">
      <h3 className="header-sub-title">การเติบโต</h3>
      <div className="select-flex">
        <div className="select-div">
          <div className="select-label">เขต</div>
          <select
            className="select-long"
            name="district"
            id="district"
            onChange={handleChangeDistrict}
            value={district}
          >
            {data.map(item => (
              <option key={item.dcode} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="select-div-sub">
          <span className="select-div">
            <div className="select-label">ตั้งแต่</div>
            <select name="from" id="from" className="select-shot" onChange={handleChangefrom} value={from}>
              {years.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </span>

          <span className="select-to select-div">
            <div className="select-label">ถึง</div>
            <select name="to" id="to" className="select-shot" onChange={handleChangeTo} value={to}>
              {years.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
    </div>
  );
};
