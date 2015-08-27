var h = function (e) {
  var fr = new FileReader();
  fr.onload = function (e) {
    var img = new Image();
    img.onload = function () {
      var MAXWidthHeight = 1024;
      var r = MAXWidthHeight / Math.max(this.width, this.height),
              w = Math.round(this.width * r),
              h = Math.round(this.height * r),
              c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      c.getContext("2d").drawImage(this, 0, 0, w, h);
      this.src = c.toDataURL();
      //document.body.appendChild(this);
    }
    console.log(e.target.result);
    img.src = e.target.result;
  }
  fr.readAsDataURL(e.target.files[0]);
}
window.onload = function () {
  document.getElementById('f').addEventListener('change', h, false);
}