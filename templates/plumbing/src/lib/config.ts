import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "DeHart Plumbing, Heating, and Air Inc.",
    tagline: "Comfort Solutions For Your Home",
    phone: "(833) 710-9330",
    phoneHref: "tel:+18337109330",
    email: "info@dehartinc.com",
    address: "123 Main St",
    city: "Modesto",
    serviceAreas: ["Modesto, CA", "Reno, NV"],
    license: "CA C36, C20, C43",
    since: "1990",
    google_rating: "4.9",
    review_count: "3910",
    emergency: true,
    theme: "ocean",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Plumbing Services", desc: "Expert plumbing repairs, installations, and maintenance for your home or business.", urgent: true },
    { icon: "flame", title: "Heating Solutions", desc: "Reliable heating system repair, installation, and tune-ups to keep you warm.", urgent: true },
    { icon: "thermometer", title: "Air Conditioning", desc: "Professional AC repair, installation, and maintenance for optimal cooling.", urgent: true },
    { icon: "sparkles", title: "Indoor Air Quality", desc: "Improve your home's air with purification, humidifiers, and ventilation systems.", urgent: false },
    { icon: "briefcase", title: "Commercial HVAC", desc: "Specialized HVAC services for businesses, ensuring comfort and efficiency.", urgent: false },
    { icon: "shield-check", title: "Water Heater Services", desc: "Installation, repair, and maintenance for tankless and traditional water heaters.", urgent: true }
  ],

  testimonials: [
    { name: "Michael Bussio", location: "Modesto, CA", stars: 5, text: "We had a plumbing emergency with our hot water heater flooding the crawlspace. DeHart Plumbing responded quickly and took care of the problem, much to our relief! The technician, Bryan Cohenour, was personable and efficient. We strongly recommend this HVAC/plumbing outfit for their prompt and professional service." },
    { name: "Dana Coates", location: "Reno, NV", stars: 5, text: "DeHartModesto is the best! I've had them for plumbing, air, and heating through the years. Always professional, good work. Plus they are polite, knowledgeable, and friendly. They clean up after if necessary, better than I clean myself! Truly a fantastic experience every time." },
    { name: "Jason Higgins", location: "Modesto, CA", stars: 5, text: "Got me in same day! The technician was working on a different unit and they were able to squeeze me in before he left the parking lot! Adrian was very professional and informative with what's going on with my unit. Willy was excellent as well, even though he was in training, he still made it happen." }
  ],

  trustBadges: [
    "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "Financing Available", "Same-Day Service", "3900+ 5-Star Reviews"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 3900, label: "Happy Customers", suffix: "+", decimals: 0 },
    { value: 30, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your emergencies with rapid dispatch and quick solutions." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises, just clear, honest pricing before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained, certified, and background-checked for your peace of mind." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "24/7 AI Reception", desc: "Our intelligent reception is always ready to assist you, day or night." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with parts for efficient, on-the-spot repairs." }
  ],

  formServiceOptions: ["Plumbing Services", "Heating Solutions", "Air Conditioning", "Indoor Air Quality", "Commercial HVAC", "Water Heater Services"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!