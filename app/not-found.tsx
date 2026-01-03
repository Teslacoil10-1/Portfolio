import Link from "next/link";
import Image from "next/image";
import LightRays from "../components/LightRays";
import ClickSpark from "@/components/ClickSpark";
export default function NotFound() {
  return (
    <ClickSpark>
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background effect (monochrome) */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#666666"   // grey only
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <Image
          src="/404_image.webp"
          alt="404"
          width={600}      // BIG image
          height={600}
          priority
          className="select-none"
        />

        <Link
          href="/"
          className="mt-6 text-gray-400 hover:text-gray-200 transition-colors mb-10"
        >
          Return Home
        </Link>
      </div>
    </div>
    </ClickSpark>
  );
}
