'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface UserData {
    name: string
    age: number
    fatherName: string
    email: string
    mobile: string
    aadhar: string
    address: string
    isEligible: boolean
    isVerified: boolean
}

export function UserProfile() {
    const [isEditing, setIsEditing] = useState(false)
    const [userData, setUserData] = useState<UserData>({
        name: 'John Doe',
        age: 19,
        fatherName: 'Papa John Doe',
        email: 'john.doe@gmail.com',
        mobile: '+91 9191505010',
        aadhar: '6100 4080 9126 0909',
        address: 'XYZ, Street No. 92, Gurgaon, Uttar Pardesh, 100021',
        isEligible: true,
        isVerified: true
    })

    const handleSave = async () => {
        // This will be connected to your smart contract later
        console.log('Profile updated:', userData)
        setIsEditing(false)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-start space-x-6">
                    <div className="flex flex-col items-center space-y-2">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="/placeholder-avatar.png" alt={userData.name} />
                            <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm">Change Photo</Button>
                    </div>

                    <div className="flex-1 space-y-4">
                        {isEditing ? (
                            // Edit Mode
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label>Name</Label>
                                        <Input
                                            value={userData.name}
                                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <Label>Father's Name</Label>
                                        <Input
                                            value={userData.fatherName}
                                            onChange={(e) => setUserData({ ...userData, fatherName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <Label>Mobile</Label>
                                        <Input
                                            value={userData.mobile}
                                            onChange={(e) => setUserData({ ...userData, mobile: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <Label>Email</Label>
                                        <Input
                                            value={userData.email}
                                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <Label>Address</Label>
                                        <Input
                                            value={userData.address}
                                            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                                    <Button onClick={handleSave}>Save Changes</Button>
                                </div>
                            </>
                        ) : (
                            // View Mode
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label className="text-gray-600">Name:</Label>
                                        <p>{userData.name}</p>
                                    </div>
                                    <div>
                                        <Label className="text-gray-600">Father's/Mother's Name:</Label>
                                        <p>{userData.fatherName}</p>
                                    </div>
                                    <div>
                                        <Label className="text-gray-600">Age:</Label>
                                        <p>{userData.age}</p>
                                    </div>
                                    <div>
                                        <Label className="text-gray-600">Email:</Label>
                                        <p>{userData.email}</p>
                                    </div>
                                    <div>
                                        <Label className="text-gray-600">Mobile Number:</Label>
                                        <p>{userData.mobile}</p>
                                    </div>
                                    <div>
                                        <Label className="text-gray-600">Aadhar Number:</Label>
                                        <p>{userData.aadhar}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <Label className="text-gray-600">Address:</Label>
                                        <p>{userData.address}</p>
                                    </div>
                                    <div>
                                        <Label className="text-gray-600">Eligible:</Label>
                                        <p>{userData.isEligible ? 'Yes' : 'No'}</p>
                                    </div>
                                    <div>
                                        <Label className="text-gray-600">Verified:</Label>
                                        <p>{userData.isVerified ? 'Yes' : 'No'}</p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}