import { Outlet } from "react-router-dom";
import DefaultLayout from "./layout/default";
const App = () => {
  return(
    <>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </>
  )
}

export default App;
