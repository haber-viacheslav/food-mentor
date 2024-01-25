import { theme } from '../theme/theme';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SharedLayout } from './SharedLayout';
const Goal = lazy(() => import('../pages/Goal'));
const Behaviors = lazy(() => import('../pages/Behaviors'));
const Measure = lazy(() => import('../pages/Measure'));
const Physical = lazy(() => import('../pages/Physical'));
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Goal />} />
          <Route path="behaviors" element={<Behaviors />} />
          <Route path="measure" element={<Measure />} />
          <Route path="physical" element={<Physical />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
