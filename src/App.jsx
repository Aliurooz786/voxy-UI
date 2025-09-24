import { Routes, Route } from 'react-router-dom';
import InterviewForm from './components/InterviewForm';
import ResultsPage from './components/ResultsPage'; // We will create this next
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Voxy - AI Interview Agent</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<InterviewForm />} />
          <Route path="/results/:interviewId" element={<ResultsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;