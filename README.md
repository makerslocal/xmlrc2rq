xmlrc2rq
==========

[![makerslocal/xmlrc2rq](http://dockeri.co/image/makerslocal/xmlrc2rq)](https://hub.docker.com/r/makerslocal/xmlrc2rq)

Description
===========

xmlrc2rq listens for Mediawiki changes using the [XMLRC](https://www.mediawiki.org/wiki/Extension:XMLRC) extension and sends them out over mqtt as json.
* UDP Listening: 0.0.0.0:4445
* MQTT Host: mqtt://iot

Usage
=====

`docker run -d --restart=always -p 4455:4455/udp makerslocal/xmlrc2rq:latest`

OR

```
npm install
node index.js
```
