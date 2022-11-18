import { useState, useEffect } from 'react';
import axios from 'axios';
import './MyItems.scss';

const API = process.env.REACT_APP_API_URL;

const MyItems = () => {
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/items`)
      .then((res) => setUserItems(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userId = userItems.map((item) => {
    const usersId = item.userId;
    return usersId;
  });

  const myItemsList = userItems.map((item, index) => {
    if (Object.values(item).includes(1)) {
      return (
        <li key={index}>
          {/* <p>{find.userid}</p> */}
          <p>Title: {item.itemname}</p>
          <p>{item.itemimg}</p>
          <p>Description: {item.description}</p>
          <p>{item.neighborhood}</p>
        </li>
      );
    }
  });

const total = myItemsList.length

  return (
    <>
      <div>
        <h1 id="myitems-heading">My Items</h1>
        <h3 id="myitems-heading">Total: {total} </h3>
      </div>
      <div id="container">
        <ul>
            <li id="myitems-list">{myItemsList}</li>
            </ul>
      </div>
    </>
  );
};
export default MyItems;
