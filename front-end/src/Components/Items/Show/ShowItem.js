import "./ShowItem.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowItem = ({ users }) => {
  const API = process.env.REACT_APP_API_URL;
  const { itemId } = useParams();

  const [userName, setUserName] = useState({});
  const [item, setItem] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/items/${itemId}`)
      .then((res) => setItem(res.data))
      .catch((err) => setError(err));
  }, []); // eslint-disable-line

  // const foundCorrectUser = users.map((user) => {
  //   if (item[0].userid === user.id) {
  //     return setUserName(user.username);
  //   }

  //   return null;
  // });

  return (
    <section id="showItemSection">
      {error && <p>{error}</p>}
      {/* {console.log(item)} */}
      <h1>Found by: {item[0].userid}</h1>
      <h2>Title: {item[0].itemname}</h2>
      <img src={item[0].itemimg} alt="item" />
      <p>Description: {item[0].description}</p>
      <h3>Neighborhood: {item[0].neighborhood}</h3>
    </section>
  );
};

export default ShowItem;
