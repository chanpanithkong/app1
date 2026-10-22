"use client"

import { useRouter } from "next/navigation"
import {
  User,
  Settings,
  LockKeyhole,
  LogOut,
  Bell,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserNav() {
  const router = useRouter()

  function handleLogout() {
    // TODO: Add your authentication sign-out logic here.
    // This example only redirects to the login page.
    router.push("/login")
  }

  return (
    <div className="flex items-center gap-3">
      {/* Notifications */}
      <button
        type="button"
        aria-label="Notifications"
        className="relative rounded-full p-2 hover:bg-accent"
        onClick={() => router.push("/notifications")}
      >
        <Bell className="h-5 w-5" />
      </button>

      {/* User menu */}
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <button
              type="button"
              className="flex items-center gap-2 rounded-full outline-none hover:opacity-80"
              aria-label="Open user menu"
            />
          }
        >
          <Avatar className="h-9 w-9">
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>

          <span className="hidden text-sm font-medium md:inline">
            Admin
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">
                admin@school.com
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem
              onSelect={() => router.push("/profile")}
            >
              <User className="mr-2 h-4 w-4" />
              My Profile
            </DropdownMenuItem>

            <DropdownMenuItem
              onSelect={() => router.push("/settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuItem
              onSelect={() => router.push("/change-password")}
            >
              <LockKeyhole className="mr-2 h-4 w-4" />
              Change Password
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onSelect={handleLogout}
            className="text-red-600 focus:text-red-600"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
