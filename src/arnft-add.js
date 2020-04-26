ARnft.prototype.add = function (obj) {
  var root = this.root;
  console.log('obj inside add', obj);
  document.addEventListener('getNFTData', function (ev) {
    console.log(ev);
    var msg = ev.detail;
    obj.position.y = (msg.height / msg.dpi * 2.54 * 10)/2.0;
    obj.position.x = (msg.width / msg.dpi * 2.54 * 10)/2.0;
  })
  root.matrixAutoUpdate = false;
  root.add(obj);
};
