
  let first = Math.random();
  first = Math.floor((first*6)+1);

  let second = Math.random();
  second = Math.floor((second*6)+1);

  if (first > second)
  {
    document.querySelectorAll("h1")[0].textContent = "Player 1 wins!!!";
  }

  else if (first < second)
  {
    document.querySelectorAll("h1")[0].textContent = "Player 2 wins!!!";
  }
  else
  {
    document.querySelectorAll("h1")[0].textContent = "Draw";
  }


if (first === 1)
{
document.querySelectorAll(".nocircleone")[4].classList.remove("nocircleone");
}
else if (first === 2)
{
document.querySelectorAll(".nocircleone")[0].classList.remove("nocircleone");
document.querySelectorAll(".nocircleone")[7].classList.remove("nocircleone");
}
else if (first === 3)
{
document.querySelectorAll(".nocircleone")[0].classList.remove("nocircleone");
document.querySelectorAll(".nocircleone")[3].classList.remove("nocircleone");
document.querySelectorAll(".nocircleone")[6].classList.remove("nocircleone");
}
else if (first === 4)
{
document.querySelectorAll(".nocircleone")[0].classList.remove("nocircleone");
document.querySelectorAll(".nocircleone")[1].classList.remove("nocircleone");
document.querySelectorAll(".nocircleone")[6].classList.remove("nocircleone");
document.querySelectorAll(".nocircleone")[4].classList.remove("nocircleone");
}
else if (first === 5)
{
  document.querySelectorAll(".nocircleone")[0].classList.remove("nocircleone");
  document.querySelectorAll(".nocircleone")[1].classList.remove("nocircleone");
  document.querySelectorAll(".nocircleone")[2].classList.remove("nocircleone");
  document.querySelectorAll(".nocircleone")[3].classList.remove("nocircleone");
  document.querySelectorAll(".nocircleone")[4].classList.remove("nocircleone");
}
else if (first === 6)
{
  document.querySelectorAll(".nocircleone")[0].classList.remove("nocircleone");
  document.querySelectorAll(".nocircleone")[1].classList.remove("nocircleone");
  document.querySelectorAll(".nocircleone")[3].classList.remove("nocircleone");
  document.querySelectorAll(".nocircleone")[5].classList.remove("nocircleone");
  document.querySelectorAll(".nocircleone")[3].classList.remove("nocircleone");
  document.querySelectorAll(".nocircleone")[1].classList.remove("nocircleone");

}

if (second === 1)
{
document.querySelectorAll(".nocircletwo")[4].classList.remove("nocircletwo");
}
else if (second === 2)
{
document.querySelectorAll(".nocircletwo")[0].classList.remove("nocircletwo");
document.querySelectorAll(".nocircletwo")[7].classList.remove("nocircletwo");
}
else if (second === 3)
{
document.querySelectorAll(".nocircletwo")[0].classList.remove("nocircletwo");
document.querySelectorAll(".nocircletwo")[3].classList.remove("nocircletwo");
document.querySelectorAll(".nocircletwo")[6].classList.remove("nocircletwo");
}
else if (second === 4)
{
document.querySelectorAll(".nocircletwo")[0].classList.remove("nocircletwo");
document.querySelectorAll(".nocircletwo")[1].classList.remove("nocircletwo");
document.querySelectorAll(".nocircletwo")[6].classList.remove("nocircletwo");
document.querySelectorAll(".nocircletwo")[4].classList.remove("nocircletwo");
}
else if (second === 5)
{
  document.querySelectorAll(".nocircletwo")[0].classList.remove("nocircletwo");
  document.querySelectorAll(".nocircletwo")[1].classList.remove("nocircletwo");
  document.querySelectorAll(".nocircletwo")[2].classList.remove("nocircletwo");
  document.querySelectorAll(".nocircletwo")[3].classList.remove("nocircletwo");
  document.querySelectorAll(".nocircletwo")[4].classList.remove("nocircletwo");
}
else if (second === 6)
{
  document.querySelectorAll(".nocircletwo")[0].classList.remove("nocircletwo");
  document.querySelectorAll(".nocircletwo")[4].classList.remove("nocircletwo");
  document.querySelectorAll(".nocircletwo")[1].classList.remove("nocircletwo");
  document.querySelectorAll(".nocircletwo")[5].classList.remove("nocircletwo");
  document.querySelectorAll(".nocircletwo")[3].classList.remove("nocircletwo");
  document.querySelectorAll(".nocircletwo")[1].classList.remove("nocircletwo");

}
