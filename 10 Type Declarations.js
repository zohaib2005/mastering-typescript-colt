"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     console.log("WOOO!!!");
//     printUser(res.data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
    console.log("WOOO!!!");
    res.data.forEach(printUser);
})
    .catch(function (e) {
    console.log("ERROR!", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
