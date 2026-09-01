import React, { useState } from 'react';
import {
  Bot,
  User,
  Send,
  Code2,
  Bug,
  HelpCircle,
  Sparkles,
  Lightbulb,
  BookOpen,
  Terminal,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  codeSnippet?: string;
  type?: 'general' | 'error_analysis' | 'quiz_generated';
  timestamp: string;
}

interface GeneratedQuestion {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  testCases: string[];
  hint: string;
}

export const AITutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Hello! I am your AI DSA Tutor. Ask me any conceptual question, paste buggy code for error diagnostics, or use the panel on the right to generate custom practice questions.',
      timestamp: '12:00 PM',
    },
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [codeInputValue, setCodeInputValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [isSocraticMode, setIsSocraticMode] = useState(true);

  // Question Generator State
  const [selectedTopic, setSelectedTopic] = useState('Arrays & Hashing');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [activeQuestion, setActiveQuestion] = useState<GeneratedQuestion | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Handle Query Submission
  const handleSendMessage = () => {
    if (!inputQuery.trim() && !codeInputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputQuery,
      codeSnippet: codeInputValue ? codeInputValue : undefined,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setCodeInputValue('');

    // Simulated AI Socratic Response
    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: isSocraticMode
          ? 'Let\'s break this down together. Before looking at the solution, what is the target time complexity you are aiming for with this structure?'
          : 'Here is an analysis of your query along with optimized time and space complexity explanations.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 800);
  };

  // Generate Custom Topic Question
  const handleGenerateQuestion = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setActiveQuestion({
        title: `Optimized Search in ${selectedTopic}`,
        difficulty: selectedDifficulty,
        description: `Given a collection under ${selectedTopic}, design an efficient algorithm to resolve lookups in sub-quadratic time complexity.`,
        testCases: ['Input: [2, 7, 11, 15], Target: 9 -> Output: [0, 1]', 'Input: [3, 2, 4], Target: 6 -> Output: [1, 2]'],
        hint: 'Consider storing visited values in a Hash Map to achieve O(1) lookup speed.',
      });
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* 1. Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EEE7] dark:bg-emerald-950/60 text-[#1E4D40] dark:text-emerald-300 text-xs font-bold mb-2">
            <Sparkles size={14} /> Turbo-Learner AI Assistant
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#1E293B] dark:text-slate-100 font-handwriting">
            AI DSA Tutor Workspace
          </h1>
        </div>

        {/* Socratic Mode Toggle */}
        <div className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-[#ECEAE0] dark:border-slate-800 px-4 py-2 rounded-2xl shadow-xs">
          <Lightbulb size={16} className={isSocraticMode ? 'text-amber-500' : 'text-slate-400'} />
          <div className="text-xs">
            <span className="font-bold text-[#1E293B] dark:text-slate-200 block">Socratic Mode</span>
            <span className="text-[10px] text-[#64748B] dark:text-slate-400">
              {isSocraticMode ? 'Guides with hints' : 'Direct answers'}
            </span>
          </div>
          <button
            onClick={() => setIsSocraticMode(!isSocraticMode)}
            className={`w-11 h-6 rounded-full transition-colors p-1 flex items-center ${
              isSocraticMode ? 'bg-[#1E4D40] justify-end' : 'bg-slate-300 dark:bg-slate-700 justify-start'
            }`}
          >
            <div className="w-4 h-4 bg-white rounded-full shadow-md" />
          </button>
        </div>
      </div>

      {/* 2. Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 7 Columns: Chat & Code Input Workspace */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Chat Messages Window */}
          <div className="bg-white dark:bg-slate-900 border border-[#ECEAE0] dark:border-slate-800 rounded-3xl p-5 shadow-xs h-[105] overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-xl bg-[#1E4D40] text-white flex items-center justify-center shrink-0">
                    <Bot size={18} />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-4 text-xs space-y-2 ${
                    msg.sender === 'user'
                      ? 'bg-[#1E4D40] text-white rounded-tr-none'
                      : 'bg-[#FAF8F3] dark:bg-slate-800 text-[#1E293B] dark:text-slate-200 border border-[#ECEAE0] dark:border-slate-700 rounded-tl-none'
                  }`}
                >
                  <p className="leading-relaxed font-medium">{msg.text}</p>

                  {/* Rendered Code Block if snippet attached */}
                  {msg.codeSnippet && (
                    <div className="bg-[#1E1E2E] text-slate-200 p-3 rounded-xl font-mono text-[11px] overflow-x-auto border border-slate-700">
                      <div className="flex justify-between items-center pb-1 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1"><Code2 size={12} /> Code Snippet</span>
                        <span>{selectedLanguage}</span>
                      </div>
                      <pre>{msg.codeSnippet}</pre>
                    </div>
                  )}

                  <span className={`block text-[10px] text-right ${msg.sender === 'user' ? 'text-emerald-200' : 'text-slate-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                    <User size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Prompt & Code Input Box */}
          <div className="bg-white dark:bg-slate-900 border border-[#ECEAE0] dark:border-slate-800 rounded-3xl p-4 shadow-xs space-y-3">
            {/* Optional Code Snippet Toggle Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#64748B] dark:text-slate-400 font-bold">
                <span className="flex items-center gap-1.5"><Terminal size={14} /> Optional Code Input</span>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-[#FAF8F3] dark:bg-slate-800 border border-[#ECEAE0] dark:border-slate-700 rounded-lg px-2 py-1 text-[11px] focus:outline-none"
                >
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="cpp">C++</option>
                  <option value="javascript">JavaScript</option>
                </select>
              </div>

              <textarea
                value={codeInputValue}
                onChange={(e) => setCodeInputValue(e.target.value)}
                placeholder="Paste code snippet here for error diagnosis or complexity optimization..."
                rows={3}
                className="w-full bg-[#FAF8F3] dark:bg-slate-800 border border-[#ECEAE0] dark:border-slate-700 rounded-2xl p-3 text-xs font-mono text-[#1E293B] dark:text-slate-200 focus:outline-none focus:border-[#1E4D40]"
              />
            </div>

            {/* General Question Prompt Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask a question about DSA concepts or code errors..."
                className="flex-1 bg-[#FAF8F3] dark:bg-slate-800 border border-[#ECEAE0] dark:border-slate-700 rounded-2xl px-4 py-2.5 text-xs text-[#1E293B] dark:text-slate-200 focus:outline-none focus:border-[#1E4D40]"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2.5 bg-[#1E4D40] hover:bg-[#163930] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-2xl text-xs font-bold transition flex items-center gap-1.5"
              >
                <span>Ask</span>
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Diagnostic Error Analysis & Dynamic Problem Generator */}
        <div className="lg:col-span-5 space-y-6">
          {/* Topic-Based Practice Question Generator */}
          <div className="bg-white dark:bg-slate-900 border border-[#ECEAE0] dark:border-slate-800 rounded-3xl p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-[#ECEAE0] dark:border-slate-800 pb-3">
              <BookOpen size={18} className="text-[#1E4D40] dark:text-emerald-400" />
              <h3 className="text-sm font-bold text-[#1E293B] dark:text-slate-100">
                DSA Question Generator
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[#64748B] dark:text-slate-400 font-bold mb-1">Select Topic</label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full bg-[#FAF8F3] dark:bg-slate-800 border border-[#ECEAE0] dark:border-slate-700 rounded-xl p-2 text-xs text-[#1E293B] dark:text-slate-200 focus:outline-none"
                >
                  <option value="Arrays & Hashing">Arrays & Hashing</option>
                  <option value="Two Pointers">Two Pointers</option>
                  <option value="Sliding Window">Sliding Window</option>
                  <option value="Binary Trees">Binary Trees</option>
                  <option value="Dynamic Programming">Dynamic Programming</option>
                  <option value="Graphs">Graphs</option>
                </select>
              </div>

              <div>
                <label className="block text-[#64748B] dark:text-slate-400 font-bold mb-1">Difficulty</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Easy', 'Medium', 'Hard'] as const).map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`py-1.5 rounded-xl font-bold transition text-center ${
                        selectedDifficulty === diff
                          ? 'bg-[#1E4D40] text-white'
                          : 'bg-[#FAF8F3] dark:bg-slate-800 text-[#64748B] border border-[#ECEAE0] dark:border-slate-700'
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerateQuestion}
                disabled={isGenerating}
                className="w-full py-2.5 bg-[#1E4D40] hover:bg-[#163930] dark:bg-emerald-600 text-white rounded-2xl font-bold transition flex items-center justify-center gap-2 shadow-xs"
              >
                {isGenerating ? (
                  <span>Generating Question...</span>
                ) : (
                  <>
                    <Sparkles size={15} />
                    <span>Generate Practice Problem</span>
                  </>
                )}
              </button>
            </div>

            {/* Generated Question Display Card */}
            {activeQuestion && (
              <div className="bg-[#FAF8F3] dark:bg-slate-800/60 border border-[#ECEAE0] dark:border-slate-700 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#1E293B] dark:text-slate-100">
                    {activeQuestion.title}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      activeQuestion.difficulty === 'Easy'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300'
                        : activeQuestion.difficulty === 'Medium'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300'
                    }`}
                  >
                    {activeQuestion.difficulty}
                  </span>
                </div>

                <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed">
                  {activeQuestion.description}
                </p>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#1E4D40] dark:text-emerald-400 uppercase tracking-wider block">
                    Sample Test Cases:
                  </span>
                  {activeQuestion.testCases.map((tc, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 px-2.5 py-1 rounded-lg text-[11px] font-mono border border-[#ECEAE0] dark:border-slate-700 text-[#2D3748] dark:text-slate-300">
                      {tc}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800/60">
                  <HelpCircle size={14} className="shrink-0" />
                  <span><strong>Hint:</strong> {activeQuestion.hint}</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Diagnostics Shortcuts */}
          <div className="bg-white dark:bg-slate-900 border border-[#ECEAE0] dark:border-slate-800 rounded-3xl p-5 shadow-xs space-y-3">
            <h3 className="text-xs font-bold text-[#1E293B] dark:text-slate-100 flex items-center gap-1.5">
              <Bug size={16} className="text-rose-500" /> Quick Error Analyzer Shortcuts
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setInputQuery('Explain Time and Space Complexity for my code')}
                className="p-2.5 text-left bg-[#FAF8F3] dark:bg-slate-800 hover:bg-[#EFECE1] border border-[#ECEAE0] dark:border-slate-700 rounded-xl font-medium text-[#1E293B] dark:text-slate-200 transition"
              >
                ⏱️ Complexity Trace
              </button>
              <button
                onClick={() => setInputQuery('Detect edge cases where my code might fail')}
                className="p-2.5 text-left bg-[#FAF8F3] dark:bg-slate-800 hover:bg-[#EFECE1] border border-[#ECEAE0] dark:border-slate-700 rounded-xl font-medium text-[#1E293B] dark:text-slate-200 transition"
              >
                🚨 Edge Case Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};