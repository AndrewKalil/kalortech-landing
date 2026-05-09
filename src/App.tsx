import { Route, Routes } from "react-router-dom";

import { AppRoute } from "~constants";
import { AdminPage, HomePage, ProjectsPage } from "~pages";

export const App = () => (
  <Routes>
    <Route path={AppRoute.Home} element={<HomePage />} />
    <Route path={AppRoute.Projects} element={<ProjectsPage />} />
    <Route path={AppRoute.Admin} element={<AdminPage />} />
  </Routes>
);
