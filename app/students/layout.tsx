import { SchoolLayout } from "@/components/school-layout"

export default function StudentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <SchoolLayout>{children}</SchoolLayout>
}
