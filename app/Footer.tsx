import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-semibold mb-4">Get In</h3>
                        <ul className="space-y-2">
                            <li><Link href="/register">Register</Link></li>
                            <li><Link href="/login">Login</Link></li>
                            <li><Link href="/about">Know more</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/features">Features</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/steps">Steps</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>Helpline: 1800 9090 32</li>
                            <li>Email: complaint@electionindia.gov.in</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary">Facebook</a>
                            <a href="#" className="hover:text-primary">Twitter</a>
                            <a href="#" className="hover:text-primary">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}