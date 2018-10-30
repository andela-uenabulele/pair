'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _http = require('http');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('./controllers/user'),
    signUp = _require.signUp,
    login = _require.login;

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

var port = process.env.PORT || 5000;

app.post('/signup', signUp);
app.get('/login', login);

var server = (0, _http.createServer)(app);
server.listen(port, function (err) {
    console.log('Express server listening on port ' + port);
    if (err) console.log(err);
});