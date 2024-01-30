/*
import React from "react";
const Feedback = () => {
    return ( 
        <div>
            <h1>Feedback</h1>
            <p>Your Feedback is important to us</p>
        </div>
     );
}
 
export default Feedback;
*/
import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState(null);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Assuming you have a backend service to handle storing feedback
    // You can replace the following code with your actual backend logic

    // Example: Storing feedback in local storage
    localStorage.setItem("feedback", feedback);

    setSubmittedFeedback(feedback);
    setFeedback(""); // Clear the feedback input field after submission
  };

  return (
    <div>
      <h1>Feedback</h1>
      <p>Your Feedback is important to us</p>

      {submittedFeedback ? (
        <div>
          <p>Thank you for your feedback:</p>
          <p>{submittedFeedback}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Your Feedback:
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              rows="4"
              cols="50"
            />
          </label>
          <br />
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
