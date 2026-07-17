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
      en: "Abu Dhabi Mangrove Credits Trade at $28/tCO₂ — 3x the Global Average",
      ar: "ائتمانات مانغروف أبوظبي تُتداول بـ 28$/tCO₂ — ثلاثة أضعاف المتوسط العالمي",
    },
    excerpt: {
      en: "Demand from European and Asian institutional buyers has pushed Abu Dhabi blue carbon credits to $28/tCO₂, establishing UAE mangrove credits as among the world's most valuable voluntary carbon instruments.",
      ar: "دفع الطلب من المشترين المؤسسيين الأوروبيين والآسيويين ائتمانات الكربون الأزرق في أبوظبي إلى 28$/tCO₂، مما يجعل ائتمانات مانغروف الإمارات من أكثر أدوات الكربون الطوعية قيمةً في العالم.",
    },
    content: {
      en: `<p class="lead">Abu Dhabi mangrove blue carbon credits reached an average traded price of $28 per tonne of CO₂ equivalent in Q1 2026 — more than three times the global voluntary carbon market average of $8.40/tCO₂e recorded over the same period. The premium reflects the intersection of ecosystem rarity, rigorous certification, and rapidly escalating institutional demand from corporate buyers across Europe and Asia.</p>

<h2>Abu Dhabi's Mangrove Ecosystem: A World-Class Carbon Asset</h2>
<p>Abu Dhabi holds 63% of the UAE's total mangrove forest area — approximately 75,000 hectares of tidal wetland habitat concentrated in the Eastern Mangrove Lagoon National Park, Jubail Island, and the coastal zone between Abu Dhabi Island and Yas Island. These ecosystems are classified by the International Union for Conservation of Nature (IUCN) as among the most carbon-dense coastal habitats on Earth.</p>
<p>Mangrove soil carbon — accumulated over millennia in the deep, anaerobic sediments beneath the root mat — sequesters 3 to 5 times more carbon per hectare than an equivalent area of tropical rainforest. Unlike above-ground biomass carbon, which is vulnerable to fire, drought, and disease, below-ground blue carbon is effectively permanent on timescales relevant to climate policy. This permanence characteristic is one of the primary drivers of the blue carbon price premium.</p>

<h2>VM0033: The Methodology Behind the Premium</h2>
<p>Abu Dhabi mangrove projects are structured under Verra's VM0033 — Methodology for Tidal Wetland and Seagrass Restoration — one of the most demanding and scientifically rigorous carbon accounting frameworks available. VM0033 requires project developers to measure and model six distinct carbon pools: above-ground living biomass, below-ground biomass, dead wood, litter, below-ground organic carbon (soil), and dissolved organic carbon exported to adjacent open waters.</p>
<p>The methodology also requires accounting for three greenhouse gases — CO₂, methane (CH₄), and nitrous oxide (N₂O) — and mandates that methane emissions from tidal wetlands be rigorously measured and deducted from the credit total. This level of scientific rigour makes VM0033 credits more expensive to generate but significantly more defensible under third-party audit — which is precisely what institutional buyers subject to CSRD, TCFD, or SBTi verification processes require.</p>

<h2>Biodiversity Co-Benefits: The Value Beyond Carbon</h2>
<p>A key differentiator for Abu Dhabi mangrove credits is the richness of documented biodiversity co-benefits. Aerial and field surveys conducted in project areas have recorded breeding populations of the Socotra Cormorant — classified as Vulnerable by the IUCN — alongside flamingo colonies, hawksbill sea turtle nesting, and dugong feeding grounds. These observations are incorporated into project documentation and allow buyers to report both carbon and biodiversity outcomes under a single credit purchase.</p>
<p>For European companies subject to the EU Corporate Sustainability Reporting Directive (CSRD), which from 2025 requires disclosure under European Sustainability Reporting Standards (ESRS) including biodiversity impact, this dual-benefit credential is increasingly valuable. Several European financial institutions and energy companies have specifically sought Abu Dhabi blue carbon credits as assets that satisfy both their CSRD biodiversity disclosure requirements and their voluntary carbon neutrality commitments — a combination that no standard terrestrial forest credit can provide.</p>

<h2>EU CSRD and Asian ESG Frameworks: The Institutional Demand Drivers</h2>
<p>European institutional demand for Abu Dhabi credits is being driven primarily by CSRD compliance timelines. Large EU-listed companies were required to begin disclosing under ESRS from January 2025, with biodiversity and ecosystem impact as a mandatory reporting topic. Companies that can demonstrate procurement of credits with verified biodiversity co-benefits — ideally from geographically significant, high-profile ecosystems — gain a disclosure narrative advantage that purely carbon-focused credits cannot provide.</p>
<p>From Asia, Japanese, South Korean, and Singaporean institutional buyers have been active in the Abu Dhabi credit market, motivated by domestic ESG disclosure frameworks and the growing expectation from Japanese keiretsu groups and Korean conglomerates that sustainability credentials will be required for participation in UAE government procurement and joint venture opportunities — creating a demand signal directly linked to UAE commercial relationships.</p>

<h2>Supply Constraints and the Price Outlook</h2>
<p>Despite the premium pricing, supply of Abu Dhabi mangrove credits remains constrained. The total verified credit issuance from Abu Dhabi mangrove projects in 2025 was approximately 180,000 tCO₂e — a fraction of the multi-million tonne demand that institutional buyers have signalled. Project development timelines under VM0033 are long: baseline establishment, PDD preparation, and first verification typically require 24–36 months before the first credits can be issued.</p>
<p>This supply-demand imbalance is expected to sustain — and potentially extend — the blue carbon price premium through 2028 at minimum. For investors and project developers entering the Abu Dhabi blue carbon market now, the combination of price premium, long-dated supply constraints, and regulatory tailwinds from CSRD and the UAE's own sustainability disclosure framework represents one of the most attractive risk-adjusted entry points in the global voluntary carbon market.</p>`,

      ar: `<p class="lead">بلغت ائتمانات الكربون الأزرق لمانغروف أبوظبي متوسط سعر تداول قدره 28 دولاراً للطن من مكافئ CO₂ في الربع الأول من 2026 — أي ما يزيد على ثلاثة أضعاف متوسط سوق الكربون الطوعي العالمي البالغ 8.40 دولار. يعكس هذا الفارق تقاطع ندرة النظام البيئي والاعتماد الصارم والطلب المؤسسي المتصاعد من المشترين الأوروبيين والآسيويين.</p>

<h2>نظام المانغروف في أبوظبي: أصل كربوني عالمي المستوى</h2>
<p>تمتلك أبوظبي 63% من إجمالي مساحة غابات المانغروف في الإمارات — ما يقارب 75,000 هكتار من موائل الأراضي الرطبة المدية. تُعد هذه الأنظمة البيئية من أكثر الموائل الساحلية كثافةً في الكربون على وجه الأرض. يعزل الكربون الموجود في تربة المانغروف ما يتراوح بين 3 و5 أضعاف الكربون للهكتار مقارنةً بالغابات الاستوائية المطيرة.</p>

<h2>منهجية VM0033: العلم وراء العلاوة السعرية</h2>
<p>تُنظَّم مشاريع مانغروف أبوظبي بموجب منهجية Verra VM0033 — إحدى أكثر أطر محاسبة الكربون صرامةً ودقةً علمية. تُلزم هذه المنهجية مطوري المشاريع بقياس ست مجمعات كربونية مختلفة وتبعات ثلاثة غازات دفيئة. هذا المستوى من الدقة يجعل ائتمانات VM0033 أكثر قابلية للدفاع عنها في عمليات التدقيق الخارجي — وهو بالضبط ما يحتاجه المشترون المؤسسيون الخاضعون لمعايير CSRD وSBTi.</p>

<h2>مزايا التنوع البيولوجي: القيمة ما وراء الكربون</h2>
<p>من المزايا التفاضلية الرئيسية لائتمانات مانغروف أبوظبي غنى المزايا الموثقة للتنوع البيولوجي، بما فيها تكاثر طير الغاق السقطري المهدد بالانقراض وأعشاش السلاحف، مما يتيح للمشترين الإبلاغ عن نتائج الكربون والتنوع البيولوجي معاً من عملية شراء ائتمان واحد.</p>

<h2>الطلب المؤسسي الأوروبي والآسيوي</html>
<p>يدفع الطلبَ الأوروبيَّ في المقام الأول الامتثالُ لتوجيه إعداد تقارير الاستدامة للشركات (CSRD)، الذي يتطلب الإفصاح عن أثر التنوع البيولوجي. أما من آسيا، فتنشط المؤسسات اليابانية والكورية الجنوبية والسنغافورية في سوق ائتمانات أبوظبي، مدفوعةً بأطر الإفصاح عن ESG المحلية والتوقعات التجارية المرتبطة بمشاريع مشتركة مع حكومة الإمارات.</p>`,
    },
  },
  {
    slug: "uae-adnoc-nature-restoration-fund",
    tag: "Biodiversity",
    tagAr: "تنوع بيولوجي",
    date: "March 2026",
    readTime: 7,
    title: {
      en: "UAE Commits $2B to Nature Restoration Through ADNOC Carbon Fund",
      ar: "الإمارات تلتزم بـ 2 مليار دولار لاستعادة الطبيعة عبر صندوق كربون ADNOC",
    },
    excerpt: {
      en: "ADNOC's new $2 billion Nature Restoration Fund will finance mangrove expansion, desert afforestation, and seagrass restoration across the UAE and Arabian Peninsula, generating an estimated 8M annual carbon credits by 2030.",
      ar: "سيمول صندوق استعادة الطبيعة الجديد لـ ADNOC بقيمة 2 مليار دولار توسع المانغروف والتشجير الصحراوي واستعادة الأعشاب البحرية عبر الإمارات وشبه الجزيرة العربية.",
    },
    content: {
      en: `<p class="lead">The Abu Dhabi National Oil Company (ADNOC) announced in March 2026 the establishment of a $2 billion Nature Restoration Fund — the largest single commitment to nature-based carbon project development in the Middle East and North Africa region. The fund will finance three categories of ecosystem restoration across the UAE and Arabian Peninsula: mangrove expansion, desert afforestation, and seagrass restoration.</p>

<h2>The Strategic Logic: From Oil Producer to Carbon Market Architect</h2>
<p>ADNOC's move into nature-based carbon finance is not a departure from its core identity — it is an extension of it. As the UAE's national oil company navigates the energy transition, generating high-quality domestic carbon credits serves multiple strategic objectives simultaneously: it contributes to the UAE's NDC commitments under the Paris Agreement, provides ADNOC with internally generated offset credits for its own Scope 1 and 2 emissions reporting, and positions the company as a credible participant in the emerging Article 6 bilateral market architecture that the UAE pioneered at COP28.</p>
<p>The $2 billion commitment is structured over a ten-year horizon (2026–2036), with approximately $400 million committed in the first tranche and operational activity beginning in Q3 2026. The fund will be managed by ADNOC's sustainability subsidiary, with an independent technical advisory board comprising representatives from Verra, the International Blue Carbon Initiative, and the UAE Ministry of Climate Change and Environment.</p>

<h2>Mangrove Expansion: 30 Million New Trees by 2030</h2>
<p>The largest single component of the Nature Restoration Fund — approximately $850 million — is allocated to mangrove expansion across Abu Dhabi, Ras Al Khaimah, and Umm Al Quwain. The programme targets the planting of 30 million new mangrove trees by 2030, building on the UAE government's existing commitment to 100 million mangrove trees by 2030 under the national biodiversity strategy.</p>
<p>New planting sites have been identified through a comprehensive remote sensing survey covering 1,200 kilometres of UAE coastline. Priority sites include the Al Dhafra region south-west of Abu Dhabi (where tidal conditions are particularly suited to Avicennia marina, the dominant UAE mangrove species), the Khor Kalba estuary in Sharjah (which already hosts one of the northernmost mangrove forests in the world), and the tidal flats of Ras Al Khaimah's eastern coast.</p>
<p>Carbon credit generation from the mangrove expansion programme will begin at year 5 post-planting, when sufficient biomass and soil carbon accumulation can be verified under VM0033. At steady-state (projected at year 12), the 30 million new trees across an estimated 18,000 hectares are expected to generate approximately 3.2 million verified tCO₂e credits annually.</p>

<h2>Desert Afforestation: Ghaf Trees and the Emirates' Native Carbon</h2>
<p>The second component — $600 million — funds large-scale desert afforestation using the Ghaf tree (Prosopis cineraria), the UAE's national tree and one of the most drought-tolerant woody species in the Arabian Peninsula. The Ghaf Programme will target 50,000 hectares of degraded desert and former agricultural land in Abu Dhabi's Al Ain region and the inland desert zones of Dubai and Sharjah.</p>
<p>Desert afforestation using native species is significantly more challenging to certify under existing voluntary carbon methodologies than coastal wetland restoration — primarily because soil carbon accumulation rates are lower and evapotranspiration losses are harder to model. ADNOC has commissioned a bespoke methodology development project through Verra's methodology development programme, expected to be finalised by Q4 2026. If approved, the Ghaf methodology would be the first certified framework for Arabian desert afforestation — a potential export of intellectual property as well as carbon credits to neighbouring countries with similar arid ecosystems.</p>
<p>Projected credit generation from the desert component, pending methodology certification, is estimated at 1.8–2.4 million tCO₂e annually at full operation by 2032.</p>

<h2>Seagrass Restoration: The Hidden Blue Carbon Asset</h2>
<p>The most scientifically novel component of the fund — $550 million — is dedicated to seagrass meadow restoration across the UAE's shallow coastal waters. UAE seagrass meadows, dominated by Halodule uninervis and Cymodocea rotundata species, cover an estimated 220,000 hectares of seafloor in waters up to 8 metres deep — making them one of the largest seagrass ecosystems in the Arabian Gulf region.</p>
<p>Seagrass is a globally undervalued blue carbon asset. Per hectare, seagrass meadows sequester carbon at rates comparable to mangroves — and they provide additional ecosystem services including juvenile fish nursery habitat, sea turtle grazing grounds, and sediment stabilisation that reduces coastal erosion. Despite this value, seagrass meadows have declined by an estimated 25% in UAE coastal waters since 1980, primarily due to vessel anchoring damage, coastal construction runoff, and water temperature increases associated with the warming of the Arabian Gulf.</p>
<p>The ADNOC fund will finance seagrass restoration through a combination of active transplanting programmes (using certified donor meadows from protected marine areas), anchor-free mooring installation in critical seagrass zones, and water quality improvement measures to reduce turbidity in priority restoration sites.</p>

<h2>8 Million Credits by 2030: The Market Impact</h2>
<p>Across all three components, ADNOC projects that the Nature Restoration Fund will generate approximately 8 million verified carbon credits annually by 2030 — a figure that would represent a more than fivefold increase in UAE domestic credit supply from the current base. This supply expansion is deliberately calibrated to meet institutional demand without flooding the market: ADNOC has engaged in preliminary off-take discussions with 14 major UAE and GCC corporations, and a portion of the fund's output has been pre-allocated under long-term corporate purchase agreements.</p>
<p>For the broader UAE carbon market, the ADNOC commitment is transformative. It provides the supply certainty that corporate buyers need to make multi-year procurement commitments, it establishes the ecosystem restoration infrastructure that future project developers can build upon, and it signals to the international investor community that the UAE is approaching nature-based climate finance with the same strategic seriousness that it has historically applied to energy infrastructure.</p>
<p>Green Earth Group is in active dialogue with ADNOC's sustainability subsidiary regarding co-development opportunities for seagrass certification methodology and project implementation support in targeted coastal restoration zones. We will publish further updates as these discussions progress.</p>`,

      ar: `<p class="lead">أعلنت شركة أبوظبي الوطنية للنفط (ADNOC) في مارس 2026 عن إنشاء صندوق استعادة الطبيعة بقيمة 2 مليار دولار — أكبر التزام فردي لتطوير مشاريع الكربون القائمة على الطبيعة في منطقة الشرق الأوسط وشمال أفريقيا. سيمول الصندوق ثلاث فئات من استعادة النظم البيئية عبر الإمارات وشبه الجزيرة العربية: توسع المانغروف، والتشجير الصحراوي، واستعادة الأعشاب البحرية.</p>

<h2>المنطق الاستراتيجي: من منتج للنفط إلى مهندس لسوق الكربون</h2>
<p>لا يُعدّ انتقال ADNOC إلى تمويل الكربون القائم على الطبيعة ابتعاداً عن هويته الجوهرية، بل هو امتداد لها. يُسهم توليد ائتمانات الكربون المحلية عالية الجودة في تحقيق أهداف الإمارات في إطار اتفاقية باريس، ويوفر لـ ADNOC ائتمانات تعويضية مُولَّدة داخلياً لإعداد تقارير انبعاثات النطاقين 1 و2، ويُرسخ مكانة الشركة بوصفها مشاركاً موثوقاً في هيكل سوق المادة 6 الثنائي الذي أرست الإمارات دعائمه في COP28.</p>

<h2>توسع المانغروف: 30 مليون شجرة جديدة بحلول 2030</h2>
<p>المكوّن الأكبر من صندوق استعادة الطبيعة — ما يقارب 850 مليون دولار — مخصص لتوسع المانغروف عبر أبوظبي ورأس الخيمة وأم القيوين. يستهدف البرنامج زراعة 30 مليون شجرة مانغروف جديدة بحلول 2030. عند الوصول إلى الحالة المستقرة (المتوقعة في السنة الثانية عشرة)، يُتوقع أن تُولّد الأشجار الجديدة على مساحة 18,000 هكتار نحو 3.2 مليون طن من مكافئ CO₂ سنوياً.</p>

<h2>التشجير الصحراوي: أشجار الغاف وكربون الإمارات الأصيل</h2>
<p>المكوّن الثاني — 600 مليون دولار — يُموّل التشجير الصحراوي واسع النطاق بشجرة الغاف (Prosopis cineraria)، الشجرة الوطنية للإمارات. يستهدف البرنامج 50,000 هكتار من الأراضي الصحراوية المتدهورة. وكلَّف ADNOC تطوير منهجية خاصة من خلال برنامج Verra، ومتوقع الانتهاء منها بنهاية 2026. إذا اعتُمدت، ستكون منهجية الغاف أول إطار معتمد للتشجير الصحراوي العربي — ذخيرة فكرية قابلة للتصدير إلى دول الجوار.</p>

<h2>استعادة الأعشاب البحرية: الأصل الأزرق المجهول</h2>
<p>المكوّن الأكثر ابتكاراً علمياً — 550 مليون دولار — مخصص لاستعادة مروج الأعشاب البحرية في المياه الساحلية الضحلة للإمارات، التي تغطي ما يُقدَّر بـ 220,000 هكتار من قاع البحر. تُقيّد الأعشاب البحرية الكربون بمعدلات مماثلة للمانغروف، وتوفر موائل أساسية لتكاثر الأسماك وهشيم السلاحف. يسعى الصندوق إلى استعادة هذه الأعشاب عبر برامج الزرع النشط وتثبيت أرساء خالية من المرساة في المناطق الحيوية.</p>

<h2>8 ملايين ائتمان بحلول 2030: الأثر السوقي</h2>
<p>يتوقع ADNOC أن يُولّد الصندوق نحو 8 ملايين ائتمان كربوني معتمد سنوياً بحلول 2030، أي ما يزيد على خمسة أضعاف عرض الإمارات المحلي الحالي. وقد أجرى ADNOC بالفعل مفاوضات أولية حول اتفاقيات شراء طويلة الأمد مع 14 شركة كبرى من الإمارات ودول الخليج. لـ Green Earth Group حوارات نشطة مع الشركة التابعة للاستدامة في ADNOC بشأن فرص التطوير المشترك لمنهجية اعتماد الأعشاب البحرية.</p>`,
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
