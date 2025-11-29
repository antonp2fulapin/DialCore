"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AccessDialog } from "@/components/access-dialog";

const features = [
  "Purchase phone numbers",
  "Get SIP credentials instantly",
  "WebDialer (browser-based calling)",
  "VoIP Call Center Suite",
  "AI Assistants for support automation",
  "Real-time analytics dashboard",
  "Multi-user seats & roles",
  "WebRTC inbound & outbound calling",
];

const valueProps = [
  {
    title: "Enterprise-grade clarity",
    description: "Optimized call routing, adaptive jitter buffers, and globally distributed media for crystal-clear conversations.",
    icon: PhoneCall,
  },
  {
    title: "Security at the core",
    description: "End-to-end encryption options, role-aware access control, and audit-ready logging built in from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Automation-first",
    description: "Event webhooks, AI copilots, and programmable workflows let your team move faster without adding headcount.",
    icon: Sparkles,
  },
];

const numberInventory = [
  { country: "United States", code: "+1", price: "$1.25", availability: "120+ regions", type: "Local & Toll-Free" },
  { country: "United Kingdom", code: "+44", price: "$1.65", availability: "London, Manchester, Birmingham", type: "Local" },
  { country: "Canada", code: "+1", price: "$1.15", availability: "All provinces", type: "Local & Toll-Free" },
  { country: "Australia", code: "+61", price: "$1.85", availability: "Sydney, Melbourne, Perth", type: "Local" },
  { country: "Germany", code: "+49", price: "$1.90", availability: "Berlin, Frankfurt, Munich", type: "Local" },
  { country: "Brazil", code: "+55", price: "$1.60", availability: "São Paulo, Rio de Janeiro", type: "Local" },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0b0618] via-[#0e0a24] to-[#0b0618]">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <motion.div
          className="gradient-bg absolute inset-0"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
          animate={{ y: [0, -20, 10], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 top-20 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
          animate={{ y: [0, 15, -10], scale: [1.05, 0.98, 1.02] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <header className="sticky top-0 z-20 w-full backdrop-blur-lg">
        <div className="container flex items-center justify-between py-5">
          <div className="flex items-center space-x-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 shadow-glow">
              <Waves className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-white">DialCore</p>
              <p className="text-xs text-muted-foreground">Next-Generation VoIP</p>
            </div>
          </div>
          <div className="hidden items-center space-x-3 sm:flex">
            <Button variant="ghost" className="text-sm">Platform</Button>
            <Button variant="ghost" className="text-sm">Solutions</Button>
            <Button variant="ghost" className="text-sm">Docs</Button>
            <AccessDialog>
              <Button className="shadow-glow">Request Access</Button>
            </AccessDialog>
          </div>
          <div className="sm:hidden">
            <AccessDialog>
              <Button size="sm" className="shadow-glow">Request</Button>
            </AccessDialog>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="container grid gap-10 pb-16 pt-10 lg:grid-cols-[1.1fr,0.9fr] lg:pt-16">
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden />
                <span>Power Your Voice — With DialCore</span>
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Power Your Voice — With DialCore
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                The VoIP platform for professionals, call centers, and global teams. Provision numbers, spin up SIP endpoints,
                and orchestrate AI-assisted calling in minutes.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <AccessDialog>
                <Button size="lg" className="w-full sm:w-auto shadow-glow">
                  Request Access
                </Button>
              </AccessDialog>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-3">
              {valueProps.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="blur-panel flex h-full flex-col space-y-3 rounded-2xl p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1 shadow-2xl backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10" />
              <div className="relative space-y-6 rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-inner">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-xl bg-primary/20" />
                    <div>
                      <p className="text-sm text-muted-foreground">Quality Score</p>
                      <p className="text-lg font-semibold text-white">99.995% Uptime</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    Live Network
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {["SIP", "WebRTC", "Analytics"].map((chip) => (
                    <div key={chip} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{chip}</p>
                      <p className="mt-2 text-xl font-semibold text-white">Active</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Global latency</span>
                    <span>~82ms avg</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/5">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary via-accent to-primary" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>AI routing decisions</span>
                    <span>On</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/5">
                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-primary via-accent to-primary" />
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Predictive scaling</p>
                    <p className="text-lg font-semibold text-white">Requests up 132%</p>
                  </div>
                  <Button size="sm" variant="secondary" className="shadow-glow">
                    View console
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="container space-y-6 py-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary">Coming Soon</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">What we are shipping next</h2>
              <p className="text-muted-foreground">Early adopters get first access to premium VoIP and AI automation features.</p>
            </div>
            <AccessDialog>
              <Button variant="outline" className="hidden border-white/20 text-white hover:border-primary hover:text-primary md:inline-flex">
                Join the waitlist
              </Button>
            </AccessDialog>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={feature} className="relative overflow-hidden pt-10">
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Coming Soon
                </div>
                <CardHeader className="pt-0">
                  <CardTitle className="text-white">{feature}</CardTitle>
                  <CardDescription>
                    DialCore is wrapping quality monitoring, AI, and compliant provisioning around every step of your voice stack.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="h-2 rounded-full bg-white/5"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    style={{ transformOrigin: "0% 50%" }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container space-y-4 py-12">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.25em] text-primary">Preview</p>
              <h3 className="text-3xl font-semibold text-white">Purchase numbers in seconds</h3>
              <p className="text-muted-foreground">See how DialCore surfaces inventory, pricing, and compliance checks before you provision.</p>
            </div>
            <AccessDialog>
              <Button className="w-full md:w-auto">Request provisioning access</Button>
            </AccessDialog>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Marketplace snapshot</p>
                  <p className="text-xl font-semibold text-white">Global number inventory</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Live preview
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {numberInventory.map((item) => (
                  <div
                    key={item.country}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-primary/50 hover:shadow-glow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">{item.country}</p>
                        <p className="text-lg font-semibold text-white">{item.code} • {item.type}</p>
                      </div>
                      <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">{item.price}/mo</span>
                    </div>
                    <p className="text-sm text-slate-200">Availability: {item.availability}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-primary/10 to-white/5 p-6 shadow-xl">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.18em] text-primary">Instant SIP setup</p>
                <h4 className="text-2xl font-semibold text-white">Numbers, SIP credentials, and call routing in one flow.</h4>
                <p className="text-muted-foreground">
                  Validate regions, reserve numbers, and ship credentials to your agents or automations without manual tickets.
                </p>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li>• Compliance hints for every region before checkout</li>
                  <li>• Auto-generate SIP users with role-based permissions</li>
                  <li>• Ready-to-use WebRTC endpoints for browser dialing</li>
                  <li>• Realtime rate estimation across carriers</li>
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Tier-1 carriers</span>
                <span className="rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">Fraud controls</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">24/7 monitoring</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#120d24]/80 via-[#0e0a1e]/90 to-[#0b0818]/85 p-8 shadow-glow">
          <div className="absolute inset-0 opacity-30">
            <motion.div
              className="gradient-bg absolute inset-0"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="relative grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-primary">Request Access</p>
              <h3 className="text-3xl font-semibold text-white">Experience DialCore with your team</h3>
              <p className="text-lg text-slate-200">
                Tell us about your voice traffic, compliance needs, and timelines. Our onboarding engineers will tailor DialCore to your call flows.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">SIP trunks</span>
                <span className="rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-accent">AI copilots</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white">Regulatory-ready</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white">Latency SLAs</span>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-primary/30 bg-white/5 p-6">
              <p className="text-sm text-muted-foreground">Ready to build?</p>
              <AccessDialog>
                <Button size="lg" className="w-full shadow-glow">Talk to us</Button>
              </AccessDialog>
              <Button variant="ghost" className="w-full text-white hover:text-primary">
                Download product brief
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-14 border-t border-white/5 bg-slate-950/60">
        <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">DialCore</p>
            <p className="text-sm text-muted-foreground">contact@dialcore.com</p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <button className="transition hover:text-white">Privacy Policy</button>
            <button className="transition hover:text-white">Imprint</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
