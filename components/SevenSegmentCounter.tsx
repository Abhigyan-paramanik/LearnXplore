import React, { useState, useEffect } from "react";

const SevenSegmentCounter: React.FC = () => {
  const [activeUsers, setActiveUsers] = useState<number>(1);

  // Seven-segment map for digits 0-9
  const segmentMap = [
    [1, 1, 1, 1, 1, 1, 0],  // 0
    [0, 1, 1, 0, 0, 0, 0],  // 1
    [1, 1, 0, 1, 1, 0, 1],  // 2
    [1, 1, 1, 1, 0, 0, 1],  // 3
    [0, 1, 1, 0, 0, 1, 1],  // 4
    [1, 0, 1, 1, 0, 1, 1],  // 5
    [1, 0, 1, 1, 1, 1, 1],  // 6
    [1, 1, 1, 0, 0, 0, 0],  // 7
    [1, 1, 1, 1, 1, 1, 1],  // 8
    [1, 1, 1, 1, 0, 1, 1],  // 9
  ];

  // Fetch active users and update the count
  useEffect(() => {
    const fetchActiveUsers = async () => {
      try {
        const response = await fetch("/api/track-users");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setActiveUsers(data.activeUsers || 0);
      } catch (error) {
        console.error("Error fetching active users:", error);
      }
    };
    
    fetchActiveUsers();
    const interval = setInterval(fetchActiveUsers, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get last two digits of activeUsers for display
  const digits = String(activeUsers).slice(-2).padStart(2, "0").split("");

  return (
    <div className="seven-segment-container">
      {digits.map((digit, digitIndex) => (
        <div className="digit" key={digitIndex}>
          {segmentMap[parseInt(digit)].map((isOn, segmentIndex) => (
            <div
              key={segmentIndex}
              className={`segment ${isOn ? "on" : ""}`}
            ></div>
          ))}
        </div>
      ))}

      <style jsx>{`
        .seven-segment-container {
          position: fixed; /* Sticks to the viewport */
          top: 10px;       /* Minimum distance from the top */
          right: 10px;     /* Minimum distance from the right */
          display: flex;
          gap: 5px;
          padding: 5px;
          background-color: #000;
          border-radius: 5px;
          z-index: 999;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .digit {
          position: relative;
          width: 40px; /* Smaller digit width */
          height: 60px; /* Smaller digit height */
        }

        .segment {
          background: #00ff00;
          border-radius: 2px;
          position: absolute;
          opacity: 0.2;
          transition: opacity 0.2s;
        }

        .segment.on {
          opacity: 1;
          box-shadow: 0 0 5px #0f0;
        }

        .segment:nth-child(1) {
          top: 5%;
          left: 10%;
          right: 10%;
          height: 5%;
        }
        .segment:nth-child(2) {
          top: 10%;
          right: 5%;
          width: 5%;
          height: 40%;
        }
        .segment:nth-child(3) {
          bottom: 10%;
          right: 5%;
          width: 5%;
          height: 40%;
        }
        .segment:nth-child(4) {
          bottom: 5%;
          right: 10%;
          height: 5%;
          left: 10%;
        }
        .segment:nth-child(5) {
          bottom: 10%;
          left: 5%;
          width: 5%;
          height: 40%;
        }
        .segment:nth-child(6) {
          top: 10%;
          left: 5%;
          width: 5%;
          height: 40%;
        }
        .segment:nth-child(7) {
          bottom: 50%;
          right: 10%;
          left: 10%;
          height: 5%;
        }
      `}</style>
    </div>
  );
};

export default SevenSegmentCounter;
