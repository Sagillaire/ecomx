import './styles.css';
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Layout } from "@/core/layout";
import { Inter } from "next/font/google";
import { Hydrate } from '@/core/components';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcomX",
  description: "EcomX App",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hydrate>
          <Layout>
            {children}
          </Layout>
        </Hydrate>
      </body>
    </html>
  );
};
