const config = {
  property: {
    streetAddress: "6 Candow Crescent",
    city: "Ottawa",
    cityStateZip: "Ottawa, ON K2S 1K7",
    heroSubtitle:
      "Oversized corner lot bungalow in a mature, welcoming neighbourhood—perfect for families! Hardwood floors throughout, a luxurious 6 ft bathtub in the primary ensuite, and move-in ready comfort. Register to receive the complete Home & Neighbourhood Info Package, listing and more.",
    backgroundImageUrl:
      "https://api.typeform.com/responses/files/edeb7bf401b539b168e4805e5500a2cf24e62c61e637c0f096732e81bf2d32af/1_web_or_mls_1_print_1_web_or_mls_DSC07144_2_twilight_4f0254af_3268_4b9a_a291_78cd45d26e75.jpg"
  },
  realtor: {
    fullName: "Driscoll-Peca Team",
    title: "REALTOR®",
    phone: null,
    email: "melissa@driscollpeca.com",
    bio: "",
    photoUrl: null,
    social: {
      facebook: "https://www.facebook.com/driscollpecateam",
      instagram: "https://instagram.com/ae.parks",
      website: "https://driscollpeca.com/"
    }
  },
  brokerage: {
    name: "Real Broker LTD",
    logoUrl: null,
    address: "218 Brant Avenue\nBrantford ON N3T 3H9"
  },
  openHouse: {
    eventDate: "2025-09-14",
    bundleItems: [
      {
        icon: "fas fa-globe",
        text: "Property Listing: https://www.realtor.ca/real-estate/28843559/6-candow-crescent-ottawa-8211-stittsville-north"
      },
      {
        icon: "fas fa-map-marker-alt",
        text: "Located in a mature, welcoming & perfect neighbourhood for families."
      },
      {
        icon: "fas fa-bed",
        text: "3+2 Bedrooms, 2 Bathrooms, Oversized Corner Lot, Bungalow"
      },
      {
        icon: "fas fa-dollar-sign",
        text: "Listing Price: $839,900"
      },
      {
        icon: "fas fa-home",
        text: "Hardwood Floors Throughout, Six Foot Tub in Ensuite, Spacious Layout"
      }
    ]
  },
  meta: {
    pageTitlePrefix: "🏡 Driscoll-Peca Team Open House",
    navBrandLogoText: "OPEN HOUSE",
    privacyPolicyLink: "https://driscollpeca.com/privacy.html"
  },
  settings: {
    adminWebhookUrl: "https://n8n.salesgenius.co/webhook/openhouseupdate",
    visitorWebhookUrl: "https://n8n.salesgenius.co/webhook/openhouse",
    confettiColors: [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  modalQuestions: [
    {
      id: "agent_status",
      questionText: "Are you currently exploring homes with a real estate agent?",
      options: [
        { value: "committed", text: "Yes, I'm committed to an agent." },
        { value: "not_committed", text: "No, I'm not committed to an agent." },
        { value: "gathering_info", text: "Just gathering information at this stage." }
      ]
    },
    {
      id: "interest_level",
      questionText: "How interested are you in properties like this?",
      options: [
        { value: "very_interested", text: "Very interested, actively looking." },
        { value: "somewhat_interested", text: "Somewhat interested, keeping options open." },
        { value: "just_browsing", text: "Just browsing for now." }
      ]
    },
    {
      id: "neighborhood_engagement",
      questionText: "How do you usually enjoy the neighborhood?",
      options: [
        { value: "resident_explorer", text: "I live here and love exploring locally." },
        { value: "considering_move", text: "I'm considering moving to this area." },
        { value: "just_visiting", text: "Just visiting for the open house." }
      ]
    },
    {
      id: "feature_attraction",
      questionText: "What feature attracted you to this home?",
      options: [
        { value: "design_layout", text: "The design and layout." },
        { value: "location_neighborhood", text: "The location and neighborhood." },
        { value: "home_price", text: "The price of the home." }
      ]
    }
  ],
  deploymentInfo: {
    repoName: "Open-House-630",
    repoUrl: "https://github.com/arslvn93/Open-House-630",
    tag: "Open House 6 Candow Crescent",
    netlifyUrl: null,
    siteId: "83ae172b-9983-4b15-b82a-444c3493fd2b"
  }
};