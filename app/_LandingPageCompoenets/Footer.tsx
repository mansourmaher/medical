"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Stethoscope } from "lucide-react";

function Footer() {
  return (
    <div>
      <section className="flex items-center justify-center  w-full py-20 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4">Get Started Today</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Medical Practice?
              </h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Join thousands of healthcare professionals who trust MediCare
                for their medical equipment needs. Get access to premium
                products, expert advice, and exceptional service.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative flex-1 max-w-md">
                <Input
                  placeholder="Enter your email"
                  className="pr-24 h-12 rounded-full bg-white/90"
                />
                <Button className="absolute right-1 top-1 rounded-full h-10">
                  Subscribe
                </Button>
              </div>
              <Button variant="outline" className="rounded-full">
                Request Demo
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-slate-500 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              By subscribing, you agree to our Terms of Service and Privacy
              Policy
            </motion.p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Products", value: "500+" },
              { label: "Medical Professionals", value: "10,000+" },
              { label: "Countries Served", value: "25+" },
              { label: "Years of Excellence", value: "15+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Stethoscope className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">MediCare</span>
              </div>
              <p className="text-slate-400 mb-6">
                Providing high-quality medical equipment and supplies for
                healthcare professionals and patients.
              </p>
              <div className="flex space-x-4">
                {["twitter", "facebook", "instagram", "linkedin"].map(
                  (social) => (
                    <div
                      key={social}
                      className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-4 h-4 bg-slate-400 mask-icon-${social}"></div>
                    </div>
                  )
                )}
              </div>
            </div>

            {[
              {
                title: "Products",
                links: [
                  "Diagnostic",
                  "Monitoring",
                  "Surgical",
                  "Rehabilitation",
                  "Personal Care",
                ],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Press", "Blog", "Contact"],
              },
              {
                title: "Resources",
                links: [
                  "Help Center",
                  "Product Guides",
                  "Webinars",
                  "Terms of Service",
                  "Privacy Policy",
                ],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-bold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} MediCare. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
