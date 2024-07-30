import styles from "./button.module.css"

function Button({ className = "", ...delegated }) {
  return <button type="button" className={`${styles.button} ${className}`} {...delegated} />
}

export default Button
