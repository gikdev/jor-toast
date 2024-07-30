import { Toast } from "@/components"
import { useToasterContext } from "@/contexts"
import { useCallback, useState } from "react"
import styles from "./toast-shelf.module.css"

function ToastShelf() {
  const [toasts] = useToasterContext()

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

  const toastDeletionHandler = useCallback(id => {
    function toastsSetter(currentToasts) {
      let clone = [...currentToasts]
      clone = clone.filter(item => item.id !== id)
      return clone
    }

    setToasts(toastsSetter)
  }, [])

  const addToast = useCallback(
    (variant, children) => {
      const id = crypto.randomUUID()
      const onDismiss = () => toastDeletionHandler(id)

      function toastsSetter(currentToasts) {
        const clone = [...currentToasts]
        clone.push({ variant, children, id, onDismiss })
        return clone
      }

      setToasts(toastsSetter)
    },
    [toastDeletionHandler],
  )

  return [toasts, setToasts, addToast]
}

ToastShelf.useToaster = useToaster

export default ToastShelf
