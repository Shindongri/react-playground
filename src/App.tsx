import React, { Suspense } from "react";
import Todos from "./features/todos";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary fallback={<div>I'm Error</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Todos />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
