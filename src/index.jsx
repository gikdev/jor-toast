import { App } from "@/components"
import { ToasterProvider } from "@/contexts"
import React from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

const container = document.querySelector("#root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <ToasterProvider>
      <App />
    </ToasterProvider>
  </React.StrictMode>,
)
