import React, { useState } from "react";

// export const getCategories = () => {
//   let myHeaders = new Headers();
//   myHeaders.append(
//     "Authorization",
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQzYzMxY2MzZTU4ZTBmODQzYjJhYTYiLCJpYXQiOjE2MjQ0OTA4MTd9.0kKUNx_IeJ_KkORf7SgJdNFG-gjf2SiTa4TJaVK0GtA"
//   );

//   let requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch(
//     "https://morning-meadow-12976.herokuapp.com/api/categories/60dcf2b52894d90015e29e2b",
//     requestOptions
//   )
//     .then((response) => response.text())
//     .then((result) => console.log("CAT EM GFET", result))
//     .catch((error) => console.log("error", error));
// };

const handeTr = (transactions) => {
  console.log("TRANSACTIONS EN GET", transactions);
};

export const getTransactions = () => {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQzYzMxY2MzZTU4ZTBmODQzYjJhYTYiLCJpYXQiOjE2MjQ0OTA4MTd9.0kKUNx_IeJ_KkORf7SgJdNFG-gjf2SiTa4TJaVK0GtA"
  );

  let requestOptions = {
    method: "GET",
    // headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://morning-meadow-12976.herokuapp.com/api/transactions/60dcf2b52894d90015e29e2b",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log("TR EM GFET", result))
    .catch((error) => console.log("error", error));
};
