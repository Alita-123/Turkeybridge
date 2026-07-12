import type { Locale } from "./i18n";

/* =========================================================================
   Service detail-page content + Company Registration wizard data (EN/TR/FA)
   ========================================================================= */

export interface ServiceContent {
  slug: string;
  key: string; // icon key (components/icons.ts)
  title: string;
  tagline: string;
  intro: string;
  glance: { duration: string; budget: string; languages: string };
  steps: { title: string; desc: string }[];
  documents: string[];
  legal: { title: string; desc: string }[];
}

export interface WizardStepContent {
  title: string;
  desc: string;
  duration: string;
  documents: string[];
}

export interface RegistrationContent {
  title: string;
  tagline: string;
  intro: string;
  steps: WizardStepContent[];
  checklist: string[];
}

export const serviceSlugs = ["business", "residency", "finance", "student"] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

/** Shared, non-localized cost model (USD, indicative). */
export const REGISTRATION_COSTS = {
  serviceFee: { llc: 1200, jsc: 1900 },
  officialPerStep: [350, 500, 650, 250, 300],
  extraShareholder: 75,
  addons: { permit: 850, accounting: 1400, office: 600 },
};

/* ============================== ENGLISH ============================== */

const servicesEn: Record<ServiceSlug, ServiceContent> = {
  business: {
    slug: "business",
    key: "business",
    title: "Business & Management Consulting",
    tagline: "Enter, operate, and scale in the Turkish market with senior-level strategy.",
    intro:
      "Turkey sits at the crossroads of Europe, Asia, and the Middle East — a market of 85 million consumers and a manufacturing powerhouse. We turn that opportunity into an executable plan: validated market data, vetted local partners, and an operating model that survives contact with reality.",
    glance: { duration: "2–12 weeks per engagement", budget: "$1,500", languages: "FA · TR · EN" },
    steps: [
      { title: "Discovery & Goal Mapping", desc: "A structured intake of your product, capital, and ambitions. We define success metrics and constraints before any research begins." },
      { title: "Market & Feasibility Research", desc: "Primary and secondary research: market sizing, competitor mapping, pricing corridors, import and regulatory barriers — ending in a clear go/no-go verdict." },
      { title: "Strategy & Operating Model", desc: "Entry mode (distributor, joint venture, or subsidiary), organizational design, budget, and a 12-month roadmap with quarterly milestones." },
      { title: "Implementation & Local Partnering", desc: "Introductions to vetted distributors, suppliers, and legal/accounting partners — and we stay on as your execution office in Istanbul." },
    ],
    documents: [
      "Company profile and organization chart",
      "Financial statements for the last two fiscal years",
      "Product or service portfolio and price lists",
      "Target market and customer segment brief",
      "Existing Turkish contracts or letters of intent (if any)",
      "Power of attorney for representation (optional)",
    ],
    legal: [
      { title: "Turkish Commercial Code (No. 6102)", desc: "Governs commercial enterprises, partnerships, and corporate governance obligations." },
      { title: "Foreign Direct Investment Law (No. 4875)", desc: "Guarantees equal treatment of foreign investors and the free transfer of profits abroad." },
      { title: "Personal Data Protection Law — KVKK (No. 6698)", desc: "Compliance obligations for any business processing customer data in Turkey." },
    ],
  },

  residency: {
    slug: "residency",
    key: "residency",
    title: "Residency & Immigration Consulting",
    tagline: "Your legal status in Turkey, secured — from first permit to citizenship.",
    intro:
      "Whether you're relocating for lifestyle, family, or investment, your residence status is the foundation everything else stands on. We manage the entire lifecycle: choosing the right permit type, preparing a rejection-proof file, and planning the road to long-term residence or citizenship.",
    glance: { duration: "2–8 weeks typical processing", budget: "$600", languages: "FA · TR · EN" },
    steps: [
      { title: "Eligibility Assessment", desc: "A one-hour consultation mapping your situation to the optimal permit: short-term, family, student, work, or investor citizenship." },
      { title: "Document Preparation & Translation", desc: "We compile, sworn-translate, and notarize every document, and secure your tax number and compliant health insurance." },
      { title: "Application & Biometrics", desc: "We book your Göç İdaresi (Migration Directorate) appointment and attend it with you, submitting the complete file in person." },
      { title: "Approval, Card Delivery & Renewals", desc: "We track the file to approval, receive your kimlik card, and calendar every renewal so you never fall out of status." },
    ],
    documents: [
      "Passport valid at least 6 months beyond the application date",
      "Four biometric photographs",
      "Health insurance valid in Turkey",
      "Proof of address: notarized rental contract or title deed (tapu)",
      "Proof of sufficient financial means",
      "Turkish tax number (we obtain this for you)",
    ],
    legal: [
      { title: "Law on Foreigners & International Protection (No. 6458)", desc: "The primary statute governing all residence permit types, durations, and appeal rights." },
      { title: "Turkish Citizenship Law (No. 5901)", desc: "Defines citizenship by investment thresholds, including the $400,000 real-estate route." },
      { title: "International Workforce Law (No. 6735)", desc: "Governs work permits, which also function as residence permits for employees." },
    ],
  },

  finance: {
    slug: "finance",
    key: "finance",
    title: "Financial & Tax Consulting",
    tagline: "Pay exactly what the law requires — and not a lira more.",
    intro:
      "Turkish tax law rewards those who plan and punishes those who improvise. Our licensed financial advisors (SMMM) and tax attorneys structure your personal and corporate finances for full compliance at the lowest lawful burden — across borders where needed.",
    glance: { duration: "1–6 weeks setup, ongoing retainers", budget: "$900", languages: "FA · TR · EN" },
    steps: [
      { title: "Financial Health Check", desc: "A confidential review of your income sources, assets, entities, and current filings in every relevant jurisdiction." },
      { title: "Tax Residency & Structure Planning", desc: "We model scenarios — personal residency, holding structures, treaty relief — and quantify the exact tax outcome of each." },
      { title: "Implementation", desc: "Bank accounts, accounting systems, payroll, and e-invoice (e-fatura) infrastructure set up, tested, and handed over." },
      { title: "Ongoing Compliance & Reporting", desc: "Monthly bookkeeping, VAT and withholding filings, year-end statements, and representation in any tax audit." },
    ],
    documents: [
      "Passport and Turkish tax number",
      "Documentation of income sources and assets",
      "Existing company financial statements (if any)",
      "Bank statements for the last six months",
      "Tax residency certificate from your home country (for treaty relief)",
    ],
    legal: [
      { title: "Income Tax Law (No. 193)", desc: "Progressive personal taxation from 15% to 40%, with residency-based worldwide income rules." },
      { title: "Corporate Tax Law (No. 5520)", desc: "Corporate income tax, participation exemptions, and transfer pricing rules." },
      { title: "Double Taxation Treaties", desc: "Turkey's 85+ tax treaties determine which country taxes what — the core of cross-border planning." },
    ],
  },

  student: {
    slug: "student",
    key: "student",
    title: "Student Consulting & University Admissions",
    tagline: "The right university, a funded seat, and a smooth landing in Turkey.",
    intro:
      "Turkish universities offer internationally ranked programs at a fraction of Western tuition — many taught in English. We guide students and families through the full journey: shortlisting, applications, scholarships (including Türkiye Bursları), visas, and the first weeks on campus.",
    glance: { duration: "3–9 months before intake", budget: "$400", languages: "FA · TR · EN" },
    steps: [
      { title: "Profile & Program Matching", desc: "Academic record, budget, and career goals mapped to a shortlist of universities and programs with realistic admission odds." },
      { title: "Applications & Scholarships", desc: "We prepare applications, motivation letters, and scholarship files — including state (YTB) and university-specific grants." },
      { title: "Acceptance & Visa", desc: "Acceptance letter in hand, we manage the student visa file and consulate appointment in your home country." },
      { title: "Arrival & Settlement", desc: "Airport pickup, dormitory or apartment placement, university registration, residence permit, and local SIM/bank setup." },
    ],
    documents: [
      "High-school or bachelor diploma, apostilled and translated",
      "Official transcripts",
      "Passport",
      "Language certificates: TÖMER, IELTS/TOEFL (if available)",
      "Motivation letter and references",
      "Proof of financial guarantee for the visa file",
    ],
    legal: [
      { title: "YÖK Recognition & Equivalency (Denklik)", desc: "Foreign diplomas must be recognized by the Council of Higher Education for enrollment and post-graduation rights." },
      { title: "Student Residence — Law No. 6458, Art. 38", desc: "Student permits cover the study duration and allow limited part-time work rights." },
      { title: "University Admission Criteria (YÖS / SAT)", desc: "Each university sets its own foreign-student exam and GPA thresholds — we track all of them for you." },
    ],
  },
};

const registrationEn: RegistrationContent = {
  title: "Company Registration in Turkey",
  tagline: "From documents to your first invoice — a guided, five-step incorporation.",
  intro:
    "A Turkish limited company can be operational in as little as two weeks. Walk through the exact process below, estimate your costs instantly, and track your document checklist — then let our team execute every step with you.",
  steps: [
    {
      title: "Document Preparation & Power of Attorney",
      desc: "We collect shareholder documents, draft the company's articles, reserve your trade name, and — if you're abroad — prepare a power of attorney so incorporation proceeds without you flying in.",
      duration: "2–4 days",
      documents: ["Shareholders' passports (notarized translations)", "Power of attorney (if incorporating remotely)", "Three proposed company names", "Activity code (NACE) selection"],
    },
    {
      title: "Tax Number & Notary Stage",
      desc: "Each foreign shareholder receives a Turkish tax number. The articles of association are generated in the MERSIS system and signed before the notary or trade registry directorate.",
      duration: "1–2 days",
      documents: ["Tax number certificates", "MERSIS-generated articles of association", "Signature declarations of company directors"],
    },
    {
      title: "Trade Registry & Chamber of Commerce",
      desc: "The file is submitted to the Istanbul Trade Registry. On approval, your company is announced in the Trade Registry Gazette, becomes a legal entity, and Chamber of Commerce membership is activated.",
      duration: "2–5 days",
      documents: ["Trade registry application forms", "Bank letter for capital blockage (JSC only)", "Trade Registry Gazette publication"],
    },
    {
      title: "Tax Office & Social Security Registration",
      desc: "The tax office performs its opening inspection (yoklama), e-invoice and e-ledger systems are activated, and SGK employer registration is completed if you plan to hire staff.",
      duration: "3–7 days",
      documents: ["Rental contract for the registered office", "Signature circular", "Accountant appointment letter"],
    },
    {
      title: "Bank Account & Go-Live",
      desc: "Your corporate bank account is opened, share capital deposited, and accounting engaged — you're ready to issue your first invoice.",
      duration: "3–10 days",
      documents: ["Tax plate (vergi levhası)", "Company stamp", "Board resolution authorizing banking"],
    },
  ],
  checklist: [
    "Shareholder passports — notarized Turkish translation",
    "Power of attorney (for remote incorporation)",
    "Three candidate company names",
    "Registered office address / rental contract",
    "Turkish tax numbers for all shareholders",
    "Articles of association (MERSIS)",
    "Director signature declarations",
    "Share capital deposit plan",
    "Accountant (SMMM) engagement",
    "Company stamp order",
  ],
};

/* ============================== TURKISH ============================== */

const servicesTr: Record<ServiceSlug, ServiceContent> = {
  business: {
    slug: "business",
    key: "business",
    title: "İş ve Yönetim Danışmanlığı",
    tagline: "Türkiye pazarına kıdemli düzeyde stratejiyle girin, faaliyet gösterin ve büyüyün.",
    intro:
      "Türkiye; Avrupa, Asya ve Orta Doğu'nun kesişim noktasında, 85 milyon tüketicilik bir pazar ve bir üretim üssüdür. Bu fırsatı uygulanabilir bir plana dönüştürüyoruz: doğrulanmış pazar verileri, güvenilirliği teyit edilmiş yerel ortaklar ve gerçekle temas ettiğinde ayakta kalan bir işletme modeli.",
    glance: { duration: "Proje başına 2–12 hafta", budget: "1.500 $", languages: "FA · TR · EN" },
    steps: [
      { title: "Keşif ve Hedef Belirleme", desc: "Ürününüzün, sermayenizin ve hedeflerinizin yapılandırılmış analizi. Araştırma başlamadan önce başarı ölçütlerini ve kısıtları tanımlarız." },
      { title: "Pazar ve Fizibilite Araştırması", desc: "Birincil ve ikincil araştırma: pazar büyüklüğü, rakip haritası, fiyat koridorları, ithalat ve mevzuat engelleri — net bir 'devam/dur' kararıyla sonuçlanır." },
      { title: "Strateji ve İşletme Modeli", desc: "Giriş modeli (distribütör, ortak girişim veya iştirak), organizasyon tasarımı, bütçe ve üç aylık kilometre taşlarıyla 12 aylık yol haritası." },
      { title: "Uygulama ve Yerel Ortaklıklar", desc: "Güvenilirliği teyit edilmiş distribütör, tedarikçi ve hukuk/muhasebe ortaklarıyla tanıştırma — İstanbul'daki uygulama ofisiniz olarak yanınızda kalırız." },
    ],
    documents: [
      "Şirket profili ve organizasyon şeması",
      "Son iki mali yıla ait finansal tablolar",
      "Ürün veya hizmet portföyü ve fiyat listeleri",
      "Hedef pazar ve müşteri segmenti özeti",
      "Mevcut Türkiye sözleşmeleri veya niyet mektupları (varsa)",
      "Temsil için vekaletname (isteğe bağlı)",
    ],
    legal: [
      { title: "Türk Ticaret Kanunu (6102 Sayılı)", desc: "Ticari işletmeleri, ortaklıkları ve kurumsal yönetim yükümlülüklerini düzenler." },
      { title: "Doğrudan Yabancı Yatırımlar Kanunu (4875 Sayılı)", desc: "Yabancı yatırımcılara eşit muamele ve kârın yurt dışına serbest transferini güvence altına alır." },
      { title: "Kişisel Verilerin Korunması Kanunu — KVKK (6698 Sayılı)", desc: "Türkiye'de müşteri verisi işleyen her işletme için uyum yükümlülükleri." },
    ],
  },

  residency: {
    slug: "residency",
    key: "residency",
    title: "Oturma İzni ve Göçmenlik Danışmanlığı",
    tagline: "Türkiye'deki hukuki statünüz güvence altında — ilk izinden vatandaşlığa.",
    intro:
      "İster yaşam tarzı, ister aile, ister yatırım için taşınıyor olun; oturma statünüz her şeyin üzerinde yükseldiği temeldir. Tüm süreci biz yönetiyoruz: doğru izin türünün seçimi, ret riskine karşı sağlam bir dosya hazırlığı ve uzun dönem oturma ya da vatandaşlığa giden yolun planlanması.",
    glance: { duration: "Ortalama 2–8 hafta işlem süresi", budget: "600 $", languages: "FA · TR · EN" },
    steps: [
      { title: "Uygunluk Değerlendirmesi", desc: "Durumunuzu en uygun izinle eşleştiren bir saatlik görüşme: kısa dönem, aile, öğrenci, çalışma veya yatırımcı vatandaşlığı." },
      { title: "Belge Hazırlığı ve Çeviri", desc: "Tüm belgeleri derliyor, yeminli tercüme ettiriyor ve noter onayından geçiriyoruz; vergi numaranızı ve uygun sağlık sigortanızı temin ediyoruz." },
      { title: "Başvuru ve Biyometri", desc: "Göç İdaresi randevunuzu alıyor ve size eşlik ederek eksiksiz dosyayı bizzat teslim ediyoruz." },
      { title: "Onay, Kart Teslimi ve Yenilemeler", desc: "Dosyayı onaya kadar takip ediyor, kimlik kartınızı teslim alıyor ve statü kaybı yaşamamanız için tüm yenilemeleri takvimliyoruz." },
    ],
    documents: [
      "Başvuru tarihinden itibaren en az 6 ay geçerli pasaport",
      "Dört adet biyometrik fotoğraf",
      "Türkiye'de geçerli sağlık sigortası",
      "Adres kanıtı: noter onaylı kira sözleşmesi veya tapu",
      "Yeterli maddi imkân kanıtı",
      "Türk vergi numarası (sizin adınıza biz alıyoruz)",
    ],
    legal: [
      { title: "Yabancılar ve Uluslararası Koruma Kanunu (6458 Sayılı)", desc: "Tüm oturma izni türlerini, sürelerini ve itiraz haklarını düzenleyen temel kanun." },
      { title: "Türk Vatandaşlığı Kanunu (5901 Sayılı)", desc: "400.000 $ gayrimenkul yolu dahil, yatırım yoluyla vatandaşlık eşiklerini tanımlar." },
      { title: "Uluslararası İşgücü Kanunu (6735 Sayılı)", desc: "Çalışanlar için aynı zamanda oturma izni yerine geçen çalışma izinlerini düzenler." },
    ],
  },

  finance: {
    slug: "finance",
    key: "finance",
    title: "Finans ve Vergi Danışmanlığı",
    tagline: "Kanunun gerektirdiğini ödeyin — bir lira fazlasını değil.",
    intro:
      "Türk vergi hukuku planlayanı ödüllendirir, doğaçlama yapanı cezalandırır. Lisanslı mali müşavirlerimiz (SMMM) ve vergi avukatlarımız; kişisel ve kurumsal finansmanınızı, gerektiğinde sınır ötesini de kapsayacak şekilde, en düşük yasal yükle tam uyum içinde yapılandırır.",
    glance: { duration: "Kurulum 1–6 hafta, süreklilik esaslı", budget: "900 $", languages: "FA · TR · EN" },
    steps: [
      { title: "Finansal Durum Analizi", desc: "Gelir kaynaklarınızın, varlıklarınızın, şirketlerinizin ve ilgili tüm ülkelerdeki mevcut beyanlarınızın gizli incelemesi." },
      { title: "Vergi Mukimliği ve Yapı Planlaması", desc: "Senaryoları modelliyoruz — kişisel mukimlik, holding yapıları, anlaşma avantajları — ve her birinin vergi sonucunu rakamsallaştırıyoruz." },
      { title: "Uygulama", desc: "Banka hesapları, muhasebe sistemleri, bordro ve e-fatura altyapısı kurulur, test edilir ve teslim edilir." },
      { title: "Sürekli Uyum ve Raporlama", desc: "Aylık defter tutma, KDV ve stopaj beyanları, yıl sonu tabloları ve vergi incelemelerinde temsil." },
    ],
    documents: [
      "Pasaport ve Türk vergi numarası",
      "Gelir kaynakları ve varlıkların belgeleri",
      "Mevcut şirket finansal tabloları (varsa)",
      "Son altı aya ait banka hesap özetleri",
      "Kendi ülkenizden vergi mukimliği belgesi (anlaşma avantajı için)",
    ],
    legal: [
      { title: "Gelir Vergisi Kanunu (193 Sayılı)", desc: "Mukimlik esaslı dünya geliri kurallarıyla %15'ten %40'a artan oranlı kişisel vergilendirme." },
      { title: "Kurumlar Vergisi Kanunu (5520 Sayılı)", desc: "Kurum kazancı vergisi, iştirak istisnaları ve transfer fiyatlandırması kuralları." },
      { title: "Çifte Vergilendirmeyi Önleme Anlaşmaları", desc: "Türkiye'nin 85'i aşkın vergi anlaşması hangi ülkenin neyi vergilendireceğini belirler — sınır ötesi planlamanın özü." },
    ],
  },

  student: {
    slug: "student",
    key: "student",
    title: "Öğrenci Danışmanlığı ve Üniversite Kabulü",
    tagline: "Doğru üniversite, burslu bir kontenjan ve Türkiye'ye yumuşak bir iniş.",
    intro:
      "Türk üniversiteleri, Batı'daki ücretlerin çok altında, uluslararası sıralamalara giren programlar sunar — birçoğu İngilizce. Öğrencilere ve ailelere tüm yolculukta rehberlik ediyoruz: aday listesi, başvurular, burslar (Türkiye Bursları dahil), vizeler ve kampüsteki ilk haftalar.",
    glance: { duration: "Dönem başlangıcından 3–9 ay önce", budget: "400 $", languages: "FA · TR · EN" },
    steps: [
      { title: "Profil ve Program Eşleştirme", desc: "Akademik geçmiş, bütçe ve kariyer hedefleri; gerçekçi kabul olasılıklarına sahip üniversite ve program listesiyle eşleştirilir." },
      { title: "Başvurular ve Burslar", desc: "Başvuruları, motivasyon mektuplarını ve burs dosyalarını hazırlıyoruz — devlet (YTB) ve üniversiteye özel burslar dahil." },
      { title: "Kabul ve Vize", desc: "Kabul mektubu elimizdeyken, öğrenci vizesi dosyasını ve ülkenizdeki konsolosluk randevusunu yönetiyoruz." },
      { title: "Varış ve Yerleşme", desc: "Havalimanı karşılama, yurt veya daire yerleştirme, üniversite kaydı, oturma izni ve yerel SIM/banka kurulumu." },
    ],
    documents: [
      "Apostilli ve tercümeli lise veya lisans diploması",
      "Resmi not dökümleri (transkript)",
      "Pasaport",
      "Dil sertifikaları: TÖMER, IELTS/TOEFL (varsa)",
      "Motivasyon mektubu ve referanslar",
      "Vize dosyası için maddi güvence kanıtı",
    ],
    legal: [
      { title: "YÖK Tanıma ve Denklik", desc: "Yabancı diplomaların kayıt ve mezuniyet sonrası haklar için Yükseköğretim Kurulu tarafından tanınması gerekir." },
      { title: "Öğrenci İkameti — 6458 Sayılı Kanun, Md. 38", desc: "Öğrenci izinleri eğitim süresini kapsar ve sınırlı yarı zamanlı çalışma hakkı tanır." },
      { title: "Üniversite Kabul Kriterleri (YÖS / SAT)", desc: "Her üniversite kendi yabancı öğrenci sınavını ve not eşiklerini belirler — hepsini sizin için takip ediyoruz." },
    ],
  },
};

const registrationTr: RegistrationContent = {
  title: "Türkiye'de Şirket Kuruluşu",
  tagline: "Belgelerden ilk faturanıza — beş adımlı, rehberli kuruluş süreci.",
  intro:
    "Bir Türk limited şirketi iki hafta gibi kısa bir sürede faaliyete geçebilir. Aşağıda süreci adım adım inceleyin, maliyetinizi anında hesaplayın ve belge listenizi takip edin — sonra her adımı ekibimizle birlikte hayata geçirin.",
  steps: [
    {
      title: "Belge Hazırlığı ve Vekaletname",
      desc: "Ortak belgelerini topluyor, şirket ana sözleşmesini hazırlıyor, ticaret unvanınızı ayırtıyor ve yurt dışındaysanız uçağa binmenize gerek kalmadan süreci yürütecek vekaletnameyi düzenliyoruz.",
      duration: "2–4 gün",
      documents: ["Ortakların pasaportları (noter onaylı tercüme)", "Vekaletname (uzaktan kuruluş için)", "Üç aday şirket unvanı", "Faaliyet kodu (NACE) seçimi"],
    },
    {
      title: "Vergi Numarası ve Noter Aşaması",
      desc: "Her yabancı ortak Türk vergi numarası alır. Ana sözleşme MERSİS sisteminde oluşturulur ve noter ya da ticaret sicili müdürlüğü huzurunda imzalanır.",
      duration: "1–2 gün",
      documents: ["Vergi numarası belgeleri", "MERSİS ana sözleşmesi", "Müdürlerin imza beyannameleri"],
    },
    {
      title: "Ticaret Sicili ve Ticaret Odası",
      desc: "Dosya İstanbul Ticaret Sicili'ne sunulur. Onayla birlikte şirketiniz Ticaret Sicili Gazetesi'nde ilan edilir, tüzel kişilik kazanır ve oda üyeliği aktifleşir.",
      duration: "2–5 gün",
      documents: ["Sicil başvuru formları", "Sermaye blokajı banka mektubu (yalnızca A.Ş.)", "Ticaret Sicili Gazetesi ilanı"],
    },
    {
      title: "Vergi Dairesi ve SGK Kaydı",
      desc: "Vergi dairesi açılış yoklamasını yapar, e-fatura ve e-defter sistemleri aktifleştirilir; personel çalıştıracaksanız SGK işveren kaydı tamamlanır.",
      duration: "3–7 gün",
      documents: ["Merkez adresi kira sözleşmesi", "İmza sirküleri", "Mali müşavir sözleşmesi"],
    },
    {
      title: "Banka Hesabı ve Faaliyete Geçiş",
      desc: "Kurumsal banka hesabınız açılır, sermaye yatırılır ve muhasebe devreye girer — ilk faturanızı kesmeye hazırsınız.",
      duration: "3–10 gün",
      documents: ["Vergi levhası", "Şirket kaşesi", "Bankacılık yetki kararı"],
    },
  ],
  checklist: [
    "Ortak pasaportları — noter onaylı Türkçe tercüme",
    "Vekaletname (uzaktan kuruluş için)",
    "Üç aday şirket unvanı",
    "Merkez adresi / kira sözleşmesi",
    "Tüm ortaklar için Türk vergi numaraları",
    "Ana sözleşme (MERSİS)",
    "Müdür imza beyannameleri",
    "Sermaye yatırma planı",
    "Mali müşavir (SMMM) anlaşması",
    "Şirket kaşesi siparişi",
  ],
};

/* ============================== PERSIAN ============================== */

const servicesFa: Record<ServiceSlug, ServiceContent> = {
  business: {
    slug: "business",
    key: "business",
    title: "مشاوره کسب‌وکار و مدیریت",
    tagline: "با استراتژی در سطح مدیران ارشد وارد بازار ترکیه شوید، فعالیت کنید و رشد کنید.",
    intro:
      "ترکیه در تقاطع اروپا، آسیا و خاورمیانه قرار دارد — بازاری با ۸۵ میلیون مصرف‌کننده و یک قطب تولیدی. ما این فرصت را به برنامه‌ای اجرایی تبدیل می‌کنیم: داده‌های بازار راستی‌آزمایی‌شده، شرکای محلی معتبر و مدل عملیاتی‌ای که در برخورد با واقعیت دوام می‌آورد.",
    glance: { duration: "۲ تا ۱۲ هفته برای هر پروژه", budget: "۱٬۵۰۰ دلار", languages: "FA · TR · EN" },
    steps: [
      { title: "شناخت و تعیین اهداف", desc: "بررسی ساختاریافته محصول، سرمایه و اهداف شما. پیش از آغاز هر تحقیقی، شاخص‌های موفقیت و محدودیت‌ها را تعریف می‌کنیم." },
      { title: "تحقیقات بازار و امکان‌سنجی", desc: "پژوهش میدانی و کتابخانه‌ای: اندازه بازار، نقشه رقبا، بازه‌های قیمتی، موانع وارداتی و مقرراتی — با نتیجه شفافِ «ادامه یا توقف»." },
      { title: "استراتژی و مدل عملیاتی", desc: "شیوه ورود (توزیع‌کننده، سرمایه‌گذاری مشترک یا شعبه)، طراحی سازمان، بودجه و نقشه راه ۱۲ ماهه با نقاط عطف فصلی." },
      { title: "اجرا و شراکت محلی", desc: "معرفی به توزیع‌کنندگان، تأمین‌کنندگان و شرکای حقوقی/حسابداری معتبر — و به‌عنوان دفتر اجرایی شما در استانبول در کنارتان می‌مانیم." },
    ],
    documents: [
      "پروفایل شرکت و چارت سازمانی",
      "صورت‌های مالی دو سال مالی اخیر",
      "سبد محصولات یا خدمات و لیست قیمت",
      "خلاصه بازار هدف و بخش‌بندی مشتریان",
      "قراردادها یا تفاهم‌نامه‌های موجود در ترکیه (در صورت وجود)",
      "وکالت‌نامه برای نمایندگی (اختیاری)",
    ],
    legal: [
      { title: "قانون تجارت ترکیه (شماره ۶۱۰۲)", desc: "ناظر بر بنگاه‌های تجاری، مشارکت‌ها و الزامات حاکمیت شرکتی." },
      { title: "قانون سرمایه‌گذاری مستقیم خارجی (شماره ۴۸۷۵)", desc: "رفتار برابر با سرمایه‌گذاران خارجی و انتقال آزاد سود به خارج را تضمین می‌کند." },
      { title: "قانون حفاظت از داده‌های شخصی — KVKK (شماره ۶۶۹۸)", desc: "الزامات انطباق برای هر کسب‌وکاری که در ترکیه داده مشتریان را پردازش می‌کند." },
    ],
  },

  residency: {
    slug: "residency",
    key: "residency",
    title: "مشاوره اقامت و مهاجرت",
    tagline: "وضعیت قانونی شما در ترکیه، تضمین‌شده — از نخستین اقامت تا شهروندی.",
    intro:
      "چه برای سبک زندگی، چه خانواده و چه سرمایه‌گذاری مهاجرت می‌کنید، وضعیت اقامت شما پایه‌ای است که همه‌چیز روی آن بنا می‌شود. ما کل چرخه را مدیریت می‌کنیم: انتخاب نوع اقامت مناسب، آماده‌سازی پرونده‌ای مقاوم در برابر ریجکت و برنامه‌ریزی مسیر اقامت بلندمدت یا شهروندی.",
    glance: { duration: "زمان رسیدگی معمول ۲ تا ۸ هفته", budget: "۶۰۰ دلار", languages: "FA · TR · EN" },
    steps: [
      { title: "ارزیابی شرایط", desc: "یک جلسه مشاوره یک‌ساعته که شرایط شما را با بهترین نوع اقامت تطبیق می‌دهد: کوتاه‌مدت، خانوادگی، دانشجویی، کاری یا شهروندی سرمایه‌گذار." },
      { title: "آماده‌سازی و ترجمه مدارک", desc: "تمام مدارک را گردآوری، ترجمه رسمی و محضری می‌کنیم و شماره مالیاتی و بیمه درمانی معتبر شما را تهیه می‌کنیم." },
      { title: "ثبت درخواست و بیومتریک", desc: "وقت اداره مهاجرت (Göç İdaresi) را رزرو می‌کنیم و همراه شما حاضر می‌شویم تا پرونده کامل حضوری تحویل شود." },
      { title: "تأیید، تحویل کارت و تمدیدها", desc: "پرونده را تا تأیید پیگیری می‌کنیم، کارت اقامت (کیملیک) شما را تحویل می‌گیریم و تمام تمدیدها را زمان‌بندی می‌کنیم تا هرگز از وضعیت قانونی خارج نشوید." },
    ],
    documents: [
      "گذرنامه با حداقل ۶ ماه اعتبار پس از تاریخ درخواست",
      "چهار قطعه عکس بیومتریک",
      "بیمه درمانی معتبر در ترکیه",
      "مدرک آدرس: اجاره‌نامه محضری یا سند مالکیت (تاپو)",
      "مدرک تمکن مالی کافی",
      "شماره مالیاتی ترکیه (ما برایتان دریافت می‌کنیم)",
    ],
    legal: [
      { title: "قانون اتباع خارجی و حمایت بین‌المللی (شماره ۶۴۵۸)", desc: "قانون اصلی ناظر بر همه انواع اجازه اقامت، مدت‌ها و حق اعتراض." },
      { title: "قانون شهروندی ترکیه (شماره ۵۹۰۱)", desc: "آستانه‌های شهروندی از طریق سرمایه‌گذاری، از جمله مسیر خرید ملک ۴۰۰٬۰۰۰ دلاری را تعیین می‌کند." },
      { title: "قانون نیروی کار بین‌المللی (شماره ۶۷۳۵)", desc: "ناظر بر اجازه‌های کار که برای کارکنان، هم‌زمان حکم اجازه اقامت را دارند." },
    ],
  },

  finance: {
    slug: "finance",
    key: "finance",
    title: "مشاوره مالی و مالیاتی",
    tagline: "دقیقاً همان‌قدری بپردازید که قانون می‌گوید — و نه یک لیر بیشتر.",
    intro:
      "قانون مالیات ترکیه به برنامه‌ریزان پاداش می‌دهد و بداهه‌کاران را جریمه می‌کند. مشاوران مالی دارای مجوز (SMMM) و وکلای مالیاتی ما، امور مالی شخصی و شرکتی شما را برای انطباق کامل با کمترین بار قانونی ساختاردهی می‌کنند — در صورت نیاز، فراتر از مرزها.",
    glance: { duration: "راه‌اندازی ۱ تا ۶ هفته، سپس قرارداد مستمر", budget: "۹۰۰ دلار", languages: "FA · TR · EN" },
    steps: [
      { title: "بررسی سلامت مالی", desc: "بازبینی محرمانه منابع درآمد، دارایی‌ها، شرکت‌ها و اظهارنامه‌های فعلی شما در همه حوزه‌های قضایی مرتبط." },
      { title: "برنامه‌ریزی اقامت مالیاتی و ساختار", desc: "سناریوها را مدل می‌کنیم — اقامت مالیاتی شخصی، ساختارهای هلدینگ، مزایای معاهدات — و نتیجه مالیاتی هر یک را به عدد تبدیل می‌کنیم." },
      { title: "اجرا", desc: "حساب‌های بانکی، سیستم حسابداری، حقوق و دستمزد و زیرساخت فاکتور الکترونیکی (e-fatura) راه‌اندازی، آزمایش و تحویل می‌شود." },
      { title: "انطباق و گزارش‌دهی مستمر", desc: "دفترداری ماهانه، اظهارنامه‌های ارزش افزوده و تکلیفی، صورت‌های پایان سال و نمایندگی در هرگونه حسابرسی مالیاتی." },
    ],
    documents: [
      "گذرنامه و شماره مالیاتی ترکیه",
      "مستندات منابع درآمد و دارایی‌ها",
      "صورت‌های مالی شرکت‌های موجود (در صورت وجود)",
      "صورتحساب بانکی شش ماه اخیر",
      "گواهی اقامت مالیاتی از کشور مبدأ (برای استفاده از معاهدات)",
    ],
    legal: [
      { title: "قانون مالیات بر درآمد (شماره ۱۹۳)", desc: "مالیات تصاعدی اشخاص از ۱۵٪ تا ۴۰٪، با قاعده درآمد جهانی بر مبنای اقامت." },
      { title: "قانون مالیات شرکت‌ها (شماره ۵۵۲۰)", desc: "مالیات بر درآمد شرکت‌ها، معافیت‌های مشارکتی و قواعد قیمت‌گذاری انتقالی." },
      { title: "معاهدات اجتناب از اخذ مالیات مضاعف", desc: "بیش از ۸۵ معاهده مالیاتی ترکیه تعیین می‌کند کدام کشور چه چیزی را مشمول مالیات کند — هسته برنامه‌ریزی بین‌المللی." },
    ],
  },

  student: {
    slug: "student",
    key: "student",
    title: "مشاوره تحصیلی و پذیرش دانشگاه",
    tagline: "دانشگاه درست، صندلی بورسیه‌دار و فرودی نرم در ترکیه.",
    intro:
      "دانشگاه‌های ترکیه برنامه‌هایی با رتبه بین‌المللی و شهریه‌ای بسیار کمتر از غرب ارائه می‌دهند — بسیاری به زبان انگلیسی. ما دانشجویان و خانواده‌ها را در تمام مسیر همراهی می‌کنیم: فهرست اولیه، ثبت درخواست، بورسیه‌ها (از جمله بورس ترکیه YTB)، ویزا و هفته‌های نخست در دانشگاه.",
    glance: { duration: "۳ تا ۹ ماه پیش از شروع ترم", budget: "۴۰۰ دلار", languages: "FA · TR · EN" },
    steps: [
      { title: "تطبیق پروفایل و رشته", desc: "سوابق تحصیلی، بودجه و اهداف شغلی با فهرستی از دانشگاه‌ها و رشته‌هایی با شانس پذیرش واقع‌بینانه تطبیق داده می‌شود." },
      { title: "ثبت درخواست و بورسیه", desc: "درخواست‌ها، انگیزه‌نامه‌ها و پرونده‌های بورسیه را آماده می‌کنیم — از جمله بورس دولتی (YTB) و بورس‌های اختصاصی دانشگاه‌ها." },
      { title: "پذیرش و ویزا", desc: "با نامه پذیرش در دست، پرونده ویزای دانشجویی و وقت کنسولگری در کشور شما را مدیریت می‌کنیم." },
      { title: "ورود و اسکان", desc: "استقبال فرودگاهی، اسکان در خوابگاه یا آپارتمان، ثبت‌نام دانشگاه، اجازه اقامت و راه‌اندازی سیم‌کارت و حساب بانکی." },
    ],
    documents: [
      "دیپلم دبیرستان یا مدرک کارشناسی، با تأییدیه (آپوستیل) و ترجمه",
      "ریزنمرات رسمی",
      "گذرنامه",
      "مدارک زبان: TÖMER، آیلتس/تافل (در صورت وجود)",
      "انگیزه‌نامه و توصیه‌نامه‌ها",
      "مدرک تمکن مالی برای پرونده ویزا",
    ],
    legal: [
      { title: "تأیید و معادل‌سازی YÖK (دنکلیک)", desc: "مدارک خارجی باید برای ثبت‌نام و حقوق پس از فارغ‌التحصیلی توسط شورای آموزش عالی به رسمیت شناخته شوند." },
      { title: "اقامت دانشجویی — قانون ۶۴۵۸، ماده ۳۸", desc: "اقامت دانشجویی کل دوره تحصیل را پوشش می‌دهد و حق کار پاره‌وقت محدود می‌دهد." },
      { title: "معیارهای پذیرش دانشگاه‌ها (YÖS / SAT)", desc: "هر دانشگاه آزمون و حد نصاب معدل مخصوص خود را دارد — همه را برای شما رصد می‌کنیم." },
    ],
  },
};

const registrationFa: RegistrationContent = {
  title: "ثبت شرکت در ترکیه",
  tagline: "از مدارک تا نخستین فاکتور — ثبت شرکت در پنج گام راهنمایی‌شده.",
  intro:
    "یک شرکت با مسئولیت محدود ترکیه‌ای می‌تواند تنها در دو هفته فعال شود. فرایند دقیق را در ادامه گام‌به‌گام ببینید، هزینه خود را فوری برآورد کنید و چک‌لیست مدارک را دنبال کنید — سپس اجرای هر گام را به تیم ما بسپارید.",
  steps: [
    {
      title: "آماده‌سازی مدارک و وکالت‌نامه",
      desc: "مدارک شرکا را جمع‌آوری می‌کنیم، اساسنامه شرکت را تنظیم و نام تجاری شما را رزرو می‌کنیم — و اگر خارج از ترکیه هستید، وکالت‌نامه‌ای تهیه می‌کنیم تا بدون نیاز به پرواز شما، ثبت پیش برود.",
      duration: "۲ تا ۴ روز",
      documents: ["گذرنامه شرکا (ترجمه محضری)", "وکالت‌نامه (برای ثبت غیرحضوری)", "سه نام پیشنهادی شرکت", "انتخاب کد فعالیت (NACE)"],
    },
    {
      title: "شماره مالیاتی و مرحله محضری",
      desc: "هر شریک خارجی شماره مالیاتی ترکیه دریافت می‌کند. اساسنامه در سامانه MERSIS تولید و نزد دفتر اسناد رسمی یا اداره ثبت تجاری امضا می‌شود.",
      duration: "۱ تا ۲ روز",
      documents: ["گواهی‌های شماره مالیاتی", "اساسنامه تولیدشده در MERSIS", "اقرارنامه امضای مدیران"],
    },
    {
      title: "ثبت تجاری و اتاق بازرگانی",
      desc: "پرونده به اداره ثبت تجاری استانبول ارائه می‌شود. با تأیید، شرکت شما در روزنامه رسمی ثبت تجاری آگهی می‌شود، شخصیت حقوقی می‌یابد و عضویت اتاق بازرگانی فعال می‌گردد.",
      duration: "۲ تا ۵ روز",
      documents: ["فرم‌های درخواست ثبت", "نامه بانکی بلوکه سرمایه (فقط سهامی خاص)", "آگهی روزنامه رسمی ثبت تجاری"],
    },
    {
      title: "ثبت در اداره مالیات و تأمین اجتماعی",
      desc: "اداره مالیات بازرسی افتتاحیه (yoklama) را انجام می‌دهد، سامانه‌های فاکتور و دفاتر الکترونیکی فعال می‌شوند و در صورت استخدام نیرو، ثبت کارفرمایی SGK تکمیل می‌شود.",
      duration: "۳ تا ۷ روز",
      documents: ["اجاره‌نامه دفتر ثبتی", "گواهی امضا (سیرکولر)", "قرارداد حسابدار رسمی"],
    },
    {
      title: "حساب بانکی و آغاز فعالیت",
      desc: "حساب بانکی شرکتی افتتاح، سرمایه واریز و حسابداری فعال می‌شود — آماده صدور نخستین فاکتور خود هستید.",
      duration: "۳ تا ۱۰ روز",
      documents: ["پلاک مالیاتی (vergi levhası)", "مهر شرکت", "مصوبه هیئت‌مدیره برای امور بانکی"],
    },
  ],
  checklist: [
    "گذرنامه شرکا — ترجمه محضری ترکی",
    "وکالت‌نامه (برای ثبت غیرحضوری)",
    "سه نام پیشنهادی شرکت",
    "آدرس دفتر ثبتی / اجاره‌نامه",
    "شماره مالیاتی ترکیه برای همه شرکا",
    "اساسنامه (MERSIS)",
    "اقرارنامه امضای مدیران",
    "برنامه واریز سرمایه",
    "قرارداد حسابدار رسمی (SMMM)",
    "سفارش مهر شرکت",
  ],
};

/* ------------------------------- accessors ------------------------------- */

const servicesByLocale: Record<Locale, Record<ServiceSlug, ServiceContent>> = {
  en: servicesEn,
  tr: servicesTr,
  fa: servicesFa,
};

const registrationByLocale: Record<Locale, RegistrationContent> = {
  en: registrationEn,
  tr: registrationTr,
  fa: registrationFa,
};

export function getService(locale: Locale, slug: string): ServiceContent | undefined {
  return servicesByLocale[locale]?.[slug as ServiceSlug];
}

export function getAllServices(locale: Locale): ServiceContent[] {
  return serviceSlugs.map((slug) => servicesByLocale[locale][slug]);
}

export function getRegistration(locale: Locale): RegistrationContent {
  return registrationByLocale[locale] ?? registrationEn;
}
