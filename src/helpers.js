class ToastData {
  constructor(variant, children, onDismiss) {
    if (!variant || !children || !onDismiss)
      console.warn("You are not providing one of `variant` || `children` || `onDismiss`")

    this.id = crypto.randomUUID()
    this.variant = variant
    this.children = children
    this.onDismiss = () => onDismiss(this.id)
  }
}

export { ToastData }
