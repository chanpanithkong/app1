import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AddTeacherPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 p-4 md:p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Add Teacher</h1>
        <p className="text-sm text-muted-foreground">
          Add a teacher to the school staff.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Teacher details</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-4">
          <p className="text-sm text-muted-foreground">
            Teacher records are not connected to a data source yet, so adding
            teachers is not available.
          </p>
          <Link
            href="/teachers"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Back to all teachers
          </Link>
        </CardContent>
      </Card>
    </main>
  )
}
