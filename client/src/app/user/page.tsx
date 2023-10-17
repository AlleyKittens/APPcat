'use client'
import { SignOutButton } from "@/components/authButtons";
import { LogoApp } from "@/components/logo";

export default function User() {

  return (
    <main className="w-full flex flex-col">
      <LogoApp />
      <SignOutButton />
    </main>
  )
}