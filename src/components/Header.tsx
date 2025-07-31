import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <Logo />
      <Link href="/">Home</Link>
      <Link href="/events/all">All Events</Link>
    </header>
  );
}
