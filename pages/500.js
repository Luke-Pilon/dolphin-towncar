import Link from 'next/link';
export default function Custom500() {
    return (
        <div>
            <h1>500 - Server-side error occurred</h1>
            <h3>
                <Link href='/'>
                    <a>Reload</a>
                </Link>
            </h3>
        </div>
    );
}
