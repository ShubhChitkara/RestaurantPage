const menuBox = () => {
  const centerContent = document.querySelector("#content");
  const introBox = document.createElement("div");
  introBox.classList.add("introbox");
  const hthree = document.createElement("h3");
  hthree.innerHTML = "Butter Chicken";
  const hfive = document.createElement("h5");
  hfive.innerHTML =
    "Butter chicken, traditionally known as murgh makhani, is an Indian dish originating in Delhi.It is a type of curry made from chicken with a spiced tomato and butter (makhan) sauce. Its sauce is known for its rich texture.";
  introBox.appendChild(hthree);
  introBox.appendChild(hfive);
  centerContent.appendChild(introBox);
};
export {menuBox};
