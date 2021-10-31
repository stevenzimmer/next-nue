import Link from "next/link";

export default function Footer() {
    return (
        <footer className="container">
            <div className="flex items-center justify-between py-2">
                <div>Nue</div>
                <div className="text-center">
                    <p>Copyright text </p>
                </div>
                <div>
                    <p>The system of record for ARR</p>
                </div>
            </div>
        </footer>
    );
}
