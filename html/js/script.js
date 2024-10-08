jQuery(document).ready(function ($) {

  //select
  $('.select-block select').niceSelect();

  //tel-code
  var input = document.querySelector(".tel-code");
  window.intlTelInput(input, {
    localizedCountries: { 'ua': 'Ukraine' },
    preferredCountries: ['us'],
    InitialCountry: "",
    separateDialCode: true,

  });

  //marquee
  $('.marquee1').marquee({
    duration: 50000,
    gap:0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    loop:true,
    startVisible: true,
  });

  //faq
  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(document).on('click', '.accordion > .accordion-item .accordion-thumb', function (e){
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    })
  });
});