async function fetchVideo() {
  console.log('js running')
    try {
      const response = await fetch("/get_vid");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Video data:", data);
      // Process or display the data as needed
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  }

async function fetchQuiz() {
  console.log('js running')
    try {
      const response = await fetch("/get_quiz");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Quiz data:", data);
      // Process or display the data as needed
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  }

  // Call the function
  fetchVideo();
  fetchQuiz();