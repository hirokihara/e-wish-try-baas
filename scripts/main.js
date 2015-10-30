(function () {
  'use strict';
  var milkcocoa = new MilkCocoa("juiceig779397.mlkcca.com");
  var dataStore = milkcocoa.dataStore("chat");
  var me, message_text;

  window.onload = function(){
    me = this;
    me.message_text = document.getElementById("message_text");
  };

  document.getElementById("btn").onclick = function(e){
      var text = me.message_text.value;
      dataStore.push({ message : text });
  };
})();
