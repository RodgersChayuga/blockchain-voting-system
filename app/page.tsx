import { Button } from "../components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Be a part of decision</h1>
        <p className="text-2xl mb-8">Vote Today</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/about">READ MORE</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/register">REGISTER</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="font-semibold mb-2">Secured by 256 bit encryption</h3>
              <p>Advanced security for your vote</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-semibold mb-2">Backed by ethereum based technology</h3>
              <p>Blockchain-powered voting system</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-semibold mb-2">Verifiable transactions</h3>
              <p>Track and verify your vote</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
