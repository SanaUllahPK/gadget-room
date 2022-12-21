$(document).ready(function () {
  const tabletHeaderBody = $(".tablet-header__body");
  const tabletHeaderToggleBtn = $(".tablet-header-toggler");
  tabletHeaderToggleBtn.on("click", function (e) {
    console.log("clicked");
    tabletHeaderBody.toggleClass("d-none");
  });
});
