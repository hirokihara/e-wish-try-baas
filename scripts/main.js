(function () {
  'use strict';
  var milkcocoa = new MilkCocoa("juiceig779397.mlkcca.com");
  var dataStore = milkcocoa.dataStore("chat");
  var me, message_text, message_board;

  window.onload = function(){
    me = this;
    me.message_text = document.getElementById("message_text");
    me.message_board = document.getElementById("message_board");
  };

  document.getElementById("btn").onclick = function(e){
    var text = me.message_text.value;
    dataStore.push({ message : text });
  };

  dataStore.on("push",function(d){
    onMessage(d.value.message);
  });

  function onMessage(messageText){
    var boardDom = document.createElement("li");
    boardDom.innerHTML = messageText;
    me.message_board.insertBefore(boardDom, me.message_board.firstChild);
  }
})();
