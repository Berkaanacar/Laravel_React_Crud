import { useState } from "react";
import * as api from "../services";

export default function Edit(props) {
  const { row, index, list } = props;

  const [name, setName] = useState(row.name);
  const [surname, setSurname] = useState(row.surname);
  const [phone, setPhone] = useState(row.phone);

  const onClickUpdate = async () => {
    await api.post("/kontrol/update/" + row.id, { name, surname, phone });
    list(true);
  };

  return (
    <tr key={index}>
      <td>{row.id}</td>
      <td>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
      </td>
      <td>
        <input
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
          type="text"
        />
      </td>
      <td>
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="text"
        />
      </td>
      <td>
        <button onClick={onClickUpdate} className={"btn btn-warning"}>
          Düzenle
        </button>
      </td>
    </tr>
  );
}
