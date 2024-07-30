import { VisuallyHidden } from "@/components"
import { useCallback, useEffect, useState } from "react"
import { AlertOctagon, AlertTriangle, CheckCircle, HelpCircle, Info, X } from "react-feather"
import styles from "./toast.module.css"

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

// 👇🏻 Same as writing 👉🏻 ['notice', 'warning', 'success', 'error']
const AVAILABLE_VARIANTS = Object.keys(ICONS_BY_VARIANT)

function Toast({ variant, message = "Empty message", onDismiss }) {
  const [Icon, setIcon] = useState(HelpCircle)

  // 💪🏻 Defensive programming!!!
  if (typeof variant !== "string" || !AVAILABLE_VARIANTS.includes(variant)) {
    throw new Error(
      `Invalid 'variant' prop for <Toast />, expected ${AVAILABLE_VARIANTS}, but got ${variant}`,
    )
  }

  // Set the appropriate icon
  useEffect(() => setIcon(ICONS_BY_VARIANT[variant]), [variant])

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button type="button" className={styles.closeButton} onClick={onDismiss}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  )
}

function useToast(initialValue = false) {
  const [isShown, setShown] = useState(initialValue)

  const toggle = useCallback(() => setShown(currShown => !currShown), [])

  return [isShown, toggle, setShown]
}

Toast.useToast = useToast

export default Toast
