"use client"

import { useState, useEffect } from 'react';
import { ExamTemplate } from '@/components/ExamTemplate';
import { Exam, ExamAttempt } from '@/lib/types';
import { sampleExams } from '@/lib/sampleExams';

export default function ReviewPage({ params }: { params: { id: string, attemptId: string } }) {
  const [attempt, setAttempt] = useState<ExamAttempt | null>(null);
  const [exam, setExam] = useState<Exam | null>(null);

  useEffect(() => {
    // Get the exam data
    const selectedExam = sampleExams.find(e => e.id === params.id);
    if (selectedExam) {
      setExam(selectedExam);
    }

    // Get the attempt data
    const attempts = JSON.parse(localStorage.getItem('examAttempts') || '[]');
    const foundAttempt = attempts.find((a: ExamAttempt) => a.id === params.attemptId);
    if (foundAttempt) {
      setAttempt(foundAttempt);
    }
  }, [params.id, params.attemptId]);

  if (!attempt || !exam) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading review...</p>
      </div>
    );
  }

  return <ExamTemplate exam={exam} mode="review" attempt={attempt} />;
}