export type Lang = "ar" | "en";

export interface Article {
  slug: string;
  tag: string;
  tagAr: string;
  date: string;
  readTime: number;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  content: Record<Lang, string>;
}

export const articles: Article[] = [
  {
    slug: "uae-carbon-market-cop28-growth",
    tag: "COP28",
    tagAr: "COP28",
    date: "May 2026",
    readTime: 6,
    title: {
      en: "Two Years After COP28: UAE's Carbon Market Has Grown 340%",
      ar: "بعد عامين من COP28: نمو سوق الكربون الإماراتي بنسبة 340%",
    },
    excerpt: {
      en: "Since hosting COP28 in December 2023, the UAE's voluntary carbon market has grown 340% in transaction volume, driven by ADGM's Carbon Trading Platform and growing corporate SBTi commitments from UAE-headquartered multinationals.",
      ar: "منذ استضافة COP28 في ديسمبر 2023، نما سوق الكربون الطوعي في الإمارات بنسبة 340% من حيث حجم المعاملات، مدفوعاً بمنصة تداول الكربون في ADGM والتزامات SBTi المتزايدة.",
    },
    content: {
      en: `<p class="lead">When the UAE closed COP28 in Dubai's Expo City with the historic 'UAE Consensus' — the first COP agreement to call explicitly for transitioning away from fossil fuels — it also quietly set the stage for something more concrete: the fastest-growing voluntary carbon market in the Middle East and North Africa region.</p>

<h2>The COP28 Legacy: More Than a Photo Opportunity</h2>
<p>Hosting COP28 was not merely a diplomatic milestone. It committed the UAE to a set of domestic policy actions that directly accelerated carbon market infrastructure. The UAE Consensus included a national pledge to reduce methane emissions by 30% by 2030, a $30 billion commitment to the ALTÉRRA climate investment fund, and the operationalisation of Article 6 bilateral agreements with twelve countries. Each of these commitments required a functional domestic carbon pricing mechanism — and market participants moved quickly once that political signal was clear.</p>
<p>In the eighteen months following COP28, the UAE's voluntary carbon market grew 340% in total transaction volume, according to data published by the Abu Dhabi Global Market (ADGM) Carbon Markets Development Authority. At the end of 2023, total annual voluntary credit transactions in the UAE were estimated at approximately 800,000 tCO₂e. By the end of 2025, that figure had exceeded 3.5 million tCO₂e — with projections for 2026 pointing toward the 5 million tonne threshold.</p>

<h2>The ADGM Carbon Trading Platform: Infrastructure for a New Market</h2>
<p>The Abu Dhabi Global Market launched its Carbon Trading Platform in Q1 2024, providing a regulated, transparent environment for voluntary credit transactions. The platform operates under ADGM's Financial Services Regulatory Authority, meaning participating buyers and sellers are subject to anti-money laundering (AML) and know-your-customer (KYC) requirements — a governance feature that differentiates ADGM from over-the-counter (OTC) carbon broking and significantly reduces the greenwashing risk that has historically undermined voluntary carbon market credibility.</p>
<p>The platform currently hosts credits from three categories: UAE-generated nature-based credits (primarily blue carbon from Abu Dhabi mangroves), international Verra VCS and Gold Standard credits approved for import, and Article 6.2 internationally transferred mitigation outcomes (ITMOs) from bilateral agreements. The average credit price on the ADGM platform in Q1 2026 was $22.40 per tCO₂e — approximately 40% above the global voluntary market average, reflecting the premium buyers place on ADGM-verified provenance.</p>

<h2>Corporate SBTi Adoption: The Demand Engine</h2>
<p>The demand side of the UAE carbon market has been driven primarily by corporate Science-Based Targets initiative (SBTi) commitments. In 2023, 21 UAE-headquartered companies had approved SBTi targets. By May 2026, that number has grown to 54 — including Emaar Properties, Emirates NBD, Abu Dhabi National Energy Company (TAQA), Agthia Group, and Aldar Properties.</p>
<p>SBTi targets require companies to reduce absolute Scope 1, 2, and 3 emissions in line with 1.5°C or well-below 2°C pathways. For emissions that cannot be eliminated by 2030 or 2035, high-quality carbon credits are used as a bridge mechanism. This creates a structured, predictable, multi-year demand signal that was largely absent from the Gulf carbon market before 2023.</p>
<p>Emirates Global Aluminium — one of the UAE's largest industrial emitters — publicly committed in 2025 to source 500,000 verified carbon credits annually from UAE-generated blue carbon projects, citing the importance of supply-chain proximity and the co-benefit narratives available from Abu Dhabi mangrove credits. This single corporate commitment represented nearly 15% of total UAE voluntary market volume at the time of announcement.</p>

<h2>The Blue Carbon Premium: Why UAE Credits Trade at a Markup</h2>
<p>UAE-generated credits consistently trade at a premium to the global voluntary average. Three structural factors explain this differential. First, blue carbon credits from tidal wetland and mangrove ecosystems sequester carbon at rates 3–5 times higher per hectare than comparable terrestrial forest projects, and the below-ground soil carbon storage mechanism provides permanence assurances that most forest credits cannot match. Second, Abu Dhabi's mangrove projects carry measurable biodiversity co-benefits — documented increases in avian species, juvenile fish populations, and invertebrate diversity — that allow buyers to report both carbon and biodiversity outcomes from a single credit purchase. Third, ADGM's regulatory framework provides legal certainty that is absent from OTC transactions, making credits suitable for inclusion in TCFD-aligned climate disclosures submitted to the UAE's Securities and Commodities Authority (SCA).</p>

<h2>The Road to a Regional Carbon Hub</h2>
<p>The UAE's strategic ambition is to become the region's primary carbon market infrastructure — the equivalent of what Singapore represents for Southeast Asian voluntary carbon markets. ADGM has signed memoranda of understanding with the Saudi Voluntary Carbon Market (PIF-backed), the Egyptian Carbon Registry, and the Jordan Voluntary Carbon Market. These bilateral agreements lay the groundwork for cross-border credit recognition — meaning a Saudi company could purchase UAE mangrove credits, or a UAE buyer could access Egyptian solar displacement credits, through a single regulated platform.</p>
<p>For investors and project developers, the trajectory is clear: the UAE is building carbon market infrastructure with the seriousness and regulatory rigour that it has applied to financial services, aviation, and logistics. The window to participate as an early-stage project developer or credit buyer — when terms, relationships, and pricing are most favourable — is measured in months, not years.</p>`,

      ar: `<p class="lead">عندما أُسدل الستار على COP28 في مدينة إكسبو دبي بتبني "إجماع الإمارات" التاريخي — أول اتفاق لمؤتمر الأطراف يدعو صراحةً إلى التحول بعيداً عن الوقود الأحفوري — أرست الإمارات في الوقت ذاته أسس أسرع سوق للكربون الطوعي نمواً في منطقة الشرق الأوسط وشمال أفريقيا.</p>

<h2>إرث COP28: أكثر من مجرد لحظة دبلوماسية</h2>
<p>في الأشهر الثمانية عشر التي أعقبت COP28، نما سوق الكربون الطوعي في الإمارات بنسبة 340% من إجمالي حجم المعاملات. في نهاية عام 2023، كانت مجمل معاملات ائتمانات الكربون الطوعية تُقدَّر بنحو 800,000 طن من مكافئ CO₂. وبنهاية عام 2025، تجاوز هذا الرقم 3.5 مليون طن، مع توقعات لعام 2026 تشير إلى تخطي عتبة 5 ملايين طن.</p>

<h2>منصة تداول الكربون في ADGM</h2>
<p>أطلق مركز أبوظبي العالمي للسوق (ADGM) منصته لتداول الكربون في الربع الأول من عام 2024، موفراً بيئة منظمة وشفافة لمعاملات ائتمانات الكربون الطوعية. تعمل المنصة تحت إشراف هيئة الخدمات المالية التنظيمية في ADGM، مما يمنح المشترين والبائعين إطاراً قانونياً يحد من مخاطر الغسيل الأخضر الذي أضر بمصداقية أسواق الكربون الطوعية تاريخياً.</p>
<p>بلغ متوسط سعر الائتمان على منصة ADGM في الربع الأول من 2026 نحو 22.40 دولاراً للطن — أي ما يزيد بنحو 40% عن متوسط السوق العالمي الطوعي، مما يعكس العلاوة التي يمنحها المشترون للمنشأ المعتمد من ADGM.</p>

<h2>التزامات SBTi المؤسسية: محرك الطلب</h2>
<p>يقود جانب الطلب في سوق الكربون الإماراتي التزامات الشركات بمبادرة الأهداف القائمة على العلم (SBTi). في عام 2023، كانت 21 شركة مقرها الإمارات تمتلك أهدافاً معتمدة من SBTi. وبحلول مايو 2026، ارتفع هذا العدد إلى 54 شركة، من بينها إعمار العقارية وبنك الإمارات دبي الوطني وشركة أبوظبي الوطنية للطاقة (TAQA). وتلتزم أهداف SBTi بخفض انبعاثات النطاقات 1 و2 و3 وفق مسارات 1.5 درجة مئوية، مما يخلق طلباً منظماً ومتعدد السنوات على ائتمانات الكربون عالية الجودة.</p>

<h2>مسار نحو مركز إقليمي للكربون</h2>
<p>وقعت ADGM مذكرات تفاهم مع سوق الكربون الطوعي السعودي وسجل الكربون المصري وسوق الكربون الطوعي الأردني، مما يمهد الطريق لاعتراف متبادل بالائتمانات عبر الحدود. بالنسبة للمستثمرين ومطوري المشاريع، فإن النافذة للمشاركة بوصفهم مبكرين — حيث الشروط والعلاقات والأسعار هي الأكثر ملاءمة — تُقاس بالأشهر لا بالسنوات.</p>`,
    },
  },
  {
    slug: "abu-dhabi-mangrove-credits-premium",
    tag: "Finance",
    tagAr: "تمويل",
    date: "April 2026",
    readTime: 5,
    title: {
      en: "UAE Blue Carbon Markets: Emerging Opportunity Across Mangrove and Seagrass Ecosystems",
      ar: "أسواق الكربون الأزرق في الإمارات: فرصة ناشئة عبر أنظمة المانغروف والأعشاب البحرية",
    },
    excerpt: {
      en: "The UAE's coastal mangrove, seagrass, and coral reef ecosystems represent a significant emerging opportunity for biodiversity credit development, with growing institutional interest from European and Asian buyers seeking nature-based solutions.",
      ar: "تمثّل أنظمة المانغروف والأعشاب البحرية والشعاب المرجانية الساحلية في الإمارات فرصة ناشئة مهمة لتطوير ائتمانات التنوع البيولوجي.",
    },
    content: {
      en: `<p class="lead">Biodiversity credits are an emerging market in the UAE, with significant potential across mangrove, seagrass, and coral reef ecosystems. Market prices for nature-based credits vary depending on project type, certification standard, and co-benefit profile — and the UAE's unique coastal ecosystems are attracting growing attention from institutional buyers worldwide.</p>

<h2>UAE Coastal Ecosystems: A Blue Carbon Opportunity</h2>
<p>The UAE's coastal zone hosts a remarkable diversity of blue carbon ecosystems: mangrove forests along the Abu Dhabi coastline, extensive seagrass meadows across the shallow Arabian Gulf shelf, and coral reef systems in the Gulf of Oman. Each of these ecosystem types stores carbon in distinct ways and provides a suite of biodiversity co-benefits — from fish nursery habitat to endangered species refugia — that are increasingly valued by corporate buyers seeking to meet nature-related disclosure requirements under frameworks such as TNFD and SBTN.</p>
<p>Mangrove soil carbon — accumulated over millennia in anaerobic sediments — sequesters carbon at rates significantly higher per hectare than equivalent areas of tropical rainforest. Seagrass meadows provide comparable blue carbon value alongside critical habitat for dugongs and sea turtles. These ecosystem characteristics, when certified under international frameworks such as Verra's VM0033 methodology, create high-quality nature-based credits with measurable biodiversity co-benefits.</p>

<h2>VM0033: The Certification Framework</h2>
<p>UAE mangrove and seagrass projects are being explored under Verra's VM0033 — Methodology for Tidal Wetland and Seagrass Restoration — one of the most scientifically rigorous carbon accounting frameworks available. VM0033 requires project developers to measure and model six distinct carbon pools and account for three greenhouse gases, making credits generated under this methodology particularly robust for institutional buyers subject to third-party audit requirements.</p>

<h2>Biodiversity Co-Benefits: The Value Beyond Carbon</h2>
<p>A key feature of UAE coastal ecosystem projects is the richness of potential biodiversity co-benefits. Abu Dhabi's mangrove areas provide habitat for the Socotra Cormorant — classified as Vulnerable by the IUCN — alongside flamingo colonies, hawksbill sea turtle nesting, and dugong feeding grounds. These documented biodiversity values allow buyers to report both carbon and biodiversity outcomes, satisfying requirements under frameworks including the EU Corporate Sustainability Reporting Directive (CSRD).</p>

<h2>Institutional Demand and Market Development</h2>
<p>European and Asian institutional buyers are showing growing interest in UAE blue carbon opportunities, driven by CSRD compliance timelines and ESG disclosure requirements. The Abu Dhabi Global Market (ADGM) Carbon Trading Platform provides a regulated environment for credit transactions, supporting market development and price discovery. As the market matures, biodiversity credits represent a significant emerging opportunity across the UAE's coastal ecosystem portfolio.</p>`,

      ar: `<p class="lead">ائتمانات التنوع البيولوجي سوق ناشئ في الإمارات، مع إمكانات كبيرة عبر أنظمة المانغروف والأعشاب البحرية والشعاب المرجانية. أسعار السوق لائتمانات الكربون الطبيعية تتفاوت بحسب نوع المشروع ومعيار الاعتماد وملف المزايا المشتركة.</p>

<h2>النظم البيئية الساحلية للإمارات: فرصة كربون أزرق</h2>
<p>تضم المنطقة الساحلية للإمارات تنوعاً بيئياً ملحوظاً: غابات المانغروف على طول ساحل أبوظبي، ومروج الأعشاب البحرية الشاسعة في الخليج العربي الضحل، وأنظمة الشعاب المرجانية في خليج عُمان. يحتجز كل من هذه الأنظمة البيئية الكربون بطرق مختلفة ويوفر مجموعة من مزايا التنوع البيولوجي المشتركة التي يقدّرها المشترون المؤسسيون بشكل متزايد.</p>

<h2>منهجية VM0033: إطار الاعتماد</h2>
<p>تُستكشف مشاريع المانغروف والأعشاب البحرية في الإمارات في إطار منهجية Verra VM0033 — إحدى أكثر أطر محاسبة الكربون صرامةً ودقةً علمية. تتطلب هذه المنهجية من مطوري المشاريع قياس ست مجمعات كربونية مختلفة ومحاسبة ثلاثة غازات دفيئة.</p>

<h2>مزايا التنوع البيولوجي: القيمة ما وراء الكربون</h2>
<p>من الميزات الرئيسية لمشاريع النظم البيئية الساحلية في الإمارات غنى مزايا التنوع البيولوجي المحتملة. توفر مناطق المانغروف في أبوظبي موئلاً لطير الغاق السقطري المصنّف كنوع مهدد، إلى جانب مستعمرات الفلامنغو وأعشاش سلاحف الظهر الصفحي ومواقع تغذية الدُغُنغ.</p>

<h2>الطلب المؤسسي وتطوير السوق</h2>
<p>يُبدي المشترون المؤسسيون الأوروبيون والآسيويون اهتماماً متزايداً بفرص الكربون الأزرق في الإمارات، مدفوعين بالتزامات الإفصاح عن CSRD ومتطلبات ESG. مع نضج السوق، تمثّل ائتمانات التنوع البيولوجي فرصة ناشئة مهمة عبر محفظة النظم البيئية الساحلية للإمارات.</p>`,
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
