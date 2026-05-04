"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, CheckCircle, Star, TrendingUp, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "About", id: "#about" },
        { name: "Pricing", id: "#pricing" },
        { name: "Contact", id: "#contact" }
      ]}
      brandName="ApexHype"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{ variant: "sparkles-gradient" }}
      title="Amplify Your Brand Reach with ApexHype"
      description="We craft viral social media strategies that turn followers into customers. Let's scale your digital presence today."
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/cheerful-handsome-businessman_1262-21003.jpg", alt: "User 1" },
        { src: "http://img.b2bpic.net/free-photo/authentic-small-youthful-marketing-agency_23-2150167349.jpg", alt: "User 2" },
        { src: "http://img.b2bpic.net/free-photo/portrait-businesswoman-black-suit-going-up-escalator-talking-mobile-phone-saleswoman-wal_1258-123502.jpg", alt: "User 3" },
        { src: "http://img.b2bpic.net/free-photo/positive-confident-businessman-posing-outside_74855-1183.jpg", alt: "User 4" },
        { src: "http://img.b2bpic.net/free-photo/confident-successful-middle-aged-business-leader_1262-4872.jpg", alt: "User 5" }
      ]}
      avatarText="Trusted by 500+ brands"
      buttons={[
        { text: "Get Started", href: "#pricing" },
        { text: "Learn More", href: "#about" }
      ]}
      marqueeItems={[
        { type: "text", text: "Viral Content" },
        { type: "text", text: "Paid Media Mastery" },
        { type: "text", text: "Real-time Analytics" },
        { type: "text", text: "Engagement Growth" },
        { type: "text", text: "ROI Focused" }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Why Choose ApexHype?"
      metrics={[
        { label: "Revenue Growth", value: "150%", icon: TrendingUp },
        { label: "Client Retention", value: "98%", icon: Users },
        { label: "Strategy Experts", value: "20+", icon: Award }
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Viral Content Strategy",          description: "High-quality reels and posts designed to engage and convert.",          imageSrc: "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241207.jpg",          imageAlt: "Strategy"
        },
        {
          title: "Paid Ads Mastery",          description: "Targeted FB & IG campaigns that deliver measurable ROI.",          imageSrc: "http://img.b2bpic.net/free-photo/empty-startup-office-displays-statistics_482257-119484.jpg",          imageAlt: "Ads"
        },
        {
          title: "Real-time Analytics",          description: "Weekly performance reports to track your brand's explosive growth.",          imageSrc: "http://img.b2bpic.net/free-photo/research-analysis-ideas-strategy-information-concept_53876-123886.jpg",          imageAlt: "Data"
        }
      ]}
      title="Full-Service Digital Growth"
      description="From content creation to paid media, we handle the full stack of social media management to ensure your growth."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",          name: "Basic Plan",          price: "25k / month",          badge: "Starter Growth",          buttons: [{ text: "Get Started", href: "#" }],
          features: ["8 Social Posts/mo", "4 Reels", "Hashtag Strategy", "Basic Analytics"]
        },
        {
          id: "standard",          name: "Standard Plan",          price: "50k / month",          badge: "Business Boost",          buttons: [{ text: "Start Scaling", href: "#" }],
          features: ["15 Social Posts/mo", "8 Reels", "Trend Research", "Basic Ad Setup"]
        },
        {
          id: "premium",          name: "Premium Plan",          price: "100k / month",          badge: "Most Popular",          buttons: [{ text: "Go Premium", href: "#" }],
          features: ["25+ Posts/mo", "15 Reels", "Viral Strategy", "Paid Ads Mgmt", "Priority Support"]
        },
        {
          id: "custom",          name: "Custom Plan",          price: "Tailored",          badge: "Enterprise",          buttons: [{ text: "Contact Us", href: "#contact" }],
          features: ["Dedicated Support", "Custom Strategy", "Flexible Pricing"]
        }
      ]}
      title="Flexible Packages for Every Stage"
      description="No long-term contracts. Trusted by growing brands. Limited slots available."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", title: "Projects Completed", value: "500+", icon: CheckCircle },
        { id: "m2", title: "Social Engagement", value: "10M+", icon: Zap },
        { id: "m3", title: "Customer Reviews", value: "5.0", icon: Star }
      ]}
      title="Not sure which plan is right?"
      description="Let us guide you to the perfect social media strategy."
      buttons={[{ text: "Book Free Consultation Call", href: "#contact" }]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="ApexHype completely transformed our social presence. Our engagement skyrocketed in just three months. Best decision ever!"
      rating={5}
      author="Sarah Johnson, CEO of GrowthCo"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/portrait-cheerful-teenage-girl-sitting-cafe_1262-3048.jpg", alt: "Sarah" },
        { src: "http://img.b2bpic.net/free-photo/portrait-confident-entrepreneur-standing-office-looking-camera_637285-2744.jpg", alt: "Michael" },
        { src: "http://img.b2bpic.net/free-photo/happy-ambitious-hr-manager-choosing-you_1262-19137.jpg", alt: "Emily" },
        { src: "http://img.b2bpic.net/free-photo/portrait-stylish-blond-bearded-male-dressed-suit-grey-background_613910-11907.jpg", alt: "David" },
        { src: "http://img.b2bpic.net/free-photo/young-woman-enjoying-life-offline_23-2149172727.jpg", alt: "Lisa" }
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Is there a long-term contract?", content: "No, we work month-to-month to keep our service focused on your growth and ROI." },
        { id: "q2", title: "Can I upgrade my plan?", content: "Absolutely. You can scale your plan at any time to match your growing needs." },
        { id: "q3", title: "How quickly will I see results?", content: "Most clients see significant engagement improvements within the first 30 days." }
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      tag="Contact"
      title="Ready to scale?"
      description="Send us a quick message and we will get back to you with a free audit."
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/goal-oriented-entrepreneur-luxurious-corporate-office-plans-strategy_482257-128191.jpg"
      imageAlt="Strategy planning meeting"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            { label: "About", href: "#about" },
            { label: "Pricing", href: "#pricing" },
            { label: "Contact", href: "#contact" }
          ]
        },
        {
          items: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" }
          ]
        }
      ]}
      logoText="ApexHype"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}