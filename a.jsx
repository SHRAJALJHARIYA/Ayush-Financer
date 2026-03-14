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
      { icon: "✅", title: "तेज़ अप्रूवल", desc: "बजाज फाइनेंस तेज़ी से आपके आवेदन को मंजूरी दे देता है।" },
      { icon: "🎉", title: "प्रोडक्ट ले जाएं", desc: "अपना प्रोडक्ट घर ले जाएं और आसान महीने EMI भुगतान करें।" },
    ],
    calcTag: "EMI कैलकुलेटर",
    calcTitle: "अपना मासिक EMI कैलकुलेट करें",
    calcSub: "देखें कि बजाज EMI पर आपने इलेक्ट्रॉनिक्स कितना किफायती हो सकते हैं।",
    calcPrice: "प्रोडक्ट की कीमत (₹)",
    calcDown: "डाउन पेमेंट (₹)",
    calcMonths: "अवधि (महीने)",
    calcMonthly: "मासिक EMI",
    calcPerMonth: "प्रति महीना",
    calcDisclaimer: "*संकेतात्मक। वास्तविक EMI बजाज फाइनेंस की शर्तों के अनुसार।",
    calcApply: "इस EMI के लिए आवेदन करें",
    docsTag: "आवश्यक दस्तावेज़",
    docsTitle: "केवल न्यूनतम दस्तावेज़",
    docsSub: "बजाज फाइनेंस की तेज़ मंजूरी के लिए सिर्फ 5 बुनियादी दस्तावेज़।",
    docs: [
      { icon: "🪪", title: "आधार कार्ड", desc: "मूल + फोटोकॉपी" },
      { icon: "💳", title: "पैन कार्ड", desc: "फाइनेंस के लिए अनिवार्य" },
      { icon: "🏦", title: "बैंक स्टेटमेंट", desc: "पिछले 3 महीने" },
      { icon: "📷", title: "पासपोर्ट फोटो", desc: "2 हाल की तस्वीरें" },
      { icon: "📱", title: "मोबाइल नंबर", desc: "आधार से जुड़ा हुआ" },
    ],
    testiTag: "ग्राहक समीक्षाएं",
    testiTitle: "हमारे ग्राहक क्या कहते हैं",
    testiSub: "नैनपुर के असली ग्राहकों की असली कहानियां।",
    testimonials: [
      { name: "रमेश यादव", city: "नैनपुर", product: "Samsung TV", text: "आयुष भाई ने बहुत जल्दी मेरे लिए Samsung TV का लोन अप्रूव करवाया। बहुत कम दस्तावेज़ लगे। बेहद सुझाव दिया!", rating: 5 },
      { name: "प्रिया तिवारी", city: "नैनपुर", product: "iPhone 14", text: "iPhone के लिए same day EMI मिल गई! आयुष भाई बहुत मदद्गार हैं। बजाज फाइनेंस की प्रक्रिया बिलकुल आसान थी।", rating: 5 },
      { name: "सुरेश पटेल", city: "मंडला", product: "LG वाशिंग मशीन", text: "वाशिंग मशीन के लिए EMI लेनी थी, आयुष भाई ने घर आकर सब दस्तावेज़ ले लिए और उसी दिन अप्रूव हो गया!", rating: 5 },
      { name: "कविता शर्मा", city: "नैनपुर", product: "Split AC", text: "गर्मी में AC लेनी थी पर बजट नहीं था। आयुष भाई ने बहुत सस्ती EMI पर AC दिलवाया। धन्यवाद!", rating: 5 },
    ],
    applyTag: "शुरु करें",
    applyTitle: "आज ही बजाज फाइनेंस के लिए आवेदन करें",
    applySub: "यह फॉर्म भरें और हम 30 मिनट में आपको WhatsApp पर संपर्क करेंगे।",
    formName: "पूरा नाम",
    formPhone: "फोन नंबर",
    formCity: "शहर / गाँव",
    formProduct: "प्रोडक्ट का नाम",
    formPrice: "प्रोडक्ट की कीमत (₹)",
    formSubmit: "WhatsApp पर जमा करें",
    formNote: "आपका विवरण सीधे WhatsApp पर जाता है। 100% सुरक्षित।",
    formSuccess: "आवेदन भेजा गया!",
    formSuccessMsg: "हम 30 मिनट में आपको WhatsApp पर संपर्क करेंगे।",
    formAgain: "फिर से आवेदन करें",
    contactTag: "संपर्क",
    contactTitle: "हमसे जुड़ें",
    contactSub: "कोई सवाल है? हम हमेशा मदद के लिए खुश हैं।",
    contactWa: "अभी WhatsApp पर चैट करें",
    footerRole: "बजाज फाइनेंस कंसल्टेंट",
    footerCity: "नैनपुर, मध्य प्रदेश",
    toggleLang: "View in English",
    toggleDark: "डार्क मोड",
    toggleLight: "लाइट मोड",
    loanAmt: "ऋण राशि",
    totalInt: "कुल ब्याज",
    totalAmt: "कुल राशि",
    required: "✓ आवश्यक",
    applyNow: "अभी आवेदन करें →",
    waNav: "व्हाट्सएप",
    hireMe: "अभी आवेदन करें",
    ctaBanner: "आवेदन के लिए तैयार? इसमें सिर्फ 5 मिनट लगते हैं।",
    ctaBannerSub: "500+ खुश ग्राहकों के साथ जुड़ें जिन्होंने आयुष झारिया पर विश्वास किया।",
    proTip: "प्रो टिप: same-day approval के लिए WhatsApp पर दस्तावेज़ भेजें।",
  }
};

const PHONE = "919424045678";
const WA_LINK = `https://wa.me/${PHONE}`;

// ─── CSS GENERATOR ────────────────────────────────────────────────────────────
function makeCSS(dark) {
  return `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --sky: #3b82f6;
      --sky-dark: #1e40af;
      --accent: #06b6d4;
      --success: #10b981;
      --warn: #f59e0b;
      --heading: ${dark ? "#f8fafc" : "#0f172a"};
      --text: ${dark ? "#cbd5e1" : "#1e293b"};
      --muted: ${dark ? "#94a3b8" : "#64748b"};
      --border: ${dark ? "#334155" : "#e2e8f0"};
      --bg: ${dark ? "#0f172a" : "#ffffff"};
      --bg-secondary: ${dark ? "#1e293b" : "#f8fafc"};
      --input-bg: ${dark ? "#1e293b" : "#ffffff"};
      --input-border: ${dark ? "#334155" : "#cbd5e1"};
    }
    
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      transition: background 0.3s, color 0.3s;
    }

    /* ─── TYPOGRAPHY ─── */
    h1, h2, h3, h4, h5, h6 { color: var(--heading); line-height: 1.2; font-weight: 700; }
    h1 { font-size: 3.2rem; }
    h2 { font-size: 2.2rem; }
    h3 { font-size: 1.5rem; }
    h4 { font-size: 1.2rem; }

    /* ─── NAVBAR ─── */
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      height: 70px;
      background: rgba(${dark ? "15,23,42" : "255,255,255"}, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
      z-index: 999;
      display: flex;
      align-items: center;
      padding: 0 5%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .nav-content {
      max-width: 1400px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
    }

    .nav-brand {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--sky);
      text-decoration: none;
      letter-spacing: -0.5px;
    }

    .nav-menu {
      display: flex;
      gap: 2.5rem;
      list-style: none;
      flex: 1;
      margin-left: 3rem;
    }

    .nav-menu a {
      text-decoration: none;
      color: var(--text);
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 0.3s, transform 0.2s;
      position: relative;
    }

    .nav-menu a:hover {
      color: var(--sky);
      transform: translateY(-2px);
    }

    .nav-menu a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--sky);
      transition: width 0.3s;
    }

    .nav-menu a:hover::after {
      width: 100%;
    }

    .nav-controls {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .nav-btn {
      padding: 8px 16px;
      background: none;
      border: 1px solid var(--border);
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.85rem;
      color: var(--text);
      transition: all 0.3s;
      font-weight: 500;
    }

    .nav-btn:hover {
      border-color: var(--sky);
      color: var(--sky);
      background: rgba(59, 130, 246, 0.05);
    }

    /* ─── HERO ─── */
    .hero {
      margin-top: 70px;
      padding: 100px 5%;
      background: linear-gradient(135deg, #0f172a 0%, #1e3a6e 50%, #1e40af 100%);
      position: relative;
      overflow: hidden;
      color: white;
    }

    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }

    .hero-content {
      max-width: 900px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
      text-align: center;
      animation: slideUp 0.8s ease-out;
    }

    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      color: white;
      font-weight: 800;
      letter-spacing: -1px;
    }

    .hero p {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.7;
    }

    .hero-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ─── BUTTONS ─── */
    .btn-primary {
      padding: 14px 32px;
      background: var(--sky);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
    }

    .btn-primary:hover {
      background: var(--sky-dark);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
      transform: translateY(-2px);
    }

    .btn-wa {
      padding: 14px 32px;
      background: #25d366;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
      text-decoration: none;
    }

    .btn-wa:hover {
      background: #1fa857;
      box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5);
      transform: translateY(-2px);
    }

    .btn-secondary {
      padding: 14px 32px;
      background: transparent;
      color: white;
      border: 2px solid white;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-secondary:hover {
      background: white;
      color: var(--sky-dark);
    }

    /* ─── SECTIONS ─── */
    .section {
      padding: 88px 5%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .section-alt {
      background: var(--bg-secondary);
    }

    .sec-tag {
      color: var(--sky);
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      margin-bottom: 0.8rem;
    }

    .sec-title {
      color: var(--heading);
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }

    .sec-sub {
      color: var(--muted);
      font-size: 1.1rem;
      margin-bottom: 3.5rem;
    }

    /* ─── CARDS ─── */
    .service-card {
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 2rem;
      transition: all 0.3s;
      cursor: pointer;
    }

    .service-card:hover {
      border-color: var(--sky);
      box-shadow: 0 12px 30px rgba(59, 130, 246, 0.15);
      transform: translateY(-8px);
    }

    .service-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      display: block;
    }

    .service-card h3 {
      margin-bottom: 0.8rem;
      color: var(--heading);
    }

    .service-card p {
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    /* ─── GRID ─── */
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 2rem;
    }

    /* ─── REVEAL ANIMATION ─── */
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .reveal {
      animation: slideUp 0.8s ease-out forwards;
      opacity: 0;
    }

    /* ─── CALCULATOR ─── */
    .calc-input {
      width: 100%;
      padding: 12px 16px;
      background: var(--input-bg);
      border: 1px solid var(--input-border);
      border-radius: 8px;
      color: var(--text);
      font-size: 1rem;
      transition: border-color 0.3s;
    }

    .calc-input:focus {
      outline: none;
      border-color: var(--sky);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .calc-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .calc-label {
      color: var(--heading);
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .calc-result {
      background: var(--bg-secondary);
      padding: 1.5rem;
      border-radius: 10px;
      text-align: center;
      margin-top: 2rem;
    }

    .calc-result-num {
      font-size: 2.5rem;
      color: var(--sky);
      font-weight: 800;
      margin-bottom: 0.5rem;
    }

    .calc-result-label {
      color: var(--muted);
      font-size: 0.9rem;
    }

    /* ─── FORM ─── */
    .form-box {
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 2.5rem;
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    .frow {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .frow > div {
      display: flex;
      flex-direction: column;
    }

    .fl {
      color: var(--heading);
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .fi {
      width: 100%;
      padding: 12px 16px;
      background: var(--input-bg);
      border: 1px solid var(--input-border);
      border-radius: 8px;
      color: var(--text);
      font-size: 1rem;
      transition: all 0.3s;
      font-family: inherit;
    }

    .fi:focus {
      outline: none;
      border-color: var(--sky);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    /* ─── TESTIMONIALS ─── */
    .testimonial-card {
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 2rem;
      transition: all 0.3s;
    }

    .testimonial-card:hover {
      border-color: var(--sky);
      box-shadow: 0 12px 30px rgba(59, 130, 246, 0.1);
      transform: translateY(-4px);
    }

    .stars {
      color: #fbbf24;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    .testimonial-text {
      color: var(--text);
      margin-bottom: 1rem;
      line-height: 1.7;
      font-size: 0.95rem;
    }

    .testimonial-author {
      font-weight: 700;
      color: var(--heading);
      margin-bottom: 0.25rem;
    }

    .testimonial-meta {
      color: var(--muted);
      font-size: 0.85rem;
    }

    /* ─── CONTACT CARDS ─── */
    .cc {
      background: var(--bg-secondary);
      border-radius: 12px;
      padding: 2rem;
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;
      transition: all 0.3s;
    }

    .cc-icon {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }

    .contact-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    /* ─── FOOTER ─── */
    .footer {
      background: #0f172a;
      color: white;
      padding: 3rem 5%;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer a {
      color: var(--sky);
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer a:hover {
      color: var(--accent);
    }

    /* ─── FLOATING WA BUTTON ─── */
    .wa-float {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 60px;
      height: 60px;
      background: #25d366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      text-decoration: none;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
      transition: all 0.3s;
      z-index: 998;
    }

    .wa-float:hover {
      background: #1fa857;
      box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5);
      transform: scale(1.1);
    }

    /* ─── RESPONSIVE ─── */
    @media (max-width: 768px) {
      .nav-menu { display: none; }
      .hero h1 { font-size: 2.5rem; }
      .hero p { font-size: 1rem; }
      .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
      .calc-row { grid-template-columns: 1fr; }
      .frow { grid-template-columns: 1fr; }
      .section { padding: 60px 5%; }
    }
  `;
}

// ─── REVEAL HOOK ────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.animationPlayState = "running";
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(e => obs.observe(e));
  }, []);
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function NavBar({ t, lang, setLang, dark, setDark }) {
  return (
    <nav>
      <div className="nav-content">
        <a href="#home" className="nav-brand">⚡ {t.name}</a>
        <ul className="nav-menu">
          {t.navItems.map((item, i) => (
            <li key={i}>
              <a href={["#home", "#about", "#services", "#calc", "#steps", "#docs", "#contact"][i]}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="nav-controls">
          <button className="nav-btn" onClick={() => setLang(lang === "en" ? "hi" : "en")}>
            {t.toggleLang}
          </button>
          <button className="nav-btn" onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero({ t }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>{t.heroTitle}</h1>
        <p>{t.heroSub}</p>
        <div className="hero-buttons">
          <button className="btn-primary">{t.applyBtn}</button>
          <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer" className="btn-secondary">
            {t.waBtn}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── TICKER ──────────────────────────────────────────────────────────────────
function Ticker({ t }) {
  return (
    <div style={{
      background: "var(--bg-secondary)",
      padding: "30px 5%",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "2rem",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--sky)" }}>3+</div>
        <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{t.statsExp}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--sky)" }}>500+</div>
        <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{t.statsCust}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--sky)" }}>5+</div>
        <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{t.statsCities}</div>
      </div>
    </div>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About({ t }) {
  return (
    <section id="about" className="section">
      <div className="reveal">
        <div className="sec-tag">{t.aboutTag}</div>
        <h2 className="sec-title">{t.aboutTitle}</h2>
      </div>
      <div className="grid-2" style={{ marginTop: "3rem", gap: "3rem", alignItems: "center" }}>
        <div className="reveal" style={{ transitionDelay: ".1s" }}>
          <p style={{ fontSize: "1.05rem", color: "var(--text)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            {t.aboutP1}
          </p>
          <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8 }}>
            {t.aboutP2}
          </p>
        </div>
        <div className="reveal" style={{ transitionDelay: ".2s", fontSize: "4rem", textAlign: "center" }}>
          👨‍💼
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
function Services({ t }) {
  return (
    <section id="services" className="section section-alt">
      <div className="reveal">
        <div className="sec-tag">{t.servicesTag}</div>
        <h2 className="sec-title">{t.servicesTitle}</h2>
        <p className="sec-sub">{t.servicesSub}</p>
      </div>
      <div className="grid-3">
        {t.services.map((s, i) => (
          <div key={i} className="service-card reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── STEPS ───────────────────────────────────────────────────────────────────
function Steps({ t }) {
  return (
    <section id="steps" className="section">
      <div className="reveal">
        <div className="sec-tag">{t.stepsTag}</div>
        <h2 className="sec-title">{t.stepsTitle}</h2>
        <p className="sec-sub">{t.stepsSub}</p>
      </div>
      <div className="grid-4" style={{ marginTop: "3rem" }}>
        {t.steps.map((step, i) => (
          <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
              width: 60,
              height: 60,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.8rem",
              marginBottom: "1.5rem",
              color: "white",
              fontWeight: "700"
            }}>
              {i + 1}
            </div>
            <h4 style={{ marginBottom: "0.8rem" }}>{step.title}</h4>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CALCULATOR ──────────────────────────────────────────────────────────────
function Calculator({ t }) {
  const [price, setPrice] = useState(50000);
  const [down, setDown] = useState(10000);
  const [months, setMonths] = useState(12);
  const principal = price - down;
  const rate = 0.12 / 12;
  const emi = principal > 0 ? (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1) : 0;
  const total = emi * months;
  const interest = total - principal;

  return (
    <section id="calc" className="section section-alt">
      <div className="reveal">
        <div className="sec-tag">{t.calcTag}</div>
        <h2 className="sec-title">{t.calcTitle}</h2>
        <p className="sec-sub">{t.calcSub}</p>
      </div>
      <div className="form-box reveal" style={{ transitionDelay: ".1s" }}>
        <div style={{ marginBottom: "2rem" }}>
          <label className="calc-label">{t.calcPrice}</label>
          <input className="calc-input" type="number" value={price} onChange={e => setPrice(+e.target.value)} />
        </div>
        <div className="calc-row">
          <div>
            <label className="calc-label">{t.calcDown}</label>
            <input className="calc-input" type="number" value={down} onChange={e => setDown(+e.target.value)} />
          </div>
          <div>
            <label className="calc-label">{t.calcMonths}</label>
            <input className="calc-input" type="number" value={months} onChange={e => setMonths(+e.target.value)} min="3" max="60" />
          </div>
        </div>
        <div className="calc-result">
          <div className="calc-result-num">₹{Math.round(emi)}</div>
          <div className="calc-result-label">{t.calcMonthly}</div>
          <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "1rem" }}>
            {t.loanAmt}: ₹{principal.toLocaleString('en-IN')} | {t.totalInt}: ₹{Math.round(interest).toLocaleString('en-IN')} | {t.totalAmt}: ₹{Math.round(total).toLocaleString('en-IN')}
          </div>
        </div>
        <p style={{ textAlign: "center", color: "var(--muted)", fontSize: "0.8rem", marginTop: "1.5rem" }}>{t.calcDisclaimer}</p>
        <button className="btn-primary" style={{ width: "100%", marginTop: "1.5rem" }}>{t.calcApply}</button>
      </div>
    </section>
  );
}

// ─── DOCUMENTS ───────────────────────────────────────────────────────────────
function Documents({ t }) {
  return (
    <section id="docs" className="section">
      <div className="reveal">
        <div className="sec-tag">{t.docsTag}</div>
        <h2 className="sec-title">{t.docsTitle}</h2>
        <p className="sec-sub">{t.docsSub}</p>
      </div>
      <div className="grid-3" style={{ marginTop: "3rem" }}>
        {t.docs.map((doc, i) => (
          <div key={i} className="service-card reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
            <span className="service-icon">{doc.icon}</span>
            <h3>{doc.title}</h3>
            <p>{doc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
function Testimonials({ t }) {
  return (
    <section className="section section-alt">
      <div className="reveal">
        <div className="sec-tag">{t.testiTag}</div>
        <h2 className="sec-title">{t.testiTitle}</h2>
        <p className="sec-sub">{t.testiSub}</p>
      </div>
      <div className="grid-2" style={{ marginTop: "3rem" }}>
        {t.testimonials.map((testi, i) => (
          <div key={i} className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
            <div className="stars">{"⭐".repeat(testi.rating)}</div>
            <p className="testimonial-text">"{testi.text}"</p>
            <div className="testimonial-author">{testi.name}</div>
            <div className="testimonial-meta">{testi.product} • {testi.city}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── APPLY FORM ──────────────────────────────────────────────────────────────
function ApplyForm({ t, lang }) {
  const [form, setForm] = useState({ name: "", phone: "", city: "", product: "", price: "" });
  const [done, setDone] = useState(false);
  const upd = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = () => {
    if (!form.name || !form.phone || !form.product) { alert("Please fill Name, Phone and Product"); return; }
    const msg = `Namaste Ayush bhai!%0A%0AMujhe Bajaj Finance EMI chahiye.%0A%0ANaam: ${form.name}%0APhone: ${form.phone}%0ACity: ${form.city}%0AProduct: ${form.product}%0APrice: ₹${form.price}%0A%0APlease contact me.`;
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
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
              <div style={{ fontSize: "3.5rem", marginBottom: 14 }}>✅</div>
              <h3 style={{ fontSize: "1.4rem", color: "var(--heading)", marginBottom: 10, fontWeight: 700 }}>{t.formSuccess}</h3>
              <p style={{ color: "var(--muted)", fontSize: ".88rem", marginBottom: 22 }}>{t.formSuccessMsg}</p>
              <button className="btn-primary" onClick={() => setDone(false)}>{t.formAgain}</button>
            </div>
          ) : (
            <>
              <div style={{ fontSize: "1.1rem", color: "var(--heading)", marginBottom: 22, fontWeight: 600 }}>
                📋 {lang === "en" ? "Finance Application" : "वित्त आवेदन"}
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
              <button className="btn-wa" style={{ width: "100%", justifyContent: "center", fontSize: ".92rem", padding: "14px", marginTop: "1.5rem" }} onClick={submit}>
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
      <div style={{ fontSize: "1.1rem", color: "white", marginBottom: 4, fontWeight: 700 }}>{t.name}</div>
      <div style={{ marginBottom: 6, color: "rgba(255,255,255,.7)" }}>{t.footerRole} · {t.footerCity}</div>
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
      <ApplyForm t={t} lang={lang} />
      <Contact t={t} />
      <Footer t={t} />
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="wa-float" title="WhatsApp">💬</a>
    </>
  );
}