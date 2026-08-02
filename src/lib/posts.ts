export type PostLang = { title: string; excerpt: string; content: string };
export type Post = { slug: string; date: string; lang: { [key: string]: PostLang } };

export const posts: Post[] = [
  {
    slug: "uae-biodiversity-credits-cop28",
    date: "2025-08-01",
    lang: {
      en: {
        title: "UAE Biodiversity Credits: Opportunities After COP28",
        excerpt: "COP28 in Dubai placed the UAE at the center of global climate finance. Here's how the country is leveraging its COP presidency to build a biodiversity credit market.",
        content: `<p>The UAE's hosting of COP28 in Dubai in 2023 was more than a diplomatic achievement — it positioned the country as a serious player in international climate finance. The UAE Presidency's focus on the Global Stocktake, loss and damage funding, and the UAE Consensus on tripling renewable energy capacity has been matched by domestic policy action, including the expansion of marine protected areas and mangrove restoration programs.</p>
<p>The Abu Dhabi Global Market (ADGM) has taken a leading role in developing the regulatory infrastructure for voluntary carbon and biodiversity credit markets. ADGM's Carbon Exchange, launched in 2023, provides a regulated platform for carbon credit trading in the region, with ambitions to become the Gulf's primary carbon trading hub.</p>
<p>UAE's biodiversity credit market is nascent but growing rapidly. The country's extensive mangrove restoration program — targeting 100 million mangroves by 2030 — is a key source of both carbon and biodiversity credits. Abu Dhabi's mangroves sequester 0.6-1.7 tonnes of carbon per hectare per year and provide habitat for rare marine species.</p>
<p>For international buyers seeking Middle Eastern carbon and biodiversity credits, the UAE offers regulatory stability, strong government backing, and alignment with international standards. Expect significant credit issuances from UAE mangrove and coral reef restoration projects over the next three to five years.</p>`,
      },
      ar: {
        title: "ائتمانات التنوع البيولوجي في الإمارات: الفرص بعد COP28",
        excerpt: "وضع COP28 في دبي الإمارات في مركز التمويل المناخي العالمي. إليك كيفية استفادة البلاد من رئاستها لـ COP لبناء سوق لائتمانات التنوع البيولوجي.",
        content: `<p>استضافة الإمارات لـ COP28 في دبي عام 2023 كانت أكثر من إنجاز دبلوماسي — فقد وضعت البلاد كلاعب جاد في تمويل المناخ الدولي. ركّز رئاسة الإمارات لـ COP28 على الجرد العالمي، وتمويل الخسائر والأضرار، والتوافق على مضاعفة طاقة الطاقة المتجددة ثلاث مرات.</p>
<p>تولّى مركز أبوظبي للأسواق المالية (ADGM) دوراً رائداً في تطوير البنية التحتية التنظيمية لأسواق الكربون الطوعية وائتمانات التنوع البيولوجي. يوفر بورصة الكربون التابعة لـ ADGM، التي أُطلقت عام 2023، منصة منظمة لتداول ائتمانات الكربون في المنطقة.</p>
<p>سوق ائتمانات التنوع البيولوجي في الإمارات في طور النشأة لكنه ينمو بسرعة. يُعدّ برنامج استعادة أشجار المانغروف الواسع في البلاد — الذي يستهدف 100 مليون شجرة بحلول 2030 — مصدراً رئيسياً لكلٍّ من ائتمانات الكربون والتنوع البيولوجي.</p>
<p>بالنسبة للمشترين الدوليين الباحثين عن ائتمانات الكربون والتنوع البيولوجي في الشرق الأوسط، تقدّم الإمارات استقراراً تنظيمياً ودعماً حكومياً قوياً وتوافقاً مع المعايير الدولية.</p>`,
      },
    },
  },
  {
    slug: "abu-dhabi-mangroves-carbon",
    date: "2025-07-15",
    lang: {
      en: {
        title: "Abu Dhabi Mangroves: A Carbon and Biodiversity Powerhouse",
        excerpt: "Abu Dhabi's mangrove ecosystem is one of the Gulf region's most significant carbon sinks and biodiversity hotspots. Here's the science and investment case.",
        content: `<p>Abu Dhabi's mangrove forests, stretching along 300 kilometers of coastline and covering over 160 square kilometers, represent one of the Arabian Peninsula's most significant ecological assets. Dominated by the grey mangrove (Avicennia marina), these coastal forests have expanded significantly under active government restoration programs, now making them the focal point for Gulf blue carbon investment.</p>
<p>The carbon sequestration potential of Abu Dhabi's mangroves is substantial. Studies conducted by New York University Abu Dhabi estimate average belowground carbon stocks of 120-180 tonnes CO2 equivalent per hectare in established mangrove stands — among the highest in the Arabian region. The combination of aboveground biomass and belowground peat accumulation makes mangroves particularly valuable for carbon accounting.</p>
<p>Beyond carbon, Abu Dhabi's mangroves provide critical habitat for endangered species including Socotra cormorants, Western reef herons, and hawksbill sea turtles. This biodiversity value, when certified under standards such as Plan Vivo or the Biodiversity Credit Alliance framework, creates additional revenue streams for mangrove conservation projects.</p>
<p>The Abu Dhabi Environment Agency (EAD) has partnered with international carbon standard bodies to establish a robust certification pathway for UAE mangrove credits. The first verified credit issuances are expected from projects in the Eastern Mangrove Lagoon and Al Jubail Island restoration zones.</p>`,
      },
      ar: {
        title: "أشجار المانغروف في أبوظبي: قوة للكربون والتنوع البيولوجي",
        excerpt: "تُعدّ غابات المانغروف في أبوظبي من أهم المصارف الكربونية ونقاط التنوع البيولوجي في منطقة الخليج. إليك الحجج العلمية والاستثمارية.",
        content: `<p>تمتد غابات المانغروف في أبوظبي على طول 300 كيلومتر من الساحل وتغطي أكثر من 160 كيلومتراً مربعاً، وتمثّل واحدة من أهم الأصول البيئية في شبه الجزيرة العربية. نمت هذه الغابات الساحلية بشكل ملحوظ في إطار برامج الاستعادة الحكومية الفاعلة.</p>
<p>إمكانات احتجاز الكربون في أشجار المانغروف بأبوظبي كبيرة. تُقدّر الدراسات التي أجرتها جامعة نيويورك أبوظبي متوسط مخزون الكربون تحت الأرض بـ 120-180 طناً من مكافئ ثاني أكسيد الكربون لكل هكتار في مناطق المانغروف الراسخة.</p>
<p>علاوة على الكربون، توفر أشجار المانغروف في أبوظبي موئلاً حيوياً للأنواع المهددة بالانقراض، بما فيها الكركر السقطري وطائر الرمال الغربي وسلحفاة الظهر الصفحي.</p>
<p>شراكت هيئة البيئة في أبوظبي (EAD) مع هيئات المعايير الكربونية الدولية لإنشاء مسار اعتماد قوي لائتمانات المانغروف في الإمارات.</p>`,
      },
    },
  },
  {
    slug: "adgm-carbon-markets-uae",
    date: "2025-06-20",
    lang: {
      en: {
        title: "ADGM and Carbon Markets: The UAE's Financial Framework",
        excerpt: "The Abu Dhabi Global Market is building a world-class regulatory infrastructure for carbon credit trading. Here's how it works and why it matters for buyers.",
        content: `<p>The Abu Dhabi Global Market (ADGM) has positioned itself as the Gulf's leading financial center for climate finance and voluntary carbon markets. Following the success of its cryptocurrency and fintech regulatory frameworks, ADGM has applied the same principle — clear rules, international standards alignment, and regulatory sandboxes for innovation — to the emerging carbon credit market.</p>
<p>ADGM's Carbon Exchange (ACX) provides a regulated platform for buying and selling verified carbon credits. Unlike Over-The-Counter (OTC) transactions that dominate most voluntary markets, ACX offers price transparency, standardized contract terms, and counterparty risk protection — addressing key concerns that have historically limited institutional participation in voluntary carbon markets.</p>
<p>The regulatory framework for carbon credits at ADGM is aligned with international standards from Verra, Gold Standard, and the emerging Integrity Council for the Voluntary Carbon Market (ICVCM) Core Carbon Principles. This alignment gives buyers confidence that ADGM-traded credits meet the highest quality thresholds.</p>
<p>For corporate buyers seeking to achieve net-zero commitments with UAE nexus, ADGM offers particular advantages: regulatory certainty, proximity to Gulf-region project supply, and alignment with the UAE's national Net Zero 2050 strategy. Financial institutions including Mubadala, Abu Dhabi National Energy Company (TAQA), and several international banks have already announced carbon credit sourcing programs through ADGM-regulated channels.</p>`,
      },
      ar: {
        title: "مركز أبوظبي للأسواق المالية وأسواق الكربون: الإطار المالي للإمارات",
        excerpt: "يبني مركز أبوظبي للأسواق المالية بنية تحتية تنظيمية عالمية المستوى لتداول ائتمانات الكربون. إليك كيفية عمله وأهميته للمشترين.",
        content: `<p>وضع مركز أبوظبي للأسواق المالية (ADGM) نفسه مركزاً مالياً رائداً في الخليج لتمويل المناخ وأسواق الكربون الطوعية. طبّق ADGM المبدأ ذاته — قواعد واضحة، وتوافق مع المعايير الدولية، وبيئات تنظيمية للابتكار — على سوق ائتمانات الكربون الناشئة.</p>
<p>توفر بورصة الكربون التابعة لـ ADGM (ACX) منصة منظمة لشراء وبيع ائتمانات الكربون الموثّقة. على عكس المعاملات خارج البورصة التي تهيمن على معظم الأسواق الطوعية، تتيح ACX شفافية الأسعار وبنود العقود الموحّدة وحماية مخاطر الأطراف المقابلة.</p>
<p>الإطار التنظيمي لائتمانات الكربون في ADGM متوافق مع المعايير الدولية من Verra وGold Standard ومبادئ الكربون الأساسية من مجلس نزاهة سوق الكربون الطوعي (ICVCM).</p>
<p>بالنسبة للمشترين المؤسسيين الساعين لتحقيق التزامات الحياد الكربوني بصلة بالإمارات، يقدّم ADGM مزايا خاصة: يقيناً تنظيمياً، وقرباً من عرض المشاريع الإقليمية في الخليج، وتوافقاً مع استراتيجية الحياد الكربوني 2050 للإمارات.</p>`,
      },
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}
