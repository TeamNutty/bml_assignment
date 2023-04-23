import React from "react";

export const Chart = ({ from, to, data, district }) => {
  const districtData = data.find(item => {
    return item.name === district;
  });

  const mapYearInfo = [];

  if (districtData) {
    for (const [key, value] of Object.entries(districtData)) {
      if (key >= from && key <= to) {
        mapYearInfo.push({
          year: key,
          percent: value,
        });
      }
    }
  }

  const sortPercent = [...mapYearInfo].sort((a, b) => (a.percent.match(/\d+/) || 0) - (b.percent.match(/\d+/) || 0));

  const minPercent = Number(sortPercent[sortPercent.length - 1]?.percent.replace("%", ""));
  const maxPercent = Number(sortPercent[0]?.percent.replace("%", ""));

  console.log("mapYearInfo", mapYearInfo);

  return (
    <div>
      <div className="chart-container">
        <div className="year-box"></div>
        <div className="chart-percent">
          <span>{minPercent + "%" || "-"}</span>
          <span>{maxPercent + "%" || "-"}</span>
        </div>
      </div>

      {mapYearInfo.map(item => (
        <div key={item.year} className="chart-container">
          <div className="year-box">{item.year}</div>
          <div className="chart-box">
            <div
              className="chart"
              style={{
                width: `${((Number(item?.percent.replace("%", "")) - minPercent) / (maxPercent - minPercent)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
