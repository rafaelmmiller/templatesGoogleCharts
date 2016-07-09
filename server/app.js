"use strict";

let express = require('express');
var plotly = require('plotly')("rafaelmmiller", "xdyu2k254w")
let app = express();

let mongoUtil = require('./mongoUtil');
mongoUtil.connect();

app.use(express.static(__dirname + "/../client"));

app.get('/sports', (request, response) => {
  let sports = mongoUtil.sports();
  sports.find().toArray((err, docs) => {
    console.log(JSON.stringify(docs));
    let sportNames = docs.map((sport) => sport.name);
    response.json( sportNames );
  });

});

var trace1 = {
  x: [1, 2, 3],
  y: [4, 3, 2],
  type: "scatter"
};
var trace2 = {
  x: [20, 30, 40],
  y: [30, 40, 50],
  xaxis: "x2",
  yaxis: "y2",
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  yaxis2: {
    domain: [0.6, 0.95],
    anchor: "x2"
  },
  xaxis2: {
    domain: [0.6, 0.95],
    anchor: "y2"
  }
};
var graphOptions = {layout: layout, filename: "simple-inset", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});

plotly.plot(data, layout, function (err, msg) {
	if (err) return console.log(err);
	console.log(msg);
});

app.listen(8181, () => console.log("Listening on 8181"));
