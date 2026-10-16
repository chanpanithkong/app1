import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function StudentOverview() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Student Overview</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          Student enrollment statistics will appear here.
        </p>
      </CardContent>
    </Card>
  )
}
