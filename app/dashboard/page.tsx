import { AppSidebar } from "@/components/app-sidebar"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Separator } from "@/components/ui/separator"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  Users,
  GraduationCap,
  BookOpen,
  CalendarCheck,
} from "lucide-react"

import { StatCard } from "@/components/dashboard/stat-card"
import { StudentOverview } from "@/components/dashboard/student-overview"
import { AttendanceChart } from "@/components/dashboard/attendance-chart"
import { UserNav } from "@/components/nav-user"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />

          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">
                  School Management
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="ml-auto">
            <UserNav />
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex flex-1 flex-col gap-4 p-4">

          {/* Four Statistics Cards */}
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

          {/* Two Content Components */}
          <div className="grid gap-4 md:grid-cols-2">

            <StudentOverview />

            <AttendanceChart />

          </div>

        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
