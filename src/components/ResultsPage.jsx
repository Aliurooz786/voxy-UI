import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ResultsPage() {
  // Get the interviewId from the URL
  const { interviewId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // This useEffect hook runs once when the component loads
  useEffect(() => {
    const fetchInterviewData = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/v1/interviews/${interviewId}`;
        const response = await axios.get(apiUrl);
        setResult(response.data);
      } catch (err) {
        setError("Could not fetch interview details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchInterviewData();
  }, [interviewId]); // It re-runs if the interviewId ever changes

  if (isLoading) return <h2>Loading Results...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>Error: {error}</h2>;

  return (
    <div>
      <h2>Interview Created Successfully!</h2>
      <p><strong>Share this link with the candidate:</strong></p>
      {/* We can construct the link on the frontend */}
      <p>{`${window.location.origin}/candidate-view/${result.interviewId}`}</p>
      <h3>Generated Questions:</h3>
      <ul>
        {Array.isArray(result.questions) && result.questions.map((q, index) => (
          <li key={index}>{q.questionText}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsPage;