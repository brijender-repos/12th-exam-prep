'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export type SamplePaper = {
  id: string;
  name: string;
  attemptCount: number;
};

export default function SamplePapers() {
  const samplePapers: SamplePaper[] = [
    { id: '1', name: 'Math Sample 1', attemptCount: 50 },
    { id: '2', name: 'Physics Sample 1', attemptCount: 45 },
    { id: '3', name: 'Chemistry Sample 1', attemptCount: 40 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sample Question Papers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Paper Name</TableHead>
              <TableHead>Attempt Count</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {samplePapers.map((paper) => (
              <TableRow key={paper.id}>
                <TableCell>{paper.name}</TableCell>
                <TableCell>{paper.attemptCount}</TableCell>
                <TableCell>
                  <Button variant='outline'>Attempt</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
