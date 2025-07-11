
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import AiDevelopment from "./pages/services/ai-development";
import ServiceNow from "./pages/services/servicenow";
import Automation from "./pages/services/automation";
import Consulting from "./pages/services/consulting";
import AgileTransformation from "./pages/services/agile-transformation";
import Projects from "./pages/Projects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          {/* Service Detail Subpages */}
          <Route path="/services/ai-development" element={<AiDevelopment />} />
          <Route path="/services/servicenow" element={<ServiceNow />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/agile-transformation" element={<AgileTransformation />} />
          {/* Projects Page */}
          <Route path="/projects" element={<Projects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
