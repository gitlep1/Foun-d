// import axios from "axios";
// import FAQ from "./FAQ";
// import React, { useState, useEffect } from "react";

// const API = process.env.REACT_APP_API_URL;

// export default function FAQs() {
//   const [FAQs, setFAQs] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${API}/faq`)
//       .then((response) => {
//         setFAQs(response.data);
//       })
//       .catch((error) => console.log(error.message));
//   }, []);
//   console.log(FAQs);
//   return (
//     <section className="FAQs">
//       {FAQs.length > 0
//         ? FAQs.map((FAQs, index) => {
//             console.log(FAQs);
//             return <FAQ key={index} FAQs={FAQs} />;
//           })
//         : null}
//     </section>
//   );
// }

// Testing FAQ backend data.
// - isaac
