"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Navbar from "@/components/navbar";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // Change `let` to `const`
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <Navbar />
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default App;
