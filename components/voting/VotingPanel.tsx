'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const candidates = [
    { id: 1, name: 'Baburao Ganpatrao Apte', party: 'Independent', education: 'BA (English Hons.)', age: 58 },
    { id: 2, name: 'Narendra Modi', party: 'BJP', education: 'MA Political Science', age: 72 },
    { id: 3, name: 'Rahul Gandhi', party: 'Congress', education: 'M.Phil', age: 52 },
    { id: 4, name: 'Arvind Kejriwal', party: 'AAP', education: 'B.Tech IIT', age: 54 },
]

export function VotingPanel() {
    const [selectedCandidate, setSelectedCandidate] = useState<string>('')
    const [showConfirmation, setShowConfirmation] = useState(false)

    const handleVoteSubmit = async () => {
        // This will be connected to your smart contract later
        console.log('Vote submitted for:', selectedCandidate)
        setShowConfirmation(false)
    }

    return (
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>Voting Panel</CardTitle>
            </CardHeader>
            <CardContent>
                <Alert className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                        Please ensure you are alone in front of the camera and in sufficient lighting.
                        You can only vote once per election.
                    </AlertDescription>
                </Alert>

                <RadioGroup
                    value={selectedCandidate}
                    onValueChange={setSelectedCandidate}
                    className="space-y-4"
                >
                    {candidates.map((candidate) => (
                        <div key={candidate.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                            <RadioGroupItem value={candidate.id.toString()} id={`candidate-${candidate.id}`} />
                            <Label htmlFor={`candidate-${candidate.id}`} className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-medium">{candidate.name}</p>
                                        <p className="text-sm text-gray-600">{candidate.party}</p>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <p>Age: {candidate.age}</p>
                                        <p>Education: {candidate.education}</p>
                                    </div>
                                </div>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>

                <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                    <DialogTrigger asChild>
                        <Button
                            className="mt-6 w-full"
                            disabled={!selectedCandidate}
                        >
                            Submit Vote
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Confirm Your Vote</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                            <p>You have selected: {candidates.find(c => c.id.toString() === selectedCandidate)?.name}</p>
                            <p className="text-sm text-gray-600 mt-2">
                                Please confirm your selection. This action cannot be undone.
                            </p>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <Button variant="outline" onClick={() => setShowConfirmation(false)}>
                                Cancel
                            </Button>
                            <Button onClick={handleVoteSubmit}>
                                Confirm Vote
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    )
}