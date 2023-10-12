import { AppleSingInButton, GoogleSingInButton } from "@/components/authButtons";
import { LogoApp } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


export default function SingIn() {
  return (
    <main className="w-full flex flex-col gap-y-5">
      <LogoApp/>
      <h2 className="font-medium tracking-wide text-center uppercase">Login</h2>  
      <div className="flex flex-col justify-center gap-y-4 mb-6">
        <GoogleSingInButton/>
        <AppleSingInButton/>
      </div>
      <div className="flex flex-row justify-center items-center gap-x-2">
        <Separator className="w-20"/>
        <span className="text-xs font-medium uppercase text-gray-400">ou</span>
        <Separator className="w-20"/>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <span className="text-xs">Não tem uma conta?</span>
        <Button variant="link">Cadastre-se!</Button>
      </div>
    </main>
  )
}
