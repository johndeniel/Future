"use client";
import React from "react";

import type { FC } from 'react';
import Hero from "./hero";
import Feature from "./feature";

interface PageProps {}

const page: FC<PageProps> = () => {
    return (
        <React.Fragment>
            <Hero/>
            <Feature/>
        </React.Fragment>
    );
  };
  
export default page;