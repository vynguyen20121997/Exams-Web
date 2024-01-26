import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import router from "./routes/routes";
import "./style.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer
      autoClose={3000}
      position="bottom-left"
      theme="dark"
      pauseOnHover
    />
    {/* <React.StrictMode> */}
    <ThemeProvider>
      <QueryClientProvider client={new QueryClient()}>
        <Provider store={store}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
