import { Route, Routes } from "react-router-dom";

import { ScrollManager } from "~components";
import { AppRoute } from "~constants";
import {
  AdminPage,
  ClaudeAutoDocsPage,
  DocsPage,
  EslintConfigDocsPage,
  HomePage,
  ProjectsPage,
  SharedLogicDocsPage,
} from "~pages";

export const App = () => (
  <>
    <ScrollManager />
    <Routes>
      <Route path={AppRoute.Home} element={<HomePage />} />
      <Route path={AppRoute.Projects} element={<ProjectsPage />} />
      <Route path={AppRoute.Admin} element={<AdminPage />} />
      <Route path={AppRoute.Docs} element={<DocsPage />}>
        <Route path="shared-logic" element={<SharedLogicDocsPage />} />
        <Route path="eslint-config" element={<EslintConfigDocsPage />} />
        <Route path="claude-auto-sufficiency" element={<ClaudeAutoDocsPage />} />
      </Route>
    </Routes>
  </>
);
