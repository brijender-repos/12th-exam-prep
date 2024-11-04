"use client"

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ExamTemplate } from '@/components/ExamTemplate';
import { sampleExams } from '@/lib/sampleExams';
import { Exam } from '@/lib/types';

export default function ExamPage({ params }: { params: { id: string } }) {
  const [exam, setExam] = useState<Exam | null>(null);
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') as 'practice' | 'test' || 'practice';

  useEffect(() => {
    const selectedExam = sampleExams.find(e => e.id === params.id);
    if (selectedExam) {
      setExam(selectedExam);
    }
  }, [params.id]);

  if (!exam) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading exam...</p>
      </div>
    );
  }

  return <ExamTemplate exam={exam} mode={mode} />;
}