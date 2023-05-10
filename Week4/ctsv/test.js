var tmp_id;
var id_list = ['ly-lich', 'quyet-dinh', 'khen-thuong', 'lien-he', 'nhan-xet', 'hoat-dong-tham-gia'];

function HidePersonalInfo(id) {
  document.getElementById("personal-info").style.visibility = "hidden";
  document.getElementById("ly-lich").style.borderBottom = "1px solid rgb(235, 239, 243)";
  if (id === tmp_id) return;
  for (let idx = 0; idx < id_list.length; ++idx) {
    if (id_list[idx] === id) {
      document.getElementById(id).style.color = "#409eff";
      document.getElementById(id).addEventListener("mouseleave", () => { document.getElementById(id).style.color = "#409eff"; });
    }
    else {
      document.getElementById(id_list[idx]).style.color = "black";
      document.getElementById(id_list[idx]).addEventListener("mouseover", () => { document.getElementById(id_list[idx]).style.color = "#409eff"; });
      document.getElementById(id_list[idx]).addEventListener("mouseleave", () => { document.getElementById(id_list[idx]).style.color = "black"; });
    }
  }
  tmp_id = id;
}

function ShowPersonalInfo() {
  for (let idx = 0; idx < id_list.length; ++idx) {
    if (id_list[idx] === 'ly-lich') {
      document.getElementById('ly-lich').style.color = "#409eff";
      document.getElementById('ly-lich').addEventListener("mouseleave", () => { document.getElementById('ly-lich').style.color = "#409eff"; });
    }
    else {
      document.getElementById(id_list[idx]).style.color = "black";
      document.getElementById(id_list[idx]).addEventListener("mouseover", () => { document.getElementById(id_list[idx]).style.color = "#409eff"; });
      document.getElementById(id_list[idx]).addEventListener("mouseleave", () => { document.getElementById(id_list[idx]).style.color = "black"; });
    }
  }
  document.getElementById("personal-info").style.visibility = "visible";
  document.getElementById("ly-lich").style.borderBottom = "none";
  tmp_id = 'ly-lich';
}

function ShowScoreStatus() {
  document.getElementById("grade").style.visibility = "visible";
  document.getElementById("trang-thai").style.color = "#409eff";
  document.getElementById("trang-thai").style.borderBottom = "none";
  document.getElementById("trang-thai").addEventListener("mouseleave", () => { document.getElementById("trang-thai").style.color = "#409eff"; });
  document.getElementById("quan-ly").style.color = "black";
  document.getElementById("quan-ly").addEventListener("mouseover", () => { document.getElementById("quan-ly").style.color = "#409eff"; });
  document.getElementById("quan-ly").addEventListener("mouseleave", () => { document.getElementById("quan-ly").style.color = "black"; });
  document.getElementById("quan-ly").style.borderBottom = "1px solid rgb(235, 239, 243)";
  if (tmp_id) document.getElementById(tmp_id).style.color = "#409eff";
}

function HideScoreStatus() {
  document.getElementById("grade").style.visibility = "hidden";
  document.getElementById("trang-thai").style.color = "black";
  document.getElementById("trang-thai").addEventListener("mouseover", () => { document.getElementById("trang-thai").style.color = "#409eff"; })
  document.getElementById("trang-thai").addEventListener("mouseleave", () => { document.getElementById("trang-thai").style.color = "black"; });
  document.getElementById("trang-thai").style.borderBottom = "1px solid rgb(235, 239, 243)";
  document.getElementById("quan-ly").style.color = "#409eff";
  document.getElementById("quan-ly").style.borderBottom = "none";
  document.getElementById("quan-ly").addEventListener("mouseleave", () => { document.getElementById("quan-ly").style.color = "#409eff"; });
  if (tmp_id) document.getElementById(tmp_id).style.color = "#409eff";
}

ShowPersonalInfo();
ShowScoreStatus();
tmp_id = 'ly-lich';