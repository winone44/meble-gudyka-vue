<template>
  <div class="home">
    <FirstSection/>
    <OtherProjectsSection />
    <ParallaxSection />
    <HowWeWorkSection />
    <AboutUsSection />
    <CustomerReviewsSection />
    <OurKnowledgeSection />
    <BestFurnitureParallaxSection />
    <FooterSection />
  </div>
</template>

<script>
// @ is an alias to /src


import FirstSection from "@/components/FirstSection";
import OtherProjectsSection from "@/components/OtherProjectsSection";
import ParallaxSection from "@/components/ParallaxSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import AboutUsSection from "@/components/AboutUsSection";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import OurKnowledgeSection from "@/components/OurKnowledgeSection";
import BestFurnitureParallaxSection from "@/components/BestFurnitureParallaxSection";
import FooterSection from "@/components/FooterSection";

export default {
  name: 'HomeView',
  components: {
    FooterSection,
    BestFurnitureParallaxSection,
    OurKnowledgeSection,
    CustomerReviewsSection,
    AboutUsSection,
    HowWeWorkSection,
    ParallaxSection,
    OtherProjectsSection,
    FirstSection

  }
}
</script>
