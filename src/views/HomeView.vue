<template>
  <div class="home">
    <NavbarComponent />
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

import NavbarComponent from "@/components/NavbarComponent";
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
    FirstSection,
    NavbarComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@400;500;700&display=swap');

:root {
  --white: white;
  --black: black;
  --grey: #eaeaea
}


body {
  margin: 0;
}

h1, h2, h3, h4 p {
  margin-block-start: 0;
  margin-block-end: 0;
}

p {
  margin: 5px 0 0;
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2rem;
}

button, input[type=submit], p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

@media screen and (max-width: 900px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1rem;
  }


  section {
    max-width: 900px;
  }
}
</style>
