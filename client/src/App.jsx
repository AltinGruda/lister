import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListItem from "./components/ListItem";
import { Toaster } from "react-hot-toast";
import PrivateRoutes from "./utils/PrivateRoutes";
import Context, { myContext } from "./store/Context";
import { useContext } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const userObject = useContext(myContext);
  console.log(userObject);
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<PrivateRoutes />}>
              <Route element={<Create />} path="/create" />
              <Route element={<ListItem />} path="/list/:id" />
            </Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Context>
    <App />
  </Context>
);
