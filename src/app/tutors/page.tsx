import Link from "next/link";

const allTutors = [
  { name: "Dr. Sarah Chen", role: "AI & Machine Learning", initials: "SC", color: "from-emerald-400 to-teal-500", rating: 4.9, sessions: 128, tag: "Top Rated", bio: "PhD in AI from Stanford. 8 years industry experience at DeepMind and OpenAI." },
  { name: "Marcus Rivera", role: "Cloud & DevOps", initials: "MR", color: "from-sky-400 to-blue-600", rating: 4.8, sessions: 95, tag: "Popular", bio: "AWS Solutions Architect. Previously SRE at Netflix and Cloudflare." },
  { name: "Priya Nair", role: "Cybersecurity", initials: "PN", color: "from-red-400 to-orange-500", rating: 5.0, sessions: 74, tag: "Expert", bio: "OSCP certified. 6 years in red team ops and security consulting." },
  { name: "James Park", role: "Software Engineering", initials: "JP", color: "from-blue-400 to-cyan-500", rating: 4.7, sessions: 212, tag: "Most Sessions", bio: "Senior SWE at a FAANG. Specializes in system design and interview prep." },
  { name: "Aisha Okonkwo", role: "Data Science", initials: "AO", color: "from-violet-400 to-purple-600", rating: 4.9, sessions: 156, tag: "Rising Star", bio: "Data scientist at Stripe. Expert in ML pipelines and analytics engineering." },
  { name: "Leo Tanaka", role: "UX & Product", initials: "LT", color: "from-pink-400 to-rose-500", rating: 4.6, sessions: 88, tag: "Creative", bio: "Product designer with 7 years at Apple and Figma. Obsessed with systems thinking." },
  { name: "Grace Wu", role: "Software Engineering", initials: "GW", color: "from-teal-400 to-cyan-600", rating: 4.8, sessions: 103, tag: "Interview Prep", bio: "Ex-Google L5 engineer. Helped 200+ students crack FAANG technical rounds." },
  { name: "Omar Hassan", role: "Cloud & DevOps", initials: "OH", color: "from-amber-400 to-orange-500", rating: 4.7, sessions: 67, tag: "Hands-on", bio: "GCP and Kubernetes specialist. Builds real infra labs for every student." },
  { name: "Nina Petrov", role: "Data Science", initials: "NP", color: "from-indigo-400 to-blue-500", rating: 4.9, sessions: 141, tag: "Research", bio: "ML researcher turned industry practitioner. Published in NeurIPS and ICML." },
  { name: "Carlos Mendez", role: "Cybersecurity", initials: "CM", color: "from-rose-400 to-red-600", rating: 4.8, sessions: 59, tag: "CTF Champion", bio: "National CTF finalist. Teaches offensive and defensive security from the ground up." },
  { name: "Fatima Al-Rashid", role: "AI & Machine Learning", initials: "FA", color: "from-green-400 to-emerald-600", rating: 5.0, sessions: 92, tag: "NLP Expert", bio: "NLP researcher at Hugging Face. Specializes in LLMs and transformer architecture." },
  { name: "Ryan Blackwell", role: "UX & Product", initials: "RB", color: "from-purple-400 to-violet-600", rating: 4.6, sessions: 77, tag: "Startup", bio: "Founded two design-led startups. Teaches product thinking from zero to launch." },
];

export default function TutorsPage() {
  return (
    <div className="relative z-10 min-h-screen">
      <div className="container-page py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-sm flex items-center gap-1 mb-6 transition-colors hover:text-white" style={{ color: "var(--text-muted)" }}>
            ← Back to home
          </Link>
          <p className="section-label">Expert Mentors</p>
          <h1 className="mt-3 text-3xl font-bold md:text-5xl">
            All tutors.{" "}
            <span style={{ color: "var(--text-secondary)" }}>Find your match.</span>
          </h1>
          <p className="mt-4 text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Book 1-on-1 sessions with industry professionals who've been exactly where you want to go.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allTutors.map((tutor) => (
            <div key={tutor.name} className="card-dark glow-ring flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${tutor.color} text-base font-bold`}
                  style={{ color: "var(--surface)" }}>
                  {tutor.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm leading-snug">{tutor.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{tutor.role}</p>
                  <span
                    className="inline-block mt-1 rounded-full px-2 py-0.5 text-[0.6rem] font-semibold"
                    style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--border-accent)" }}
                  >
                    {tutor.tag}
                  </span>
                </div>
              </div>

              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {tutor.bio}
              </p>

              <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-secondary)" }}>
                <span>⭐ {tutor.rating}</span>
                <span>{tutor.sessions} sessions</span>
              </div>

              <button className="btn-accent w-full" style={{ padding: "0.5rem 0.75rem", fontSize: "0.8rem" }}>
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
