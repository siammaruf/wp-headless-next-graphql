import Link from "next/link";

export default function Footer (){
    return (
        <footer>
            <Link
            href="https://developers.wpengine.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            Part of the WP Engine Headless Developers Road Map 🗺️
            </Link>
        </footer>
    )
}