import { Button, ToastShelf } from "@/components"
import { useState } from "react"
import styles from "./toast-playground.module.css"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = useState(VARIANT_OPTIONS[0])
  const [msg, setMsg] = useState("")
  const [toasts, , addToast] = ToastShelf.useToaster([])

  const handleSubmit = e => {
    e.preventDefault()

    addToast(selectedVariant, msg)

    setSelectedVariant(VARIANT_OPTIONS[0])
    setMsg("")
  }

  return (
    <section className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} />

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
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
            {VARIANT_OPTIONS.map(option => {
              const id = `variant-${option}`

              return (
                <label htmlFor={id} key={id}>
                  <input
                    checked={selectedVariant === option}
                    onChange={e => setSelectedVariant(e.target.value)}
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                  />
                  <span>{option}</span>
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ToastPlayground
