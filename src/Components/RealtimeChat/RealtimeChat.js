import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./RealtimeChat.css";
import fire from "../../firebase-config";
import {
  ref,
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { timeConverter } from "../../helpers/timeConverter";
import { BsChatDots } from "react-icons/bs";
import { RiMailSendLine, RiCloseCircleFill } from "react-icons/ri";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
const db = getFirestore(fire);

const RealtimeChat = () => {
  const [displayChat, setDisplayChat] = useState(false);
  const [messagesArr, setMessagesArr] = useState([]);
  const [message, setMessage] = useState("");

  const {
    user: { email },
  } = useAuth();

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let messagesArray = [];
      querySnapshot.forEach((doc) => {
        messagesArray.push({ ...doc.data() });
      });
      messagesArray.sort((a, b) => a.createdData - b.createdData);
      setMessagesArr(messagesArray);
    });
  }, []);

  const addMessage = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "messages/"), {
      message: message,
      email: email,
      createdData: Date.now(),
    });
    setMessage("");
  };

  return (
    <>
      {displayChat === false ? (
        <BsChatDots className="openChat" onClick={() => setDisplayChat(true)} />
      ) : (
        <div className="chat">
          <div className="chat__navbar">
            <RiCloseCircleFill
              className="closeChat"
              onClick={() => setDisplayChat(false)}
            />
            <br />
            <p className="chat__navbar_pTop">Напишите ваше сообщение</p>
            <p className="chat__navbar_pBtm">Операторы онлайн!</p>
          </div>
          {!email ? (
            <div className="chat__noEmail">
              <h3>
                Для соединения с оператором зарегистрируйтесь на сайте либо
                войдите через свой аккаунт!
              </h3>
              <Link to="/auth">
                <button onClick={() => setDisplayChat(false)}>
                  Регистарция
                </button>
                <button onClick={() => setDisplayChat(false)}>Вход</button>
              </Link>
              <div
                className="logoGuideInChat"
                onClick={() => setDisplayChat(false)}
              ></div>
            </div>
          ) : (
            <>
              {messagesArr ? (
                <div className="chatOver" id="scroll">
                  {messagesArr.map((item, index) => (
                    <div key={index}>
                      {email === item.email ? null : (
                        <span className="chatOver__name">
                          {item.email.match(/^([^@]*)@/)[1]}
                        </span>
                      )}
                      <div
                        className="chatOver__blockMess"
                        style={
                          email === item.email
                            ? { marginLeft: "35%" }
                            : {
                                marginLeft: "3%",
                                backgroundColor: "white",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                              }
                        }
                      >
                        <span
                          className="chatOver__message"
                          style={
                            email === item.email
                              ? { color: "white" }
                              : {
                                  color: "black",
                                }
                          }
                        >
                          {item.message}
                        </span>
                        <span className="chatOver__time">
                          {timeConverter(Math.floor(item.createdData / 1000))}
                        </span>
                      </div>
                    </div>
                  ))}{" "}
                </div>
              ) : (
                <Loader type="Oval" color="#00BFFF" height={40} width={40} />
              )}
              <hr />
              <div className="chat__footer">
                <form onSubmit={addMessage}>
                  <input
                    placeholder="Введите сообщение..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {message !== "" ? (
                    <button type="submit">
                      <RiMailSendLine className="sendM" />
                    </button>
                  ) : (
                    <button disabled>
                      <RiMailSendLine className="sendM" />
                    </button>
                  )}
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default RealtimeChat;
