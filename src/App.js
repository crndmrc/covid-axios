import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [tarih, setTarih] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => setData(res.data[tarih]))
      .catch((error) => console.log(error));
  }, [data, tarih]);

  console.log("Gelen Data" + data);
  console.log("Gelen Tarih" + tarih);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-light">Türkiye Güncel Covid İstatiktikleri</h2>
            <input
              placeholder="GG/AA/YYY"
              className="form-control"
              onChange={(e) => setTarih(e.target.value)}
            ></input>
            <table className="table text-light">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Günlük Hasta Sayısı</th>
                  <th scope="col">Toplam Hasta Sayısı</th>
                  <th scope="col">Günlük Vefat Sayısı</th>
                  <th scope="col">Toplam İyileşen Sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr className={data === undefined ? "bg-danger" : "bg-success"}>
                  <th scope="row">1</th>
                  <td>{data === undefined ? "Data bekleniyor" : data.tests}</td>
                  <td>
                    {data === undefined ? "Data bekleniyor" : data.patients}
                  </td>
                  <td>
                    {data === undefined
                      ? "Data bekleniyor"
                      : data.totalPatients}
                  </td>
                  <td>
                    {data === undefined ? "Data bekleniyor" : data.deaths}
                  </td>
                  <td>
                    {data === undefined
                      ? "Data bekleniyor"
                      : data.totalRecovered}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
