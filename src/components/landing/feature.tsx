"use client"

import React from "react"
import type { FC } from 'react'

interface FeatureProps {}

const feature: FC<FeatureProps> = () => {
  return (
    <React.Fragment>
      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is a journey to build, collaborate, deploy, test, and monitor with the coolest tools.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M21.9 11.7l-.9-.5V11l.7-.7c.1-.1.1-.3 0-.4l-.1-.1-.9-.3c0-.1 0-.2-.1-.2l.6-.8c.1-.1.1-.3-.1-.4 0 0-.1 0-.1-.1l-1-.2c0-.1-.1-.1-.1-.2l.4-.9v-.3c-.1-.1-.2-.1-.3-.1h-1s0-.1-.1-.1l.2-1c0-.2-.1-.3-.2-.3h-.1l-1 .2c0-.1-.1-.1-.2-.2v-1c0-.2-.1-.3-.3-.3h-.1l-.9.4h-.1L16 3c0-.2-.2-.3-.3-.2h-.1l-.8.6c-.1 0-.2 0-.2-.1l-.3-.9c-.1-.1-.2-.2-.4-.2 0 0-.1 0-.1.1L13 3h-.2l-.5-.8c-.1-.2-.3-.2-.5-.2l-.1.1-.5.9H11l-.7-.7c-.1-.1-.3-.1-.4 0l-.1.1-.3.9c-.1 0-.2 0-.2.1l-.8-.6c-.2-.1-.4-.1-.5.1V3l-.2 1s-.1 0-.2.1l-.9-.4c-.1-.1-.3 0-.4.1v1.1c0 .1-.1.1-.1.2l-1-.2c-.2-.1-.3 0-.3.2v.1l.2 1c-.1 0-.1.1-.2.1h-1c-.2 0-.3.1-.3.3v.1l.4.9v.2L3 8c-.2 0-.3.2-.3.3v.1l.6.8c0 .1 0 .2-.1.2l-.8.4c-.1.1-.2.2-.2.4 0 0 0 .1.1.1l.7.7v.2l-.8.5c-.2.1-.2.3-.2.4l.1.1.9.6v.2l-.7.7c-.1.1-.1.3 0 .4l.1.1.9.3c0 .1 0 .2.1.2l-.6.8c-.1.1-.1.3.1.4 0 0 .1 0 .1.1l1 .2c0 .1.1.1.1.2l-.4.9c-.1.1 0 .3.1.4h1.1c.1 0 .1.1.2.1l-.2 1c0 .2.1.3.2.3h.1l1-.2c0 .1.1.1.2.2v1c0 .2.1.3.3.3h.1l.9-.4h.1l.2 1c0 .2.2.3.3.2h.1l.8-.6c.1 0 .2 0 .2.1l.3.9c.1.1.2.2.4.2 0 0 .1 0 .1-.1l.8-.7h.2l.5.8c.1.1.3.2.4.1l.1-.1.5-.8h.2l.7.7c.1.1.3.1.4 0l.1-.1.3-.9c.1 0 .2 0 .2-.1l.8.6c.1.1.3.1.4-.1 0 0 0-.1.1-.1l.2-1c.1 0 .1-.1.2-.1l.9.4c.1.1.3 0 .4-.1v-1.1l.2-.2 1 .2c.2 0 .3-.1.3-.2v-.1l-.2-1 .2-.2h1c.2 0 .3-.1.3-.3v-.1l-.4-.9c0-.1.1-.1.1-.2l1-.2c.2 0 .3-.2.2-.3v-.1l-.6-.8.1-.2.9-.3c.1-.1.2-.2.2-.4 0 0 0-.1-.1-.1L21 13v-.2l.8-.5c.2-.1.2-.3.1-.6 0 .1 0 .1 0 0m-5.7 7c-.3-.1-.5-.4-.5-.7.1-.3.4-.5.7-.5.3.1.5.4.5.7 0 .4-.3.6-.7.5m-.2-1.9c-.3-.1-.6.1-.6.4l-.4 1.4c-.9.4-1.9.6-3 .6s-2.1-.2-3.1-.7l-.3-1.4c-.1-.3-.3-.5-.6-.4l-1.2.3c-.2-.2-.4-.5-.6-.7h6c.1 0 .1 0 .1-.1v-2.1c0-.1 0-.1-.1-.1h-1.7v-1.3h1.9c.2 0 .9 0 1.2 1 .1.3.2 1.3.4 1.6.1.3.6 1 1.1 1h3.1c-.2.3-.4.5-.7.8l-1.5-.3m-8.3 1.9c-.3.1-.6-.1-.7-.5-.1-.3.1-.6.5-.7s.6.1.7.5c0 .3-.2.6-.5.7M5.4 9.5c.1.3 0 .7-.3.8-.3.1-.7 0-.8-.3-.1-.3 0-.7.3-.8.4-.1.7 0 .8.3m-.7 1.6l1.3-.5c.3-.1.4-.4.3-.7L6 9.3h1V14H5c-.3-1-.4-1.9-.3-2.9m5.6-.4V9.3h2.5c.1 0 .9.1.9.7 0 .5-.6.7-1.1.7h-2.3m9 1.2v.5h-.8c-.1 0-.1 0-.1.1v.3c0 .8-.5 1-.9 1s-.8-.2-.9-.4c-.2-1.3-.6-1.5-1.2-2 .7-.5 1.5-1.2 1.5-2.1 0-1-.7-1.6-1.1-1.9-.7-.4-1.4-.5-1.6-.5H6.6c1.1-1.2 2.5-2 4.1-2.3l.9 1c.2.2.5.2.8 0l1-1c2.1.4 3.9 1.7 5 3.6l-.7 1.6c-.1.3 0 .6.3.7l1.3.6v.8m-7.7-8c.2-.2.6-.2.8 0 .2.2.2.6 0 .8-.3.3-.6.3-.9 0-.2-.2-.1-.5.1-.8m6.9 5.6c.1-.3.5-.4.8-.3.3.1.4.5.3.8-.1.3-.5.4-.8.3-.3-.1-.4-.5-.3-.8z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Rust</h3>
                <p className="text-sm">
                  Concepts, programming paradigm, data structures and more.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M15.698 7.287L8.712.302a1.03 1.03 0 00-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 011.55 1.56l1.773 1.774a1.224 1.224 0 011.267 2.025 1.226 1.226 0 01-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 11-1.008-.036V5.887a1.226 1.226 0 01-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 000 1.457l6.986 6.986a1.03 1.03 0 001.457 0l6.953-6.953a1.031 1.031 0 000-1.457" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Git</h3>
                <p className="text-sm">
                  Version control, branches, monorepo, workflows, github action, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M21.805 10.077a2.627 2.627 0 00-1.632-.427 5.189 5.189 0 00-.844.074A3.18 3.18 0 0017.9 7.581l-.287-.167-.186.27a3.967 3.967 0 00-.51 1.187 2.819 2.819 0 00.334 2.217 3.936 3.936 0 01-1.457.352H2.623a.622.622 0 00-.622.622 9.386 9.386 0 00.575 3.385 5.078 5.078 0 002.004 2.607A8.868 8.868 0 008.977 19a13.486 13.486 0 002.44-.223 10.068 10.068 0 003.19-1.16 8.734 8.734 0 002.17-1.78 11.81 11.81 0 002.125-3.664h.185a3.052 3.052 0 002.236-.844 2.47 2.47 0 00.594-.872l.083-.241z" />
                <path d="M3.847 11.06H5.61a.156.156 0 00.157-.158V9.325a.156.156 0 00-.157-.157H3.847a.156.156 0 00-.158.157v1.577a.162.162 0 00.158.158zm2.43 0H8.04a.156.156 0 00.157-.158V9.325a.156.156 0 00-.157-.157H6.277a.156.156 0 00-.157.157v1.577a.162.162 0 00.157.158m2.477 0h1.762a.156.156 0 00.158-.158V9.325a.156.156 0 00-.158-.157H8.754a.156.156 0 00-.158.157v1.577a.151.151 0 00.158.158zm2.44 0h1.762a.156.156 0 00.158-.158V9.325a.156.156 0 00-.158-.157h-1.762a.156.156 0 00-.158.157v1.577a.156.156 0 00.158.158zM6.277 8.806H8.04a.163.163 0 00.157-.158V7.071a.156.156 0 00-.157-.157H6.277a.156.156 0 00-.157.157v1.577a.17.17 0 00.157.158m2.477 0h1.762a.163.163 0 00.158-.158V7.071a.156.156 0 00-.158-.157H8.754a.156.156 0 00-.158.157v1.577a.156.156 0 00.158.158m2.44 0h1.762a.163.163 0 00.158-.158V7.071a.163.163 0 00-.158-.157h-1.762a.156.156 0 00-.158.157v1.577a.163.163 0 00.158.158m0-2.263h1.762a.156.156 0 00.158-.158V4.808a.163.163 0 00-.158-.158h-1.762a.156.156 0 00-.158.158v1.577a.163.163 0 00.158.158m2.458 4.517h1.762a.156.156 0 00.158-.158V9.325a.156.156 0 00-.158-.157h-1.762a.156.156 0 00-.158.157v1.577a.162.162 0 00.158.158" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Docker</h3>
                <p className="text-sm text-muted-foreground">
                  Containerization, image construction, docker image repository and more.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 00.26-3.74.86.86 0 00-.66-.74 3.12 3.12 0 00-2.08.61v.18a11.34 11.34 0 01-.06 2.41 2.37 2.37 0 00.62 2 2 2 0 001.43.63 8.05 8.05 0 01.3-.81zM10 8.58a.36.36 0 01-.09-.23.19.19 0 01.09-.12.74.74 0 01.48-.07c.25 0 .5.16.48.34a.51.51 0 01-.49.33h-.06a.63.63 0 01-.41-.25z" />
                <path d="M7.88 11a12.58 12.58 0 00.06-2.3v-.28a7 7 0 011.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 001 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 017.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 00-.29.35c-.35.43-.5.58-1.51.79a2 2 0 00-.4.11 1 1 0 00.37.16 2.21 2.21 0 002.5-.8.41.41 0 000-.35.59.59 0 00-.25-.37zm6.29-5.82a5.29 5.29 0 00.08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 01.26.48 1.79 1.79 0 00.15.31 3.72 3.72 0 00.16-2.13 7.51 7.51 0 01-.07-1.05 6 6 0 01.14-.93zm-.56-.16a.6.6 0 01-.32.17h-.06a.47.47 0 01-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 01-.12.26z" />
                <path d="M17 4.88a6.06 6.06 0 011.37 2.57.71.71 0 010 .15 5.67 5.67 0 01-.09 1.06 7.11 7.11 0 00-.09.86 6.61 6.61 0 00.07 1 4 4 0 01-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 00-3.81-1.8 7.34 7.34 0 00-1.63.16A6.17 6.17 0 0117 4.88z" />
                <path d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 01-1 .13 19.74 19.74 0 002.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0016.37 2a8.44 8.44 0 00-2.46.35 9.38 9.38 0 00-1.45-.14 4.8 4.8 0 00-2.46.62 12.22 12.22 0 00-1.77-.44A5.44 5.44 0 004 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 001 4.67A15.76 15.76 0 004.4 15a3.39 3.39 0 001.75 1.83 1.71 1.71 0 001.69-.37 2 2 0 001 .59 3.65 3.65 0 002.35-.14v.81a8.46 8.46 0 00.31 2.36 1 1 0 010 .13 3 3 0 00.71 1.24 2.08 2.08 0 001.49.56 3 3 0 00.7-.08 3.27 3.27 0 002.21-1.27 7.34 7.34 0 00.91-4v-.26h.17a5.24 5.24 0 002.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 01-1.8.34 2.62 2.62 0 01-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 01-2.25 2.3 3.23 3.23 0 01-.66.07A2 2 0 0112 20a16.77 16.77 0 01-.28-4.06 2.56 2.56 0 01-1.78.66 3.94 3.94 0 01-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 01.19-.24 2.56 2.56 0 01-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 01-1.11.63 1.23 1.23 0 01-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 01-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 012.41-.66 5.58 5.58 0 011.4.18 7.51 7.51 0 012.5-.4 5.35 5.35 0 014.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 01-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z" />
                <path d="M17.43 13.59a4 4 0 01-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 012.12-.61 6.28 6.28 0 00-1.13-1.94 5.41 5.41 0 00-4.13-2 3.34 3.34 0 00-2.55.95A5.82 5.82 0 008.51 7.8l.15-.08A3.7 3.7 0 0110 7.3a1.45 1.45 0 011.76 1.19 5.73 5.73 0 01-.29 4.09 3.29 3.29 0 00-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 01.57.07 1.16 1.16 0 01.62.74v.16a.28.28 0 010 .09 22.22 22.22 0 00.22 4.9 1.5 1.5 0 002 1.09A1.92 1.92 0 0016.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z" />
                <path d="M18 14.33l-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 00.93.12 4.29 4.29 0 001.38-.29 3 3 0 00.79-.52 3.47 3.47 0 01-2.43-.05z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">PostgreSQL</h3>
                <p className="text-sm text-muted-foreground">
                  Normalization, indexing, replication, partitioning, sharding and more.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M4 2a2 2 0 00-2 2v8h2V8h2v4h2V4a2 2 0 00-2-2H4m0 2h2v2H4m18 9.5V14a2 2 0 00-2-2h-4v10h4a2 2 0 002-2v-1.5a1.54 1.54 0 00-1.5-1.5 1.54 1.54 0 001.5-1.5M20 20h-2v-2h2v2m0-4h-2v-2h2M5.79 21.61l-1.58-1.22 14-18 1.58 1.22z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Test</h3>
                <p className="text-sm text-muted-foreground">
                  Unit test, integration test, security test, end-to-end test, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M18 7c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4h-2v4h-2V9h4V7h-4M2 7v10h6v-2H4V7H2m9 0c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-2m0 2h2v6h-2V9z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Syslog</h3>
                <p className="text-sm text-muted-foreground">
                  Skylark, log management, analytics, visualization, elk-stack and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            It's time to build, collaborate, deploy, store, test, and monitor like a pro! 
          </p>
        </div>
      </section>
    </React.Fragment>
  )
}
  
export default feature