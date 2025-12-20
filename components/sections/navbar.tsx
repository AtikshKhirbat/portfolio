"use client";
import ThemeBtn from "../ui/ThemechangerButon";
export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-20 py-5 w-full h-fit flex flex-row md:justify-between justify-center items-center bg-background">
      <div className="md:flex md:justify-between w-full hidden">
        <div className="md:flex hidden gap-0 font-jersey text-6xl">
          <h1>{"<"}</h1>
          <h1 className="text-primary">Rigbyte</h1>
          <h1>{"/>"}</h1>
        </div>

        <div className="w-fit h-fit flex text-4xl gap-5 items-center">
          <p>About</p>
          <p>Projects</p>
          <p>Contact Me</p>
          <ThemeBtn />
        </div>
      </div>
    </nav>
  );
}
