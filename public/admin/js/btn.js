function btn(e) {
  var text = e.innerHTML;
  e.innerHTML = "<i class='fa fa-spinner fa-spin '></i> " + text;
}
