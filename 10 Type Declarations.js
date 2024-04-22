"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(function (res) {
    console.log("WOOO!!!");
    console.log(res.data);
})
    .catch(function (e) {
    console.log("ERROR!", e);
});
