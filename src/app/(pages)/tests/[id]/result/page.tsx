"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const pythonTest = {
  id: "1",
  title: "Python Language Test",
  subject: "Computer Science",
  totalMarks: 50, // Sum of all question marks
}

export default function ResultPage() {
  const [score, setScore] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    const savedScore = localStorage.getItem('testScore')
    if (savedScore) {
      setScore(parseInt(savedScore, 10))
    }
  }, [])

  const handleReturnToTests = () => {
    // Clear local storage
    localStorage.removeItem('testAnswers')
    localStorage.removeItem('testScore')
    router.push('/tests')
  }

  if (score === null) {
    return <div>Loading...</div>
  }

  const percentage = (score / pythonTest.totalMarks) * 100

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>{pythonTest.title} - Result</CardTitle>
          <CardDescription>{pythonTest.subject}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Your Score</h2>
            <p className="text-5xl font-bold mb-4">{score} / {pythonTest.totalMarks}</p>
            <Progress value={percentage} className="w-full h-4 mb-4" />
            <p className="text-xl">{percentage.toFixed(2)}%</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleReturnToTests}>Return to Tests</Button>
        </CardFooter>
      </Card>
    </div>
  )
}