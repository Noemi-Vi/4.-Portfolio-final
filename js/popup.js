$(".module").click(() => {
  $(".lightbox").css({
    display: "flex",
  });
});
$(".module-sillas img").click(() => {
  $(".lightbox-sillas").css({
    display: "flex",
  });
});
$(".module-bestiary img").click(() => {
  $(".lightbox-bestiary").css({
    display: "flex",
  });
});
$(".module-planet img").click(() => {
  $(".lightbox-planet").css({
    display: "flex",
  });
});

$("#pixar").click(() => {
  $(".lightbox").css({
    display: "none ",
  });
});
$("#sillas").click(() => {
  $(".lightbox-sillas").css({
    display: "none ",
  });
});
$("#bestiary").click(() => {
  $(".lightbox-bestiary").css({
    display: "none ",
  });
});
$("#planet").click(() => {
  $(".lightbox-planet").css({
    display: "none ",
  });
});
