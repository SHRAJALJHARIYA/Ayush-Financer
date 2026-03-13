import { useState, useEffect } from "react";

// ─── BILINGUAL CONTENT ────────────────────────────────────────────────────────
const T = {
  en: {
    name: "Ayush Jhariya",
    role: "Bajaj Finance Consultant",
    tagline: "Your Trusted EMI Partner in Nainpur",
    heroTitle: "Buy Electronics on Easy EMI",
    heroSub: "Get instant Bajaj Finance approval for mobiles, TVs, laptops & home appliances. Fast process, minimal documents, best EMI plans.",
    applyBtn: "Apply for Finance",
    waBtn: "Chat on WhatsApp",
    navItems: ["Home","About","Services","EMI Calc","How It Works","Documents","Contact"],
    aboutTag: "About Me",
    aboutTitle: "Your Bajaj Finance Expert in Nainpur",
    aboutP1: "Hi! I'm Ayush Jhariya, an authorised Bajaj Finance consultant based in Nainpur, Madhya Pradesh. I help families and individuals get electronics and appliances on easy EMI through Bajaj Finance — one of India's most trusted finance companies.",
    aboutP2: "With 3+ years of experience, I've helped hundreds of customers in Nainpur and nearby villages get fast finance approvals. My goal is simple: make electronics affordable for everyone.",
    statsExp: "Years Experience",
    statsCust: "Happy Customers",
    statsCities: "Areas Served",
    servicesTag: "Our Services",
    servicesTitle: "Finance Any Electronics with Bajaj Finance",
    servicesSub: "Get easy EMI on all types of electronics and home appliances.",
    services: [
      { icon: "📱", title: "Mobile Phone Finance", desc: "iPhone, Samsung, Vivo, Oppo, Realme — any smartphone on easy Bajaj EMI." },
      { icon: "📺", title: "LED TV Finance", desc: "Sony, LG, Samsung, Mi TV — any size LED TV financed easily." },
      { icon: "💻", title: "Laptop Finance", desc: "HP, Dell, Lenovo, Asus laptops for work, study or gaming on EMI." },
      { icon: "🧊", title: "Refrigerator Finance", desc: "LG, Whirlpool, Samsung fridge — single or double door on easy EMI." },
      { icon: "🫧", title: "Washing Machine Finance", desc: "Automatic, semi-auto washing machines on flexible EMI plans." },
      { icon: "❄️", title: "AC Finance", desc: "Any brand AC — 1 ton, 1.5 ton, 2 ton — on easy Bajaj Finance." },
    ],
    stepsTag: "Simple Process",
    stepsTitle: "How EMI Finance Works",
    stepsSub: "Get your electronics financed in 4 easy steps.",
    steps: [
      { icon: "🛒", title: "Choose Your Product", desc: "Tell us what electronics you want to buy and its price." },
      { icon: "📄", title: "Submit Documents", desc: "Just Aadhaar, PAN, bank statement — that's it." },
      { icon: "✅", title: "Quick Approval", desc: "Bajaj Finance approves your application fast — often same day." },
      { icon: "🎉", title: "Take Product Home", desc: "Walk out with your product and pay in easy monthly EMIs." },
    ],
    calcTag: "EMI Calculator",
    calcTitle: "Calculate Your Monthly EMI",
    calcSub: "See how affordable your dream electronics can be on Bajaj EMI.",
    calcPrice: "Product Price (₹)",
    calcDown: "Down Payment (₹)",
    calcMonths: "Tenure (Months)",
    calcMonthly: "Monthly EMI",
    calcPerMonth: "per month",
    calcDisclaimer: "*Indicative. Actual EMI per Bajaj Finance terms.",
    calcApply: "Apply for This EMI",
    docsTag: "Documents Required",
    docsTitle: "Minimal Documents Only",
    docsSub: "Just 5 basic documents for fast Bajaj Finance approval.",
    docs: [
      { icon: "🪪", title: "Aadhaar Card", desc: "Original + photocopy" },
      { icon: "💳", title: "PAN Card", desc: "Mandatory for finance" },
      { icon: "🏦", title: "Bank Statement", desc: "Last 3 months" },
      { icon: "📷", title: "Passport Photo", desc: "2 recent photos" },
      { icon: "📱", title: "Mobile Number", desc: "Linked to Aadhaar" },
    ],
    testiTag: "Customer Reviews",
    testiTitle: "What Our Customers Say",
    testiSub: "Real stories from real customers in Nainpur.",
    testimonials: [
      { name: "Ramesh Yadav", city: "Nainpur", product: "Samsung TV", text: "Ayush bhai ne bahut jaldi mere liye Samsung TV ka loan approve karwaya. Bahut kam documents lage. Highly recommended!", rating: 5 },
      { name: "Priya Tiwari", city: "Nainpur", product: "iPhone 14", text: "Same day EMI mil gayi iPhone ke liye! Ayush bhai bahut helpful hain. Bajaj Finance ka process ekdam easy tha.", rating: 5 },
      { name: "Suresh Patel", city: "Mandla", product: "LG Washing Machine", text: "Washing machine ke liye EMI leni thi, Ayush bhai ne ghar aake sab documents le liye aur usi din approve ho gaya!", rating: 5 },
      { name: "Kavita Sharma", city: "Nainpur", product: "Split AC", text: "Garmi mein AC leni thi par budget nahi tha. Ayush bhai ne bahut sasti EMI pe AC dilwaya. Shukriya!", rating: 5 },
    ],
    applyTag: "Get Started",
    applyTitle: "Apply for Bajaj Finance Today",
    applySub: "Fill this form and we'll contact you on WhatsApp within 30 minutes.",
    formName: "Full Name",
    formPhone: "Phone Number",
    formCity: "City / Village",
    formProduct: "Product Name",
    formPrice: "Product Price (₹)",
    formSubmit: "Submit via WhatsApp",
    formNote: "Your details go directly to WhatsApp. 100% secure.",
    formSuccess: "Application Sent!",
    formSuccessMsg: "We'll contact you on WhatsApp within 30 minutes.",
    formAgain: "Apply Again",
    contactTag: "Contact",
    contactTitle: "Get In Touch",
    contactSub: "Have questions? We're always happy to help.",
    contactWa: "Chat on WhatsApp Now",
    footerRole: "Bajaj Finance Consultant",
    footerCity: "Nainpur, Madhya Pradesh",
    toggleLang: "हिंदी में देखें",
    toggleDark: "Dark Mode",
    toggleLight: "Light Mode",
    loanAmt: "Loan Amount",
    totalInt: "Total Interest",
    totalAmt: "Total Amount",
    required: "✓ Required",
    applyNow: "Apply Now →",
    waNav: "WhatsApp",
    hireMe: "Apply Now",
    ctaBanner: "Ready to apply? It takes just 5 minutes.",
    ctaBannerSub: "Join 500+ happy customers who trusted Ayush Jhariya.",
    proTip: "Pro Tip: Send documents on WhatsApp for same-day approval.",
  },
  hi: {
    name: "आयुष झारिया",
    role: "बजाज फाइनेंस कंसल्टेंट",
    tagline: "नैनपुर में आपका भरोसेमंद EMI पार्टनर",
    heroTitle: "आसान EMI पर इलेक्ट्रॉनिक्स खरीदें",
    heroSub: "मोबाइल, TV, लैपटॉप और घरेलू उपकरणों के लिए तुरंत बजाज फाइनेंस अप्रूवल पाएं। तेज प्रक्रिया, कम दस्तावेज़, बेहतरीन EMI प्लान।",
    applyBtn: "फाइनेंस के लिए अप्लाई करें",
    waBtn: "WhatsApp पर बात करें",
    navItems: ["होम","मेरे बारे में","सेवाएं","EMI कैलकुलेटर","कैसे काम करता है","दस्तावेज़","संपर्क"],
    aboutTag: "मेरे बारे में",
    aboutTitle: "नैनपुर के बजाज फाइनेंस एक्सपर्ट",
    aboutP1: "नमस्ते! मैं आयुष झड़िया हूँ, नैनपुर, मध्यप्रदेश में अधिकृत बजाज फाइनेंस कंसल्टेंट। मैं परिवारों और लोगों को बजाज फाइनेंस के ज़रिए इलेक्ट्रॉनिक्स और उपकरण आसान EMI पर दिलाने में मदद करता हूँ।",
    aboutP2: "3+ साल के अनुभव के साथ, मैंने नैनपुर और आसपास के सैकड़ों ग्राहकों को तेज़ फाइनेंस अप्रूवल दिलाया है। मेरा लक्ष्य सरल है — हर किसी के लिए इलेक्ट्रॉनिक्स किफायती बनाना।",
    statsExp: "साल का अनुभव",
    statsCust: "खुश ग्राहक",
    statsCities: "क्षेत्र सेवारत",
    servicesTag: "हमारी सेवाएं",
    servicesTitle: "बजाज फाइनेंस से किसी भी इलेक्ट्रॉनिक्स पर EMI",
    servicesSub: "सभी इलेक्ट्रॉनिक्स और घरेलू उपकरणों पर आसान EMI पाएं।",
    services: [
      { icon: "📱", title: "मोबाइल फोन फाइनेंस", desc: "iPhone, Samsung, Vivo, Oppo, Realme — कोई भी स्मार्टफोन आसान EMI पर।" },
      { icon: "📺", title: "LED TV फाइनेंस", desc: "Sony, LG, Samsung, Mi TV — किसी भी साइज़ का LED TV आसानी से।" },
      { icon: "💻", title: "लैपटॉप फाइनेंस", desc: "HP, Dell, Lenovo, Asus — काम, पढ़ाई या गेमिंग के लिए EMI पर।" },
      { icon: "🧊", title: "रेफ्रिजरेटर फाइनेंस", desc: "LG, Whirlpool, Samsung — सिंगल या डबल डोर फ्रिज EMI पर।" },
      { icon: "🫧", title: "वाशिंग मशीन फाइनेंस", desc: "ऑटोमेटिक, सेमी-ऑटो वाशिंग मशीन लचीली EMI योजनाओं पर।" },
      { icon: "❄️", title: "AC फाइनेंस", desc: "कोई भी ब्रांड AC — 1 टन, 1.5 टन, 2 टन — आसान बजाज EMI पर।" },
    ],
    stepsTag: "सरल प्रक्रिया",
    stepsTitle: "EMI फाइनेंस कैसे काम करता है",
    stepsSub: "4 आसान चरणों में अपने इलेक्ट्रॉनिक्स का फाइनेंस करें।",
    steps: [
      { icon: "🛒", title: "प्रोडक्ट चुनें", desc: "बताएं कि आप कौन सी इलेक्ट्रॉनिक्स खरीदना चाहते हैं।" },
      { icon: "📄", title: "दस्तावेज़ जमा करें", desc: "सिर्फ आधार, पैन, बैंक स्टेटमेंट — बस इतना काफी।" },
      { icon: "✅", title: "त्वरित अप्रूवल", desc: "बजाज फाइनेंस जल्दी अप्रूव करता है — अक्सर उसी दिन।" },
      { icon: "🎉", title: "प्रोडक्ट घर ले जाएं", desc: "आसान मासिक EMI में भुगतान करते हुए प्रोडक्ट घर ले जाएं।" },
    ],
    calcTag: "EMI कैलकुलेटर",
    calcTitle: "अपनी मासिक EMI कैलकुलेट करें",
    calcSub: "देखें बजाज EMI पर आपका सपना कितना किफायती हो सकता है।",
    calcPrice: "प्रोडक्ट की कीमत (₹)",
    calcDown: "डाउन पेमेंट (₹)",
    calcMonths: "अवधि (महीने)",
    calcMonthly: "मासिक EMI",
    calcPerMonth: "प्रति माह",
    calcDisclaimer: "*अनुमानित। वास्तविक EMI बजाज फाइनेंस की शर्तों के अनुसार।",
    calcApply: "इस EMI पर अप्लाई करें",
    docsTag: "आवश्यक दस्तावेज़",
    docsTitle: "सिर्फ ज़रूरी दस्तावेज़",
    docsSub: "तेज़ बजाज फाइनेंस अप्रूवल के लिए सिर्फ 5 दस्तावेज़।",
    docs: [
      { icon: "🪪", title: "आधार कार्ड", desc: "ओरिजिनल + फोटोकॉपी" },
      { icon: "💳", title: "पैन कार्ड", desc: "फाइनेंस के लिए अनिवार्य" },
      { icon: "🏦", title: "बैंक स्टेटमेंट", desc: "पिछले 3 महीने" },
      { icon: "📷", title: "पासपोर्ट फोटो", desc: "2 हाल की फोटो" },
      { icon: "📱", title: "मोबाइल नंबर", desc: "आधार से लिंक्ड" },
    ],
    testiTag: "ग्राहक समीक्षाएं",
    testiTitle: "हमारे ग्राहक क्या कहते हैं",
    testiSub: "नैनपुर के असली ग्राहकों की असली कहानियां।",
    testimonials: [
      { name: "रमेश यादव", city: "नैनपुर", product: "Samsung TV", text: "आयुष भाई ने बहुत जल्दी मेरे लिए Samsung TV का लोन अप्रूव करवाया। बहुत कम documents लगे। बहुत अच्छी सेवा!", rating: 5 },
      { name: "प्रिया तिवारी", city: "नैनपुर", product: "iPhone 14", text: "iPhone के लिए उसी दिन EMI मिल गई! आयुष भाई बहुत helpful हैं। बजाज फाइनेंस का process एकदम आसान था।", rating: 5 },
      { name: "सुरेश पटेल", city: "मंडला", product: "LG Washing Machine", text: "वाशिंग मशीन के लिए EMI लेनी थी, आयुष भाई ने घर आकर सब documents ले लिए और उसी दिन अप्रूव हो गया!", rating: 5 },
      { name: "कविता शर्मा", city: "नैनपुर", product: "Split AC", text: "गर्मी में AC लेनी थी पर budget नहीं था। आयुष भाई ने बहुत सस्ती EMI पे AC दिलवाया। शुक्रिया!", rating: 5 },
    ],
    applyTag: "शुरू करें",
    applyTitle: "आज ही बजाज फाइनेंस के लिए अप्लाई करें",
    applySub: "यह फॉर्म भरें और हम 30 मिनट में WhatsApp पर संपर्क करेंगे।",
    formName: "पूरा नाम",
    formPhone: "फोन नंबर",
    formCity: "शहर / गांव",
    formProduct: "प्रोडक्ट का नाम",
    formPrice: "प्रोडक्ट की कीमत (₹)",
    formSubmit: "WhatsApp से सबमिट करें",
    formNote: "आपका विवरण सीधे WhatsApp पर जाएगा। 100% सुरक्षित।",
    formSuccess: "आवेदन भेज दिया गया!",
    formSuccessMsg: "हम 30 मिनट में WhatsApp पर संपर्क करेंगे।",
    formAgain: "फिर से अप्लाई करें",
    contactTag: "संपर्क",
    contactTitle: "संपर्क करें",
    contactSub: "कोई सवाल है? हम हमेशा मदद के लिए तैयार हैं।",
    contactWa: "अभी WhatsApp पर बात करें",
    footerRole: "बजाज फाइनेंस कंसल्टेंट",
    footerCity: "नैनपुर, मध्यप्रदेश",
    toggleLang: "View in English",
    toggleDark: "डार्क मोड",
    toggleLight: "लाइट मोड",
    loanAmt: "लोन राशि",
    totalInt: "कुल ब्याज",
    totalAmt: "कुल राशि",
    required: "✓ आवश्यक",
    applyNow: "अप्लाई करें →",
    waNav: "WhatsApp",
    hireMe: "अप्लाई करें",
    ctaBanner: "अप्लाई करने के लिए तैयार हैं? सिर्फ 5 मिनट लगेंगे।",
    ctaBannerSub: "500+ खुश ग्राहकों के साथ जुड़ें जिन्होंने आयुष झारिया पर भरोसा किया।",
    proTip: "टिप: WhatsApp पर documents भेजें — उसी दिन अप्रूवल पाएं।",
  }
};

const WA_NUM = "+916265678158";
const PHONE = "+916265678158";
const WA_LINK = `https://wa.me/${WA_NUM}`;
const WA_APPLY = `https://wa.me/${WA_NUM}?text=Namaste%20Ayush%20Sir!%20Mujhe%20Bajaj%20Finance%20EMI%20ke%20baare%20mein%20jaankari%20chahiye.`;

// ─── CSS ──────────────────────────────────────────────────────────────────────
const makeCSS = (dark) => `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Yatra+One&family=Poppins:wght@400;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --blue:    #2563eb;
    --blue2:   #1d4ed8;
    --sky:     #60a5fa;
    --green:   #25D366;
    --bajaj:   #e84040;

    ${dark ? `
    --bg:      #0f172a;
    --bg2:     #1e293b;
    --card:    #1e293b;
    --border:  #334155;
    --text:    #f1f5f9;
    --muted:   #94a3b8;
    --heading: #f8fafc;
    --invert:  #1e293b;
    ` : `
    --bg:      #f8fafc;
    --bg2:     #ffffff;
    --card:    #ffffff;
    --border:  #e2e8f0;
    --text:    #1e293b;
    --muted:   #64748b;
    --heading: #0f172a;
    --invert:  #f8fafc;
    `}
  }

  html { scroll-behavior: smooth; }
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
    transition: background 0.3s, color 0.3s;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg2); }
  ::-webkit-scrollbar-thumb { background: var(--blue); border-radius: 10px; }

  /* Animations */
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes waPulse{ 0%{box-shadow:0 0 0 0 rgba(37,211,102,.5)} 70%{box-shadow:0 0 0 14px rgba(37,211,102,0)} 100%{box-shadow:0 0 0 0 rgba(37,211,102,0)} }
  @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  @keyframes shimmer{ 0%{background-position:-200% 0} 100%{background-position:200% 0} }

  .afu { animation: fadeUp 0.6s ease both; }

  .reveal { opacity:0; transform:translateY(24px); transition:opacity .65s ease,transform .65s ease; }
  .reveal.in { opacity:1; transform:translateY(0); }

  /* Navbar */
  .navbar {
    position:fixed; top:0; left:0; right:0; z-index:1000;
    height:64px; padding:0 5%;
    display:flex; align-items:center; justify-content:space-between;
    background:${dark ? "rgba(15,23,42,0.95)" : "rgba(255,255,255,0.97)"};
    border-bottom:1px solid var(--border);
    backdrop-filter:blur(12px);
    transition:box-shadow .3s, background .3s;
  }
  .navbar.scrolled { box-shadow:0 2px 20px rgba(0,0,0,.1); }

  .nav-logo-name {
    font-family:'Yatra One', cursive;
    font-size:1.2rem; color:var(--heading); line-height:1.1;
  }
  .nav-logo-sub {
    font-size:0.62rem; font-weight:600;
    color:var(--bajaj); letter-spacing:.06em; text-transform:uppercase; margin-top:1px;
  }
  .nav-links { display:flex; gap:22px; align-items:center; }
  .nav-link {
    font-size:.78rem; font-weight:500; color:var(--muted);
    background:none; border:none; cursor:pointer; padding:3px 0;
    position:relative; transition:color .2s;
  }
  .nav-link::after {
    content:''; position:absolute; bottom:0; left:0;
    width:0; height:2px; background:var(--blue);
    transition:width .25s; border-radius:2px;
  }
  .nav-link:hover { color:var(--blue); }
  .nav-link:hover::after { width:100%; }

  .btn-wa-sm {
    display:flex; align-items:center; gap:6px;
    background:var(--green); color:white;
    border:none; cursor:pointer; padding:7px 14px;
    border-radius:8px; font-size:.75rem; font-weight:600;
    transition:background .2s, transform .2s; text-decoration:none;
  }
  .btn-wa-sm:hover { background:#1eb858; transform:scale(1.03); }

  .toggle-btn {
    background:var(--card); border:1px solid var(--border);
    color:var(--muted); cursor:pointer;
    padding:6px 12px; border-radius:8px;
    font-size:.7rem; font-weight:600;
    transition:all .2s; white-space:nowrap;
  }
  .toggle-btn:hover { border-color:var(--blue); color:var(--blue); }

  /* Buttons */
  .btn-primary {
    display:inline-flex; align-items:center; gap:7px;
    background:var(--blue); color:white; border:none; cursor:pointer;
    padding:13px 26px; border-radius:10px;
    font-family:'Plus Jakarta Sans',sans-serif; font-size:.88rem; font-weight:600;
    transition:all .2s; text-decoration:none;
    box-shadow:0 4px 14px rgba(37,99,235,.3);
  }
  .btn-primary:hover { background:var(--blue2); transform:translateY(-2px); box-shadow:0 6px 20px rgba(37,99,235,.4); }

  .btn-wa {
    display:inline-flex; align-items:center; gap:7px;
    background:var(--green); color:white; border:none; cursor:pointer;
    padding:13px 26px; border-radius:10px;
    font-family:'Plus Jakarta Sans',sans-serif; font-size:.88rem; font-weight:600;
    transition:all .2s; text-decoration:none;
  }
  .btn-wa:hover { background:#1eb858; transform:translateY(-2px); }

  .btn-outline {
    display:inline-flex; align-items:center; gap:7px;
    background:transparent; color:var(--blue);
    border:2px solid var(--blue); cursor:pointer;
    padding:10px 22px; border-radius:10px;
    font-family:'Plus Jakarta Sans',sans-serif; font-size:.82rem; font-weight:600;
    transition:all .2s; text-decoration:none;
  }
  .btn-outline:hover { background:var(--blue); color:white; transform:translateY(-2px); }

  /* Hero */
  .hero {
    min-height:100vh;
    background:linear-gradient(135deg,#0f172a 0%,#1e3a6e 55%,#0f172a 100%);
    display:flex; align-items:center;
    padding:80px 5% 60px;
    position:relative; overflow:hidden;
  }
  .hero::before {
    content:''; position:absolute; inset:0;
    background:radial-gradient(ellipse at 60% 40%,rgba(37,99,235,.2) 0%,transparent 65%);
    pointer-events:none;
  }
  .hero-dots {
    position:absolute; inset:0; pointer-events:none;
    background-image:radial-gradient(rgba(96,165,250,.1) 1px, transparent 1px);
    background-size:28px 28px;
  }
  .hero-inner {
    position:relative; z-index:1;
    display:grid; grid-template-columns:1fr 1.2fr;
    gap:60px; align-items:center; max-width:1100px; width:100%;
  }

  /* Photo side */
  .photo-wrap {
    display:flex; flex-direction:column; align-items:center; gap:16px;
  }
  .photo-frame {
    width:260px; height:260px; border-radius:50%;
    background:linear-gradient(135deg,#2563eb,#60a5fa);
    padding:4px;
    box-shadow:0 0 0 8px rgba(37,99,235,.15), 0 20px 60px rgba(0,0,0,.4);
    animation:float 4s ease-in-out infinite;
    flex-shrink:0;
  }
  .photo-inner {
    width:100%; height:100%; border-radius:50%;
    background:linear-gradient(145deg,#1e3a6e,#0f172a);
    display:flex; align-items:center; justify-content:center;
    font-size:5rem; overflow:hidden;
  }
  .photo-inner img { width:100%; height:100%; object-fit:cover; border-radius:50%; }
  .bajaj-badge {
    display:inline-flex; align-items:center; gap:8px;
    background:var(--bajaj); color:white;
    padding:8px 18px; border-radius:20px;
    font-size:.78rem; font-weight:700; letter-spacing:.04em;
    box-shadow:0 4px 16px rgba(232,64,64,.4);
  }

  /* Info side */
  .hero-tag {
    display:inline-flex; align-items:center; gap:8px;
    background:rgba(37,99,235,.2); border:1px solid rgba(96,165,250,.3);
    color:var(--sky); padding:5px 14px; border-radius:20px;
    font-size:.7rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase;
    margin-bottom:18px;
  }
  .hero-name {
    font-family:'Yatra One', cursive;
    font-size:clamp(2rem,5vw,3.4rem); color:white; line-height:1.15; margin-bottom:6px;
  }
  .hero-role { font-size:1.05rem; color:var(--sky); font-weight:600; margin-bottom:16px; }
  .hero-desc { font-size:.92rem; color:rgba(255,255,255,.65); line-height:1.8; margin-bottom:30px; max-width:480px; }
  .trust-badges { display:flex; gap:18px; flex-wrap:wrap; margin-top:20px; }
  .trust-item { display:flex; align-items:center; gap:6px; color:rgba(255,255,255,.6); font-size:.75rem; font-weight:500; }

  /* Ticker */
  .ticker-wrap { background:var(--bajaj); overflow:hidden; padding:9px 0; white-space:nowrap; }
  .ticker-inner { display:inline-block; animation:ticker 30s linear infinite; }
  .ticker-item { display:inline-flex; align-items:center; gap:8px; color:white; font-size:.78rem; font-weight:600; padding:0 28px; }
  .ticker-dot { width:4px; height:4px; border-radius:50%; background:rgba(255,255,255,.5); }

  /* Sections */
  .section { padding:88px 5%; background:var(--bg); transition:background .3s; }
  .section-alt { background:var(--bg2); }

  .sec-tag { font-size:.7rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--blue); margin-bottom:10px; }
  .sec-title { font-family:'Yatra One',cursive; font-size:clamp(1.7rem,3.5vw,2.4rem); color:var(--heading); line-height:1.25; margin-bottom:12px; }
  .sec-sub { font-size:.95rem; color:var(--muted); line-height:1.75; max-width:540px; }

  /* About */
  .about-inner { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:start; max-width:1100px; margin:0 auto; }
  .stat-row { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-top:28px; }
  .stat-card {
    background:var(--card); border:1px solid var(--border); border-radius:14px;
    padding:20px 16px; text-align:center;
    box-shadow:0 2px 8px rgba(0,0,0,.06);
    transition:transform .25s, box-shadow .25s;
  }
  .stat-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(37,99,235,.12); }
  .stat-num { font-family:'Yatra One',cursive; font-size:2rem; color:var(--blue); line-height:1; }
  .stat-lbl { font-size:.75rem; color:var(--muted); margin-top:4px; }

  /* Services */
  .services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .svc-card {
    background:var(--card); border:1px solid var(--border); border-radius:14px;
    padding:26px 22px; transition:all .3s;
  }
  .svc-card:hover { border-color:var(--blue); box-shadow:0 8px 28px rgba(37,99,235,.12); transform:translateY(-5px); }
  .svc-icon {
    width:50px; height:50px; border-radius:12px;
    background:${dark ? "rgba(37,99,235,.2)" : "linear-gradient(135deg,#eff6ff,#dbeafe)"};
    display:flex; align-items:center; justify-content:center;
    font-size:1.4rem; margin-bottom:14px; transition:transform .3s;
  }
  .svc-card:hover .svc-icon { transform:scale(1.1); }
  .svc-title { font-size:.95rem; font-weight:700; color:var(--heading); margin-bottom:8px; }
  .svc-desc { font-size:.8rem; color:var(--muted); line-height:1.65; }

  /* Steps */
  .steps-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
  .step-card {
    background:var(--card); border:1px solid var(--border); border-radius:14px;
    padding:26px 20px; position:relative; margin-top:20px;
    transition:box-shadow .25s, transform .25s;
  }
  .step-card:hover { box-shadow:0 8px 28px rgba(37,99,235,.1); transform:translateY(-4px); }
  .step-num {
    position:absolute; top:-18px; left:22px;
    width:36px; height:36px; background:var(--blue); color:white;
    border-radius:50%; display:flex; align-items:center; justify-content:center;
    font-weight:800; font-size:.82rem; box-shadow:0 4px 12px rgba(37,99,235,.35);
  }

  /* Calculator */
  .calc-grid {
    display:grid; grid-template-columns:1fr 1fr;
    background:var(--card); border-radius:20px;
    box-shadow:0 8px 40px rgba(0,0,0,.1); overflow:hidden;
    max-width:800px; margin:0 auto;
    border:1px solid var(--border);
  }
  .calc-form { padding:38px; }
  .calc-result {
    background:linear-gradient(160deg,#0f172a,#1e3a6e);
    padding:38px; display:flex; flex-direction:column;
    align-items:center; justify-content:center; text-align:center;
  }
  .ci { width:100%; padding:11px 14px; background:var(--bg); border:1.5px solid var(--border); border-radius:8px; font-family:'Plus Jakarta Sans',sans-serif; font-size:.88rem; color:var(--text); outline:none; transition:border-color .2s; margin-bottom:16px; }
  .ci:focus { border-color:var(--blue); box-shadow:0 0 0 3px rgba(37,99,235,.1); }
  .cl { font-size:.78rem; font-weight:600; color:var(--text); margin-bottom:5px; display:block; }
  .emi-big { font-family:'Yatra One',cursive; font-size:3rem; color:var(--sky); line-height:1; }

  /* Docs */
  .doc-item {
    display:flex; align-items:center; gap:14px;
    background:var(--card); border:1px solid var(--border);
    border-radius:10px; padding:16px 20px; transition:all .25s;
  }
  .doc-item:hover { border-color:var(--blue); box-shadow:0 4px 16px rgba(37,99,235,.1); transform:translateX(4px); }

  /* Testimonials */
  .testi-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
  .testi-card {
    background:var(--card); border:1px solid var(--border); border-radius:16px;
    padding:26px; transition:all .25s;
  }
  .testi-card:hover { box-shadow:0 8px 28px rgba(37,99,235,.1); transform:translateY(-4px); }

  /* Form */
  .form-box {
    background:var(--card); border-radius:20px;
    padding:42px 46px; max-width:620px; margin:0 auto;
    box-shadow:0 8px 40px rgba(0,0,0,.1);
    border:1px solid var(--border);
  }
  .fi { width:100%; padding:12px 15px; background:var(--bg); border:1.5px solid var(--border); border-radius:10px; font-family:'Plus Jakarta Sans',sans-serif; font-size:.88rem; color:var(--text); outline:none; transition:all .2s; margin-bottom:14px; }
  .fi:focus { border-color:var(--blue); background:var(--card); box-shadow:0 0 0 3px rgba(37,99,235,.08); }
  .fl { font-size:.78rem; font-weight:600; color:var(--text); margin-bottom:5px; display:block; }
  .frow { display:grid; grid-template-columns:1fr 1fr; gap:14px; }

  /* Contact */
  .contact-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-bottom:32px; }
  .cc {
    background:var(--card); border:1px solid var(--border); border-radius:14px;
    padding:22px 24px; display:flex; align-items:center; gap:14px; transition:all .25s;
  }
  .cc:hover { border-color:var(--blue); box-shadow:0 6px 20px rgba(37,99,235,.1); transform:translateY(-3px); }
  .cc-icon { width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.2rem; flex-shrink:0; }

  /* Floating WA */
  .wa-float {
    position:fixed; bottom:28px; right:28px; z-index:999;
    width:58px; height:58px; background:var(--green); border-radius:50%;
    display:flex; align-items:center; justify-content:center; font-size:1.6rem;
    text-decoration:none; box-shadow:0 4px 20px rgba(37,211,102,.5);
    animation:waPulse 2.5s infinite; transition:transform .2s;
  }
  .wa-float:hover { transform:scale(1.1); }

  /* Footer */
  .footer {
    background:#0f172a; color:rgba(255,255,255,.55);
    padding:36px 5%; text-align:center; font-size:.8rem; line-height:1.8;
  }
  .footer a { color:var(--sky); text-decoration:none; }

  @media(max-width:960px){
    .hero-inner { grid-template-columns:1fr; text-align:center; }
    .photo-wrap { margin-bottom:0; }
    .hero-desc { margin:0 auto 30px; }
    .trust-badges { justify-content:center; }
    .about-inner { grid-template-columns:1fr; }
    .services-grid { grid-template-columns:repeat(2,1fr); }
    .steps-grid { grid-template-columns:repeat(2,1fr); }
    .nav-links { display:none; }
  }
  @media(max-width:600px){
    .services-grid,.testi-grid,.contact-cards,.frow { grid-template-columns:1fr; }
    .calc-grid { grid-template-columns:1fr; }
    .form-box { padding:26px 18px; }
    .section { padding:60px 5%; }
    .photo-frame { width:200px; height:200px; }
  }
`;

// ─── Reveal hook ──────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.07 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function NavBar({ t, lang, setLang, dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const ids = ["home","about","services","calculator","steps","documents","contact"];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div onClick={() => go("home")} style={{ cursor: "pointer" }}>
        <div className="nav-logo-name">{t.name}</div>
        <div className="nav-logo-sub">Bajaj Finance Consultant</div>
      </div>
      <div className="nav-links">
        {t.navItems.map((label, i) => (
          <button key={label} className="nav-link" onClick={() => go(ids[i])}>{label}</button>
        ))}
        <button className="toggle-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"} {dark ? t.toggleLight : t.toggleDark}
        </button>
        <button className="toggle-btn" onClick={() => setLang(lang === "en" ? "hi" : "en")}>
          🌐 {t.toggleLang}
        </button>
        <a className="btn-wa-sm" href={WA_LINK} target="_blank" rel="noreferrer">
          💬 {t.waNav}
        </a>
      </div>
      {/* Mobile: just icons */}
      <div style={{ display: "flex", gap: 8 }}>
        <button className="toggle-btn" onClick={() => setDark(!dark)} style={{ padding: "6px 10px" }}>
          {dark ? "☀️" : "🌙"}
        </button>
        <button className="toggle-btn" onClick={() => setLang(lang === "en" ? "hi" : "en")} style={{ padding: "6px 10px" }}>
          🌐
        </button>
        <a className="btn-wa-sm" href={WA_LINK} target="_blank" rel="noreferrer">💬</a>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ t }) {
  return (
    <section id="home" className="hero">
      <div className="hero-dots" />
      <div className="hero-inner" style={{ margin: "0 auto" }}>

        {/* LEFT — Photo */}
        <div className="photo-wrap afu" style={{ animationDelay: "0s" }}>
          <div className="photo-frame">
            <div className="photo-inner">
              {/* Replace img src with real photo URL */}
              <span style={{ fontSize: "5rem" }}>👨‍💼</span>
            </div>
          </div>
          <div className="bajaj-badge">
            <span>🏢</span> Bajaj Finance Authorized
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {[["⭐","4.9 Rating"],["✅","500+ Customers"]].map(([icon, text]) => (
              <div key={text} style={{
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)", padding: "6px 14px", borderRadius: 20,
                fontSize: ".73rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 6,
              }}>
                {icon} {text}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Info */}
        <div className="afu" style={{ animationDelay: "0.1s" }}>
          <div className="hero-tag">
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            📍 Nainpur, Madhya Pradesh
          </div>
          <h1 className="hero-name">{t.name}</h1>
          <div className="hero-role">{t.role}</div>
          <p className="hero-desc">{t.heroSub}</p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}>
              📋 {t.applyBtn}
            </button>
            <a className="btn-wa" href={WA_APPLY} target="_blank" rel="noreferrer">
              💬 {t.waBtn}
            </a>
          </div>

          <div className="trust-badges">
            {[["⚡","Same Day Approval"],["📄","Minimal Documents"],["🔒","100% Secure"],["🏆","3+ Years Experience"]].map(([icon, text]) => (
              <div key={text} className="trust-item"><span>{icon}</span>{text}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TICKER ───────────────────────────────────────────────────────────────────
function Ticker({ t }) {
  const items = t.services.map(s => s.title);
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />{item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About({ t }) {
  return (
    <section id="about" className="section section-alt">
      <div className="about-inner">
        <div className="reveal">
          <div className="sec-tag">{t.aboutTag}</div>
          <h2 className="sec-title">{t.aboutTitle}</h2>
          <p style={{ fontSize: ".95rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>{t.aboutP1}</p>
          <p style={{ fontSize: ".95rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>{t.aboutP2}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div style={{ background: "rgba(37,99,235,.08)", border: "1px solid rgba(37,99,235,.2)", color: "var(--blue)", padding: "8px 16px", borderRadius: 20, fontSize: ".78rem", fontWeight: 600 }}>
              🏢 Bajaj Finance Authorized Agent
            </div>
            <div style={{ background: "rgba(37,99,235,.08)", border: "1px solid rgba(37,99,235,.2)", color: "var(--blue)", padding: "8px 16px", borderRadius: 20, fontSize: ".78rem", fontWeight: 600 }}>
              📍 Nainpur Since 2021
            </div>
          </div>
          <div className="stat-row">
            {[["3+", t.statsExp],["500+", t.statsCust],["5+", t.statsCities]].map(([n, l]) => (
              <div key={l} className="stat-card">
                <div className="stat-num">{n}</div>
                <div className="stat-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual panel */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <div style={{
            background: "linear-gradient(135deg,#1e3a6e,#0f172a)",
            borderRadius: 20, padding: 36, color: "white",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,.1)" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>👨‍💼</div>
              <div>
                <div style={{ fontFamily: "'Yatra One',cursive", fontSize: "1.1rem", color: "white" }}>{t.name}</div>
                <div style={{ fontSize: ".75rem", color: "rgba(255,255,255,.55)", marginTop: 2 }}>{t.role}</div>
              </div>
            </div>
            {[
              ["📍","Location", "Nainpur, Mandla District, M.P."],
              ["🏢","Company", "Bajaj Finance Ltd."],
              ["⏱️","Working Since", "2021 — 3+ Years"],
              ["🌍","Service Area", "Nainpur, Mandla, Seoni, Balaghat"],
              ["📞","Phone", PHONE],
              ["⭐","Rating", "4.9 / 5 — 500+ Reviews"],
            ].map(([icon, label, val]) => (
              <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                <span style={{ fontSize: "1.1rem", marginTop: 1 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: ".68rem", color: "rgba(255,255,255,.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</div>
                  <div style={{ fontSize: ".88rem", color: "rgba(255,255,255,.85)", fontWeight: 500 }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function Services({ t }) {
  return (
    <section id="services" className="section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="sec-tag">{t.servicesTag}</div>
          <h2 className="sec-title">{t.servicesTitle}</h2>
          <p className="sec-sub" style={{ margin: "0 auto" }}>{t.servicesSub}</p>
        </div>
        <div className="services-grid reveal" style={{ transitionDelay: ".1s" }}>
          {t.services.map((s) => (
            <div key={s.title} className="svc-card">
              <div className="svc-icon">{s.icon}</div>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.desc}</div>
              <button className="btn-outline" style={{ marginTop: 16, fontSize: ".76rem", padding: "8px 16px" }}
                onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}>
                {t.applyNow}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STEPS ────────────────────────────────────────────────────────────────────
function Steps({ t }) {
  return (
    <section id="steps" className="section section-alt">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="sec-tag">{t.stepsTag}</div>
          <h2 className="sec-title">{t.stepsTitle}</h2>
          <p className="sec-sub" style={{ margin: "0 auto" }}>{t.stepsSub}</p>
        </div>
        <div className="steps-grid reveal" style={{ transitionDelay: ".1s" }}>
          {t.steps.map((s, i) => (
            <div key={s.title} className="step-card">
              <div className="step-num">{i + 1}</div>
              <div style={{ fontSize: "2rem", marginBottom: 12, marginTop: 8 }}>{s.icon}</div>
              <div style={{ fontWeight: 700, fontSize: ".95rem", color: "var(--heading)", marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: ".8rem", color: "var(--muted)", lineHeight: 1.65 }}>{s.desc}</div>
            </div>
          ))}
        </div>
        {/* CTA Banner */}
        <div className="reveal" style={{
          marginTop: 48, background: "linear-gradient(135deg,#0f172a,#1e3a6e)",
          borderRadius: 18, padding: "32px 36px",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 18,
          transitionDelay: ".2s",
        }}>
          <div>
            <div style={{ fontFamily: "'Yatra One',cursive", fontSize: "1.3rem", color: "white", marginBottom: 4 }}>{t.ctaBanner}</div>
            <div style={{ color: "rgba(255,255,255,.5)", fontSize: ".82rem" }}>{t.ctaBannerSub}</div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}>📋 {t.applyBtn}</button>
            <a className="btn-wa" href={WA_APPLY} target="_blank" rel="noreferrer">💬 {t.waBtn}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── EMI CALCULATOR ───────────────────────────────────────────────────────────
function Calculator({ t }) {
  const [price, setPrice] = useState(20000);
  const [down, setDown] = useState(3000);
  const [months, setMonths] = useState(12);
  const loan = Math.max(0, price - down);
  const r = 1.5 / 100;
  const emi = loan > 0 && months > 0
    ? Math.round((loan * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1))
    : 0;
  const total = emi * months;
  const interest = total - loan;

  return (
    <section id="calculator" className="section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 44 }}>
          <div className="sec-tag">{t.calcTag}</div>
          <h2 className="sec-title">{t.calcTitle}</h2>
          <p className="sec-sub" style={{ margin: "0 auto" }}>{t.calcSub}</p>
        </div>
        <div className="calc-grid reveal" style={{ transitionDelay: ".1s" }}>
          <div className="calc-form">
            <label className="cl">{t.calcPrice}</label>
            <input className="ci" type="number" value={price} min={0} onChange={e => setPrice(+e.target.value)} />
            <label className="cl">{t.calcDown}</label>
            <input className="ci" type="number" value={down} min={0} max={price} onChange={e => setDown(+e.target.value)} />
            <label className="cl">{t.calcMonths}</label>
            <select className="ci" value={months} onChange={e => setMonths(+e.target.value)} style={{ cursor: "pointer" }}>
              {[3,6,9,12,18,24].map(m => <option key={m} value={m}>{m} Months</option>)}
            </select>
            <div style={{ background: "var(--bg)", borderRadius: 10, padding: 16 }}>
              {[[t.loanAmt, `₹${loan.toLocaleString()}`],[t.totalInt, `₹${interest.toLocaleString()}`],[t.totalAmt, `₹${total.toLocaleString()}`]].map(([l, v]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: ".8rem" }}>
                  <span style={{ color: "var(--muted)" }}>{l}</span>
                  <span style={{ fontWeight: 600, color: "var(--heading)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="calc-result">
            <div style={{ color: "rgba(255,255,255,.5)", fontSize: ".72rem", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 10 }}>{t.calcMonthly}</div>
            <div className="emi-big">₹{emi.toLocaleString()}</div>
            <div style={{ color: "rgba(255,255,255,.45)", fontSize: ".75rem", marginTop: 6 }}>{t.calcPerMonth} · {months} months</div>
            <div style={{ width: "100%", background: "rgba(255,255,255,.07)", borderRadius: 12, padding: 18, margin: "24px 0" }}>
              {[["Principal", loan, "#60a5fa"],["Interest", interest, "#34d399"]].map(([label, val, color]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: color }} />
                    <span style={{ color: "rgba(255,255,255,.55)", fontSize: ".75rem" }}>{label}</span>
                  </div>
                  <span style={{ color: "white", fontSize: ".8rem", fontWeight: 600 }}>₹{val.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <p style={{ color: "rgba(255,255,255,.3)", fontSize: ".67rem", marginBottom: 18, lineHeight: 1.6 }}>{t.calcDisclaimer}</p>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}
              onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}>
              {t.calcApply}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DOCUMENTS ────────────────────────────────────────────────────────────────
function Documents({ t }) {
  return (
    <section id="documents" className="section section-alt">
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 44 }}>
          <div className="sec-tag">{t.docsTag}</div>
          <h2 className="sec-title">{t.docsTitle}</h2>
          <p className="sec-sub" style={{ margin: "0 auto" }}>{t.docsSub}</p>
        </div>
        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 12, transitionDelay: ".1s" }}>
          {t.docs.map((d, i) => (
            <div key={d.title} className="doc-item" style={{ transitionDelay: `${i * .06}s` }}>
              <div style={{ fontSize: "1.5rem" }}>{d.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: ".9rem", color: "var(--heading)", marginBottom: 2 }}>{d.title}</div>
                <div style={{ fontSize: ".77rem", color: "var(--muted)" }}>{d.desc}</div>
              </div>
              <div style={{ marginLeft: "auto", color: "#22c55e", fontWeight: 700, fontSize: ".77rem" }}>{t.required}</div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{
          marginTop: 24,
          background: "rgba(245,158,11,.08)", border: "1px solid rgba(245,158,11,.3)",
          borderRadius: 12, padding: 18, display: "flex", gap: 12, alignItems: "flex-start",
          transitionDelay: ".2s",
        }}>
          <span style={{ fontSize: "1.2rem" }}>💡</span>
          <p style={{ fontSize: ".8rem", color: "var(--muted)", lineHeight: 1.7 }}>{t.proTip}</p>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials({ t }) {
  return (
    <section className="section">
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 44 }}>
          <div className="sec-tag">{t.testiTag}</div>
          <h2 className="sec-title">{t.testiTitle}</h2>
          <p className="sec-sub" style={{ margin: "0 auto" }}>{t.testiSub}</p>
        </div>
        <div className="testi-grid reveal" style={{ transitionDelay: ".1s" }}>
          {t.testimonials.map((te, i) => (
            <div key={te.name} className="testi-card" style={{ transitionDelay: `${i * .08}s` }}>
              <div style={{ color: "#f59e0b", fontSize: ".88rem", marginBottom: 10 }}>{"★".repeat(te.rating)}</div>
              <p style={{ fontSize: ".9rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 18, fontStyle: "italic" }}>"{te.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#2563eb,#60a5fa)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: ".88rem" }}>
                  {te.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: ".86rem", color: "var(--heading)" }}>{te.name}</div>
                  <div style={{ fontSize: ".72rem", color: "var(--muted)" }}>{te.city} · {te.product}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── APPLY FORM ───────────────────────────────────────────────────────────────
function ApplyForm({ t }) {
  const [form, setForm] = useState({ name: "", phone: "", city: "", product: "", price: "" });
  const [done, setDone] = useState(false);
  const upd = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = () => {
    if (!form.name || !form.phone || !form.product) { alert("Please fill Name, Phone and Product"); return; }
    const msg = `Namaste Ayush bhai!%0A%0AMujhe Bajaj Finance EMI chahiye.%0A%0ANaam: ${form.name}%0APhone: ${form.phone}%0ACity: ${form.city}%0AProduct: ${form.product}%0APrice: ₹${form.price}%0A%0APlease contact me.`;
    window.open(`https://wa.me/${WA_NUM}?text=${msg}`, "_blank");
    setDone(true);
  };
  return (
    <section id="apply" style={{
      padding: "88px 5%",
      background: "linear-gradient(135deg,#0f172a 0%,#1e3a6e 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(96,165,250,.06) 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 44 }}>
          <div className="sec-tag" style={{ color: "var(--sky)" }}>{t.applyTag}</div>
          <h2 className="sec-title" style={{ color: "white" }}>{t.applyTitle}</h2>
          <p className="sec-sub" style={{ color: "rgba(255,255,255,.5)", margin: "0 auto" }}>{t.applySub}</p>
        </div>
        <div className="form-box reveal" style={{ transitionDelay: ".1s" }}>
          {done ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: "3.5rem", marginBottom: 14 }}>🎉</div>
              <h3 style={{ fontFamily: "'Yatra One',cursive", fontSize: "1.4rem", color: "var(--heading)", marginBottom: 10 }}>{t.formSuccess}</h3>
              <p style={{ color: "var(--muted)", fontSize: ".88rem", marginBottom: 22 }}>{t.formSuccessMsg}</p>
              <button className="btn-primary" onClick={() => setDone(false)}>{t.formAgain}</button>
            </div>
          ) : (
            <>
              <div style={{ fontFamily: "'Yatra One',cursive", fontSize: "1.1rem", color: "var(--heading)", marginBottom: 22 }}>
                📋 Finance Application
              </div>
              <div className="frow">
                <div><label className="fl">{t.formName} *</label><input className="fi" placeholder="Aapka naam" value={form.name} onChange={upd("name")} /></div>
                <div><label className="fl">{t.formPhone} *</label><input className="fi" placeholder="10 digit number" value={form.phone} onChange={upd("phone")} type="tel" /></div>
              </div>
              <div className="frow">
                <div><label className="fl">{t.formCity}</label><input className="fi" placeholder="Aapka sheher / gaon" value={form.city} onChange={upd("city")} /></div>
                <div><label className="fl">{t.formPrice}</label><input className="fi" placeholder="e.g. 25000" value={form.price} onChange={upd("price")} type="number" /></div>
              </div>
              <label className="fl">{t.formProduct} *</label>
              <input className="fi" placeholder="e.g. Samsung TV 43 inch, iPhone 15, LG Washing Machine" value={form.product} onChange={upd("product")} />
              <button className="btn-wa" style={{ width: "100%", justifyContent: "center", fontSize: ".92rem", padding: "14px" }} onClick={submit}>
                💬 {t.formSubmit}
              </button>
              <p style={{ textAlign: "center", fontSize: ".7rem", color: "var(--muted)", marginTop: 10 }}>{t.formNote}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact({ t }) {
  return (
    <section id="contact" className="section section-alt">
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 44 }}>
          <div className="sec-tag">{t.contactTag}</div>
          <h2 className="sec-title">{t.contactTitle}</h2>
          <p className="sec-sub" style={{ margin: "0 auto" }}>{t.contactSub}</p>
        </div>
        <div className="contact-cards reveal" style={{ transitionDelay: ".1s" }}>
          {[
            { icon: "📞", label: "Phone / Call", val: PHONE, sub: "Mon–Sat 9am–7pm", bg: "#eff6ff", ic: "#2563eb" },
            { icon: "💬", label: "WhatsApp", val: PHONE, sub: "Reply within 30 min", bg: "#f0fdf4", ic: "#25D366" },
            { icon: "📍", label: "Location", val: "Nainpur, M.P.", sub: "Mandla, Seoni, Balaghat", bg: "#fefce8", ic: "#f59e0b" },
          ].map(c => (
            <div key={c.label} className="cc" style={{ background: c.bg }}>
              <div className="cc-icon" style={{ background: c.ic }}>
                <span style={{ fontSize: "1.15rem" }}>{c.icon}</span>
              </div>
              <div>
                <div style={{ fontSize: ".68rem", color: "var(--muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em" }}>{c.label}</div>
                <div style={{ fontWeight: 700, fontSize: ".92rem", color: "var(--heading)", margin: "2px 0" }}>{c.val}</div>
                <div style={{ fontSize: ".72rem", color: "var(--muted)" }}>{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ textAlign: "center", transitionDelay: ".2s" }}>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa"
            style={{ fontSize: "1rem", padding: "16px 40px", borderRadius: 12, display: "inline-flex" }}>
            💬 {t.contactWa}
          </a>
          <p style={{ marginTop: 10, fontSize: ".74rem", color: "var(--muted)" }}>Click to open WhatsApp instantly</p>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ t }) {
  return (
    <footer className="footer">
      <div style={{ fontFamily: "'Yatra One',cursive", fontSize: "1.1rem", color: "white", marginBottom: 4 }}>{t.name}</div>
      <div style={{ marginBottom: 6 }}>{t.footerRole} · {t.footerCity}</div>
      <div style={{ color: "rgba(255,255,255,.3)", fontSize: ".7rem", borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 14 }}>
        © 2025 {t.name} · Bajaj Finance Authorized Agent ·{" "}
        <a href={WA_LINK} target="_blank" rel="noreferrer">WhatsApp: {PHONE}</a>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("hi");
  const [dark, setDark] = useState(false);
  const t = T[lang];
  useReveal();

  return (
    <>
      <style>{makeCSS(dark)}</style>
      <NavBar t={t} lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
      <Hero t={t} />
      <Ticker t={t} />
      <About t={t} />
      <Services t={t} />
      <Steps t={t} />
      <Calculator t={t} />
      <Documents t={t} />
      <Testimonials t={t} />
      <ApplyForm t={t} />
      <Contact t={t} />
      <Footer t={t} />
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="wa-float" title="WhatsApp">💬</a>
    </>
  );
}
