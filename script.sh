#!/bin/bash
phantomjs --ssl-protocol=any screen.js
mv *com.png img/mex/completo
mv *rec.png img/mex/recortado

