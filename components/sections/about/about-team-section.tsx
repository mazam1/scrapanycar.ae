"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Linkedin, Mail, Phone } from "lucide-react"

const teamMembers = [
  {
    name: "Michael Johnson",
    role: "Founder & CEO",
    bio: "With over 20 years in automotive recycling, Michael founded Scrap Your Car with a vision to revolutionize the industry through fair pricing and exceptional service.",
    image: "/team/michael-johnson.jpg",
    linkedin: "#",
    email: "michael@scrapanycar.ae"
  },
  {
    name: "Sarah Chen",
    role: "Operations Director",
    bio: "Sarah oversees our daily operations, ensuring every customer receives prompt, professional service. Her background in logistics optimization drives our efficiency.",
    image: "/team/sarah-chen.jpg",
    linkedin: "#",
    email: "sarah@scrapanycar.ae"
  },
  {
    name: "David Rodriguez",
    role: "Head of Acquisitions",
    bio: "David leads our vehicle assessment team, bringing 15 years of automotive expertise to ensure accurate valuations and fair pricing for every customer.",
    image: "/team/david-rodriguez.jpg",
    linkedin: "#",
    email: "david@scrapanycar.ae"
  },
  {
    name: "Emily Thompson",
    role: "Customer Success Manager",
    bio: "Emily ensures every customer has an exceptional experience from first contact to final payment. Her dedication to service excellence sets us apart.",
    image: "/team/emily-thompson.jpg",
    linkedin: "#",
    email: "emily@scrapanycar.ae"
  },
  {
    name: "James Wilson",
    role: "Environmental Compliance Officer",
    bio: "James oversees our environmental initiatives and ensures all recycling processes meet the highest sustainability standards and regulatory requirements.",
    image: "/team/james-wilson.jpg",
    linkedin: "#",
    email: "james@scrapanycar.ae"
  },
  {
    name: "Lisa Martinez",
    role: "Finance Director",
    bio: "Lisa manages our financial operations and payment systems, ensuring customers receive fast, secure payments and transparent pricing structures.",
    image: "/team/lisa-martinez.jpg",
    linkedin: "#",
    email: "lisa@scrapanycar.ae"
  }
]

export function AboutTeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-brand-gold">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The dedicated professionals behind Scrap Your Car's success, committed to providing 
            you with exceptional service and expertise.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group p-6 rounded-xl bg-card border border-border hover:border-brand-gold/50 transition-all duration-300 hover:shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Profile Image Placeholder */}
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-gold/40 flex items-center justify-center border-4 border-brand-gold/20 group-hover:border-brand-gold/50 transition-colors">
                  <span className="text-2xl font-bold text-brand-gold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-brand-gold transition-colors">
                {member.name}
              </h3>
              <div className="text-brand-gold font-medium mb-4">
                {member.role}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                {member.bio}
              </p>

              {/* Contact Links */}
              <div className="flex justify-center gap-3">
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 rounded-full bg-muted hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href={member.linkedin}
                  className="p-2 rounded-full bg-muted hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-brand-gold/10 border border-brand-gold/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're always looking for passionate, dedicated professionals to join our mission 
              of providing exceptional automotive recycling services. If you share our values 
              and want to make a difference, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@scrapanycar.ae"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                View Open Positions
              </a>
              <a
                href="tel:+97141234567"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal font-semibold transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call HR: +971 4 123 4567
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}