"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { projectsList } from "@/const/projects-list";

export function ProductShowcase() {
    return <HeroParallax products={projectsList} />;
}