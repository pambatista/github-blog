import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Homes";
import { DefaultLayout } from "./DefaultLayout";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<Post />}></Route>
      </Route>
    </Routes>
  );
}
