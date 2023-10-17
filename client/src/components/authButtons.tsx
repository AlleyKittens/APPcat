import Image from "next/image"
import { signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import GoogleLogo from "@/assets/google-logo.svg"

export function GoogleSignInButton() {
  const login = () => {
    signIn("google")
  }

  return (
    <Button
      onClick={login}
      className="text-gray-500 flex flex-row justify-between items-center h-10 px-10"
      variant="outline"
    >
      <Image className="flex-none" width='16' src={GoogleLogo} alt='' />
      <span className="grow">Continue com Google</span>
    </Button>
  )
}

export function SignOutButton() {
  const logout = () => {
    signOut()
  }

  return (
    <Button onClick={logout}>Sair</Button>
  )
}
