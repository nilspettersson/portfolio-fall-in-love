"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import image from "@/public/image1.jpg"
import image2 from "@/public/image2.png"
import image3 from "@/public/image3.png"
import image4 from "@/public/image4.png"
import image5 from "@/public/image5.png"
import image6 from "@/public/image6.png"
import image7 from "@/public/image7.png"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16 max-w-[80rem]  ">
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
      <section className="px-16 flex relative justify-center pt-16">
        <div>
          <Image
            className="hidden lg:block -z-10 absolute rounded-l-3xl aspect-[2/1] right-0 w-auto -mt-16"
            alt="image"
            src={image3}
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div>
          <h1 className="text-secondary pb-8">Our clients perspective</h1>
          <div className="grid lg:grid-cols-[1fr,1fr,1fr,0.9fr] grid-cols-[1fr,1fr,1fr] gap-8">
            <div>
              <p className="text-xl">
                "Working with Lohitha was a game-changer for my home. The
                attention to detail and the ability to capture my style
                surpassed my expectations."
              </p>
              <div className="flex items-center gap-4 pt-8">
                <div className="size-16 bg-primary rounded-full" />
                <p>[Happy Client]</p>
              </div>
            </div>
            <div>
              <p className="text-xl">
                "I run a small business, and Lohitha transformed our workspace
                into a vibrant, inspiring environment. The positive impact on my
                team's productivity and morale was immediate. Thank you for
                understanding our unique needs and translating them into a
                design that works!"
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="size-16 bg-primary rounded-full" />
                <p>[Business Owner]</p>
              </div>
            </div>
            <div>
              <p className="text-xl">
                "From the initial consultation to the final reveal, Lohitha was
                a true professional. Their creativity, flexibility, and
                commitment to creating a space that felt like 'me' made the
                entire experience delightful. I'm in love with my new space!"
              </p>
              <div className="flex items-center gap-4 pt-28">
                <div className="size-16 bg-primary rounded-full" />
                <p>[Grateful Client]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-32">
        <div className="pr-0">
          <Image
            className="right-0 w-full"
            alt="image"
            src={image4}
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col items-end pt-4">
            <h2>Modern bedroom</h2>
            <p>Decor / Artchitecture</p>
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
          </div>
        </div>
        <div />
        <div className="pr-32">
          <Image
            className="right-0 w-full"
            alt="image"
            src={image5}
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col items-end pt-4">
            <h2>Living room</h2>
            <p>Decor / Artchitecture</p>
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
          </div>
        </div>
        <div className="pl-8 -mt-[30rem]">
          <Image
            className="right-0 w-full"
            alt="image"
            src={image6}
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col items-start pt-4">
            <h2>Bathroom</h2>
            <p>Decor / Artchitecture</p>
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
          </div>
        </div>
        <div />
        <div className="-mt-[16rem] -ml-32">
          <Image
            className="right-0 w-full"
            alt="image"
            src={image7}
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col items-start pt-4">
            <h2>Cozy workspace</h2>
            <p>Decor / Artchitecture</p>
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
          </div>
        </div>
      </section>

      <section></section>
    </div>
  )
}
