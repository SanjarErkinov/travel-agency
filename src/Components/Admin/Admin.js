import React, { useState, useContext } from "react";
import { tripsContext } from "../../contexts/TripsContext";
import "./Admin.css";

const Admin = () => {
  const { addTrip } = useContext(tripsContext);
  const [newTrip, setNewTrip] = useState({
    title: "",
    description: "",
    countPlace: 1,
    date: "",
    price: 0,
    img: "",
  });

  function addTripBtn() {
    addTrip(newTrip);
    setNewTrip({
      title: "",
      description: "",
      countPlace: 1,
      date: "",
      price: 0,
      img: "",
    });
  }

  return (
    <div className="container addBlock">
      <table>
        <caption>Добавление новых туров</caption>
        <tr>
          <th>Локация</th>
          <th>Описание</th>
          <th>Количество мест</th>
          <th>Дата отъезда</th>
          <th>Изображение</th>
          <th>Цена</th>
        </tr>
        <tr>
          <td>
            <select
              value={newTrip.title}
              onChange={(e) =>
                setNewTrip({ ...newTrip, title: e.target.value })
              }
            >
              <option selected>Локация</option>
              <option>Бишкек</option>
              <option>Чуй</option>
              <option>Нарын</option>
            </select>
            {/* <input
              type="text"
              placeholder="Локация"
              value={newTrip.title}
              onChange={(e) =>
                setNewTrip({ ...newTrip, title: e.target.value })
              }
            /> */}
          </td>
          <td>
            <input
              type="text"
              placeholder="Описание"
              value={newTrip.description}
              onChange={(e) =>
                setNewTrip({ ...newTrip, description: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="number"
              placeholder="Количество мест"
              value={newTrip.countPlace}
              min={1}
              onChange={(e) =>
                setNewTrip({ ...newTrip, countPlace: Number(e.target.value) })
              }
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Дата"
              value={newTrip.date}
              onChange={(e) => setNewTrip({ ...newTrip, date: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Дата"
              value={newTrip.img}
              onChange={(e) => setNewTrip({ ...newTrip, img: e.target.value })}
            />
          </td>
          <td>
            <input
              type="number"
              placeholder="Цена"
              value={newTrip.price}
              min={0}
              onChange={(e) =>
                setNewTrip({ ...newTrip, price: Number(e.target.value) })
              }
            />
          </td>
        </tr>
        <tfoot>
          <button onClick={addTripBtn}>Добавить новый тур</button>
        </tfoot>
      </table>
    </div>
  );
};

export default Admin;
