import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { tripsContext } from "../../contexts/TripsContext";
import { timeConverter } from "../../helpers/timeConverter";
import "./Comments.css";

const Comments = ({ id, tripsDet }) => {
  let dataTime = Math.floor(Date.now() / 1000);
  const { addComments, getTripsDetails } = useContext(tripsContext);
  const {
    user: { email },
  } = useAuth();

  useEffect(() => {
    getTripsDetails(id);
  }, []);

  const [newDataWithComment, setNewDataWithComment] = useState(tripsDet);
  const [comment, setComment] = useState({
    name: email,
    commentText: "",
    time: dataTime,
  });

  function handleValues(e) {
    let newComment = {
      ...comment,
      commentText: e.target.value,
    };
    setComment(newComment);
  }

  function handleAddComment() {
    if (comment.commentText === "") {
      alert("комментарий пустой");
    } else {
      //   let arr = tripsDet.comments;
      //   arr.push(comment);
      //   setNewDataWithComment({ ...newDataWithComment, comments: arr });
      tripsDet.comments.push(comment);
      addComments(id, tripsDet);
      getTripsDetails(id);
      setComment({
        name: email,
        commentText: "",
        time: dataTime,
      });
    }
  }
  return (
    <div className=" container containerComments">
      <div className="commentsInput">
        <h3 style={{ margin: "0", opacity: "0.7" }}>
          Помогите нам стать лучше!
        </h3>
        <p>
          <textarea
            name="commentText"
            type="text"
            value={comment.commentText}
            onChange={handleValues}
            cols="45"
            row="10"
            maxLength="1000"
          ></textarea>
        </p>
        {email ? (
          <button onClick={() => handleAddComment()}>Оставить отзыв</button>
        ) : (
          <>
            <p style={{ fontSize: "1.1rem", opacity: "0.5" }}>
              <em>Вы не можете оставить отзыв пока не зарегистрируетесь!</em>
            </p>
            <Link to="/auth">
              <button>Регистрация</button>
            </Link>
          </>
        )}
      </div>
      <div className="commentsRead">
        {tripsDet.comments ? (
          tripsDet.comments.map((item, index) => (
            <div key={index} className="commentUser">
              <div className="timeName">
                <p className="name">
                  <em>{item.name}:</em>
                </p>
                <p className="time">
                  <em>{timeConverter(item.time)}</em>
                </p>
              </div>
              <p className="commentText">{item.commentText}</p>
            </div>
          ))
        ) : (
          <div>На данный момент отзывовов нет...</div>
        )}
      </div>
    </div>
  );
};

export default Comments;
