import Image from 'next/image'

const members = [
  {
    name: 'Sathvik Muthyala',
    role: 'Project Manager',
    blurb: 'Coordinates the team, sprint planning, client communication, and project delivery.',
    photo: '/images/team/sathvik.jpg',
  },
  {
    name: 'Julian Klestorny',
    role: 'Developer',
    blurb: 'Develops and tests application features and supports deployment of the project.',
    photo: '/images/team/julian.jpg',
  },
  {
    name: 'Dani Adonai',
    role: 'Developer',
    blurb: 'Develops and tests application features, including the project login experience.',
    photo: '/images/team/dani.jpg',
  },
  {
    name: 'Richard Cheng',
    role: 'User Experience',
    blurb: 'Designs and validates the user experience, layouts, and interface wireframes.',
    photo: '/images/team/richard.jpg',
  },
  {
    name: 'Muhammad Abdul Rafay',
    role: 'Business Analyst',
    blurb: 'Reviews requirements and validates project features against the agreed requirements.',
    photo: '/images/team/muhammad.jpg',
  },
]

function PlaceholderAvatar() {
  return (
    <div className="flex h-28 w-28 items-center justify-center border border-zinc-500 bg-zinc-200">
      <svg
        viewBox="0 0 100 100"
        className="h-20 w-20 text-black"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        aria-hidden="true"
      >
        <circle cx="50" cy="32" r="18" />
        <path d="M24 82c0-18 12-30 26-30s26 12 26 30" />
      </svg>
    </div>
  )
}

function MemberPhoto({
  photo,
  name,
}: {
  photo?: string
  name: string
}) {
  if (!photo) {
    return <PlaceholderAvatar />
  }

  return (
    <Image
      src={photo}
      alt={`${name} profile photo`}
      width={112}
      height={112}
      className="h-28 w-28 border border-zinc-500 object-cover"
    />
  )
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-14 text-center text-4xl font-bold tracking-tight">
          Team 55 - Evaluation Dashboard Project - Team A
        </h1>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.name}
              className="min-h-80 rounded-lg border border-blue-200 bg-blue-200 p-4"
            >
              <MemberPhoto photo={member.photo} name={member.name} />

              <h2 className="mt-3 break-words text-xl font-bold leading-tight">
                {member.name}
              </h2>

              <p className="mt-1 font-medium">{member.role}</p>

              <p className="mt-3 break-words text-sm leading-relaxed text-zinc-600">
                {member.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
