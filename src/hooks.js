const { useEffect } = require("react")

function useKey(callback, key) {
  useEffect(() => {
    // If the pressed key is `key` then run the callback
    const keyHandler = e => e.code === key && callback()

    window.addEventListener("keydown", keyHandler)

    return () => window.removeEventListener("keydown", keyHandler)
  }, [])
}

export { useKey }
