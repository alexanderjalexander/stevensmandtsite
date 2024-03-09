import Link from "next/link";

export function Footer() {
    return (
        <div className="flex fixed bottom-0 justify-around m-auto px-4 py-4 w-full max-w-full bg-[var(--dark-bg)] z-50">
            <Link className="no-underline font-bold text-white" href="/">CONTACT</Link>
            <Link className="no-underline font-bold text-white" href="/">INSTAGRAM</Link>
            <Link className="no-underline font-bold text-white" href="/">YOUTUBE</Link>
        </div>
    )
}