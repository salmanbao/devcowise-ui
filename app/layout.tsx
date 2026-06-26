import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectEstimatorModal from "@/components/layout/ProjectEstimatorModal";
import { EstimatorProvider } from "@/components/context/EstimatorContext";

export const metadata: Metadata = {
  title: "DevCoWise | Digital Transformation Consultancy",
  description: "Engineering excellence meets strategic design. We partner with modern enterprises to design, build, and scale high-fidelity software architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 selection:bg-vd-red selection:text-white flex flex-col justify-between">
        <EstimatorProvider>
          <Header />
          <Suspense fallback={null}>
            <ProjectEstimatorModal />
          </Suspense>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </EstimatorProvider>
      </body>
    </html>
  );
}
