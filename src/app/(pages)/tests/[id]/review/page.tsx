"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const pythonTest = {
  id: "1",
  title: "Python Language Test",
  subject: "Computer Science",
  questions: [
    {
      id: "q1",
      type: "single",
      text: "What is the output of print(type(5))?",
      options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'bool'>"],
      answer: "<class 'int'>",
      marks: 10
    },
    {
      id: "q2",
      type: "multiple",
      text: "Which of the following are valid Python data types? (Select all that apply)",
      options: ["Integer", "Float", "String", "Boolean", "Complex"],
      answer: ["Integer", "Float", "String", "Boolean", "Complex"],
      marks: 10
    },
    {
      id: "q3",
      type: "true_false",
      text: "Python is a statically-typed language.",
      answer: false,
      marks: 10
    },
    {
      id: "q4",
      type: "fill_blank",
      text: "The ________ function is used to get user input in Python.",
      answer: "input",
      marks: 10
    },
    {
      id: "q5",
      type: "subjective",
      text: "Explain the difference between a list and a tuple in Python.",
      answer: "",
      marks: 10
    },
  ]
}

export default function ReviewPage({ params }: { params: { id: string } }) {
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const router = useRouter()

  useEffect(() => {
    const savedAnswers = localStorage.getItem('testAnswers')
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers))
    }
  }, [])

  const handleSubmit = () => {
    // Calculate score
    let score = 0
    pythonTest.questions.forEach(question => {
      if (question.type === 'subjective') {
        // Subjective questions need manual grading
        return
      }
      if (JSON.stringify(answers[question.id]) === JSON.stringify(question.answer)) {
        score += question.marks
      }
    })

    // Save score to local storage
    localStorage.setItem('testScore', score.toString())
    router.push(`/tests/${params.id}/result`)
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>{pythonTest.title} - Review</CardTitle>
          <CardDescription>{pythonTest.subject}</CardDescription>
        </CardHeader>
        <CardContent>
          {pythonTest.questions.map((question, index) => (
            <div key={question.id} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Question {index + 1}</h3>
              <p className="mb-2">{question.text}</p>
              <p className="font-medium">Your Answer: {JSON.stringify(answers[question.id])}</p>
              {question.type !== 'subjective' && (
                <p className="font-medium">Correct Answer: {JSON.stringify(question.answer)}</p>
              )}
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>Submit for Grading</Button>
        </CardFooter>
      </Card>
    </div>
  )
}