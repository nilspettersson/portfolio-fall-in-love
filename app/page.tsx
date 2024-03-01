"use client"

import { ReactNode, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import image from "@/public/image1.jpg"
import image2 from "@/public/image2.png"
import image3 from "@/public/image3.png"
import image4 from "@/public/image4.png"
import image5 from "@/public/image5.png"
import image6 from "@/public/image6.png"
import image7 from "@/public/image7.png"
import { AnimatePresence, Variant, Variants, motion } from "framer-motion"
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
import { SparklesCore } from "@/components/particles/particles"
import { StarsSvg } from "@/components/svgs"

export default function IndexPage() {
  return (
    <div className="flex flex-col gap-lg">
      <section className="grid grid-cols-2 gap-y-md">
        <div className="max-h-96 lg:max-h-full col-span-2 lg:col-span-1 w-full lg:rounded-br-[12rem] aspect-[5/4] overflow-hidden">
          <Image
            className="w-full h-full"
            alt="image"
            src={image}
            width={1200}
            height={1200}
            style={{ objectFit: "cover" }}
          />
          {/* <SparklesCore className="h-full w-full" particleDensity={20} /> */}
        </div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-2 lg:col-span-1 flex flex-col m-auto items-center justify-center max-w-[42rem] gap-4 p-4"
          >
            <h1 className="text-foreground text-center tracking-[0.2em] leading-relaxed">
              <span className="text-secondary">FALL IN LOVE </span>
              {/* <AnimatedText text="with where " />
              <AnimatedText text="YOUR LIFE " delay={1} /> */}
              <motion.span className="italic">{"with where "}</motion.span>
              <motion.span className="">{"YOUR LIFE "}</motion.span>
              <motion.span className="">UNFOLDS</motion.span>
            </h1>
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "lg",
                className: "relative overflow-hidden",
              })}
            >
              {/* <SparklesCore
                id="get-started"
                className="absolute"
                minSize={0.5}
                maxSize={1}
              /> */}
              Get Started
              <ArrowRight className="ml-2 w-5" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="flex flex-col gap-md py-2 px-md -mt-12">
        <div className="flex justify-center">
          <StarsSvg className="size-20" />
        </div>

        <h2 className="font-normal m-auto max-w-[60rem] text-center text-accent-foreground">
          Whether you&apos;re revamping your living room or giving your office a
          facelift, let&apos;s collaborate! I&apos;m here to listen, understand
          your vision, and bring it to life.
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[80rem]">
            <FadeInWhenVisible>
              <Card className="max-w-96 mx-auto h-full">
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
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Card className="max-w-96 mx-auto h-full">
                <CardHeader>
                  <CardTitle>Color Palette</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center mb-auto text-xl leading-relaxed">
                    {
                      "Selecting a harmonious color scheme that aligns with the client&apos;s preferences, style, and the intended mood of the space."
                    }
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
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Card className="max-w-96 mx-auto h-full">
                <CardHeader>
                  <CardTitle>Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center mb-auto text-xl leading-relaxed">
                    Working with contractors, and other professionals to ensure
                    that the design aligns with structural requirements and
                    meets building codes.
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
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-y-md">
        <FadeInWhenVisible className="col-span-3 lg:col-span-2 xl:col-span-1 flex flex-col gap-sm px-md m-auto">
          <h1 className="text-secondary">Our story</h1>
          <p>
            I&apos;ve always believed that our surroundings influence our mood
            and well-being. That&apos;s why I chose to dive into the world of
            interior design – to create spaces that not only look fantastic but
            also feel like home.
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
        </FadeInWhenVisible>

        <div className="col-start-1 col-span-3 xl:col-span-2 m-auto pl-md overflow-hidden">
          <FadeInWhenVisible
            hidden={{ translateX: "100%", opacity: 0 }}
            visible={{ translateX: "0%", opacity: 1 }}
          >
            <Image
              className=""
              alt="image"
              src={image2}
              width={1200}
              height={1200}
              style={{ objectFit: "cover" }}
            />
          </FadeInWhenVisible>
        </div>
      </section>
      <section className="px-md flex relative justify-center pt-md">
        <div>
          <Image
            className="hidden lg:block -z-10 absolute rounded-l-3xl aspect-[2/1] right-0 w-auto -mt-md"
            alt="image"
            src={image3}
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div>
          <h1 className="text-secondary pb-sm">Our clients perspective</h1>
          <div className="grid lg:grid-cols-[1fr,1fr,1fr,0.9fr] md:grid-cols-[1fr,1fr,1fr] grid-cols-1 gap-sm gap-y-md">
            <FadeInWhenVisible className="flex flex-col-reverse md:flex-col gap-2 md:gap-0">
              <p className="text-lg sm:text-xl">
                &quot;Working with Lohitha was a game-changer for my home. The
                attention to detail and the ability to capture my style
                surpassed my expectations.&quot;
              </p>
              <div className="flex items-center gap-xs md:pt-8">
                <div className="size-10 md:size-16 bg-primary rounded-full" />
                <p>[Happy Client]</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="flex flex-col-reverse md:flex-col gap-2 md:gap-0">
              <p className="text-lg sm:text-xl">
                &quot;I run a small business, and Lohitha transformed our
                workspace into a vibrant, inspiring environment. The positive
                impact on my team&apos;s productivity and morale was immediate.
                Thank you for understanding our unique needs and translating
                them into a design that works!&quot;
              </p>
              <div className="flex items-center gap-xs md:pt-4">
                <div className="size-10 md:size-16 bg-primary rounded-full" />
                <p>[Business Owner]</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="flex flex-col-reverse md:flex-col gap-2 md:gap-0">
              <p className="text-lg sm:text-xl">
                &quot;From the initial consultation to the final reveal, Lohitha
                was a true professional. Their creativity, flexibility, and
                commitment to creating a space that felt like &apos;me&apos;
                made the entire experience delightful. I&apos;m in love with my
                new space!&quot;
              </p>
              <div className="flex items-center gap-xs md:pt-28">
                <div className="size-10 md:size-16 bg-primary rounded-full" />
                <p>[Grateful Client]</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-lg overflow-hidden">
        <FadeInWhenVisible
          hidden={{ translateX: "-100%", opacity: 0 }}
          visible={{ translateX: "0%", opacity: 1 }}
          className="pr-md md:pr-0"
        >
          <Image
            className="right-0 w-full"
            alt="image"
            src={image4}
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
          />

          <div className="flex flex-col items-end pt-xs">
            <h2>Modern bedroom</h2>
            <p>Decor / Artchitecture</p>
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "sm",
                variant: "link",
                className: "px-0",
              })}
            >
              <span className="font-extrabold text-lg">Read more</span>
              <ArrowRight className="ml-2 w-5" />
            </Link>
          </div>
        </FadeInWhenVisible>
        <div />
        <FadeInWhenVisible
          hidden={{ translateX: "-100%", opacity: 0 }}
          visible={{ translateX: "0%", opacity: 1 }}
          className="pr-md md:pr-lg"
        >
          <Image
            className="right-0 w-full"
            alt="image"
            src={image5}
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col items-end pt-xs">
            <h2>Living room</h2>
            <p>Decor / Artchitecture</p>
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "sm",
                variant: "link",
                className: "px-0",
              })}
            >
              <span className="font-extrabold text-lg">Read more</span>
              <ArrowRight className="ml-2 w-5" />
            </Link>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible
          hidden={{ translateX: "100%", opacity: 0 }}
          visible={{ translateX: "0%", opacity: 1 }}
          className="pl-md md:pl-sm md:-mt-[30rem]"
        >
          <Image
            className="right-0 w-full"
            alt="image"
            src={image6}
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col items-start pt-xs">
            <h2>Bathroom</h2>
            <p>Decor / Artchitecture</p>
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "sm",
                variant: "link",
                className: "px-0",
              })}
            >
              <span className="font-extrabold text-lg">Read more</span>
              <ArrowRight className="ml-2 w-5" />
            </Link>
          </div>
        </FadeInWhenVisible>
        <div />
        <FadeInWhenVisible
          hidden={{ translateX: "100%", opacity: 0 }}
          visible={{ translateX: "0%", opacity: 1 }}
          className="pl-md md:-mt-[16rem] md:-ml-lg"
        >
          <Image
            className="right-0 w-full"
            alt="image"
            src={image7}
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col items-start pt-xs">
            <h2>Cozy workspace</h2>
            <p>Decor / Artchitecture</p>
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "sm",
                variant: "link",
                className: "px-0",
              })}
            >
              <span className="font-extrabold text-lg">Read more</span>
              <ArrowRight className="ml-2 w-5" />
            </Link>
          </div>
        </FadeInWhenVisible>
      </section>

      <section></section>
    </div>
  )
}

function AnimatedText({
  text,
  staggerDuration = 0.1,
  delay = 0,
}: {
  text: string
  staggerDuration?: number
  delay?: number
}) {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <span>
      {text.split("").map((char, index) => (
        <motion.span
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1, delay: staggerDuration * index + delay }}
          key={index}
          variants={textVariants}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

function FadeInWhenVisible({
  className,
  children,
  visible,
  hidden,
}: {
  className?: string
  children: ReactNode
  visible?: Variant
  hidden?: Variant
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      exit={"hidden"}
      viewport={{}}
      transition={{ duration: 0.8 }}
      variants={{
        visible: visible ?? { opacity: 1, scale: 1, translateY: "0px" },
        hidden: hidden ?? { opacity: 0, scale: 0.9, translateY: "40px" },
      }}
    >
      {children}
    </motion.div>
  )
}
