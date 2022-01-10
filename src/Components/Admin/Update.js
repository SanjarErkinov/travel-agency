import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { tripsContext } from "../../contexts/TripsContext";
import { useAuth } from "../../contexts/AuthContext";
import "./Admin.css";

const Update = () => {
  const { updateTripFunc, tripsDetails } = useContext(tripsContext);
  const [updateTrip, setUpdateTrip] = useState(tripsDetails);
  let params = useParams().id;
  function updateTripBtn(params) {
    updateTripFunc(params, updateTrip);
    setUpdateTrip({
      regName: "",
      title: "",
      description: "",
      departureDate: "",
      arrivalDate: "",
      price: 0,
      img1: "",
      img2: "",
      img3: "",
    });
  }

  const {
    user: { email },
  } = useAuth();

  return (
    <>
      {email === "mirdin@mail.ru" ? (
        <div className="container" style={{ marginTop: "200px" }}>
          <form onSubmit={() => updateTripBtn(params)}>
            <table>
              <caption>Изменение данных</caption>
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
                    required
                    value={updateTrip.regName}
                    onChange={(e) =>
                      setUpdateTrip({ ...updateTrip, regName: e.target.value })
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
                    value={updateTrip.title}
                    onChange={(e) =>
                      setUpdateTrip({
                        ...updateTrip,
                        title: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    required
                    type="text"
                    placeholder="Описание"
                    value={updateTrip.description}
                    onChange={(e) =>
                      setUpdateTrip({
                        ...updateTrip,
                        description: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  Дата отъезда
                  <input
                    required
                    type="date"
                    placeholder="Дата отъезда"
                    value={updateTrip.departureDate}
                    onChange={(e) =>
                      setUpdateTrip({
                        ...updateTrip,
                        departureDate: e.target.value,
                      })
                    }
                  />
                  Дата приезда
                  <input
                    required
                    type="date"
                    placeholder="Дата приезда"
                    value={updateTrip.arrivalDate}
                    onChange={(e) =>
                      setUpdateTrip({
                        ...updateTrip,
                        arrivalDate: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    required
                    type="number"
                    placeholder="Цена"
                    value={updateTrip.price}
                    min={0}
                    onChange={(e) =>
                      setUpdateTrip({
                        ...updateTrip,
                        price: Number(e.target.value),
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    required
                    type="text"
                    placeholder="Изображение"
                    value={updateTrip.img1}
                    onChange={(e) =>
                      setUpdateTrip({ ...updateTrip, img1: e.target.value })
                    }
                  />
                  <input
                    required
                    type="text"
                    placeholder="Изображение"
                    value={updateTrip.img2}
                    onChange={(e) =>
                      setUpdateTrip({ ...updateTrip, img2: e.target.value })
                    }
                  />
                  <input
                    required
                    type="text"
                    placeholder="Изображение"
                    value={updateTrip.img3}
                    onChange={(e) =>
                      setUpdateTrip({ ...updateTrip, img3: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tfoot>
                <button type="submit">Изменить</button>
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

export default Update;
