import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store, persistor } from "./store/store.js";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ChakraProvider>
);
