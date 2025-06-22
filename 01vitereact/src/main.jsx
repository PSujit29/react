import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Hello from "./Hello.jsx";
import Football from "./football.jsx";

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to go to google",
// };

// const AnotherElement = (
//   <a href="https://youtu.be/kAOuj6o7Kxs?si=l84yXXWNXsDrcWvP" target="">Hitesh chai code</a>
// )

const anotherUser = "\nRider Sir"
const ReactElement = React.createElement(
  "a",
  { href: "google.com",target : "_blank" },
  "click me to go to google",
  anotherUser
);

createRoot(document.getElementById("hello")).render(
  // <MyApp/>
  // AnotherElement
  ReactElement
  // <App/>
);
