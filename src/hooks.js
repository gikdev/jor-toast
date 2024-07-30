import { useEffect } from "react"

function useKeyDown(key, callback) {
  useEffect(() => {
    // If the pressed key is `key` then run the callback
    const keyHandler = e => e.code === key && callback(e)

    window.addEventListener("keydown", keyHandler)

    return () => window.removeEventListener("keydown", keyHandler)
  }, [key, callback])
}

export { useKeyDown }
