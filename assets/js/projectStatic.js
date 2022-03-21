function selectlabel(e) {
  // todo Need to complete
  console.log(e.target.value);
}
let repo = $("#reportissueform");
repo.submit(function (e) {
  e.preventDefault();
  console.log(repo.serialize());
});
