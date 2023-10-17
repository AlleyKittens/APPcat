'use client'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const { data: session, status } = useSession()

  if (status != 'authenticated') {
    redirect('/')
  }
  return <>{children}</>
}