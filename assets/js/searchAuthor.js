{
  function searchAuthor() {
    let searchAuthor = $("#searchAuthor");
    // console.log("dasda", this); // point towards window
    searchAuthor.submit(function (e) {
      console.log("asdasd", this); // pointing towards to form
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "/issue/searchTeiNDesc",
        data: searchAuthor.serialize(),
        success: function (data) {
          console.log("this is", this); // point toward ajax obj
          console.log(data);
          showSearchDate(data.descAndAuthDet);
        },
        error: function (err) {
          console.log("erros", err);
        },
      });
    });
  }
  let showSearchDate = function (data) {
    console.log("wind", this); // point toward window obj
    let projectDetSection = $("#projectDetSection");
    console.log(projectDetSection);
    projectDetSection.empty();
    console.log(data, "dasdad");
    let searchDisp = "";
    for (let i in data) {
      searchDisp += `<div>
      <div>
      Title- ${data[i].title}
      <p> Author ${data[i].author} </p>
      </div>
    </div>`;
    }
    $("#projectDetSection").append(searchDisp);
  };
  searchAuthor();
}
