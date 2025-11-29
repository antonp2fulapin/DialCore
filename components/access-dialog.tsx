"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AccessDialogProps {
  children: ReactNode;
}

const useCases = [
  "Contact center modernization",
  "Sales dialer",
  "Embedded calling in product",
  "AI agent rollout",
  "Number provisioning at scale",
  "Other",
];

export function AccessDialog({ children }: AccessDialogProps) {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    useCase: "Contact center modernization",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("DialCore request access", formState);
    setOpen(false);
  };

  const updateField = (field: keyof typeof formState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request Access</DialogTitle>
          <DialogDescription>
            Share a few details and our provisioning team will set up a tailored DialCore workspace.
          </DialogDescription>
        </DialogHeader>
        <motion.form
          className="mt-4 space-y-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                value={formState.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                required
                placeholder="Alex Rivera"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formState.company}
                onChange={(e) => updateField("company", e.target.value)}
                placeholder="Northwind Ops"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@company.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                type="tel"
                value={formState.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="+1 415 555 0134"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="useCase">Use case</Label>
            <select
              id="useCase"
              value={formState.useCase}
              onChange={(e) => updateField("useCase", e.target.value)}
              className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-foreground shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {useCases.map((option) => (
                <option key={option} value={option} className="bg-slate-900">
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formState.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Tell us about your call volume, regions, and integration needs."
            />
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>We respond within one business day.</span>
            <span className="flex items-center space-x-1 text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span>Status: Accepting pioneers</span>
            </span>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="shadow-glow">
              Submit request
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
