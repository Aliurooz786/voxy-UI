import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * A React component that provides a form for creating a new AI interview.
 * This version uses an explicit rendering pattern to be more robust.
 */
function InterviewForm() {
  const [jobDescription, setJobDescription] = useState('');
  const [userEmail, setUserEmail] = useState('babue.bhai@example.com');
  
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult(null);
    setError(null);

    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/v1/interviews/generate`;
    
    try {
      const response = await axios.post(
        apiUrl, 
        { jobDescription, userEmail },
        { headers: { 'Content-Type': 'application/json' } }
      );
      // If the call is successful, store the response data in our 'result' state.
      setResult(response.data);
    } catch (err) {
      console.error("CRITICAL ERROR: API call failed.", err);
      setError("Failed to generate interview. Please check the backend server and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- Main Rendering Logic ---
  // This structure is very clear and prevents rendering bugs.

  // 1. If the API call is in progress, show a loading message.
  if (isLoading) {
    return <div><h2>Generating Interview... Please wait.</h2></div>;
  }

  // 2. If an error occurred, show the error message.
  if (error) {
    return <div><h2 style={{ color: 'red' }}>Error: {error}</h2></div>;
  }

  // 3. If the result is available, show the success page.
  if (result) {
    return (
      <div>
        <h2>Interview Created Successfully!</h2>
        <p><strong>Share this link with the candidate:</strong></p>
        <p>{result.interviewLink}</p>
        <h3>Generated Questions:</h3>
        <ul>
          {/* We safely check if result.questions is an array before mapping. */}
          {Array.isArray(result.questions) && result.questions.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      </div>
    );
  }

  // 4. If none of the above are true, show the initial form.
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="jobDescriptionInput">
        <h2>Create a New AI Interview</h2>
      </label>
      <textarea
        id="jobDescriptionInput"
        name="jobDescription"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the full job description here..."
        rows="15"
        cols="70"
        required
      />
      <br />
      <button type="submit">Generate Interview</button>
    </form>
  );
}

export default InterviewForm;