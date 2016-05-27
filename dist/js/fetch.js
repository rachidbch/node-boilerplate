"use strict";

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getUser = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch(url);

          case 3:
            _context.next = 5;
            return _context.sent.json();

          case 5:
            return _context.abrupt('return', _context.sent.results[0]);

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);
            echo(_context.t0);
          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));
  return function getUser() {
    return ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('isomorphic-fetch');

var fs = require('mz/fs'),
    echo = function echo() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log.apply(console, args);
};

var url = "http://api.randomuser.me";

getUser().then(function (user) {
  return echo(user);
});

// function getUser(){
//   return fetch(url)
//     .then((response)=> {
//       return response.json()
//     })
//     .then((response)=>{
//       return response.results[0]
//     })
// }
//
//
// getUser()
//   .then((response)=>{
//     echo(response)
//   })