'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
// import { Input } from "postcss"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        parentName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        aadhar: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // This will be connected to your smart contract later
        console.log('Form submitted:', formData)
    }

    return (
        <Card className="max-w-lg mx-auto">
            <CardHeader>
                <CardTitle>Registration Form</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Input
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <Input
                            type="date"
                            placeholder="Date of Birth"
                            value={formData.dob}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, dob: e.target.value })}
                        />
                    </div>
                    <div>
                        <Input
                            placeholder="Father's/Mother's Name"
                            value={formData.parentName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, parentName: e.target.value })}
                        />
                    </div>
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
                            placeholder="Mobile No."
                            value={formData.mobile}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, mobile: e.target.value })}
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
                    <div>
                        <Input
                            type="password"
                            placeholder="Re-enter Password"
                            value={formData.confirmPassword}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        />
                    </div>
                    <div>
                        <Input
                            placeholder="Aadhar Number"
                            value={formData.aadhar}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, aadhar: e.target.value })}
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
