import React from "react";
import Link from "next/link";
import { Card, Cards } from "./cards";
import {
  RectangleStackIcon,
  UserGroupIcon,
  MusicalNoteIcon,
  SwatchIcon,
  BookmarkIcon,
  ChartPieIcon,
  MagnifyingGlassIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";

export default function Meneses() {
  return (
    <React.Fragment>
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-14 xl:px-6">
          <div className="relative pt-6 md:pt-20 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-zinc-900 dark:text-white font-extrabold text-5xl md:text-6xl xl:text-7xl">
                Coding Your{' '}  
                <span className="gradient-text inline-block">
                  Vision
                </span>
              </h1>
              <p className="mt-8 text-xl text-zinc-600 dark:text-zinc-300 leading-8">
                Showcasing Innovation. {' '}
                <span className="font-medium dark:text-zinc-100">
                  Explore My Project. 
                </span>{' '}
                  Seamless Spotlight – Dive into the Experience with Just{' '}
                <Link href="/docs" className="font-medium hover:underline">
                  One Click!
                </Link>
              </p>
            </div>
          </div>          
        </div>
      </section>
      
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <Cards>
            <Card
              icon={
                <ArrowRightOnRectangleIcon className="w-6 h-6" />
              }
              title="Login"
              href="/Lifetracker/introduction"
            />
            <Card
              icon={
                <MagnifyingGlassIcon className="w-6 h-6" />
              }
              title="Search"
              href="/search"
            />
            <Card
              icon={
                <ChartPieIcon className="w-6 h-6" />
              }
              title="Statistics"
              href="/statistics"
            />
            <Card
              icon={
                <SwatchIcon className="w-6 h-6" />
              }
              title="Genre"
              href="/genre"
            />
            <Card
              icon={
                <BookmarkIcon className="w-6 h-6" />
              }
              title="Playlist"
              href="/playlist"
            />
            <Card
              icon={
                <UserGroupIcon className="w-6 h-6" />
              }
              title="Artist"
              href="/artist"
            />
            <Card
              icon={
                <RectangleStackIcon className="w-6 h-6" />
              }
              title="Album"
              href="/album"
            />
            <Card
              icon={
                <MusicalNoteIcon className="w-6 h-6" />
              }
              title="Song"
              href="/song"
            />
            <Card
              icon={
                <MusicalNoteIcon className="w-6 h-6" />
              }
              title="Song"
              href="/song"
            />
          </Cards>
        </div>
    </React.Fragment>
  );
}