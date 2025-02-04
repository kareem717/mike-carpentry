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
      variant="outline"
      size="icon"
      onClick={handleThemeToggle}
      aria-label="Theme toggle"
      type="button"
      {...props}
    >
      {resolvedTheme === "light" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}
