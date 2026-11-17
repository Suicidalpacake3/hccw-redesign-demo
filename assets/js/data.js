/* Hand-curated content for the HCCW site concept (sourced from hccw.com). */
window.HCCW = window.HCCW || {};

HCCW.firm = {
  name: "Harman Claytor Corrigan & Wellman",
  legal: "Harman, Claytor, Corrigan & Wellman, P.C.",
  phone: "804.747.5200",
  phoneHref: "tel:1.804.747.5200",
  tollFree: "1.877.747.4229",
  tollFreeHref: "tel:1.877.747.4229",
  fax: "804.747.6085",
  mailing: ["P.O. Box 70280", "Richmond, Virginia 23255"],
  careersEmail: "careers@hccw.com",
  linkedin: "https://www.linkedin.com/company/harman-claytor-corrigan-&-wellman/",
  harmonie: "https://www.harmonie.org/",
  since: 1991,
  licensed: ["Virginia", "Washington, DC", "Maryland", "West Virginia", "North Carolina"]
};

/* Short, scannable taglines for practice-area cards */
HCCW.taglines = {
  "appellate-practice": "Objective, experienced counsel before state and federal appellate courts.",
  "auto-liability-defense": "Defending drivers, owners and insurers in motor vehicle claims.",
  "aviation": "Supporting airlines, carriers and their employees on aviation-related claims.",
  "brain-injury-litigation": "Specialized defense requiring deep medical and scientific understanding.",
  "childcare-preschool": "Helping childcare centers and preschools investigate and defend claims.",
  "commercial-and-business-litigation": "Resolving contract, partnership and business disputes across the region.",
  "construction-law": "Owners, contractors and design professionals, from site to courtroom.",
  "consumer-litigation": "Meeting the unique legal needs of consumer litigation defense clients.",
  "employment-law": "Guidance and defense for employers on workplace claims.",
  "environmental-and-toxic-torts": "Representing public entities and companies in environmental matters.",
  "esi-electronically-stored-information": "Managing electronic discovery with precision and care.",
  "insurance-coverage": "Coverage analysis and declaratory judgment litigation for insurers.",
  "local-government-public-entity-and-nonprofit-litigation": "Defending localities, schools and nonprofits.",
  "long-term-care-litigation": "A dedicated team defending long term care providers.",
  "maritime-and-admiralty": "Handling matters across the broad range of maritime law.",
  "medical-malpractice-litigation": "Defending physicians, hospitals and healthcare providers.",
  "premises-liability": "Handling every aspect of a premises liability claim.",
  "products-liability": "Defending companies that design, manufacture and sell products.",
  "professional-liability": "Proactive, discreet defense for licensed professionals.",
  "religious-faith-based-institutions": "Counsel and representation for religious organizations.",
  "transportation-and-trucking-litigation": "Rapid-response defense for trucking and transportation clients."
};

HCCW.offices = [
  {
    id: "richmond",
    city: "Richmond",
    label: "Richmond Office",
    tag: "Headquarters",
    street: "4951 Lake Brook Drive, Suite 100",
    cityLine: "Glen Allen, Virginia 23060-9272",
    phone: "804-747-5200",
    fax: "804-747-6085",
    lat: 37.6679, lng: -77.5736,
    img: "assets/img/locations/richmond-skyline.jpg",
    credit: "Photo: Bdl2001 / Wikimedia Commons, CC BY 4.0",
    blurb: "Our largest office serves clients throughout the Commonwealth from Virginia's capital region, with easy access to state and federal courts across Central Virginia.",
    filter: "Richmond"
  },
  {
    id: "dc",
    city: "DC Metro",
    label: "DC Metro Office",
    tag: "Alexandria, VA",
    street: "1900 Duke Street, Suite 210",
    cityLine: "Alexandria, VA 22314",
    phone: "804-747-5200",
    fax: "804-747-6085",
    lat: 38.8043, lng: -77.0620,
    img: "assets/img/locations/alexandria-king-st.jpg",
    credit: "Photo: Ken Lund / Wikimedia Commons, CC BY-SA 2.0",
    blurb: "Minutes from the nation's capital, our DC Metro team handles matters in the District of Columbia, Maryland and Northern Virginia.",
    filter: "DC Metro"
  },
  {
    id: "roanoke",
    city: "Roanoke",
    label: "Roanoke Office",
    tag: "Southwest Virginia",
    street: "310 First Street SW, Suite 310",
    cityLine: "Roanoke, VA 24011",
    phone: "804-747-5200",
    fax: "804-747-6085",
    lat: 37.2707, lng: -79.9421,
    img: "assets/img/locations/roanoke-dusk.jpg",
    credit: "Photo: Joe Ravi / Wikimedia Commons, CC BY-SA 3.0",
    blurb: "From the Star City, our Roanoke attorneys serve the Roanoke Valley, Southwest Virginia and the neighboring jurisdictions of West Virginia and North Carolina.",
    filter: "Roanoke"
  }
];

/* Full profiles (demo includes the first three attorneys) */
HCCW.profiles = {
  "benjamin-p-abel": {
    photo: "assets/img/attorneys/benjamin-p-abel-lg.jpg",
    direct: "571.290.6118",
    email: "babel@hccw.com",
    vcard: "https://www.hccw.com/wp-content/uploads/2025/06/Benjamin-P.-Abel.vcf",
    team: [
      { role: "Assistant", name: "Courtney Howard", email: "choward@hccw.com", phone: "571.317.2609" },
      { role: "Paralegal", name: "Isabella Koyama", email: "ikoyama@hccw.com", phone: "571.317.2607" }
    ],
    lede: "Trial attorney seasoned in federal and state courtrooms, focused on product liability and class action defense, especially food and beverage labeling claims.",
    bio: [
      "Ben Abel is a trial attorney seasoned in federal and state courtrooms. He focuses his practice on representing clients in product liability and class action cases, with a particular emphasis on food and beverage labeling claims. Ben’s litigation experience also includes premises liability, transportation, higher education, CERCLA, and personal injury cases.",
      "Much of Ben’s practice is devoted to advising and defending food and beverage clients in food-related litigation, especially labeling claims. He advises manufacturers, distributors and retailers on matters related to Food and Drug Administration, U.S. Department of Agriculture, and Tax and Trade Bureau compliance. In this capacity, Ben has defended manufacturers and retailers in a series of lawsuits involving labeling and other marketing claims."
    ],
    sections: [
      { title: "Professional Honors & Activities", icon: "award", items: [
        "Defense Research Institute",
        "Virginia Association of Defense Attorneys",
        "Best Lawyers in America: Ones to Watch (2022-2024), Products Liability Litigation, Defendants",
        "Great North Innocent Project, Pro Bono Champion of the Year (2023)"
      ]},
      { title: "Publications", icon: "book", items: [
        "Co-author, “Chapter 4: Food Safety,” “Chapter 5: Food Recalls” in Food Law: A Practical Guide, American Bar Association (2021)",
        { text: "QSR Magazine: Restaurant industry may be next battleground in fight over PFAS", href: "https://www.qsrmagazine.com/operations/legal/restaurant-industry-may-be-next-battleground-fight-over-pfas/" },
        { text: "QSR Magazine: Why lawsuits are taking aim at quick-service meal pricing", href: "https://www.qsrmagazine.com/operations/legal/why-lawsuits-are-taking-aim-quick-service-meal-pricing/" },
        { text: "Food Dive: Crisco decision adds to conflicting case law over lab testing results", href: "https://www.fooddive.com/news/crisco-decision-adds-to-conflicting-case-law-over-lab-testing-results/559151/" },
        { text: "Manufacturing.net: The FDA gets pulled into the ‘natural’ labeling fray", href: "https://www.manufacturing.net/operations/article/13185013/the-fda-gets-pulled-into-the-natural-labeling-fray-surprise-move-may-change-the-food-fight" },
        "Author, Reviewing the Magic Pipes: Angelex Ltd. v. United States, Oily Water Separators, and Constitutional Review of Coast Guard Action, 23 WM. & MARY BILL RTS. J. 857 (Mar. 2015)"
      ]},
      { title: "Reported Cases", icon: "gavel", items: [
        "Wynn v. Topco Assocs., LLC, 2021 WL 168541 (S.D.N.Y. Jan. 19, 2021)",
        "Edwards v. Johnsonville LLC",
        "Gould v. Guida-Seibert Dairy",
        "Stinnie v. Holcomb, 355 F. Supp. 3d 514 (W.D. Va. 2018)"
      ]},
      { title: "Presentations", icon: "mic", items: [
        { text: "FDLI: Food and Dietary Supplement Class Action Litigation Roundtable (2021)", href: "https://www.fdli.org/2021/06/food-and-dietary-supplement-class-action-litigation-roundtable-discussion-on-recent-filings-and-current-trends/" },
        { text: "FDLI: 2024 Food Advertising, Labeling, and Litigation Conference", href: "https://www.fdli.org/2024/04/2024-food-advertising-labeling-and-litigation-conference-agenda/#eb3d293b68a3d5190" },
        { text: "FDLI: 2023 Food Advertising, Labeling, and Litigation Conference", href: "https://www.fdli.org/2023/08/2023-food-advertising-labeling-and-litigation-conference-agenda/#e93db545196f3c404" },
        "Trends in the F&B and Hospitality Industries: Where Are We Going Next?, Perrin Food & Beverage Litigation Conference (2021)"
      ]},
      { title: "Education", icon: "cap", items: [
        "University of Virginia, B.A. with Distinction (2010)",
        "William & Mary Law School, J.D. (2015). Order of the Coif; Senior Notes Editor, William & Mary Bill of Rights Journal"
      ]},
      { title: "Bar & Court Admissions", icon: "scale", items: [
        "District of Columbia Bar",
        "Virginia State Bar",
        "United States District Court for the Eastern District of Virginia",
        "United States District Court for the Western District of Virginia",
        "United States District Court for the District of Columbia",
        "Supreme Court of Virginia"
      ]}
    ]
  },
  "laura-m-berry": {
    photo: "assets/img/attorneys/laura-m-berry-lg.jpg",
    direct: "804.622.1155",
    email: "lberry@hccw.com",
    vcard: "https://www.hccw.com/wp-content/uploads/2024/05/Laura-M.-Berry.vcf",
    team: [
      { role: "Assistant", name: "Kelly Allen", email: "kallen@hccw.com", phone: "804.622.1114" },
      { role: "Paralegal", name: "Jennifer Bailey", email: "jbailey@hccw.com", phone: "804.622.1119" }
    ],
    lede: "Member of the firm’s professional liability team, defending attorneys, healthcare providers and other licensed professionals in high-stakes matters.",
    bio: [
      "Laura Berry is a dedicated member of the firm’s professional liability team, focusing her practice on defending attorneys, healthcare providers, and other licensed professionals in high-stakes malpractice suits and board-related regulatory matters. In addition to professional liability, Laura’s practice expands into a diverse range of general litigation matters, including contract disputes, premises liability, construction litigation, and defamation claims. Laura’s clients include large retailers, hospitals, commercial property owners, major airlines, small businesses, and individuals.",
      "Laura is a passionate advocate who has successfully represented clients across Virginia trial courts, the Virginia Court of Appeals, the United States District Court for the Eastern District of Virginia, and the United States District Court for the Western District of Virginia. A member of the firm’s appellate practice group, Laura is particularly energized by the art of persuasive writing and courtroom advocacy.",
      "Laura received her undergraduate degree from Washington and Lee University and her law degree from St. John’s University School of Law in New York City. In law school, Laura served on the Executive Board of the Moot Court Honor Society and received the Tyler J. Ramaker Award at graduation in recognition of her moot court contributions. Laura’s legal talent has been consistently recognized by her peers, earning her honors as a Virginia Super Lawyers Rising Star and a Virginia Business Legal Elite Young Lawyer."
    ],
    sections: [
      { title: "Professional Honors & Activities", icon: "award", items: [
        "Virginia Association of Defense Attorneys",
        "Defense Research Institute",
        "Henrico County Bar Association",
        "Richmond Bar Association",
        "Metro Richmond Women’s Bar Association",
        "John Marshall Inn of Court (2024 to present)",
        "Washington and Lee University Richmond Alumni Chapter",
        "Virginia Business Legal Elite (2024). Young Lawyer",
        "Virginia Super Lawyers Rising Stars (2025-2026), Personal Injury, General: Defense"
      ]},
      { title: "Reported Cases", icon: "gavel", items: [
        "Woods v. Sing Szechuan Restaurant, LLC, Record No. 0916-24-2, Apr. 1, 2025. CAV (Decker)"
      ]},
      { title: "Education", icon: "cap", items: [
        "Washington and Lee University, B.A. (2014)",
        "St. John’s University School of Law, J.D. (2020). Executive Board Member, Moot Court Honor Society; Tyler J. Ramaker Memorial Award; Senior Staff Member, American Bankruptcy Institute Law Review"
      ]},
      { title: "Bar & Court Admissions", icon: "scale", items: [
        "Virginia State Bar",
        "United States District Court for the Eastern District of Virginia"
      ]}
    ]
  },
  "victoria-d-pretlow": {
    photo: "assets/img/attorneys/victoria-d-pretlow-lg.jpg",
    direct: "804.612.7592",
    email: "vpretlow@hccw.com",
    vcard: "https://www.hccw.com/wp-content/uploads/2023/06/Victoria-D.-Pretlow-Birton.vcf",
    team: [
      { role: "Assistant", name: "Katrin Hale-Rogers", email: "khale-rogers@hccw.com", phone: "804.622.1133" },
      { role: "Paralegal", name: "Nancy Roark", email: "nroark@hccw.com", phone: "804.622.1127" }
    ],
    lede: "Focuses on mass tort and medical malpractice defense, with an emphasis on document analysis and management in complex litigation.",
    bio: [
      "Victoria D. Pretlow Birton is an Associate Attorney in Harman Claytor Corrigan and Wellman’s Richmond office. A Virginia native from the Hampton Roads area, Victoria focuses her practice on mass tort and medical malpractice defense, with an emphasis on document analysis and management in complex litigation.",
      "Victoria began her legal career in insurance coverage litigation before transitioning to medical malpractice defense. She is admitted to practice in the Commonwealth of Virginia and before the United States District Courts for the Eastern and Western Districts of Virginia.",
      "Victoria earned her Bachelor of Arts from Virginia Wesleyan College in 2013, her Master of Public Health from Augusta University in 2016, and her Juris Doctor from the College of William & Mary Law School in 2019.",
      "She is an active member of several local and state legal organizations, including the Virginia Association of Defense Attorneys and the Richmond Bar Association. Victoria has been recognized for her work as a member of Virginia Business Legal Elite, Young Lawyers category and Virginia Super Lawyers Rising Stars."
    ],
    sections: [
      { title: "Professional Honors & Activities", icon: "award", items: [
        "Virginia Association of Defense Attorneys",
        "Defense Research Institute",
        "Richmond Bar Association",
        "Federal Bar Association",
        "Virginia Super Lawyers Rising Stars (2025-2026), Personal Injury, Medical Malpractice: Defense"
      ]},
      { title: "Publications", icon: "book", items: [
        "The Journal of Civil Litigation: Trustgard Insurance Co. v. Collins: Changing the Landscape of Duty-to-Indemnify Claims in Insurance Coverage and Declaratory Judgment Actions in the Fourth Circuit? (April 9, 2020)"
      ]},
      { title: "Education", icon: "cap", items: [
        "Virginia Wesleyan College, B.A., summa cum laude (2013)",
        "Augusta University, M.P.H. (2016)",
        "William & Mary Law School, J.D. (2019)"
      ]},
      { title: "Bar & Court Admissions", icon: "scale", items: [
        "Virginia State Bar",
        "United States District Court for the Eastern District of Virginia",
        "United States District Court for the Western District of Virginia"
      ]}
    ]
  }
};

HCCW.news = [
  {
    id: "best-law-firms-2027-edition",
    title: "Best Law Firms® 2027 Edition",
    date: "November 5, 2026",
    cat: "Firm News",
    author: "Melanie Crouch",
    img: "assets/img/stock/justice.jpg",
    excerpt: "Harman Claytor Corrigan & Wellman, P.C. has received 15 regional rankings in the 2027 Edition of Best Law Firms® ranked by Best Lawyers®.",
    body: [
      { t: "p", html: "Harman Claytor Corrigan &amp; Wellman, P.C. has received 15 regional rankings in the <a href=\"https://www.bestlawfirms.com/firms/harman-claytor-corrigan-wellman-pc/19575/US#rankings\" target=\"_blank\" rel=\"noopener\">2027 Edition of Best Law Firms® ranked by Best Lawyers®</a>." },
      { t: "h", text: "Regional: Richmond, Virginia" },
      { t: "ul", items: ["Appellate Practice|Tier 1", "Employment Law, Management|Tier 1", "Insurance Law|Tier 1", "Personal Injury Litigation, Defendants|Tier 1", "Product Liability Litigation, Defendants|Tier 1", "Transportation Law|Tier 1", "Litigation, Labor and Employment|Tier 2", "Mass Tort Litigation / Class Actions, Defendants|Tier 2", "Medical Malpractice Law, Defendants|Tier 2"] },
      { t: "h", text: "Regional: Roanoke, Virginia" },
      { t: "ul", items: ["Litigation, Insurance|Tier 1", "Medical Malpractice Law, Defendants|Tier 1", "Personal Injury Litigation, Defendants|Tier 2", "Product Liability Litigation, Defendants|Tier 2"] },
      { t: "h", text: "Regional: Washington, DC" },
      { t: "ul", items: ["Litigation, Insurance|Tier 1", "Medical Malpractice Law, Defendants|Tier 2"] }
    ]
  },
  { id: "welcome-laurel-wilkerson", title: "Welcome Laurel Wilkerson", date: "November 3, 2026", cat: "Welcome New Attorneys", author: "Melanie Crouch", person: "laurel-m-wilkerson",
    excerpt: "Harman Claytor Corrigan & Wellman would like to welcome Laurel M. Wilkerson to the firm’s Richmond office. Her practice will focus on defending government entities." },
  { id: "welcome-alyssa-ritchie", title: "Welcome Alyssa Ritchie", date: "November 3, 2026", cat: "Welcome New Attorneys", author: "Melanie Crouch", person: "alyssa-c-ritchie",
    excerpt: "Harman Claytor Corrigan & Wellman would like to welcome Alyssa C. Ritchie to the firm’s Richmond office. Her practice will focus on professional liability matters." },
  { id: "welcome-sydney-coker", title: "Welcome Sydney Coker", date: "November 3, 2026", cat: "Welcome New Attorneys", author: "Melanie Crouch", person: "sydney-a-coker",
    excerpt: "Harman Claytor Corrigan & Wellman would like to welcome Sydney A. Coker to the firm’s Richmond office. Her practice will focus on general liability defense." },
  { id: "welcome-niya-harden", title: "Welcome Niya Harden", date: "November 3, 2026", cat: "Welcome New Attorneys", author: "Melanie Crouch", person: "niya-e-harden",
    excerpt: "Harman Claytor Corrigan & Wellman would like to welcome Niya E. Harden to the firm’s DC Metro office. Her practice will focus on general liability matters." },
  { id: "welcome-kelsey-kerr", title: "Welcome Kelsey Kerr", date: "November 3, 2026", cat: "Welcome New Attorneys", author: "Melanie Crouch", person: "kelsey-a-kerr",
    excerpt: "Harman Claytor Corrigan & Wellman would like to welcome Kelsey A. Kerr to the firm’s DC Metro office. Her practice will focus on professional liability and medical malpractice." },
  { id: "welcome-hailey-kates", title: "Welcome Hailey Kates", date: "November 3, 2026", cat: "Welcome New Attorneys", author: "Melanie Crouch", person: "hailey-e-kates",
    excerpt: "Harman Claytor Corrigan & Wellman would like to welcome Hailey E. Kates to the firm’s Richmond office. Her practice will focus on defending government and nonprofit entities." },
  { id: "congratulations-brian-ettari", title: "Congratulations Brian Ettari", date: "October 5, 2026", cat: "Spotlight", author: "Melanie Crouch", person: "brian-p-ettari",
    excerpt: "Brian P. Ettari has been named by Virginia Lawyers Weekly to its 2026 Class of “Up & Coming Lawyers.”",
    body: [
      { t: "p", html: "Harman Claytor Corrigan &amp; Wellman congratulates Brian P. Ettari for being named by Virginia Lawyers Weekly to its 2026 Class of “Up &amp; Coming Lawyers.” The “Up &amp; Coming Lawyers” program recognizes attorneys who, in their first ten years of practice, have been making a name for themselves and displaying the determination and accomplishments that establish them as leaders of the future. Brian and the other honorees will be recognized at a ceremony on October 29th at Independence Golf Club." }
    ]
  }
];

HCCW.jobs = [
  { title: "Attorney: Civil Litigator / General Liability / Construction & Commercial", office: "Richmond", type: "Attorney",
    text: "Harman Claytor Corrigan & Wellman is searching for an associate to join our busy construction/commercial litigation practice group. The ideal candidate will have 0-5 years of litigation experience and a strong…" },
  { title: "Attorney: Civil Litigator / General Liability / Insurance Coverage", office: "Richmond", type: "Attorney",
    text: "Harman Claytor Corrigan & Wellman is searching for an associate to join our busy insurance coverage and general liability defense practice groups. The ideal candidate will have 1-5 years of…" },
  { title: "Attorney: Civil Litigator / General Liability, Medical Malpractice, and/or Professional Liability", office: "Richmond", type: "Attorney",
    text: "Harman Claytor Corrigan & Wellman is searching for a civil litigator to join our growing practice in our Richmond office. The ideal candidate will have 2-7 years of litigation experience…" },
  { title: "Attorney: Civil Litigator / General Liability, Medical Malpractice, and/or Professional Liability", office: "Roanoke", type: "Attorney",
    text: "Harman Claytor Corrigan & Wellman is searching for a civil litigator to join our growing practice in our Roanoke office. The ideal candidate will have 2-7 years of litigation experience…" },
  { title: "Litigation Paralegal", office: "DC Metro / Alexandria", type: "Staff",
    text: "Harman Claytor Corrigan & Wellman, a Richmond, VA based firm seeks to hire a motivated paralegal with 3+ years of experience in civil litigation for our Alexandria, VA office. Applicant must be…" }
];

HCCW.rankings = [
  { office: "Richmond", tier1: 6, tier2: 3 },
  { office: "Roanoke", tier1: 2, tier2: 2 },
  { office: "Washington, DC", tier1: 1, tier2: 1 }
];
