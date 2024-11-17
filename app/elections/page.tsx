'use client'
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export default function ElectionsPage() {
    const upcomingElections = [
        { name: 'UP state election', date: '02-04-2022' },
    ]

    const otherElections = [
        { name: 'Manipur state Election', date: '04-04-2022' },
        { name: 'Chhatishgarh state Election', date: '12-04-2022' },
        { name: 'Bangluru state Election', date: '20-04-2022' },
        { name: 'Gurgaon Municipal Corporation', date: '26-04-2022' },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Card>
                <CardHeader>
                    <CardTitle>Elections</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Upcoming Elections:</h3>
                            {upcomingElections.map((election) => (
                                <div key={election.name} className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                                    <span>{election.name}</span>
                                    <span>{election.date}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Other Elections:</h3>
                            {otherElections.map((election) => (
                                <div key={election.name} className="flex justify-between items-center p-4 bg-gray-50 rounded-md mt-2">
                                    <span>{election.name}</span>
                                    <span>{election.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}