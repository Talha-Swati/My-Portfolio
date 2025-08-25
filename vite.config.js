import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const isGithubPages = process.env.BUILD_FOR === "gh";

  return {
    plugins: [react()],
    base: isGithubPages ? "/My-Portfolio/" : "/", 
  };
});
