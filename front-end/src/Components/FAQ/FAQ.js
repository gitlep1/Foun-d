// import React from "react";

// const FAQ = ({ FAQs }) => {
//   return (
//     <article>
//       <h4>{FAQs.userQuestion}</h4>
//     </article>
//   );
// };

// export default FAQ;
// Testing FAQ backend setup
// - isaac

import React from "react";

export default function FAQ() {
  return (
    <div>
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <ol>How do I make money on Found It?</ol>
      <ul>
        - As a Finder you can earn money on tips for finding other users items
        and even message them in advance to agree on a price once found!
      </ul>
      <br />
      <ol>How long does it take to become a trusted Finder?</ol>
      <ul>
        - Becoming a trusted finder is based off your finder rating, once you
        hit 5 found items you have an option to opt-in!
      </ul>
      <br />
      <ol>How do I tip my finder?</ol>
      <ul>
        - You can link any of your favorite payment recieveing options on your
        profile or in messages to help your finder!
      </ul>
    </div>
  );
}
