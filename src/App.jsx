import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './hooks/useTheme'
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import ComponentsPage from "./pages/ComponentsPage";
import ComponentDetailPage from "./pages/ComponentDetailPage";
import SectionsPage from "./pages/SectionsPage";
import TemplatesPage from "./pages/TemplatesPage";
import DocsPage from "./pages/DocsPage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<AppLayout />}>
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/components/:id" element={<ComponentDetailPage />} />
            <Route path="/sections" element={<SectionsPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/docs" element={<DocsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
