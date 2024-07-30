import { VisuallyHidden } from "@/components"
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from "react-feather"
import styles from "./toast.module.css"

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast() {
  return (
    <div className={`${styles.toast} ${styles.notice}`}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>16 photos have been uploaded</p>
      <button type="button" className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  )
}

export default Toast
