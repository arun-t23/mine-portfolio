import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Add Font Awesome
const script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/9c9a70a92b.js';
script.crossOrigin = 'anonymous';
document.head.appendChild(script);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <App />
  </QueryClientProvider>
);
