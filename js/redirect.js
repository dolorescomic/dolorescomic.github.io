//判斷地址有效性
$.ajax({
  url: url,
  type: 'GET',
  complete: function (response) {
    if ( url == '' || response.status == 404) {
      document.location.href = "../404.html";
    } else {
      document.location.href = url;
    }
  }
});
