$(function () {
  const navbar = $("#nav");

  $(window).scroll(() => {
    if ($(window).scrollTop() <= 40) {
      navbar.addClass(".fixedNav");
    } else {
      navbar.removeClass(".fixedNav");
    }
  });
});
