import { useEffect, useState } from "react"

export default function Header({ text }) {
  // inizializza subito con caratteri random per evitare flicker vuoto
  const getInitialRandom = () => {
    const chars = "!@#$%^&*()_+=-<>?/{}[]|~"
    return text
      .split("")
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("")
  }

  const [displayedText, setDisplayedText] = useState(getInitialRandom())

  useEffect(() => {
    const chars = "!@#$%^&*()_+=-<>?/{}[]|~"
    let frame = 0
    const maxFrames = 0.8

    const interval = setInterval(() => {
      let newText = ""
      for (let i = 0; i < text.length; i++) {
        if (frame / maxFrames > i) {
          newText += text[i]
        } else {
          newText += chars[Math.floor(Math.random() * chars.length)]
        }
      }
      setDisplayedText(newText)
      frame += 1

      if (frame > text.length * maxFrames) {
        clearInterval(interval)
        setDisplayedText(text)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [text])

  return (
    <h2 className="text-xl font-pixel">
      {displayedText}
    </h2>
  )
}
