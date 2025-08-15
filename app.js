fetch("logs.json")
  .then((response) => response.json())
  .then((logs) => {
    const container = document.getElementById("log-container");

    logs.forEach((log) => {
      const article = document.createElement("article");
      article.setAttribute(
        "style",
        "font-size: small; margin: 2rem; border: 1px solid #8f4e5b; border-radius: 1rem; box-shadow: -1px -1px 3px 1px #B49D8D, 1px 1px 3px 1px #B49D8D; background-color: #F2EBE3;"
      );
      const date = document.createElement("h2");
      date.setAttribute("style", "font-size: small; margin: 1rem 0 0 0;");
      const text = document.createElement("p");
      text.setAttribute("style", "font-size: large; margin: 0 0 1rem 0;");

      date.textContent = log.date;
      text.textContent = log.text;

      article.appendChild(date);
      article.appendChild(text);
      container.appendChild(article);
    });
  })
  .catch((error) => console.log("Error loading logs:", error));
