"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { SearchForm } from "@/components/search-form"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  CircleHelp,
  GalleryVerticalEndIcon,
  LogOut,
  MoreVertical,
  Search,
  Settings,
  User2,
  UserRound,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface SidebarItem {
  title: string
  url: string
}

const sidebarItems: SidebarItem[] = [
  { title: "Dashboard", url: "/" },
  { title: "Students", url: "/students" },
  { title: "Register Student", url: "/students/register" },
  { title: "Teachers", url: "/teachers" },
  { title: "Add Teacher", url: "/teachers/add" },
]

const menuItems = [
  {
    label: "Settings",
    icon: Settings,
    onClick: () => console.log("Settings clicked"),
  },
  {
    label: "Get Help",
    icon: CircleHelp,
    onClick: () => console.log("Get Help clicked"),
  },
  {
    label: "Search",
    icon: Search,
    onClick: () => console.log("Search clicked"),
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEndIcon className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">Documentation</span>
                <span className="">v1.0.0</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={pathname === item.url}
                  render={<Link href={item.url} />}
                >
                  {item.title}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <div className="w-full bg-[#181818] text-white">
          {/* Sidebar menu items */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon

              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={item.onClick}
                  className="h-9 w-full justify-start gap-2.5 rounded-md px-2 text-sm font-medium text-white hover:bg-white/10 hover:text-white"
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{item.label}</span>
                </Button>
              )
            })}
          </nav>

          {/* User profile */}
          <div className="mt-3 flex items-center gap-2 rounded-md px-2 py-2 hover:bg-accent">
            <Avatar className="size-8 shrink-0">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User avatar"
              />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm leading-5 font-semibold">shadcn</p>
              <p className="truncate text-xs text-muted-foreground">
                m@example.com
              </p>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open profile menu"
                    className="size-8 shrink-0 text-white hover:bg-white/10 hover:text-white"
                  />
                }
              >
                <MoreVertical className="size-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" side="top" className="w-48">
                <DropdownMenuItem>
                  <UserRound className="mr-2 size-4" />
                  Profile
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Settings className="mr-2 size-4" />
                  Settings
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={() => console.log("Logout clicked")}
                  className="text-destructive focus:text-destructive"
                >
                  <LogOut className="mr-2 size-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
