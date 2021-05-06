(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " : ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBaUM7QUFDcEMsTUFBT0MsT0FBUCxHQUE0QkQsSUFBNUIsQ0FBT0MsT0FBUDtBQUFBLE1BQWdCQyxRQUFoQixHQUE0QkYsSUFBNUIsQ0FBZ0JFLFFBQWhCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGdCQUE2QkQsT0FBN0I7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlTm90aWYoZGF0YSl7XHJcbiAgICBjb25zdCB7bWVzc2FnZSwgbmlja25hbWV9ID0gZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfSA6ICR7bWVzc2FnZX1gKTtcclxufSJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOThmMTY3YTUuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQTZCO0FBQ3pCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxZQUFaLEVBQXlCO0FBQUVELElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUF6QjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsZ0JBQW9CSCxPQUFwQjtBQUNIOztBQUVELFNBQVNJLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQThCO0FBQzFCUixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxhQUFaLEVBQTBCO0FBQUNJLElBQUFBLFFBQVEsRUFBUkE7QUFBRCxHQUExQjtBQUNIOztBQUdEUixNQUFNLENBQUNTLEVBQVAsQ0FBVSxjQUFWLEVBQTBCQyx3QkFBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVNZXNzYWdlTm90aWYgfSBmcm9tIFwiLi9jaGF0XCI7XHJcblxyXG5jb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XHJcblxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKXtcclxuICAgIHNvY2tldC5lbWl0KFwibmV3TWVzc2FnZVwiLHsgbWVzc2FnZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGBZb3U6ICR7bWVzc2FnZX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Tmlja25hbWUobmlja25hbWUpe1xyXG4gICAgc29ja2V0LmVtaXQoXCJzZXROaWNrbmFtZVwiLHtuaWNrbmFtZX0pO1xyXG59XHJcblxyXG5cclxuc29ja2V0Lm9uKFwibWVzc2FnZU5vdGlmXCIsIGhhbmRsZU1lc3NhZ2VOb3RpZik7Il19
},{"./chat":1}]},{},[2])