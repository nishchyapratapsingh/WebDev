function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data");
      resolve("Success!");
    }, 2000);
  });
}

console.log("Fetching DataTransfer.apply.call.");
asyncFunc().then((res) => {
  console.log("Data fetched");
  console.log(res);
});
