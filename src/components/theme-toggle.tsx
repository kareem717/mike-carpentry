"use client"

import { useTheme } from "next-themes"
import { ComponentPropsWithoutRef } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle({ ...props }: ComponentPropsWithoutRef<typeof Button>) {
  const { setTheme, resolvedTheme } = useTheme()

  function handleThemeToggle() {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
      aria-label="Theme toggle"
      type="button"
      {...props}
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="size-4 hidden dark:block" />
    </Button>
  )
}
