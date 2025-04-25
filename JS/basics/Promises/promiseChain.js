function getData(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataID);
      resolve(); //no resolve->then() won't work
    }, 2000);
  });
}

//promise chain syntax 1

// getData(1).then(() => {
//   getData(2).then(() => {
//     getData(3).then(() => {
//       getData(4);
//     });
//   });
// });

//below is proper syntax

getData(5)
  .then(() => {
    return getData(6);
  })
  .then(() => {
    return getData(7);
  })
  .then(() => {
    return getData(8);
  });
