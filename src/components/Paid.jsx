import SectionCard from './SectionCard.jsx'
import { paid } from '../data/paid.js'
import Heading from './Heading.jsx'

export default function Paid() {
  return (
    <div className="flex flex-col w-full mt-12 px-3 max-w-xl mx-auto">
      <Heading text="Works" />
      <div className="mt-4 flex flex-col gap-12">
        {paid.map((s) => <SectionCard key={s.title} {...s} />)}
      </div>
    </div>
  )
}
