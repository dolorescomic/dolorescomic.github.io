//wow.js
new WOW().init();

//check browser if ie
function isIE() {
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    return true;
  } else {
    $('#no_ie_text').hide();
    return false;
  }
}

isIE();

//accordion panel	
// Toggle plus minus icon on show hide of collapse element
$(".accordion .collapse").on('show.bs.collapse', function () {
  $(this).parent().find(".fas.fa-plus").removeClass("fa-plus").addClass("fa-minus");
}).on('hide.bs.collapse', function () {
  $(this).parent().find(".fas.fa-minus").removeClass("fa-minus").addClass("fa-plus");
});

//tooltip
$('[data-toggle="tooltip"]').tooltip();

//no-ie modal
$("#no_ie").click(function () {
  if (isIE() == true) { //if ie
    $("#modal-no-ie").modal();
    return false;
  }
});

//Modal with jQuery Cookie
//$("#modal-popup").modal();
var popup_cookie = $.cookie($('#modal-popup-check').attr('name'));
if (popup_cookie !== 'true') {
  $("#modal-popup").modal();
}

$("#modal-popup-check").change(function () {
  $.cookie($(this).attr("name"), $(this).prop('checked'), {    
    expires: 180
  });
});

//popup modal
$("#modal-popup-more").click(function(){
  var popup_info_top = $('#popup_info').offset().top - 63;
  $('html,body').stop().animate({scrollTop: popup_info_top },1000,'easeInOutExpo');

  setTimeout(function(){
    $("#popup_info button.btn-link").focus();
      $("#popup_info .collapse").collapse('show');
  },500);
})