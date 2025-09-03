import { Link } from 'lucide-react';

export default function SectionCard({ title, description, image, link, tag, date }) {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={image}
        alt={title}
        width="1820"
        height="1024"
        className="rounded-xl"
        loading="lazy"
      />

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row w-full items-center justify-between"
        >
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="underline">{title}</p>
            {tag && <p className="rounded-full px-2 py-[2px] text-sm text-magic">{tag}</p>}
            {date && <p className="text-supporting text-sm">{date}</p>}
          </div>
          <Link className="text-supporting" size={16} />
        </a>
      ) : (
        <div className="flex flex-row items-center justify-start gap-3">
          <p>{title}</p>
          {tag && <p className="rounded-full px-2 py-[2px] text-sm text-magic">{tag}</p>}
          {date && <p className="text-supporting text-sm">{date}</p>}
        </div>
      )}

      <p className="text">{description}</p>
    </div>
  );
}
