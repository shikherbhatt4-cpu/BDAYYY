function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function unlock() {
  if (document.getElementById("pass").value === "161024") {
    showScreen("wish");
    document.getElementById("bgm").play();
  } else {
    alert("Wrong secret 😜");
  }
}

function showCake() {
  showScreen("cakeScreen");
}

function blowCandle() {
  document.querySelector(".flame").style.display = "none";

  setTimeout(() => {
    showScreen("gift");
  }, 800);
}

function openGift() {
  document.getElementById("menu").style.display = "block";
}
function goback() {
  document.getElementById('backBtn').addEventListener('click', function() {
    showGiftInterface(); // correct
});

}