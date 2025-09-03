import SectionCard from './SectionCard.jsx'
import { projects } from '../data/projects.js'
import Heading from './Heading.jsx'

export default function Projects() {
  return (
    <div className="flex flex-col w-full mt-12 px-3 max-w-xl mx-auto">
      <Heading text="Projects" />
      <div className="mt-4 flex flex-col gap-12">
        {projects.map((s) => <SectionCard key={s.title} {...s} />)}
      </div>
    </div>
  )
}
