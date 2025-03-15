async function fetchVideo() {
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

async function fetchQuiz1() {
    try {
      const response = await fetch("/get_quiz1");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Quiz1 data:", data);
      // Process or display the data as needed
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  }

async function fetchArticle() {
  try {
    const response = await fetch("/get_article");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Article data:", data);
    // Process or display the data as needed
  } catch (error) {
    console.error("Error fetching video data:", error);
  }
}

async function fetchQuiz2() {
  try {
    const response = await fetch("/get_quiz2");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Quiz2 data:", data);
    // Process or display the data as needed
  } catch (error) {
    console.error("Error fetching video data:", error);
  }
}

// Call the function
fetchVideo();
fetchQuiz1();
fetchArticle();
fetchQuiz2();