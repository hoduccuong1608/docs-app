import React from "react";
import { CommonProps } from "./CommonProps";

export interface CardProps extends CommonProps {
  close?: boolean;
  onClose?: Function;
  title?: string | React.ReactNode;
  image?: string;
  footer?: React.ReactNode;
}
