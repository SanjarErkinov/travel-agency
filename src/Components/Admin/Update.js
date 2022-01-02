import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { tripsContext } from "../../contexts/TripsContext";

const Update = () => {
  const { updateTripFunc, tripsDetails } = useContext(tripsContext);
  const [updateTrip, setUpdateTrip] = useState(tripsDetails);
  let params = useParams().id;
  function updateTripBtn(params) {
    updateTripFunc(params, updateTrip);
    setUpdateTrip({
      title: "",
      description: "",
      countPlace: 1,
      date: "",
      price: 0,
    });
  }
  return (
    <div className="container" style={{ marginTop: "200px" }}>
      <table>
        <caption>Изменение данных</caption>
        <tr>
          <th>Локация</th>
          <th>Описание</th>
          <th>Количество мест</th>
          <th>Дата отъезда</th>
          <th>Цена</th>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Локация"
              value={updateTrip.title}
              onChange={(e) =>
                setUpdateTrip({ ...updateTrip, title: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Описание"
              value={updateTrip.description}
              onChange={(e) =>
                setUpdateTrip({ ...updateTrip, description: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="number"
              placeholder="Количество мест"
              value={updateTrip.countPlace}
              min={1}
              onChange={(e) =>
                setUpdateTrip({
                  ...updateTrip,
                  countPlace: Number(e.target.value),
                })
              }
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Дата"
              value={updateTrip.date}
              onChange={(e) =>
                setUpdateTrip({ ...updateTrip, date: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="number"
              placeholder="Цена"
              value={updateTrip.price}
              min={0}
              onChange={(e) =>
                setUpdateTrip({ ...updateTrip, price: Number(e.target.value) })
              }
            />
          </td>
        </tr>
        <tfoot>
          <button onClick={() => updateTripBtn(params)}>Изменить</button>
        </tfoot>
      </table>
    </div>
  );
};

export default Update;
