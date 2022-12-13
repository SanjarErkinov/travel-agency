import React, { useState, useContext } from "react";
import { tripsContext } from "../../contexts/TripsContext";
import { useAuth } from "../../contexts/AuthContext";
import "./Admin.css";

const Admin = () => {
  const { addTrip } = useContext(tripsContext);
  const [newTrip, setNewTrip] = useState({
    regName: "",
    title: "",
    description: "",
    departureDate: "",
    arrivalDate: "",
    price: 0,
    img1: "",
    img2: "",
    img3: "",
    comments: [],
    id: Number(Date.now()),
  });
  const {
    user: { email },
  } = useAuth();

  function addTripBtn(e) {
    e.preventDefault();
    addTrip(newTrip);
    setNewTrip({
      regName: "",
      title: "",
      description: "",
      departureDate: "",
      arrivalDate: "",
      price: 0,
      img1: "",
      img2: "",
      img3: "",
      id: "",
    });
  }

  return (
    <>
      {email === "hdrize8@gmail.com" ? (
        <div className="container addBlock">
          <form onSubmit={(e) => addTripBtn(e)}>
            <table>
              <caption>Добавление новых туров</caption>
              <tr>
                <th>Локация</th>
                <th>Краткое описание</th>
                <th>Описание</th>
                <th>Дата</th>
                <th>Цена</th>
                <th>Изображение</th>
              </tr>
              <tr>
                <td>
                  <select
                    value={newTrip.regName}
                    name="Локация"
                    onChange={(e) =>
                      setNewTrip({ ...newTrip, regName: e.target.value })
                    }
                  >
                    <option selected>Локация</option>
                    <option>Бишкек</option>
                    <option>Чуй</option>
                    <option>Нарын</option>
                    <option>Иссык-Куль</option>
                    <option>Жалал-Абад</option>
                    <option>Ош</option>
                    <option>Талас</option>
                    <option>Баткен</option>
                  </select>
                </td>
                <td>
                  <input
                    required
                    type="text"
                    placeholder="Краткое описание"
                    value={newTrip.title}
                    onChange={(e) =>
                      setNewTrip({ ...newTrip, title: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    required
                    type="text"
                    placeholder="Описание"
                    value={newTrip.description}
                    onChange={(e) =>
                      setNewTrip({ ...newTrip, description: e.target.value })
                    }
                  />
                </td>
                <td>
                  Дата отъезда
                  <input
                    required
                    type="date"
                    placeholder="Дата отъезда"
                    value={newTrip.departureDate}
                    onChange={(e) =>
                      setNewTrip({ ...newTrip, departureDate: e.target.value })
                    }
                  />
                  Дата приезда
                  <input
                    required
                    type="date"
                    placeholder="Дата приезда"
                    value={newTrip.arrivalDate}
                    onChange={(e) =>
                      setNewTrip({ ...newTrip, arrivalDate: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    required
                    type="number"
                    placeholder="Цена"
                    value={newTrip.price}
                    onChange={(e) =>
                      setNewTrip({ ...newTrip, price: Number(e.target.value) })
                    }
                  />
                </td>
                <td>
                  <input
                    required
                    type="text"
                    placeholder="Фото 1"
                    value={newTrip.img1}
                    onChange={(e) =>
                      setNewTrip({ ...newTrip, img1: e.target.value })
                    }
                  />
                  <input
                    required
                    type="text"
                    placeholder="Фото 2"
                    value={newTrip.img2}
                    onChange={(e) =>
                      setNewTrip({ ...newTrip, img2: e.target.value })
                    }
                  />
                  <input
                    required
                    type="text"
                    placeholder="Фото 3"
                    value={newTrip.img3}
                    onChange={(e) =>
                      setNewTrip({ ...newTrip, img3: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tfoot>
                <button>Добавить новый тур</button>
              </tfoot>
            </table>
          </form>
        </div>
      ) : (
        <div className="container noAdmin">
          <h1>У вас нет доступа!</h1>
        </div>
      )}
    </>
  );
};

export default Admin;
