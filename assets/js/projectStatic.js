let valsel = $("#valueSelected");
let selectedArr = [];
function checkifAlreadySelectOrNot(strUser) {
  check = false;
  for (let i of selectedArr) {
    if (i === strUser) {
      check = true;
      break;
    }
    check = false;
  }
  if (!check) {
    selectedArr.push(strUser);
  }
}
async function selectlabel(e) {
  // todo Need to complete

  let eVal = document.getElementById("selectBox");
  let strUser = eVal.options[eVal.selectedIndex].text;
  console.log(strUser);
  checkifAlreadySelectOrNot(strUser);
  console.log("dasda", selectedArr);
  //valsel.append(`<div>${strUser}</div>`);
  let taggedelement = "";
  for (let i in selectedArr) {
    taggedelement += `<div>${strUser}</div>`;
  }
  valsel.append(taggedelement);
}
let repo = $("#reportissueform");
repo.submit(function (e) {
  e.preventDefault();
  console.log(repo.serialize());
});
