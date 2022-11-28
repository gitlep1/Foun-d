import "./ShowItem.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShowItem.scss";
import { nanoid } from "nanoid";
import axios from "axios";

const ShowItem = ({ users, items }) => {
  const API = process.env.REACT_APP_API_URL;
  const { itemId } = useParams();

  const [userName, setUserName] = useState({});
  const [item, setItem] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`${API}/items/${itemId}`)
  //     .then((res) => {
  //       // setItems(res.data);
  //     })
  //     .catch((err) => setError(err));
  // }, []); // eslint-disable-line

  // const foundCorrectUser = users.map((user) => {
  //   if (item[0].userid === user.id) {
  //     return setUserName(user.username);
  //   }

  //   return null;
  // });
  return (
    <section id="showItemSection">
      {items.map((item) => {
        console.log(item.id);
        console.log(item.id === Number(itemId));
        if (item.id === Number(itemId)) {
          return (
            <div key={nanoid()}>
              <h1>Found by: {item.id}</h1>
              <h2>Title: {item.itemname}</h2>
              <img src={item.itemimg} alt="item" />
              <p>Description: {item.description}</p>
              <h3>Neighborhood: {item.neighborhood}</h3>{" "}
            </div>
          );
        }
      })}
      {error && <p>{error}</p>}
      {/* {console.log(item)} */}
      {/* {console.log(users)} */}
    </section>
  );
};

export default ShowItem;
