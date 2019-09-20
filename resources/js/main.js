$( document ).ready(() => {

  // Element Color Key

  // Toggles entire table styles (big button above key)
  $('.b-refresh').on('click', event => {
    $('.alkali-metal').toggleClass('grayed-out');
    $('.alkaline-earth').toggleClass('grayed-out');
    $('.transition-metal').toggleClass('grayed-out');
    $('.other-metal').toggleClass('grayed-out');
    $('.semi-metal').toggleClass('grayed-out');
    $('.non-metal').toggleClass('grayed-out');
    $('.halogen').toggleClass('grayed-out');
    $('.noble-gas').toggleClass('grayed-out');
    // $('.lanthanide').toggleClass('lanthanide-on');
    // $('.actinide').toggleClass('actinide-on');
  });

  // Toggles individual element group colors
  $('.b-one').on('click', event => {
    $('.alkali-metal').toggleClass('grayed-out');
  });
  $('.b-two').on('click', event => {
    $('.alkaline-earth').toggleClass('grayed-out');
  });
  $('.b-three').on('click', event => {
    $('.transition-metal').toggleClass('grayed-out');
  });
  $('.b-four').on('click', event => {
    $('.other-metal').toggleClass('grayed-out');
  });
  $('.b-five').on('click', event => {
    $('.semi-metal').toggleClass('grayed-out');
  });
  $('.b-six').on('click', event => {
    $('.non-metal').toggleClass('grayed-out');
  });
  $('.b-seven').on('click', event => {
    $('.halogen').toggleClass('grayed-out');
  });
  $('.b-eight').on('click', event => {
    $('.noble-gas').toggleClass('grayed-out');
  });
  $('.b-nine').on('click', event => {
    $('.lanthanide').toggleClass('lanthanide-on');
  });
  $('.b-ten').on('click', event => {
    $('.actinide').toggleClass('actinide-on');
  });

  // ELEMENT INFO

  // Toggles Atomic Number
  $('#atomic-number').on('click', event => {
    $('.atomic-num').toggle();
  });

  // Toggles Chemical Symbol
  $('#chemical-symbol').on('click', event => {
    $('.element-container > h1').toggle();
  });

  // Toggles Element Name
  $('#element-name').on('click', event => {
    $('.element-container > h2').toggle();
  });

  // Toggles Atomic Mass
  $('#atomic-mass').on('click', event => {
    $('.element-container > h4').toggle();
  });

  // Toggles Group Number
  $('#group-number').on('click', event => {
    $('.group-number').toggle();
  });

  // Toggles Test Mode
  $('#test-mode').on('click', event => {
    $('.element-container').toggleClass('test-mode');
    $('.element-color-key-container').toggle();
  });


// modals ==========================================================

$(".modal-button").on("click", function() {
  var modal = $(this).data("modal");
  $(modal).show();
});

$(".modal").on("click", function(e) {
  var className = e.target.className;
  if(className === "modal" || className === "close"){
    $(this).closest(".modal").hide();
    e.stopPropagation();
  }
});

});
