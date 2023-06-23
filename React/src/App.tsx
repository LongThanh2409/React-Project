import { Route, Routes, BrowserRouter } from "react-router-dom";
import router from "./routes";

import { Fragment, useState } from "react";
import LayoutAdmin from "./layouts/Admin/DefaultLayoutAdmin/LayoutAdmin";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {router.map((route, index) => {
            const Page = route.component;
            let Layout: any = Fragment;
            if (route.layout == null) {
              Layout = Fragment;
            } else if (route.layout) {
              Layout = route.layout;
            }
            if (route.layout == LayoutAdmin) {
              Layout = route.layout;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    {" "}
                    <Page />{" "}
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
