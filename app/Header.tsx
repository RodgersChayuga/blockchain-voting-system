'use client'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export function Header() {
    return (
        <header className="border-b">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold">
                        Voting System
                    </Link>
                    <div className="hidden md:flex items-center ml-10 space-x-8">
                        <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                        <Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
                        <Link href="/elections" className="text-gray-600 hover:text-gray-900">Elections</Link>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <ConnectButton />
                    <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
                    <Link
                        href="/register"
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                    >
                        Register
                    </Link>
                </div>
            </nav>
        </header>
    )
}