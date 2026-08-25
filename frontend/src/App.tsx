import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/Auth';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/learn" element={<div className="p-4 text-lg font-bold">Learn Concepts (Step 7)</div>} />
          <Route path="/tutor" element={<div className="p-4 text-lg font-bold">AI Tutor (Step 8)</div>} />
          <Route path="/visualizer" element={<div className="p-4 text-lg font-bold">DSA Visualizer (Step 9)</div>} />
          <Route path="/editor" element={<div className="p-4 text-lg font-bold">Code Runner (Step 10)</div>} />
          <Route path="/pdf-chat" element={<div className="p-4 text-lg font-bold">PDF Chat (Step 11)</div>} />
          <Route path="/quiz" element={<div className="p-4 text-lg font-bold">Quizzes (Step 12)</div>} />
          <Route path="/recommendations" element={<div className="p-4 text-lg font-bold">Recommendations (Step 14)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}