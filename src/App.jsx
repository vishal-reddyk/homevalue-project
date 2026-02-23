import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    ownerName: "",
    location: "",
    propertyType: "",
    budget: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8008/api/property", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Home Value Improvement System</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="ownerName"
          placeholder="Owner Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="propertyType"
          placeholder="Property Type"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="budget"
          placeholder="Budget"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Get Recommendation</button>
      </form>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h2>Recommendation:</h2>
          <p>{result.recommendation}</p>
        </div>
      )}
    </div>
  );
}

export default App;