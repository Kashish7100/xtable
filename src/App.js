import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  // Function to sort by Date (latest first)
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.date === b.date) {
        return b.views - a.views; // If dates are equal, sort by views
      }
      return new Date(b.date) - new Date(a.date); // Sort by date descending
    });
    setData(sortedData);
  };

  // Function to sort by Views (highest first)
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date); // If views are equal, sort by date
      }
      return b.views - a.views; // Sort by views descending
    });
    setData(sortedData);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate} style={{ margin: "10px", padding: "8px 12px" }}>Sort by Date</button>
      <button onClick={sortByViews} style={{ margin: "10px", padding: "8px 12px" }}>Sort by Views</button>

      <table border="1" style={{ margin: "20px auto", width: "50%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "10px" }}>Date</th>
            <th style={{ padding: "10px" }}>Views</th>
            <th style={{ padding: "10px" }}>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={{ padding: "10px" }}>{row.date}</td>
              <td style={{ padding: "10px" }}>{row.views}</td>
              <td style={{ padding: "10px" }}>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
