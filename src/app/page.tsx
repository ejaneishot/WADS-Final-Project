import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center">
      <div className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm shadow-sm ring-1 ring-slate-200">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Production-ready template
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          SmartCareer AI
        </h1>
        <p className="text-lg text-slate-600">
          A full-stack Career Counseling & Guidance web app starter: auth, database,
          REST APIs, AI endpoints, security scaffolding, tests, and Docker.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/register" className="rounded-xl bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-800">
            Create account
          </Link>
          <Link href="/login" className="rounded-xl bg-white px-4 py-2 text-slate-900 shadow ring-1 ring-slate-200 hover:bg-slate-50">
            Sign in
          </Link>
          <Link href="/dashboard" className="rounded-xl bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-500">
            Go to dashboard
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold">AI Features</p>
            <p className="mt-1 text-sm text-slate-600">Career match + CV analysis stubs</p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold">Security</p>
            <p className="mt-1 text-sm text-slate-600">JWT cookies + RBAC + Zod validation</p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold">Deploy</p>
            <p className="mt-1 text-sm text-slate-600">Docker + compose ready</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 p-1 shadow">
        <div className="rounded-[22px] bg-slate-950 p-6 text-slate-100">
          <p className="text-sm text-slate-300">Demo flow</p>
          <ol className="mt-3 space-y-2 text-sm">
            <li className="rounded-xl bg-white/5 px-3 py-2">1) Register → create student profile</li>
            <li className="rounded-xl bg-white/5 px-3 py-2">2) Add skills + interests</li>
            <li className="rounded-xl bg-white/5 px-3 py-2">3) Generate AI career matches</li>
            <li className="rounded-xl bg-white/5 px-3 py-2">4) View skill-gap + learning plan</li>
          </ol>
          <div className="mt-6 rounded-2xl bg-white/5 p-4">
            <p className="text-xs text-slate-300">Tip</p>
            <p className="mt-1 text-sm">
              Keep AI deterministic with a scoring model, then add an LLM for explanations.
              Testing becomes much easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
