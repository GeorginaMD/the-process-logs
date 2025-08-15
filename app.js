fetch("logs.json")
  .then((response) => response.json())
  .then((logs) => {
    const container = document.getElementById("log-container");

    logs.forEach((log) => {
      const article = document.createElement("article");
      const date = document.createElement("h2");
      const text = document.createElement("p");

      date.textContent = log.date;
      text.textContent = log.text;

      article.appendChild(date);
      article.appendChild(text);
      container.appendChild(article);
    });
  })
  .catch((error) => console.log("Error loading logs:", error));
