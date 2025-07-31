import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Find Events arounds you</h1>
      <p>Browse more than 10,000 events around you</p>
      <form action="">
        <input type="text" placeholder="Search events in any city ..." spellCheck={false} />
      </form>

      <section>
        <p>Popular:</p>
        <div>
          <Link href="events/austin">Austin</Link>
        </div>
        <div>
          <Link href="events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
