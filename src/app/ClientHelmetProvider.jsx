"use client";
import { HelmetProvider } from "react-helmet";

export default function ClientHelmetProvider({ children }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}