function HidePersonalInfo() {
  document.getElementById("personal-info").style.visibility = "hidden";
  document.getElementById("ly-lich").style.color = "black";
  document.getElementById("ly-lich").addEventListener("mouseover", () => { document.getElementById("ly-lich").style.color = "#409eff"; })
  document.getElementById("ly-lich").addEventListener("mouseleave", () => { document.getElementById("ly-lich").style.color = "black"; });
  document.getElementById("ly-lich").style.borderBottom = "1px solid rgb(235, 239, 243)";

  document.getElementById("tem").style.color = "#409eff";
}

function ShowPersonalInfo() {
  document.getElementById("personal-info").style.visibility = "visible";
  document.getElementById("ly-lich").style.color = "#409eff";
  document.getElementById("ly-lich").style.borderBottom = "none";
  document.getElementById("ly-lich").addEventListener("mouseleave", () => { document.getElementById("ly-lich").style.color = "#409eff"; });
}

function ShowScoreStatus() {
  document.getElementById("grade").style.visibility = "visible";
  document.getElementById("trang-thai").style.color = "#409eff";
  document.getElementById("trang-thai").style.borderBottom = "none";
  document.getElementById("trang-thai").addEventListener("mouseleave", () => { document.getElementById("trang-thai").style.color = "#409eff"; });

}

function HideScoreStatus() {
  document.getElementById("grade").style.visibility = "hidden";
  document.getElementById("trang-thai").style.color = "black";
  document.getElementById("trang-thai").addEventListener("mouseover", () => { document.getElementById("trang-thai").style.color = "#409eff"; })
  document.getElementById("trang-thai").addEventListener("mouseleave", () => { document.getElementById("trang-thai").style.color = "black"; });


  document.getElementById("trang-thai").style.borderBottom = "1px solid rgb(235, 239, 243)";
}

ShowPersonalInfo();
ShowScoreStatus();