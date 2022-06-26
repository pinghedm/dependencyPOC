import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "react-jsonschema-form";
import { SharedForm } from "common";

const schema = {
  title: "New Mortgage Rule",
  type: "object",
  required: ["name", "add"],
  properties: {
    name: { type: "string", title: "Name of Rule" },
    add: { type: "boolean", title: "Should we add a date to a number?" },
  },
};

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: "50px" }}>This is App2</div>
      <div style={{ width: "70%", margin: "auto" }}>
        <Form
          //@ts-ignore
          schema={schema}
        />
      </div>
      <SharedForm />
    </div>
  );
}

export default App;
