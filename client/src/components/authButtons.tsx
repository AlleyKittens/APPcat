import Image from "next/image";
import { Button } from "@/components/ui/button";
import AppleLogo from "@/assets/apple-logo.svg"
import GoogleLogo from "@/assets/google-logo.svg"

export function GoogleSingInButton() {
  return (
    <Button className="text-gray-500 flex flex-row justify-between items-center h-10 px-10" variant="outline">
      <Image className="flex-none" width='16' src={GoogleLogo} alt=''/>
      <span className="grow">Continue com Google</span>
    </Button>
  )
}

export function AppleSingInButton() {
  return (
    <Button className="text-gray-500 flex flex-row justify-between items-center h-10 px-10" variant="outline">
      <Image className="flex-none" width='20' src={AppleLogo} alt=''/>
      <span className="grow">Continue com Apple</span>
    </Button>
  )
}