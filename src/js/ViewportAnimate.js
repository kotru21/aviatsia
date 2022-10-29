jQuery(document).ready(function ($) {
  $(".hello_container").viewportChecker({
    classToAdd: "animate",
    invertBottomOffset: true,
    repeat: false,
    callbackFunction: function () {},
    scrollHorizontal: false,
  });
  $("p").viewportChecker({
    classToAdd: "animate",
    invertBottomOffset: true,
    repeat: false,
    callbackFunction: function () {},
    scrollHorizontal: false,
  });
});
