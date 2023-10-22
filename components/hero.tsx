import React from "react";
import Link from "next/link";

export default function Meneses() {

  return (
    <React.Fragment>
      {/* Introduction section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          {/* Link to the BulSU Portal */}
          <Link
            href=""
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            BulSU Portal
          </Link>
          {/* Main title */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
             Your Path to Innovation and Exploration Begins Here
          </h1>
          {/* Description */}
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m building a web app with Next.js 13 and open sourcing
            everything. Follow along as we figure this out together.
          </p>
          {/* Buttons */}
          <div className="space-x-4">
            <Link href="">
              Get Started
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noreferrer"
              
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}