import { App } from "@/components"
import React from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

const container = document.querySelector("#root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
