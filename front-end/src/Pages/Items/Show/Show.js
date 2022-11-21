import Show from "../../../Components/Items/Show/ShowItem";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// // 'https://found.onrender.com'

// function Found() {
//   const API = process.env.REACT_APP_API_URL;
//   const [found, setFound] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${API}/items`)
//       .then((res) => setFound(res.data))
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []); // eslint-disable-line

//   const foundList = found.map((find, index) => {
//     return (
//       <li className="found-li" key={index}>
//         <p>{find.userid}</p>
//         <p>Title: {find.itemname}</p>
//         <p>{find.itemimg}</p>
//         <p>Description: {find.description}</p>
//         <p>{find.neighborhood}</p>
//       </li>
//     );
//   });

//   return (
//     <div className="found-page">
//       <h1> Found Items:</h1>
//       <h3>Total: </h3>
//       <ul className="found-ul">{foundList}</ul>
//     </div>
//   );
// }
// export default Found;

const Showpage = ({ users }) => {
  return (
    <>
      <Show users={users} />
    </>
  );
};

export default Showpage;
