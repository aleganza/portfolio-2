import { useState } from 'react';

import Heading from './Heading';

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ganzarolli.alessio@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="flex flex-col w-full items-start max-w-xl mx-auto mt-16 sm:mt-32 px-3 mb-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <Heading text="Alessio Ganzarolli" />
          <p className="text">Web Developer, Pixel Artist</p>
        </div>

        <button
          onClick={copyEmail}
          className={`text-magic py-1 inline-flex${copied ? "" : " cursor-pointer"}`}
          aria-live="polite"
        >
          {copied ? 'Email copied!' : 'Copy my email'}
        </button>
      </div>
    </div>
  )
}
