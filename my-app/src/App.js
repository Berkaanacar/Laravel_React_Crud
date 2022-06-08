import "./App.css";
import { useEffect, useState } from "react"; 
import * as api from "./services";
import Edit from "./components/edit";
import Delete from "./components/delete";

function App() {
  const [isGetList, setIsGetList] = useState(true);
  const [getList, setGetList] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    if (isGetList) {
      new Promise(function (resolved) {
        resolved(api.get("/kontrols"));
        }).then((r) => {
        setGetList(r);
        setIsGetList(false);
        setName("");
        setSurname("");
        setPhone("");
      });
    }
  }, [isGetList]);

  const onClickSave = async () => {
    await api.post("/kontrol/create", { name, surname, phone });
    setIsGetList(true);
  };

  const onClickRow = (v) => {
    setSelectedRow(v);
  };

  const stateDelete = (id) => {
    setGetList(getList.filter((getList) => getList.id !== id));
  };
  return (
    <div className="App">
      <br />
      <label className="Ad">Ad : </label>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="m-1"
        placeholder="Adınızı Giriniz"
      />
      <label className="Soyad">Soyad : </label>
      <input
        onChange={(e) => setSurname(e.target.value)}
        value={surname}
        className="m-1"
        placeholder="Soyadınızı Giriniz"
      />
      <label className="Telefon">Telefon : </label>
      <input
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        className="m-1"
        placeholder="Telefon No Giriniz"
      />
      <button onClick={onClickSave} type="button" className="Savebutton m-1">
        Kaydet
      </button>

      <br />
      <br />
      <table className={"table table-striped table-hover"}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>AD</th>
            <th>SOYAD</th>
            <th>TELEFON</th>
            <th></th>
          </tr>

          {getList.map((v, i) => {
            if (v === selectedRow) {
              return <Edit row={v} key={i} list={(e) => setIsGetList(e)} />;
            } else {
              return (
                <tr onClick={() => onClickRow(v)} className="color" key={i}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.surname}</td>
                  <td>{v.phone}</td>
                  <td>
                    <Delete stateDelete={() => stateDelete(v.id)} row={v.id} />
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
