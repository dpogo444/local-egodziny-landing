import React from "react";

const ProgressBar = ({ totalSteps = 4, currentStep = 1, activeColor = "#407EF9", inactiveColor = "#ccc", showExtraDot = false }) => {
  // Calculate total dots to show (base totalSteps + extra dot if GPS is selected)
  const actualTotalSteps = showExtraDot ? totalSteps + 1 : totalSteps;
  
  return (
    <div style={styles.wrapper}>
      <div style={styles.dotsContainer}>
        {Array.from({ length: actualTotalSteps }, (_, index) => (
          <span
            key={index + 1}
            style={{
              ...styles.dot,
              backgroundColor: index + 1 === currentStep ? activeColor : inactiveColor,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "30px",
  },
  dotsContainer: {
    display: "flex",
    gap: "15px",
  },
  dot: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    transition: "background-color 0.3s ease",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2A58B5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ProgressBar;
