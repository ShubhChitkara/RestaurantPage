const aboutBox = () => {
    const centerContent = document.querySelector("#content");
    const introBox = document.createElement("div");
    introBox.classList.add("introbox");
    const hthree = document.createElement("h3");
    hthree.innerHTML = "Contact Us";
    const hfive = document.createElement("h5");
    hfive.innerHTML = "Visit us at:      Phone: (123) 456-7890      Email: info@filipinorestaurant.com";
    introBox.appendChild(hthree);
    introBox.appendChild(hfive);
    centerContent.appendChild(introBox);
  };
  export {aboutBox};