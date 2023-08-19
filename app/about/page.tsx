import AboutComponent from "@/components/about/about_component";
import ContactForm from "@/components/about/contact-form";
import Cup from "@/components/home/cup";
import Hero from "@/components/products/hero";
import React from "react";

function Page() {
  return (
    <div>
      <Hero pageName="About Company" />
      <AboutComponent />
      <Cup />
      <ContactForm />
    </div>
  );
}

export default Page;
