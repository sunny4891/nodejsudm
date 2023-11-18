const jwt = require("jsonwebtoken");

const payload = {
  name: "prasenjit saha",
  age: "39",
  email: "prasenjit.llspl@gmail.com",
};

const token = jwt.sign(payload, "1234");

console.log(token);

console.log(
  jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHJhc2Vuaml0IHNhaGEiLCJhZ2UiOiIzOSIsImVtYWlsIjoicHJhc2Vuaml0Lmxsc3BsQGdtYWlsLmNvbSIsImlhdCI6MTcwMDI3OTQ3Mn0.0WQGePzYq0gS0rnWSHhuf8MWNG7NnW3sZ6u-p2Hsqk8",
    "1234"
  )
);
