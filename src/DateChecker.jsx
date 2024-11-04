import React, { useState } from "react";

// Import the functions
export function daysInMonth(year, month) {
  if (!year || !month || isNaN(year) || isNaN(month)) {
    alert("Incorrect format: Year and month must be numbers.");
    return 0;
  }
  if (year < 1000 || year > 3000) {
    alert("Out of range: Year must be between 1000 and 3000.");
    return 0;
  }
  if (month < 1 || month > 12) {
    alert("Out of range: Month must be between 1 and 12.");
    return 0;
  }
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
  if ([4, 6, 9, 11].includes(month)) return 30;
  if (month === 2) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return 29;
    } else {
      return 28;
    }
  }
  return 0;
}

export function isValidDate(year, month, day) {
  if (!year || !month || !day || isNaN(year) || isNaN(month) || isNaN(day)) {
    alert("Incorrect format: Year, month, and day must be numbers.");
    return false;
  }
  if (year < 1000 || year > 3000) {
    alert("Out of range: Year must be between 1000 and 3000.");
    return false;
  }
  if (month < 1 || month > 12) {
    alert("Out of range: Month must be between 1 and 12.");
    return false;
  }
  if (day < 1) {
    alert("Out of range: Day must be greater than 0.");
    return false;
  }
  const maxDays = daysInMonth(year, month);
  if (day > maxDays) {
    alert(`Out of range: Day must be between 1 and ${maxDays}.`);
    return false;
  }
  return true;
}

function DateChecker() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [daysInMonthResult, setDaysInMonthResult] = useState(null);

  const handleCheckDate = () => {
    const yearInt = parseInt(year, 10);
    const monthInt = parseInt(month, 10);
    const dayInt = parseInt(day, 10);
    setIsValid(isValidDate(yearInt, monthInt, dayInt));
  };

  const handleCheckDaysInMonth = () => {
    if (year === "" || month === "") {
      alert("Year and month must be filled.");
      return;
    }
    
    const yearInt = parseInt(year, 10);
    const monthInt = parseInt(month, 10);
    setDaysInMonthResult(daysInMonth(yearInt, monthInt));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Date Checker</h1>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Year: </label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Month: </label>
        <input
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Day: </label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={handleCheckDate} style={styles.button}>
          Check Date
        </button>
        <button onClick={handleCheckDaysInMonth} style={styles.button}>
          Check Days in Month
        </button>
      </div>
      {isValid !== null && (
        <div style={styles.result}>
          {isValid ? "The date is valid." : "The date is invalid."}
        </div>
      )}
      {daysInMonthResult !== null && (
        <div style={styles.result}>{`Days in month: ${daysInMonthResult}`}</div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "300px",
    margin: "0 auto",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    color: "blue",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  buttonContainer: {
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    margin: "5px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "blue",
    color: "white",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    fontWeight: "bold",
  },
};

export default DateChecker;
