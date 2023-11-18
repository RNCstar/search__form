$(function () {
  $("#search_submit").on("click", () => {
    const search_form = $("#search_form");
    search_form.toggleClass("active");
    if ($("#search_form").hasClass("active")) {
      setTimeout(() => {
        $("#search_input").focus();
      }, 300);
    }
  });
});
