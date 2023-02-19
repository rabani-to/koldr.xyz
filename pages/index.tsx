import Image from "next/image"
import SeoTags from "@/components/SeoTags"
import Link from "next/link"

import asset_logo from "@/assets/koldusb.png"
import { IoArrowForward } from "react-icons/io5"

export default function Home() {
  return (
    <>
      <SeoTags />
      <main className="bg-koldr-green min-h-screen p-8 relative flex items-center">
        <section className="relative z-[1]">
          <h1 className="text-[calc(2.5rem+7vw)] font-semibold leading-none">
            Koldr
          </h1>
          <p className="max-w-sm mb-8 text-sm md:text-base">
            Turn any USB into a HSM(Koldr Module) and store your Metamask
            private keys.
          </p>
          <Link
            title="Open a Figma demo"
            className="border-2 group text-lg font-semibold inline-flex items-center gap-2 border-black rounded-2xl py-3 px-4"
            href="https://www.figma.com/proto/KaE37WNsH73x5fOOCf9Kag/Metamask-SB?node-id=1%3A5&scaling=contain&page-id=1%3A4&starting-point-node-id=1%3A5&hide-ui=1"
            target="_blank"
          >
            <span>See a demo</span>
            <IoArrowForward className="text-[120%] group-hover:translate-x-px" />
          </Link>
        </section>
        <section className="absolute bottom-0 right-0">
          <figure className="w-full max-w-2xl">
            <Image
              className="object-cover"
              src={asset_logo}
              alt=""
              placeholder="blur"
            />
          </figure>
        </section>
      </main>
    </>
  )
}
