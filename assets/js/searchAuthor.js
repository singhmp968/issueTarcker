{
  function searchAuthor() {
    let searchAuthor = $("#searchAuthor");
    console.log("dasda");
    searchAuthor.submit(function (e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "/issue/searchTeiNDesc",
        data: searchAuthor.serialize(),
        success: function (data) {
          console.log(this);
          console.log(data);
          showSearchDate();
        },
        error: function (err) {
          console.log("erros", err);
        },
      });
    });
  }
  let showSearchDate = function (req, res) {
    let projectDetSection = $("#projectDetSection");
    console.log(projectDetSection);
    projectDetSection.empty();
  };
  searchAuthor();
}
