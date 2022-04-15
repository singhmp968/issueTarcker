let track = false;
function handleleftAsidesec() {
  if (track) {
    document.getElementById("left").style.display = "none";
    let rightsec = document.getElementById("right");
    rightsec.style.width = 100 + "%";
    track = false;
  } else {
    document.getElementById("left").style.display = "inline-block";
    let rightsec = document.getElementById("right");
    rightsec.style.width = 70 + "%";
    track = true;
  }
}
