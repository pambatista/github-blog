import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Homes";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
      </Route>
    </Routes>
  );
}
