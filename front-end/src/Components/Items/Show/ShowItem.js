import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./ShowItem.scss";
import { nanoid } from "nanoid";
import axios from "axios";

const ShowItem = ({ handleClaim, users, user, items }) => {
  const API = process.env.REACT_APP_API_URL;
  const { itemId } = useParams();

  const [userName, setUserName] = useState({});
  const [item, setItem] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/items/${itemId}`)
      .then((res) => {
        setUserName(...res.data);
      })
      .catch((err) => setError(err));
  }, []); // eslint-disable-line

	let name = users.filter((user) => user.id === userName.userid)

  // const foundCorrectUser = users.map((user) => {
  //   if (item[0].userid === user.id) {
  //     return setUserName(user.username);
  //   }

    // return null;
  // });

  return (
    <section id="showItemSection">
      {items.map((item) => {
        // console.log(item);
        // console.log(item.id === Number(itemId));
        if (item.id === Number(itemId)) {
          return (
            <div id='show-item-div' key={nanoid()}>
							<img id='show-image' src={item.itemimg} alt="item" />
							<div>
								<h1>Found by: {name[0] ? name[0].username : item.userid}</h1>
								<h2>Title: {item.itemname}</h2>
								<h3>Description: {item.description}</h3>
								<h3>Borough: {item.borough}</h3>{" "}
								<h3>Neighborhood: {item.neighborhood}</h3>{" "}
								<h3>Zipcode: {item.zipcode}</h3>{" "}
								{ name[0] && user.username !== name[0].username ? <Button onClick={() => {handleClaim(item.userid, item.itemname)}} id='claim-button' variant="success" >Claim 👉 {item.itemname}</Button> : ''}
							</div>
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
