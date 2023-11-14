console.log("Hello World");

const ArrowButton = document.querySelector(".ArrowButton");
const Arrow = document.querySelector(".Arrow");

ArrowButton.addEventListener("click", () => {
    const mainBodySection = document.querySelector(".mainBody");
    mainBodySection.scrollIntoView({ behavior: "smooth" }); 
  });