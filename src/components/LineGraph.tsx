import React, { useState, useEffect } from "react";
import { fetchGraphData } from "../api/api";

const LineGraph = () => {
  const [graphData, setGraphData] = useState<{ cases: Record<string, number> }>({ cases: {} });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGraphData();
        setGraphData(data);
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchData();
  }, []);

  if (!graphData.cases) {
    return <div>Loading...</div>;
  }

  const dateLabels = Object.keys(graphData.cases);
  const caseData = Object.values(graphData.cases);

  const maxCases = Math.max(...caseData);

  const points = dateLabels.map((date, index) => ({
    x: index * 50,
    y: 300 - (caseData[index] / maxCases) * 200,
  }));

  const lines = points.map((point, index) => {
    if (index < points.length - 1) {
      const nextPoint = points[index + 1];
      return (
        <line
          key={index}
          x1={point.x}
          y1={point.y}
          x2={nextPoint.x}
          y2={nextPoint.y}
          stroke="blue"
        />
      );
    }
    return null;
  });

  return (
    <div>
      <h2>Line Graph</h2>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <svg width="100%" height="300">
          {lines}
          {points.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} r={3} fill="blue" />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default LineGraph;
