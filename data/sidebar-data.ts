export interface SidebarSubItem {
  title: string
  url: string
  isActive?: boolean
}

export interface SidebarItem {
  title: string
  url: string
  items?: SidebarSubItem[]
}

export const sidebarData: {
  navMain: SidebarItem[]
} = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Students",
      url: "/dashboard/students",
      items: [
        {
          title: "All Students",
          url: "/dashboard/students",
        },
        {
          title: "Register Student",
          url: "/dashboard/students/register",
        },
      ],
    },
    {
      title: "Teachers",
      url: "/dashboard/teachers",
      items: [
        {
          title: "All Teachers",
          url: "/dashboard/teachers",
        },
        {
          title: "Add Teacher",
          url: "/dashboard/teachers/add",
        },
      ],
    },
    {
      title: "Academic Management",
      url: "/dashboard/academic",
      items: [
        {
          title: "Courses",
          url: "/dashboard/courses",
        },
        {
          title: "Classes",
          url: "/dashboard/classes",
        },
        {
          title: "Attendance",
          url: "/dashboard/attendance",
        },
        {
          title: "Examinations",
          url: "/dashboard/examinations",
        },
      ],
    },
    {
      title: "Reports",
      url: "/dashboard/reports",
      items: [
        {
          title: "Student Reports",
          url: "/dashboard/reports/students",
        },
        {
          title: "Academic Reports",
          url: "/dashboard/reports/academic",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      items: [
        {
          title: "General Settings",
          url: "/dashboard/settings",
        },
      ],
    },
  ],
}
