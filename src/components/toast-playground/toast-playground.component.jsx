import { Button } from "@/components"
import { useState } from "react"
import styles from "./toast-playground.module.css"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = useState("")
  const [msg, setMsg] = useState("")

  return (
    <section className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

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
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToastPlayground
