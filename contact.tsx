"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { personal } from "@/lib/data/personal";

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to send");

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Couldn't send message",
        description: "Please try emailing directly or try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const links = [
    { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
    { icon: Github, label: "GitHub", href: personal.github },
    { icon: Linkedin, label: "LinkedIn", href: personal.linkedin },
  ];

  return (
    <section id="contact" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Contact"
          title="Let's Build Something Great"
          description="Have a project in mind or want to collaborate? Drop me a message."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <h3 className="mb-6 text-lg font-semibold text-white">Get in touch</h3>
              <div className="space-y-4">
                {links.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/5 p-3 text-white/60 transition-all hover:border-cyan-400/30 hover:bg-cyan-500/5 hover:text-cyan-300"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-cyan-400" />
                    <span className="text-sm break-all">{label}</span>
                  </a>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
