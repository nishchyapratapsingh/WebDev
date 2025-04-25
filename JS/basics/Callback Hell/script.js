//Callback hell simple example
//getNextData is callback function
function getData(dataID, getNextData) {
  setTimeout(() => {
    console.log("data", dataID);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

console.log("Fetching data 1...");
getData(1, () => {
  console.log("Fetching data 2...");
  getData(2, () => {
    console.log("Fetching data 3...");
    getData(3, () => {
      console.log("Fetching data 4...");
      getData(4);
    });
  });
});
