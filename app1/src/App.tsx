import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "@rjsf/core";

import { SharedForm } from "common";

const formSchema = {
  title: "Get out of my mortgage",
  type: "object",
  required: ["name", "address", "reason"],
  properties: {
    name: { type: "string", title: "Name", default: "First and Last name" },
    address: {
      type: "string",
      title: "Address",
      default: "Address of property you can not afford",
    },
    reason: {
      type: "string",
      title: "Basis of Claim",
      default: "Why shouldn't we send you to debtor's prison?",
    },
  },
};

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: "50px" }}>This is App 1</div>

      <div style={{ width: "70%", margin: "auto" }}>
        <Form
          //@ts-ignore
          schema={formSchema}
          onChange={(e) => console.log(e)}
        />
      </div>
      <SharedForm />
    </div>
  );
}

export default App;
