"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { sampleExams } from "@/lib/sampleExams";

export default function ExamsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Available Exams</h1>
        <Button asChild>
          <Link href="/exams/history">View Attempt History</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sampleExams.map((exam) => (
          <Card key={exam.id}>
            <CardHeader>
              <CardTitle>{exam.title}</CardTitle>
              <CardDescription>{exam.subject}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Questions: {exam.questions.length}</p>
              <p>Total Marks: {exam.totalMarks}</p>
              <p>Duration: {exam.duration / 60} minutes</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <Link href={`/exams/${exam.id}?mode=practice`}>Practice Mode</Link>
              </Button>
              <Button asChild>
                <Link href={`/exams/${exam.id}?mode=test`}>Test Mode</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}