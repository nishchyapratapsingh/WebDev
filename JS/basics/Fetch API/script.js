const url = "https://dog.ceo/api/breeds/image/random";

const getDogImage = async () => {
  let response = await fetch(url);
  let data = await response.json();
  document.querySelector(".dogImage").src = data.message;  // Display dog image
};

document.querySelector(".GetBtn").addEventListener("click", getDogImage);
