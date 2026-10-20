import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div className="flex w-screen h-screen items-center justify-center text-lg">
      <div>
        Todo Application
        <br />
        <Link className="text-md border m-2" href="/signin">Sign In</Link>
        <br />
        <Link className="text-md border m-2" href="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
