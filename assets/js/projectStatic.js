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
  valsel.empty();
  let eVal = document.getElementById("selectBox");
  let strUser = eVal.options[eVal.selectedIndex].text;
  console.log(strUser);
  checkifAlreadySelectOrNot(strUser);
  console.log("dasda", selectedArr);
  //valsel.append(`<div>${strUser}</div>`);
  let taggedelement = "";
  for (let i in selectedArr) {
    taggedelement += `<div>${selectedArr[i]}</div>`;
  }
  valsel.append(taggedelement);
}
let repo = $("#reportissueform");
repo.submit(function (e) {
  let label = "label=";
  e.preventDefault();
  console.log("asdas", repo.serialize());
  let abc = repo.serialize().split("&");
  console.log(abc);
  abc.pop();
  for (a of selectedArr) {
    label += a + ",";
  }
  let bobyData = "";
  for (let i = 0; i < abc.length; i++) {
    bobyData += abc[i] + "&";
  }
  bobyData += label;
  console.log("dasda==>", bobyData);
  // tobeSend = [repo.serialize(), selectedArr];
  // console.log("to be send", tobeSend);
  $.ajax({
    type: "POST",
    url: "/issue/createIssue",
    data: bobyData,
  });
});
