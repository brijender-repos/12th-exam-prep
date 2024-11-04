import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const tests = [
  { id: "1", title: "Python Language Test", subject: "Computer Science", questionCount: 10, totalMarks: 100 },
  // Add more test data as needed
]

export default function TestsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Available Tests</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tests.map((test) => (
          <Card key={test.id}>
            <CardHeader>
              <CardTitle>{test.title}</CardTitle>
              <CardDescription>{test.subject}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Questions: {test.questionCount}</p>
              <p>Total Marks: {test.totalMarks}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/tests/${test.id}`}>Start Test</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}