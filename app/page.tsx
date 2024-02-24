"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import image from "@/public/image1.jpg"
import image2 from "@/public/image2.png"
import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { StarsSvg } from "@/components/svgs"

export default function IndexPage() {
  const [scrolledY, setScrolledY] = useState(0)

  useEffect(() => {
    console.log(scrolledY)
    const handleScroll = (e: Event) => {
      console.log(scrolledY)

      setScrolledY(document.querySelector("#main")?.scrollTop ?? 0)
    }

    document.querySelector("#main")?.addEventListener("scroll", handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      document
        .querySelector("#main")
        ?.removeEventListener("scroll", handleScroll)
    }
  }, []) // Empty dependency array ensures that the effect runs only once
  return (
    <div className="flex flex-col gap-32">
      <section className="grid grid-cols-2">
        <div
          className="w-full rounded-br-[30%] aspect-[5/4]"
          style={{
            backgroundImage: `url(${image.src})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            //backgroundPosition: `left ${scrolledY - 400}px`, // Adjust as needed
            backgroundAttachment: "scroll",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex flex-col m-auto items-center justify-center max-w-[42rem] gap-4 p-4">
          <h1 className="text-foreground text-center tracking-[0.2em] leading-relaxed">
            <span className="text-secondary">FALL IN LOVE</span>
            <span className="italic"> with where </span>
            <span className="">YOUR LIFE UNFOLDS</span>
          </h1>

          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Get Started
            <ArrowRight className="ml-2 w-5" />
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-16 py-2 px-16 -mt-12">
        <div className="flex justify-center">
          <StarsSvg className="size-20" />
        </div>
        <h2 className="m-auto max-w-[60rem] text-center text-accent-foreground">
          Whether you're revamping your living room or giving your office a
          facelift, let's collaborate! I'm here to listen, understand your
          vision, and bring it to life.
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-16 max-w-[80rem]  ">
            <Card>
              <CardHeader>
                <CardTitle>Project Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center mb-auto text-xl leading-relaxed">
                  Determining the optimal arrangement of furniture and
                  functional elements within a given space to ensure efficient
                  use and flow.
                </p>
                <Link
                  href={siteConfig.links.docs}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "text-center",
                  })}
                >
                  <span className="font-extrabold text-lg">Read more</span>
                  <ArrowRight className="ml-2 w-5" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center mb-auto text-xl leading-relaxed">
                  Selecting a harmonious color scheme that aligns with the
                  client's preferences, style, and the intended mood of the
                  space.
                </p>
                <Link
                  href={siteConfig.links.docs}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ size: "sm", variant: "link" })}
                >
                  <span className="font-extrabold text-lg">Read more</span>
                  <ArrowRight className="ml-2 w-5" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center mb-auto text-xl leading-relaxed">
                  Working with contractors, and other professionals to ensure
                  that the design aligns with structural requirements and meets
                  building codes.
                </p>
                <Link
                  href={siteConfig.links.docs}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    size: "sm",
                    variant: "link",
                  })}
                >
                  <span className="font-extrabold text-lg">Read more</span>
                  <ArrowRight className="ml-2 w-5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3">
        <div className="flex flex-col gap-8 col-span-1 px-16 m-auto">
          <h1 className="text-secondary">Our story</h1>
          <p>
            I've always believed that our surroundings influence our mood and
            well-being. That's why I chose to dive into the world of interior
            design – to create spaces that not only look fantastic but also feel
            like home.
          </p>
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg", className: "w-fit" })}
          >
            Our Concept
            <ArrowRight className="ml-2 w-5" />
          </Link>
        </div>
        <div className="col-span-2">
          <Image
            className="w-full rounded-l-3xl aspect-[2/1]"
            alt="image"
            src={image2}
            width={1200}
            height={1200}
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    </div>
  )
}
