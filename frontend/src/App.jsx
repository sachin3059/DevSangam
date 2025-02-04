import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import router from "./routes.jsx";

const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
