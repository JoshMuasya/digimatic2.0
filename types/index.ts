import { ReactNode } from "react";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  link?: string;
};

export interface Solution {
  title: string;
  description: string;
  icon?: ReactNode;
  link?: string;
}

export interface SolutionsSectionProps {
  title?: string;
  solutions: Solution[];
  primaryColor?: string;
  accentColor?: string;
  backgroundGradient?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

export interface ProjectsSectionProps {
  projects: Project[];
  ctaText?: string;
  ctaLink?: string;
  primaryColor?: string;
  accentColor?: string;
}