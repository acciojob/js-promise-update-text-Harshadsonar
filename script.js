//your JS code here. If required.
function updateElementText() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const element = document.getElementById("output");
      element.textContent = "Hello, world!";
      resolve("Hello, world!");
    }, 1000);
  });
}
updateElementText()
  .then((result) => {
    console.log(result); // "Hello, world!"
  })
  .catch((error) => {
    console.error(error);
  });
