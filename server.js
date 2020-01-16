// Generated by LiveScript 1.6.0
(function(){
  var express, cors, expressRateLimit, proxy, create, limitConfig, limiter, app, greenlock;
  express = require('express');
  cors = require('cors');
  expressRateLimit = require('express-rate-limit');
  proxy = require('express-http-proxy');
  create = require('greenlock-express').create;
  limitConfig = {
    windowMs: 150 * 60 * 1000,
    max: 1000000
  };
  limiter = expressRateLimit(limitConfig);
  app = express().use(limiter).use(cors()).use('/tx/:id', express['static']('./')).use('/address/:id', express['static']('./')).use('/block/:id', express['static']('./')).use('/api', proxy("http://78.47.205.180:8545")).use('/', express['static']('./'));
  greenlock = create({
    email: 'denis@gmail.com',
    agreeTos: true,
    configDir: './config/acme/',
    communityMember: false,
    telemetry: false,
    app: app,
    debug: true
  });
  greenlock.listen(80, 443);
}).call(this);
