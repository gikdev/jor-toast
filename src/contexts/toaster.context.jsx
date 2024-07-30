import { ToastShelf } from "@/components"
import { createContext, useContext } from "react"

const ToasterContext = createContext()

function ToasterProvider({ children }) {
  const [toasts, , addToast] = ToastShelf.useToaster([])
  const value = [toasts, addToast]

  return <ToasterContext.Provider value={value}>{children}</ToasterContext.Provider>
}

const useToasterContext = () => useContext(ToasterContext)

export { ToasterProvider, useToasterContext }
