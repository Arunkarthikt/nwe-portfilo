import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { router } from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors theme="dark" />
      <Analytics />
    </>
  );
}

export default App;
