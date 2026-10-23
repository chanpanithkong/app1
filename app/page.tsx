import { Users, GraduationCap, BookOpen, CalendarCheck } from "lucide-react"

import { SchoolLayout } from "@/components/school-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { StudentOverview } from "@/components/dashboard/student-overview"
import { AttendanceChart } from "@/components/dashboard/attendance-chart"

export default function DashboardPage() {
  return (
    <SchoolLayout>
      <main className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Students"
            value="1,250"
            description="Currently enrolled"
            icon={Users}
          />
          <StatCard
            title="Total Teachers"
            value="85"
            description="Active teaching staff"
            icon={GraduationCap}
          />
          <StatCard
            title="Total Courses"
            value="42"
            description="Available courses"
            icon={BookOpen}
          />
          <StatCard
            title="Attendance Rate"
            value="96.5%"
            description="Today's attendance"
            icon={CalendarCheck}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <StudentOverview />
          <AttendanceChart />
        </div>
      </main>
    </SchoolLayout>
  )
}
