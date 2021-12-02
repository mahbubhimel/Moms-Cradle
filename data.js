class uiModel {
  constructor(text, link) {
    this.text = text;
    this.link = link;
    this.children = [];
  }
}

class uiModelIcon {
  constructor(text, icon) {
    this.text = text;
    this.icon = icon;
  }
}

var data = {
  topSection: {
    logo: {
      src: "./img/moms-cradle-logo.png",
    },
    menu: [
      new uiModel("HOME", "./index.html"),
      new uiModel("PRODUCTS", "./index.html"),
      new uiModel("ABOUT", "./index.html"),
      {
        text: "SUPPORT",
        link: "#",
        children: [
          new uiModel("Get Started", "./index.html"),
          new uiModel("FAQs", "./index.html"),
          new uiModel("Forums", "./index.html"),
        ],
      },
    ],
    menuButton: {
      request: "REQUEST YOUR STORE",
      login: "LOGIN",
    },
  },

  adminPortal: {
    heading: {
      text: "Admin Portal",
    },
    description: {
      text: "Easily manage shopping services, do order processing, customize email templates, manage scholarships and many other services from anywhere.",
    },
    listText: [
      new uiModel("Real Time Dashboard", "#"),
      new uiModel("eCommerce Integration", "#"),
      new uiModel("Inventory Management", "#"),
      new uiModel("Discount Management", "#"),
      new uiModel("Store Credits", "#"),
      new uiModel("Store Lane Management", "#"),
      new uiModel("Coupons", "#"),
      new uiModel("Product Packages", "#"),
      new uiModel("Reporting", "#"),
      new uiModel("CRM System", "#"),
      new uiModel("Email Templare Creator", "#"),
      new uiModel("Alert Messaging", "#"),
      new uiModel("Abandoned carts and revenue potential increase", "#"),
      new uiModel("Global Search", "#"),
      new uiModel("Site template customization", "#"),
      new uiModel("Product, Classes, Rentals and Membership management", "#"),
      new uiModel("Adaptive Task Bar", "#"),
      new uiModel("Survey Manager", "#"),
      new uiModel("Logging for HIPPA Compliance", "#"),
      new uiModel("Custome roles for service access", "#"),
      new uiModel("ReportingSeparate Point-of-Service lanes", "#"),
      new uiModel("Scholarship Management", "#"),
    ],
    adminPortalLogo: {
      src: "/img/admin-portal-image-01.png",
    },
  },

  memberPortal: {
    heading: {
      text: "Member Portal",
    },
    description: {
      text: "A single point of interaction for expecting moms to shop for pre-natal products, classes, product rentals and many more things.",
    },
  },

  securityPolicySection: {
    heading: {
      text: "Our Security Policy",
    },
    description: {
      text: `We have built solution being mindful of safety for your organization and members. We provide transparency, regulatory compliance, auditing, recovery and services that keep your data safe.`,
    },
    // iconsAndImages : {
    //   one = "SSL enforcement for secure HTTPS access.",
    // }
    columnOne: [
      new uiModelIcon("SSL enforcement for secure HTTPS access.", "icon-lock"),
      new uiModelIcon(
        "Email encryption using standard TLS protocols.",
        "icon-mail-envelope-open"
      ),
      new uiModelIcon(
        `Archived data is immediately stored within in the application forever or on a recurring schedule.`,
        "icon-lock"
      ),
      new uiModelIcon("Password strength requirements.", "icon-key"),
      new uiModelIcon(
        "Setup customizable policies for filtering sensitive information.",
        "icon-chat"
      ),
      new uiModelIcon(
        `Configure administration access, update permissions
        and policies, creare individual profiles or pyramids
        in minutes.`,
        "icon-lock"
      ),
      new uiModelIcon(
        "Customizable policies to filter email containing sensitive information.",
        "icon-lock"
      ),
      new uiModelIcon(
        "Traceability to changes in data fields via timestamps for data activity.",
        "icon-mail-envelope-open"
      ),
      new uiModelIcon(
        `A fast and more simple method to maintain complex IT
        configuration profiles.`,
        "icon-lock"
      ),
    ],
  },

  getStarted: {
    heading: {
      text: "Get Started Today",
      text01: `<strong>For Members</strong> Please signup if you would like to
      kept apprised of new service offerings to be <br />
      introduced in 2014.`,
      text02: `<strong>For Birth Center Administrators</strong> We make it easy
      for you to manage your classes, product rentals, pre-natal product
      sales and memberships. You can sign up and get your Resource
      Centre online. This will empower your clients to use your services
      and improve your quality of service. Please sign
      <p style="text-align: center">up for a demo account.</p>`,
    },
    downLoadButton: {
      text01: "Case Study",
      link01: "./Edureka-Java-Ebook.pdf",
      text02: "Product Brochure",
      link02: "./Principles_and_Patterns.pdf",
    },
    requestStoreButtonText: {
      text: "REQUEST YOUR STORE",
    },
  },

  quickLinksSection: {
    heading: {
      text: "Quick Links",
    },
    lists: [
      new uiModel("Home", "#"),
      new uiModel("Forum", "#"),
      new uiModel("Products", "#"),
      new uiModel("Contact Us", "#"),
      new uiModel("Articles", "#"),
      new uiModel("About Us", "#"),
      new uiModel("FAQ", "#"),
      new uiModel("Privacy Policy", "#"),
    ],
  },
};
