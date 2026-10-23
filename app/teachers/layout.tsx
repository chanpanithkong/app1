import { SchoolLayout } from "@/components/school-layout"

export default function TeachersLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <SchoolLayout>{children}</SchoolLayout>
}
