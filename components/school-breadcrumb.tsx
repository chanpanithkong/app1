"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbEntry {
  label: string
  href?: string
}

const breadcrumbsByPath: Record<string, BreadcrumbEntry[]> = {
  "/": [{ label: "Dashboard" }],
  "/students": [{ label: "Students" }],
  "/students/register": [
    { label: "Students", href: "/students" },
    { label: "Register Student" },
  ],
  "/teachers": [{ label: "Teachers" }],
  "/teachers/add": [
    { label: "Teachers", href: "/teachers" },
    { label: "Add Teacher" },
  ],
}

export function SchoolBreadcrumb() {
  const pathname = usePathname()
  const items = breadcrumbsByPath[pathname] ?? [{ label: "Page" }]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1

          return (
            <React.Fragment key={item.label}>
              <BreadcrumbItem>
                {isCurrentPage ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<Link href={item.href ?? "/"} />}>
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isCurrentPage && <BreadcrumbSeparator />}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
