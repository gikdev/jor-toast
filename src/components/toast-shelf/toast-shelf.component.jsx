import { Toast } from "@/components"
import { useCallback, useState } from "react"
import styles from "./toast-shelf.module.css"

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts?.map(toast => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast {...toast} />
        </li>
      ))}
    </ol>
  )
}

function useToaster(initialValue = []) {
  const [toasts, setToasts] = useState(initialValue)

  const addToast = useCallback(toast => {
    setToasts(currentToasts => [...currentToasts, toast])
  }, [])

  const toastDeletionHandler = useCallback(id => {
    setToasts(currentToasts => [...currentToasts].filter(item => item.id !== id), [])
  }, [])

  return [toasts, setToasts, addToast, toastDeletionHandler]
}

ToastShelf.useToaster = useToaster

export default ToastShelf
