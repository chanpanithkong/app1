import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AttendanceChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Attendance Overview</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          Your attendance chart will appear here.
        </p>
      </CardContent>
    </Card>
  )
}