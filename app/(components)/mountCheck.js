"use client";
import { useState, useEffect } from "react";
export default function MountCheck({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>Loading data...</>;
  else return children;
}
