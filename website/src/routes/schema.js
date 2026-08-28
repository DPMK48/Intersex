export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "NonProfitOrganization",
  name: "Intersex Nigeria",
  url: "https://intersexnigeria.org",
  logo: "https://intersexnigeria.orghttps://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212316/intersex-ng-images/logo.webp",
  alternativeName: "IntersexNG",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2349129057794",
    email: "info@intersexnigeria.org",
    contactType: "Customer Service",
    areaServed: "NG",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: ["Lagos", "Abuja"],
    addressCountry: "NG",
  },
  foundingDate: "2019",
  founders: [
    {
      "@type": "Person",
      name: "Obioma Chukwuike",
    },
  ],
  sameAs: [
    "https://x.com/intersexnigeria",
    "https://www.youtube.com/@intersexnigeria",
    "https://www.instagram.com/intersex_nigeria_",
    "https://web.facebook.com/IntersexNigeria",
    "https://www.linkedin.com/company/intersexnigeria",
  ],
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Intersex nigeria",
  url: "https://intersexnigeria.org/about-us/about-intersex-nigeria",
  description:
    "Learn about Intersex Nigeria, founded to raise awareness about intersex persons, combat stigmas, advocate for intersex rights and promote bodily autonomy.",
  additionalType: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Intersex Nigeria",
    url: "https://intersexnigeria.org",
    founder: "Obioma Chukwuike",
    foundingDate: "2019",
    address: {
      "@type": "PostalAddress",
      addressLocality: ["Lagos", "Abuja"],
      addressCountry: "NG",
    },
  },
};

export const teamPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Meet the Team",
  url: "https://intersexnigeria.org/about-us/meet-the-team",
  description:
    "Learn about the talented individuals who drive our organization.",
};

export const careersPageSchema = {
  "@context": "http://schema.org",
  "@type": "Webpage",
  provider: {
    "@type": "Organization",
    name: "Intersex Nigeria",
    url: "https://intersexnigeria.org/career/join-the-team",
  },
  description:
    "Be part of a diverse team working towards creating a more inclusive society for intersex persons. Join our mission at Intersex Nigeria!",
  areaServed: {
    "@type": "Place",
    name: "Nigeria",
  },
};

export const galleryPageSchema = {
  "@context": "http://schema.org",
  "@type": "ImageGallery",
  provider: {
    "@type": "Organization",
    name: "Intersex Nigeria",
    url: "https://intersexnigeria.org/gallery",
  },
  description:
    "A Photo Gallery of Intersex Nigeria’s Advocacy, Events, and Community Impact",
};

export const contactPageSchema = {
  "@context": "http://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "Intersex Nigeria",
    url: "https://intersexnigeria.org/contact",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "2349129057794",
      email: "info@intersexnigeria.org",
      contactType: "Customer Service",
      areaServed: "NG",
      availableLanguage: "English",
    },
  },
};

export const newsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "News",
  url: "https://intersexnigeria.org/news",
  description:
    "Stay updated with the latest news and updates from our organization.",
};

export const advocacyPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Programs",
  url: "https://intersexnigeria.org/resources/programs",
  description:
    "Explore our programs that aim to bring positive change.",
};

export const reportsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Annual Reports",
  url: "https://intersexnigeria.org/resources/annual-reports",
  description:
    "Access our annual reports and learn about our impact.",
};

export const articlesPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Articles",
  url: "https://intersexnigeria.org/resources/articles",
  description: "Browse our collection of informative articles.",
};


export const epubPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "E-Publications",
  url: "https://intersexnigeria.org/resources/epublications",
  description: "Explore our library of e-publications.",
};

export const toolkitPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Toolkits",
  url: "https://intersexnigeria.org/resources/toolkit",
  description:
    "An in-depth guide for human rights organizations and defenders to develop inclusive advocacy programs tailored to the specific needs of intersex persons.",
};
