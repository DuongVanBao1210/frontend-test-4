"use client";

import { useEffect, useState } from "react";

function useHash() {
  const [hash, setHash] = useState("#");

  useEffect(() => {
    if (window.location.hash) {
      setHash(window.location.hash);
    }
    const handleHashChange = () => {
      setHash(window.location.hash || "#");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return hash;
}

export default useHash;