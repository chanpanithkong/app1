import { AppSidebar } from "@/components/app-sidebar"
import { SchoolBreadcrumb } from "@/components/school-breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import SchoolProfile from "./school-profile"

export function SchoolLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />
          <SchoolBreadcrumb />
          <SchoolProfile />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
