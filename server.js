'use strict';

var resin = require('resin-sdk');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODYwMywidXNlcm5hbWUiOiJnaF9qb3NlcGhyb2JlcnRzIiwiZmlyc3RfbmFtZSI6IkpvZSIsImxhc3RfbmFtZSI6IlJvYmVydHMiLCJzb2NpYWxfc2VydmljZV9hY2NvdW50IjpbeyJjcmVhdGVkX2F0IjoiMjAxNi0wNS0xMVQxNDoxMDozMC4wNzhaIiwiaWQiOjIwNDEsInVzZXIiOnsiX19kZWZlcnJlZCI6eyJ1cmkiOiIvcmVzaW4vdXNlcig4NjAzKSJ9LCJfX2lkIjo4NjAzfSwicHJvdmlkZXIiOiJnaXRodWIiLCJyZW1vdGVfaWQiOiIxMTA3Mzg1IiwiZGlzcGxheV9uYW1lIjoiam9zZXBocm9iZXJ0cyIsIl9fbWV0YWRhdGEiOnsidXJpIjoiL3Jlc2luL3NvY2lhbF9zZXJ2aWNlX2FjY291bnQoMjA0MSkiLCJ0eXBlIjoiIn19XSwiaGFzX2Rpc2FibGVkX25ld3NsZXR0ZXIiOmZhbHNlLCJqd3Rfc2VjcmV0IjoiRFhOSVlRUVlMQUZKVDM0Tko0NlJLQkY1T0ZDRkVSWFkiLCJoYXNQYXNzd29yZFNldCI6ZmFsc2UsIm5lZWRzUGFzc3dvcmRSZXNldCI6ZmFsc2UsInB1YmxpY19rZXkiOnRydWUsImZlYXR1cmVzIjpbXSwiaW50ZXJjb21Vc2VyTmFtZSI6ImdoX2pvc2VwaHJvYmVydHMiLCJpbnRlcmNvbVVzZXJIYXNoIjoiOThhZjhjZTVmMDZmY2RkNTE0OThjZmI0NDRlNjU1YmViZmIyZTVhZThiNzExZGE3OGIzZDFkODc2OTE1MjkwNiIsInBlcm1pc3Npb25zIjpbXSwiaWF0IjoxNDY0MjY2MzUyLCJleHAiOjE0NjQ4NzExNTJ9.bdtIUNwSthZehklIqEvh_dTP-exIvPceEmzjVl5uTGc";

resin.auth.loginWithToken(token, function(error) {
    if (error) throw error;
    else console.log("logged in");
});