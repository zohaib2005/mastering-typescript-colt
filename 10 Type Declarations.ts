import axios from "axios";
import _ from "lodash";

_.sample(234);

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     console.log("WOOO!!!");
//     printUser(res.data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("WOOO!!!");
    res.data.forEach(printUser);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}

// INSTALLING TYPES SEPERATELY --->

// TypeScript comes with some build in 3rd party npm packages types like axios but for some like lodash we need to install types ourself, so there is a huge project on github
// named github.com/DefinitelyTyped/DefinitelyTyped
// On this github repo project almost 99.99% of 3rd party packages types are available which you can install
// i.e npm install --save-dev @types/node
// install any library from npm then
// install its types from npm install --save-dev @types/packagename
// we install it only in dev dependency because we don't need on production we only need on development
// We can also search available 3rd party npm package types on Typescript.org
// typescriptlang.org/dt/search?search=
