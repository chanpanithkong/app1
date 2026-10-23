import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterStudentPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 p-4 md:p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Register Student
        </h1>
        <p className="text-sm text-muted-foreground">
          Add a student to the school roster.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student registration</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-4">
          <p className="text-sm text-muted-foreground">
            Student records are not connected to a data source yet, so
            registration is not available.
          </p>
          <Link
            href="/students"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Back to all students
          </Link>
        </CardContent>
      </Card>
    </main>
  )
}
