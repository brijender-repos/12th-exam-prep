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

export type PreviousYearPaper = {
  year: number;
  attemptCount: number;
};

export default function PreviousYearsPapers() {
  const previousYearsPapers: PreviousYearPaper[] = [
    { year: 2023, attemptCount: 150 },
    { year: 2022, attemptCount: 200 },
    { year: 2021, attemptCount: 180 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Previous Years Papers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead>Attempt Count</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {previousYearsPapers.map((paper) => (
              <TableRow key={paper.year}>
                <TableCell>{paper.year}</TableCell>
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
