import { Button, ToastShelf } from "@/components"
import { ToastData } from "@/helpers"
import { useState } from "react"
import styles from "./toast-playground.module.css"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = useState("notice")
  const [msg, setMsg] = useState("")
  const [toasts, setToasts, addToast, toastDeletionHandler] = ToastShelf.useToaster([])

  const handleSubmit = e => {
    e.preventDefault()

    const newToast = new ToastData(selectedVariant, msg, toastDeletionHandler)
    addToast(newToast)

    setSelectedVariant("notice")
    setMsg("")
  }

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={msg}
              onChange={e => setMsg(e.target.value)}
              id="message"
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map(option => (
              <label htmlFor={`variant-${option}`} key={`variant-${option}`}>
                <input
                  checked={selectedVariant === option}
                  onChange={e => setSelectedVariant(e.target.value)}
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ToastPlayground
