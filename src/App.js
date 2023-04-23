import { useEffect, useState } from "react";
import "./App.css";
import { Chart } from "./components/Chart";
import Container from "./components/Container";
import Header from "./components/Header";
import LinkInfomations from "./components/LinkInfomations";
import { SelectInfomation } from "./components/SelectInfomation";
import { mockup } from "./configs/mockup";

function App() {
  const [data, setData] = useState([]);
  const [district, setDistrict] = useState("พระนคร");
  const [from, setFrom] = useState(2550);
  const [to, setTo] = useState(2559);

  useEffect(() => {
    setData(mockup);
  }, []);

  return (
    <div className="bangkok-population-growth">
      <Container>
        <Header />
        <SelectInfomation
          data={data}
          setDistrict={setDistrict}
          setFrom={setFrom}
          setTo={setTo}
          from={from}
          to={to}
          district={district}
        />
        <Chart from={from} to={to} data={data} district={district} />
        <LinkInfomations />
      </Container>
    </div>
  );
}

export default App;
