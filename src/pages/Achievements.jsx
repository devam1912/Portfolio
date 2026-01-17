export default function Achievements() {
  return (
    <section className="space-y-4">
      <div className="rounded-3xl glass p-6">
        <h2 className="text-2xl font-semibold">Achievements</h2>
        <p className="mt-2 text-sm opacity-90">
          Solved <span className="font-semibold">400+</span> DSA problems across platforms.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <a
            className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
            href="https://leetcode.com/u/devam1/"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode ↗
          </a>

          <a
            className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
            href="https://www.geeksforgeeks.org/profile/devamtanna01"
            target="_blank"
            rel="noreferrer"
          >
            GeeksforGeeks ↗
          </a>

          <a
            className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
            href="https://codeforces.com/profile/devam01"
            target="_blank"
            rel="noreferrer"
          >
            Codeforces ↗
          </a>
        </div>
      </div>

      <div className="rounded-3xl glass p-6">
        <div className="text-sm font-semibold">What this shows</div>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm opacity-90">
          <li>Consistency and problem-solving discipline</li>
          <li>Strong foundations in data structures and algorithms</li>
          <li>Competitive programming exposure + interview readiness</li>
        </ul>
      </div>
    </section>
  );
}
