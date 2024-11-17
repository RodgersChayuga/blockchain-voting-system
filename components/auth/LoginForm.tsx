'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Card, CardTitle, CardHeader, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // This will be connected to your smart contract later
        console.log('Login submitted:', formData)
    }

    return (
        <Card className="max-w-lg mx-auto">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                            Forgot Password?
                        </Link>
                        <Link href="/register" className="text-sm text-primary hover:underline">
                            Not a user? Register now
                        </Link>
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}