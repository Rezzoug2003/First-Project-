document.onclick = (e) => {
  console.log(e.target);
  console.log(e.target.classList.contains("cc"));
  if (
    e.target === document.querySelector(".icon span") ||
    e.target === document.querySelector(".icon") ||
    e.target === document.querySelector(".links") ||
    e.target.classList.contains("cc")
  ) {
    document.querySelector(".links ul").style.display = "block";
  } else {
    document.querySelector(".links ul").style.display = "none";
  }
};
let a = "20",
  b = 30,
  c = true;
console.log(-"-100" * "20");
console.table(["bilal", "osama"]);


