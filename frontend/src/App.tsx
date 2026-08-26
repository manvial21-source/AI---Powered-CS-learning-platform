import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/Auth';

import { Visualizer } from './pages/Visualizer';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/learn" element={<div className="p-4 text-lg font-bold">Learn Concepts (Step 7)</div>} />
          <Route path="/pdf-chat" element={<div className="p-4 text-lg font-bold">PDF Chat (Step 11)</div>} />
          <Route path="/quiz" element={<div className="p-4 text-lg font-bold">Quizzes (Step 12)</div>} />
          <Route path="/recommendations" element={<div className="p-4 text-lg font-bold">Recommendations (Step 14)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}