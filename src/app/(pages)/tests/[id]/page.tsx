"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CountdownTimer } from "@/components/CountdownTimer"

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

export default function TestPage({ params }: { params: { id: string } }) {
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const renderQuestion = (question: any) => {
    switch (question.type) {
      case "single":
        return (
          <RadioGroup onValueChange={(value) => handleAnswerChange(question.id, value)} value={answers[question.id]}>
            {question.options.map((option: string) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        )
      case "multiple":
        return (
          <div className="space-y-2">
            {question.options.map((option: string) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={`${question.id}-${option}`}
                  checked={(answers[question.id] || []).includes(option)}
                  onCheckedChange={(checked) => {
                    const currentAnswers = answers[question.id] || []
                    if (checked) {
                      handleAnswerChange(question.id, [...currentAnswers, option])
                    } else {
                      handleAnswerChange(question.id, currentAnswers.filter((a: string) => a !== option))
                    }
                  }}
                />
                <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
              </div>
            ))}
          </div>
        )
      case "true_false":
        return (
          <RadioGroup onValueChange={(value) => handleAnswerChange(question.id, value === "true")} value={answers[question.id]?.toString()}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id={`${question.id}-true`} />
              <Label htmlFor={`${question.id}-true`}>True</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id={`${question.id}-false`} />
              <Label htmlFor={`${question.id}-false`}>False</Label>
            </div>
          </RadioGroup>
        )
      case "fill_blank":
        return (
          <Input
            placeholder="Type your answer here"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        )
      case "subjective":
        return (
          <Textarea
            placeholder="Type your answer here"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        )
      default:
        return null
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    // Save answers to local storage
    localStorage.setItem('testAnswers', JSON.stringify(answers))
    router.push(`/tests/${params.id}/review`)
  }

  if (isSubmitted) {
    return null // This will prevent any flickering as we redirect
  }

  return (
    <div className="container mx-auto py-8">
      <CountdownTimer initialTime={3600} onTimeUp={handleSubmit} />
      <Card>
        <CardHeader>
          <CardTitle>{pythonTest.title}</CardTitle>
          <CardDescription>{pythonTest.subject}</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {pythonTest.questions.map((question, index) => (
              <AccordionItem key={question.id} value={question.id}>
                <AccordionTrigger>Question {index + 1}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="font-medium">{question.text}</p>
                    {renderQuestion(question)}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>Submit Test</Button>
        </CardFooter>
      </Card>
    </div>
  )
}