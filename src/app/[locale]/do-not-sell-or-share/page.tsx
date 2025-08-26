import type { Metadata } from "next";
import DoNotSellOrShareClient from "./client";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information — Panielix",
  description:
    "Opt out of sale or sharing of your personal information for cross-context behavioral advertising. We also honor Global Privacy Control (GPC).",
  robots: { index: true, follow: true },
};

export default function DoNotSellOrSharePage() {
  return <DoNotSellOrShareClient />;
}
