import Image from "next/image";

export function LogoApp() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-3 mb-14">
      <Image width='100'height='100' src='./cat-test.svg' alt="AppCat"/>
      <h1>AppCat</h1>
    </div>
  )
}