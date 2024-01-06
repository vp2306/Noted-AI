import TypewriterTitle from "@/components/ui/TypewriterTitle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TypewriterComponent, { TypewriterClass } from "typewriter-effect";
import Link from "next/link";
import { ChevronRightCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen flex grainy items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-900">
      <div>
        <h1 className="font-semibold text-7xl text-left">
          Your AI <br />{" "}
          <span className="text-blue-600 font-bold">note taking</span> <br />{" "}
          assistant.
        </h1>
        <div className="mt-4"></div>

        <h2 className="font-semibold text-3xl text-left text-slate-700">
          <TypewriterTitle />
        </h2>

        <div className="mt-8"></div>

        <Link href="/dashboard">
          <Button className="bg-blue-600">
            Get started
            <ChevronRightCircle className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
