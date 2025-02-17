"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import image from "@/public/image1.jpg"
import image2 from "@/public/image2.png"
import image3 from "@/public/image3.png"
import image4 from "@/public/image4.png"
import image5 from "@/public/image5.png"
import image6 from "@/public/image6.png"
import image7 from "@/public/image7.png"
import {
  AnimatePresence,
  AnimationProps,
  Variant,
  Variants,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SparklesCore } from "@/components/particles/particles"
import { StarsSvg } from "@/components/svgs"

export default function IndexPage() {
  const container = useRef<HTMLDivElement>(null)
  const scrollContainer = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    container: scrollContainer,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-140, -90])

  return (
    <div ref={scrollContainer} className="overflow-auto h-full">
      <div className="flex flex-col gap-lg">
        <section className="grid grid-cols-2 gap-y-md relative">
          <FadeInWhenVisible
            visible={{ opacity: 1 }}
            hidden={{ opacity: 0 }}
            className="lg:max-h-full col-span-2 lg:col-span-1 w-full lg:rounded-br-[12rem] overflow-hidden relative"
          >
            <div
              ref={container}
              className="lg:shadow-none shadow-[0px_-50px_20px_-20px_inset_hsl(var(--background))] max-h-96 lg:max-h-full w-full lg:rounded-br-[12rem] aspect-[5/4]"
            >
              <motion.div style={{ y: y }} className="absolute -z-10">
                <Image
                  className="w-full h-full"
                  alt="image"
                  src={image}
                  width={1200}
                  height={1200}
                  style={{ objectFit: "cover" }}
                />
              </motion.div>

              <SparklesCore
                className="h-full w-full absolute inset-0"
                particleDensity={16}
              />
            </div>
          </FadeInWhenVisible>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-2 lg:col-span-1 flex flex-col m-auto items-center justify-center max-w-[42rem] gap-4 p-4"
          >
            <StarsSvg className="opacity-0 size-96 lg:opacity-40 absolute right-xs top-xs" />
            <h1 className="text-foreground text-center tracking-[0.2em] leading-relaxed">
              <span className="text-secondary">FALL IN LOVE </span>
              {/* <AnimatedText text="with where " />
              <AnimatedText text="YOUR LIFE " delay={1} /> */}
              <motion.span className="italic">{"with where "}</motion.span>
              <motion.span className="">{"YOUR LIFE "}</motion.span>
              <motion.span className="">UNFOLDS</motion.span>
            </h1>
            <Link
              href={""}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "lg",
                className: "relative overflow-hidden",
              })}
            >
              <SparklesCore
                id="get-started"
                className="absolute"
                minSize={0.5}
                maxSize={1}
              />
              Get Started
              <ArrowRight className="ml-2 w-5" />
            </Link>
          </motion.div>
        </section>

        <section className="flex flex-col gap-md py-2 px-md -mt-12">
          <div className="flex justify-center">
            <StarsSvg className="size-20" />
          </div>

          <h2 className="font-normal m-auto max-w-[60rem] text-center text-accent-foreground">
            Whether you&apos;re revamping your living room or giving your office
            a facelift, let&apos;s collaborate! I&apos;m here to listen,
            understand your vision, and bring it to life.
          </h2>

          <div className="flex justify-center">
            <FadeInWhenVisible
              transition={{}}
              visible={{
                ...animations.fade.visible,
                transition: { staggerChildren: 0.3 },
              }}
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[80rem]"
            >
              <motion.div
                variants={animations.fade}
                transition={{ duration: 0.8, ease: "linear" }}
              >
                <Card className="max-w-96 mx-auto h-full">
                  <CardHeader>
                    <CardTitle className="text-secondary">
                      Project Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center mb-auto leading-normal">
                      Determining the optimal arrangement of furniture and
                      functional elements within a given space to ensure
                      efficient use and flow.
                    </p>
                    <Link
                      href={""}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({
                        size: "sm",
                        variant: "link",
                        className: "text-center",
                      })}
                    >
                      <span className="font-extrabold text-lg">Read more</span>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                variants={animations.fade}
                transition={{ duration: 0.8, ease: "linear" }}
              >
                <Card className="max-w-96 mx-auto h-full">
                  <CardHeader>
                    <CardTitle className="text-secondary">
                      Color Palette
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center mb-auto leading-normal">
                      {
                        "Selecting a harmonious color scheme that aligns with the client's preferences, style, and the intended mood of the space."
                      }
                    </p>
                    <Link
                      href={""}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({
                        size: "sm",
                        variant: "link",
                      })}
                    >
                      <span className="font-extrabold text-lg">Read more</span>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                variants={animations.fade}
                transition={{ duration: 0.8, ease: "linear" }}
              >
                <Card className="max-w-96 mx-auto h-full">
                  <CardHeader>
                    <CardTitle className="text-secondary">
                      Collaboration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center mb-auto leading-normal">
                      Working with contractors, and other professionals to
                      ensure that the design aligns with structural requirements
                      and meets building codes.
                    </p>
                    <Link
                      href={""}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({
                        size: "sm",
                        variant: "link",
                      })}
                    >
                      <span className="font-extrabold text-lg">Read more</span>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-y-md">
          <FadeInWhenVisible className="col-span-3 lg:col-span-2 xl:col-span-1 flex flex-col gap-sm px-md m-auto">
            <h1 className="text-secondary">Our story</h1>
            <p>
              I&apos;ve always believed that our surroundings influence our mood
              and well-being. That&apos;s why I chose to dive into the world of
              interior design – to create spaces that not only look fantastic
              but also feel like home.
            </p>
            <Link
              href={""}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg", className: "w-fit" })}
            >
              Our Concept
              <ArrowRight className="ml-2 w-5" />
            </Link>
          </FadeInWhenVisible>

          <div className="col-start-1 col-span-3 xl:col-span-2 m-auto pl-md overflow-hidden">
            <FadeInWhenVisible>
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
          <FadeInWhenVisible
            transition={{}}
            visible={{
              ...animations.fade.visible,
              transition: { staggerChildren: 0.3 },
            }}
          >
            <h1 className="text-secondary pb-sm">Our clients perspective</h1>
            <div className="grid xl:grid-cols-[1fr,1fr,1fr,0.8fr] md:grid-cols-[1fr,1fr,1fr] grid-cols-1 gap-sm gap-y-md">
              <motion.div
                variants={animations.fade}
                transition={{ duration: 0.8 }}
                className="flex flex-col-reverse md:flex-col gap-2 md:gap-0"
              >
                <p className="text-base sm:text-xl leading-relaxed">
                  &quot;Working with Lohitha was a game-changer for my home. The
                  attention to detail and the ability to capture my style
                  surpassed my expectations.&quot;
                </p>
                <div className="flex items-center gap-xs md:pt-8">
                  <div className="size-10 md:size-14 bg-primary rounded-full" />
                  <p>[Happy Client]</p>
                </div>
              </motion.div>
              <motion.div
                variants={animations.fade}
                transition={{ duration: 0.8 }}
                className="flex flex-col-reverse md:flex-col gap-2 md:gap-0"
              >
                <p className="text-base sm:text-xl leading-relaxed">
                  &quot;I run a small business, and Lohitha transformed our
                  workspace into a vibrant, inspiring environment. The positive
                  impact on my team&apos;s productivity and morale was
                  immediate. Thank you for understanding our unique needs and
                  translating them into a design that works!&quot;
                </p>
                <div className="flex items-center gap-xs md:pt-4">
                  <div className="size-10 md:size-14 bg-primary rounded-full" />
                  <p>[Business Owner]</p>
                </div>
              </motion.div>
              <motion.div
                variants={animations.fade}
                transition={{ duration: 0.8 }}
                className="flex flex-col-reverse md:flex-col gap-2 md:gap-0"
              >
                <p className="text-base sm:text-xl leading-relaxed">
                  &quot;From the initial consultation to the final reveal,
                  Lohitha was a true professional. Their creativity,
                  flexibility, and commitment to creating a space that felt like
                  &apos;me&apos; made the entire experience delightful. I&apos;m
                  in love with my new space!&quot;
                </p>
                <div className="flex items-center gap-xs md:pt-28">
                  <div className="size-10 md:size-14 bg-primary rounded-full" />
                  <p>[Grateful Client]</p>
                </div>
              </motion.div>
              <div>
                <Image
                  className="hidden xl:block relative w-full aspect-auto -mt-lg ml-md"
                  alt="image"
                  src={image3}
                  width={1000}
                  height={1000}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </FadeInWhenVisible>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-lg overflow-hidden">
          <FadeInWhenVisible once className="pr-md md:pr-0">
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
                href={""}
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

          <FadeInWhenVisible once className="md:col-start-1 pr-md md:pr-lg">
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
                href={""}
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
          <FadeInWhenVisible once className="pl-md md:pl-sm md:-mt-[30rem]">
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
                href={""}
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
            once
            className="md:col-start-2 pl-md md:-mt-[16rem] md:-ml-lg"
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
                href={""}
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
  once,
  transition,
}: {
  className?: string
  children: ReactNode
  visible?: Variant
  hidden?: Variant
  once?: boolean
  transition?: AnimationProps["transition"]
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      exit={"hidden"}
      viewport={{ once }}
      transition={transition ?? { duration: 0.8 }}
      variants={{
        visible: visible ?? animations.fade.visible,
        hidden: hidden ?? animations.fade.hidden,
      }}
    >
      {children}
    </motion.div>
  )
}

const animations = {
  fade: {
    visible: { opacity: 1, translateY: "0px" },
    hidden: { opacity: 0, translateY: "0px" },
  },
} as const
