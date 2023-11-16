"use client"

import React from "react"
import Link from "next/link"
import type { FC } from 'react'
import { cn } from "../../lib/utils"
import { buttonVariants } from "../ui/button"

interface HeroProps {}

const hero: FC<HeroProps> = () => {
  return (
    <React.Fragment>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href="https://www.instagram.com/jaydeeclouds"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow me on Instagram
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Future Innovations through Technology Advancement
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Dedicated to empowering your projects with cutting-edge technologies like Rust, Docker, Next.js, and More
          </p>
          <div className="space-x-4">
            <Link href={"/docs"} className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              href="https://github.com/johndeniel"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
  
export default hero