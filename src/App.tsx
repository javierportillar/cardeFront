import { useState } from "react";
import { routes } from "./routes/routes";

import "./App.css";
import { RouterProvider } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
