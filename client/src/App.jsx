import React, { Suspense } from "react";
import "./App.css";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Suspense>
        <AppRoutes />
      </Suspense>
    </>
  );
}

export default App;
