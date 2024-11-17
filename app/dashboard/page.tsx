import { UserProfile } from '@/components/dashboard/UserProfile'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-6">
                <UserProfile />

                <Card>
                    <CardHeader>
                        <CardTitle>Voting History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* This will be populated from your smart contract */}
                            <p className="text-gray-600">No voting history available.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}