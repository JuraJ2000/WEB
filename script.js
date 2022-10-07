$(document).ready(function () {
  $("p").hover(
    function () {
      $(this).css("color", "silver");
    },
    function () {
      $(this).css("color", "red");
    }
  );
});

$(document).ready(function () {
  $(".MsoNormal").click(function () {
    $(".MsoNormal").fadeOut("slow");
  });
});

$(document).ready(function () {
  $("div").animate({
    left: "250px",
    height: "+=1000px",
    width: "+=1000px",
  });
});
