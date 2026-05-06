// EN/CN translations for the 39-service catalog.
// Keyed by slug. Each entry: { en: { n, d, pt }, cn: { n, d, pt } }
//   n  — service name (h3 on cards)
//   d  — short description (p on cards)
//   pt — price text (.svc-price chip)
//
// Used by tools/build-services.js together with services-data.js.

const i18nServices = {
  // === РАЗРАБОТКА И ВЕБ ===
  'web-development': {
    en: { n: 'Websites & web apps', d: 'Corporate sites, landings, web applications and portals turnkey. Responsive design, fast loading, SEO. 152-FZ compliance out of the box.', pt: 'from 30,000 ₽' },
    cn: { n: '网站与网络应用', d: '企业网站、落地页、网络应用和门户的整体开发。响应式设计、快速加载、SEO 优化，开箱即用符合 152-FZ 法规。', pt: '起 30,000 ₽' },
  },
  'mobile-apps': {
    en: { n: 'Mobile apps', d: 'Mobile apps from MVP to production. Native and cross-platform. AI integrations, backend, push, payments.', pt: 'from 150,000 ₽' },
    cn: { n: '移动应用', d: '从 MVP 到生产环境的移动应用。原生与跨平台开发。AI 集成、后端、推送通知、支付。', pt: '起 150,000 ₽' },
  },
  'telegram-bots': {
    en: { n: 'Telegram & chat bots', d: 'Bots for Telegram, WhatsApp, VK. Sales funnels, lead capture, CRM integration, GPT/Claude AI replies. 24/7 automation.', pt: 'from 15,000 ₽' },
    cn: { n: 'Telegram 和聊天机器人', d: '面向 Telegram、WhatsApp、VK 的机器人。销售漏斗、客户接入、CRM 集成，GPT/Claude AI 回复，24/7 自动化。', pt: '起 15,000 ₽' },
  },
  'white-label': {
    en: { n: 'White-label development', d: 'Partner development for web studios and digital agencies. Sites, web apps, AI integrations under your brand. NDA, tight deadlines, quality guarantee.', pt: 'from 2,500 ₽/hour' },
    cn: { n: '白标开发', d: '为网络工作室和数字代理商提供合作开发。以您的品牌交付网站、网络应用、AI 集成。签订保密协议，严格交付。', pt: '起 2,500 ₽/小时' },
  },

  // === AI И АВТОМАТИЗАЦИЯ ===
  'ai-agents': {
    en: { n: 'AI agents & LLM solutions', d: 'Autonomous AI agents, RAG systems, GPT / Claude / Gemini / DeepSeek integration. Business process automation. Vanderbilt University and MongoDB Inc. certifications (2026).', pt: 'from 60,000 ₽' },
    cn: { n: 'AI 智能体与 LLM 方案', d: '自主 AI 智能体、RAG 系统，集成 GPT / Claude / Gemini / DeepSeek。基于神经网络的业务流程自动化。范德比尔特大学与 MongoDB 公司 2026 年认证。', pt: '起 60,000 ₽' },
  },
  'rag-systems': {
    en: { n: 'RAG document systems', d: 'Corporate AI assistants for large document sets: contracts, regulations, knowledge bases. Semantic vector search. Case study with 10,000+ documents.', pt: 'from 80,000 ₽' },
    cn: { n: 'RAG 文档系统', d: '面向海量文档（合同、规章、知识库）的企业级 AI 助手。基于含义的向量搜索，回答问题。已实现 10,000+ 文档的案例。', pt: '起 80,000 ₽' },
  },
  'voice-ai': {
    en: { n: 'Voice AI assistants', d: 'Voice AI bots with speech recognition, dialog systems, telephony integration. AI outbound calls, automated call center.', pt: 'from 50,000 ₽' },
    cn: { n: '语音 AI 助手', d: '具备语音识别和对话系统的语音 AI 机器人，集成电话与企业服务。AI 外呼、自动呼叫中心。', pt: '起 50,000 ₽' },
  },
  'ai-analytics': {
    en: { n: 'AI analytics & reporting', d: 'BI dashboards, predictive models, AI sales and finance analysis. 1C / CRM / database integration. Auto-generated management reports.', pt: 'from 60,000 ₽' },
    cn: { n: 'AI 分析与报告', d: 'BI 仪表板、预测模型、AI 销售与财务分析。集成 1C、CRM 和数据库，自动生成管理报告。', pt: '起 60,000 ₽' },
  },
  'business-automation': {
    en: { n: 'Business process automation', d: 'Sales funnels, automated mailings, document generation, service-to-service integrations, data sync. Reduce manual work by up to 80%.', pt: 'from 40,000 ₽' },
    cn: { n: '业务流程自动化', d: '销售漏斗、自动邮件、文档生成、服务间集成、数据同步。减少人工工作量最高 80%。', pt: '起 40,000 ₽' },
  },
  'accounting-automation': {
    en: { n: 'Accounting automation', d: 'AI processing of primary documents, OCR, integration with 1C, banks and marketplaces. EDI, automatic counterparty reconciliation.', pt: 'from 40,000 ₽' },
    cn: { n: '会计自动化', d: 'AI 处理原始凭证、OCR，集成 1C、网银和电商平台。电子文档流转、对账自动化。', pt: '起 40,000 ₽' },
  },
  'computer-vision': {
    en: { n: 'Computer vision systems', d: 'Object recognition, manufacturing quality control, biometrics, medical imaging diagnostics. Real production systems, not lab demos.', pt: 'from 150,000 ₽' },
    cn: { n: '计算机视觉系统', d: '物体识别、生产质量检测、生物识别、医学影像诊断。真实的生产系统，而非实验室演示。', pt: '起 150,000 ₽' },
  },
  'big-data': {
    en: { n: 'Big Data & Data Engineering', d: 'ETL pipelines, big data processing, DB migration, data warehouses (DWH). PostgreSQL, MongoDB, ClickHouse. Data prep for AI/ML.', pt: 'from 80,000 ₽' },
    cn: { n: '大数据与数据工程', d: 'ETL 管道、大数据处理、数据库迁移、数据仓库 (DWH) 建设。PostgreSQL、MongoDB、ClickHouse。为 AI/ML 准备数据。', pt: '起 80,000 ₽' },
  },
  'devops': {
    en: { n: 'DevOps as a service', d: 'CI/CD setup, Docker / Kubernetes containerisation, monitoring, auto-deploy, infrastructure optimisation. For teams without an in-house DevOps engineer.', pt: 'from 40,000 ₽/month' },
    cn: { n: 'DevOps 服务', d: 'CI/CD 配置、Docker/Kubernetes 容器化、监控、自动部署、基础设施优化。面向没有专职 DevOps 工程师的团队。', pt: '起 40,000 ₽/月' },
  },
  'russian-stack-migration': {
    en: { n: 'Migration to Russian IT stack', d: 'Replace foreign software with Russian alternatives: Atlassian → Yandex Tracker, Google Workspace → VK WorkSpace, Slack → Pachca. Import substitution under regulator requirements.', pt: 'from 80,000 ₽' },
    cn: { n: '迁移至俄罗斯 IT 栈', d: '将海外软件替换为俄罗斯本土替代方案：Atlassian → Yandex Tracker、Google Workspace → VK WorkSpace、Slack → Pachca。符合监管要求的进口替代。', pt: '起 80,000 ₽' },
  },

  // === БЕЗОПАСНОСТЬ И COMPLIANCE ===
  'rkn-audit': {
    en: { n: '152-FZ compliance audit', d: 'Audit of website compliance with the latest 152-FZ regulator (Roskomnadzor) requirements. Protection from fines up to 18M ₽. Privacy policy, consents, cookies, data localisation.', pt: 'from 5,000 ₽ (remediation — from 25,000 ₽)' },
    cn: { n: '152-FZ 合规审计', d: '依据最新版 152-FZ 法规对网站进行 Roskomnadzor 合规审计。规避最高 1800 万卢布罚款。审查隐私政策、同意书、cookie、数据本地化。', pt: '起 5,000 ₽（整改起 25,000 ₽）' },
  },
  'cybersecurity': {
    en: { n: 'Cybersecurity for SMB', d: 'Infrastructure audit, data leak protection, 152-FZ compliance, employee security training. Protection from fines up to 18M ₽.', pt: 'from 30,000 ₽' },
    cn: { n: '中小企业网络安全', d: '基础设施审计、防数据泄露、152-FZ 合规、员工安全培训。规避最高 1800 万卢布罚款。', pt: '起 30,000 ₽' },
  },
  'it-audit': {
    en: { n: 'Technical IT audit', d: 'Independent assessment of company IT systems: networks, servers, security, licensing, leak risks. Detailed report with a remediation roadmap.', pt: 'from 20,000 ₽' },
    cn: { n: '技术 IT 审计', d: '对公司 IT 系统的独立评估：网络、服务器、安全性、许可合规、泄露风险。详细报告与改进路线图。', pt: '起 20,000 ₽' },
  },
  'secure-remote-access': {
    en: { n: 'Secure remote access', d: 'Corporate secured network for safe employee access to internal resources, with traffic encryption and connection auditing.', pt: 'from 15,000 ₽' },
    cn: { n: '安全远程访问', d: '企业级加密网络，让员工安全访问内部资源；流量加密与连接审计。', pt: '起 15,000 ₽' },
  },

  // === ИНФРАСТРУКТУРА ===
  'it-infrastructure': {
    en: { n: 'Turnkey IT infrastructure', d: 'Hosting, SSL, CRM, cloud storage, monitoring, cybersecurity. A complete IT stack for business with setup and ongoing support.', pt: 'from 25,000 ₽' },
    cn: { n: '一站式 IT 基础设施', d: '托管、SSL、CRM、云存储、监控、网络安全。面向企业的完整 IT 栈，含部署与持续支持。', pt: '起 25,000 ₽' },
  },
  'remote-objects-support': {
    en: { n: 'Remote site IT support', d: 'IT for remote facilities in hard-to-reach regions: video surveillance, secured access, equipment monitoring, communications. Experience with sites in Zabaikalsky Krai.', pt: 'from 20,000 ₽' },
    cn: { n: '远程站点 IT 支持', d: '为偏远地区的设施提供 IT 支持：视频监控、安全接入、设备监控、通信。具备外贝加尔边疆区项目经验。', pt: '起 20,000 ₽' },
  },

  // === ОТРАСЛЕВЫЕ РЕШЕНИЯ ===
  'clinics-digitalization': {
    en: { n: 'Clinic digitalisation', d: 'Private clinic automation: online booking, patient reminders, medical CRM, 1C:Medicine integration, EHR, AI doctor assistant.', pt: 'from 50,000 ₽' },
    cn: { n: '诊所数字化', d: '私人诊所自动化：在线预约、患者提醒、医疗 CRM、1C:Medicine 集成、电子病历、AI 医生助手。', pt: '起 50,000 ₽' },
  },
  'logistics-automation': {
    en: { n: 'Logistics automation', d: 'Transport management systems (TMS): GPS tracking, EDI, customer notifications, marketplace integration, route optimisation.', pt: 'from 70,000 ₽' },
    cn: { n: '物流自动化', d: '运输管理系统 (TMS)：GPS 跟踪、电子文档、客户通知、电商平台集成、路线优化。', pt: '起 70,000 ₽' },
  },
  'china-it': {
    en: { n: 'China IT support & FEA', d: 'Technical localisation of Chinese IT products and equipment for the Russian market. 1C integration with Chinese services, FEA documentation, software adaptation.', pt: 'from 40,000 ₽' },
    cn: { n: '中国 IT 与外贸支持', d: '将中国 IT 产品和设备本地化适配俄罗斯市场。1C 与中国服务的集成、外贸文档、软件适配。', pt: '起 40,000 ₽' },
  },
  'it-grants': {
    en: { n: 'IT projects under grants', d: 'Applications for Bortnik Foundation, presidential grants, MinDigital subsidies. Feasibility study, project execution, reporting.', pt: 'from 50,000 ₽ or 10–20% of grant won' },
    cn: { n: '政府资助下的 IT 项目', d: '为 Bortnik 基金、总统资助、数字发展部补贴提交申请。技术经济论证、项目执行、报告。', pt: '起 50,000 ₽ 或资助金的 10–20%' },
  },
  'culture-digitalization': {
    en: { n: 'Cultural institution digitalisation', d: 'Virtual tours, AR/VR exhibits, metaverse for cultural projects. Unique case — concert in the metaverse with the Amar Sain theatre (2022). Aligned with federal Ministry of Culture programmes.', pt: 'from 80,000 ₽' },
    cn: { n: '文化机构数字化', d: '虚拟漫游、AR/VR 展览、文化项目元宇宙。独特案例——2022 年与 Amar Sain 剧院的元宇宙音乐会。契合俄罗斯文化部联邦项目。', pt: '起 80,000 ₽' },
  },

  // === ОБРАЗОВАНИЕ ===
  'it-mentoring': {
    en: { n: 'Mentoring & training', d: 'Courses and one-on-one classes in Python, AI/ML, web development, DevOps. ZabSU teaching experience. Practice-driven, working on real projects.', pt: 'from 2,500 ₽/hour' },
    cn: { n: '导师辅导与培训', d: 'Python、AI/ML、Web 开发、DevOps 课程与一对一辅导。具备外贝加尔国立大学教学经验，以真实项目驱动实践。', pt: '起 2,500 ₽/小时' },
  },
  'corporate-ai-training': {
    en: { n: 'Corporate AI training', d: 'Train your team to work with ChatGPT, Claude, neural networks. One-day workshops, corporate programmes, certificates. Customised to company tasks.', pt: 'from 50,000 ₽' },
    cn: { n: '企业 AI 培训', d: '培训员工使用 ChatGPT、Claude 和神经网络。一日工作坊、企业项目、颁发证书。可根据公司任务定制。', pt: '起 50,000 ₽' },
  },
  'ai-for-education': {
    en: { n: 'AI for educational institutions', d: 'AI assistants for schools and universities: automatic grading, lesson plan generation, AI mentor for students. Implemented case at ZabSU.', pt: 'from 100,000 ₽' },
    cn: { n: '面向教育机构的 AI', d: '面向中小学和大学的 AI 助手：自动批改、教学材料生成、学生 AI 导师。已在外贝加尔国立大学落地。', pt: '起 100,000 ₽' },
  },

  // === МЕДИА И КОНТЕНТ ===
  'digital-marketing': {
    en: { n: 'Digital marketing', d: 'SMM, content planning, AI video/photo/music generation, content repurposing, traffic analytics. Full digital promotion cycle for brands and experts.', pt: 'from 25,000 ₽/month' },
    cn: { n: '数字营销', d: '社交媒体运营、内容规划、AI 视频/图片/音乐生成、内容再利用、流量分析。面向品牌与专家的完整数字推广周期。', pt: '起 25,000 ₽/月' },
  },
  'podcast-production': {
    en: { n: 'Turnkey podcast production', d: 'Recording, editing, post-production, distribution to all platforms (Apple Podcasts, Yandex Music, VK, YouTube). AI audio enhancement. 100+ podcasts and 1M+ views experience.', pt: 'from 30,000 ₽ per episode' },
    cn: { n: '一站式播客制作', d: '录制、剪辑、后期、分发至各大平台（Apple Podcasts、Yandex Music、VK、YouTube）。AI 音频处理。100+ 播客、100 万+ 观看经验。', pt: '起 30,000 ₽/集' },
  },
  'personal-brand': {
    en: { n: 'Personal brand for experts', d: 'Personal brand strategy, video content, podcasts, social media, YouTube channel. Full cycle — from positioning to audience reach. Personal case — 1M+ YouTube views.', pt: 'from 80,000 ₽/month' },
    cn: { n: '专家个人品牌', d: '个人品牌战略、视频内容、播客、社交媒体、YouTube 频道。从定位到触达受众的全周期。本人案例——YouTube 100 万+ 观看。', pt: '起 80,000 ₽/月' },
  },
  'content-repurposing': {
    en: { n: 'AI content repurposing', d: 'Turn one hour of video into 30 short clips, 5 posts, 3 articles and a podcast. Fully AI-driven. Maximise reach without extra shooting.', pt: 'from 25,000 ₽/month' },
    cn: { n: 'AI 内容再利用', d: '把一小时视频转化为 30 条短视频、5 篇帖子、3 篇文章和一档播客。完全由 AI 驱动，无需额外拍摄即可最大化覆盖。', pt: '起 25,000 ₽/月' },
  },

  // === БЛОКЧЕЙН И ИННОВАЦИИ ===
  'blockchain-consulting': {
    en: { n: 'Blockchain consulting', d: 'Token launches, NFT, smart contracts. Legal aspects of CFA in Russia. Experience as head of RACIB FEFD office (2019–2022). Both technical and regulatory expertise.', pt: 'from 100,000 ₽' },
    cn: { n: '区块链咨询', d: '代币发行、NFT、智能合约。俄罗斯 CFA 的法律层面。曾任俄罗斯加密行业协会远东联邦区办事处负责人（2019–2022）。技术与合规双重经验。', pt: '起 100,000 ₽' },
  },
  'web3-development': {
    en: { n: 'Web3 development', d: 'NFT marketplaces, DeFi apps, real-world asset tokenisation (RWA). First-hand market expertise — organiser of the Russian Crypto Summit (Moscow, 2022).', pt: 'from 200,000 ₽' },
    cn: { n: 'Web3 开发', d: 'NFT 市场、DeFi 应用、现实资产代币化 (RWA)。一手市场经验——2022 莫斯科俄罗斯加密峰会组织者。', pt: '起 200,000 ₽' },
  },
  'metaverse-business': {
    en: { n: 'Metaverse for business', d: 'Virtual showrooms, presentations, events in the metaverse. Unique case — concert in the metaverse with the Amar Sain theatre (2022). Young niche with minimal competition.', pt: 'from 200,000 ₽' },
    cn: { n: '面向企业的元宇宙', d: '虚拟展厅、演示、元宇宙活动。独特案例——2022 年与 Amar Sain 剧院的元宇宙音乐会。新兴领域，竞争稀少。', pt: '起 200,000 ₽' },
  },
  'music-production': {
    en: { n: 'Music production & label', d: 'Full music production cycle: recording, arrangement, mastering, cover art, distribution to Spotify, Apple Music, Yandex Music. Curator pitching, sync licensing, artist promotion. AREY label on Beatport experience.', pt: 'from 15,000 ₽' },
    cn: { n: '音乐制作与厂牌', d: '完整的音乐制作流程：录音、编曲、母带处理、封面设计、发行至 Spotify、Apple Music、Yandex Music。策划推介、同步授权、艺人推广。Beatport 厂牌 AREY 经验。', pt: '起 15,000 ₽' },
  },
  'design-branding': {
    en: { n: 'Design & branding', d: 'Brand books and identity, UX/UI for websites and mobile apps, packaging design, motion design, investor decks, marketplace visuals (Wildberries, Ozon), merch design.', pt: 'from 25,000 ₽' },
    cn: { n: '设计与品牌', d: '品牌手册与视觉识别、网站与移动应用 UX/UI、包装设计、动效设计、投资人演示文稿、电商平台视觉（Wildberries、Ozon）、周边设计。', pt: '起 25,000 ₽' },
  },
  'business-legal-compliance': {
    en: { n: 'Legal protection for business', d: 'Comprehensive business protection: trademark registration, contract templates, NDAs, 152-FZ and 259-FZ compliance, business insurance, business continuity plan (BCP), compliance audit.', pt: 'from 25,000 ₽' },
    cn: { n: '企业法律保护', d: '全面企业法律保护：商标注册、客户与承包商合同模板、保密协议（NDA）、152-FZ 与 259-FZ 合规、商业保险、业务连续性计划（BCP）、合规审计。', pt: '起 25,000 ₽' },
  },
  'hr-team-management': {
    en: { n: 'IT recruiting & HR', d: 'Full team-management cycle: IT recruiting (developers, AI/ML engineers), employee onboarding, corporate culture design, internal surveys, succession planning. 16+ years of building IT teams.', pt: 'from 30,000 ₽' },
    cn: { n: 'IT 招聘与人力', d: '完整团队管理：IT 招聘（开发者、AI/ML 工程师）、员工入职、企业文化设计、内部调研、接班人规划。16+ 年 IT 团队搭建经验。', pt: '起 30,000 ₽' },
  },
  'business-analytics-unit-economics': {
    en: { n: 'Unit economics & BI analytics', d: 'Unit economics calculation, LTV (Customer Lifetime Value), CAC (Customer Acquisition Cost), cohort analysis, predictive analytics — sales and customer behaviour forecasts. A single business dashboard with all key metrics.', pt: 'from 50,000 ₽' },
    cn: { n: 'Unit 经济学与 BI', d: '计算 Unit 经济学、LTV（客户生命周期价值）、CAC（客户获取成本）、客户队列分析、预测性分析——销售与客户行为预测。一个统一的业务仪表板，呈现所有关键指标。', pt: '起 50,000 ₽' },
  },
  'operations-efficiency': {
    en: { n: 'Operational efficiency', d: 'Lean process analysis, drafting regulations and work standards, internal SLAs between departments, management reporting automation. Turning a manual business into a systematic mechanism.', pt: 'from 40,000 ₽' },
    cn: { n: '运营效率', d: '公司流程的精益分析、规章和工作标准制定、部门间内部 SLA、管理报告自动化。把人工业务转化为系统化机制。', pt: '起 40,000 ₽' },
  },
  'cfa-issuance': {
    en: { n: 'CFA issuance under 259-FZ', d: 'Full Digital Financial Assets (CFA) issuance cycle under 259-FZ: tokenisation of real estate, equipment and receivables, operator selection (Sber, T-Bank, Atomyze), legal structuring, smart contracts, secondary-market monitoring. RACIB FEFD experience (2019–2022).', pt: 'from 150,000 ₽' },
    cn: { n: '依据 259-FZ 发行 CFA', d: '依据俄罗斯 259-FZ 的完整数字金融资产（CFA）发行流程：房地产、设备及应收账款代币化，选择运营商（Sber、T-Bank、Atomyze），法律结构、智能合约、二级市场监控。RACIB 远东联邦区经验（2019–2022）。', pt: '起 150,000 ₽' },
  },
  'revenue-monetization': {
    en: { n: 'Revenue & monetisation', d: 'Revenue-growth strategies: subscription model with autopay, up-sell and cross-sell flows, bundles and packaged offers, dynamic pricing, turnkey online courses, affiliate programmes. Turning existing customers into recurring cashflow.', pt: 'from 50,000 ₽' },
    cn: { n: '收入与变现', d: '收入增长策略：订阅模式（自动续费）、追加销售与交叉销售、捆绑套餐、动态定价、一站式在线课程、联盟计划。让现有客户成为持续现金流。', pt: '起 50,000 ₽' },
  },
  'ethno-tech': {
    en: { n: 'Ethnotech & cultural IT projects', d: 'Digitalisation of ethnic and cultural heritage for museums, diasporas, regional authorities. Own case — the Buryat Universe project. Eligible for Ministry of Culture grants.', pt: 'from 100,000 ₽' },
    cn: { n: '民族技术与文化 IT 项目', d: '为博物馆、族群、地区政府数字化民族文化遗产。本人案例——“布里亚特宇宙”项目。可申请文化部资助。', pt: '起 100,000 ₽' },
  },
  'cto-as-a-service': {
    en: { n: 'CTO as a service', d: 'CTO-level consulting: technology choice, hiring, process building, technical due diligence. For startups and companies without an in-house CTO.', pt: 'from 5,000 ₽/hour or from 80,000 ₽ per strategy session' },
    cn: { n: 'CTO 即服务', d: 'CTO 级别咨询：技术选型、招聘、流程搭建、技术尽调。面向初创团队及没有专职 CTO 的公司。', pt: '起 5,000 ₽/小时 或战略会议起 80,000 ₽' },
  },
  'speaker-ai': {
    en: { n: 'Speaker & expert sessions', d: 'Talks at conferences, corporate events, open sessions. Topics: AI/ML, digitalisation, blockchain, expert personal brand. 50+ events organised, 100+ public talks.', pt: 'from 50,000 ₽ per talk' },
    cn: { n: '演讲与专家分享', d: '会议、企业活动、公开课的演讲。主题：AI/ML、数字化、区块链、专家个人品牌。已组织 50+ 活动，100+ 公开演讲。', pt: '起 50,000 ₽/场' },
  },
};

// Filter / catalog UI translations.
const i18nUi = {
  ru: {
    'svc.filter.all':            'Все',
    'svc.filter.development':    'Разработка',
    'svc.filter.ai':             'AI и автоматизация',
    'svc.filter.business':       'Бизнес и менеджмент',
    'svc.filter.security':       'Безопасность',
    'svc.filter.infrastructure': 'Инфраструктура',
    'svc.filter.industry':       'Отрасли',
    'svc.filter.education':      'Образование',
    'svc.filter.media':          'Медиа и контент',
    'svc.filter.innovation':     'Блокчейн и инновации',
    'svc.disclaimer':            'Информация носит справочный характер и не является публичной офертой. Финальная стоимость определяется индивидуально после согласования ТЗ.',
    'svc.viewAll':               'Смотреть весь каталог',
    'svc.link':                  'Подробнее',
    'svc.label':                 '03 / Чем могу помочь',
    'svc.heading':               'Услуги',
    'svc.factors.h2':            'От чего зависит стоимость',
    'svc.related.label':         'СВЯЗАННЫЕ УСЛУГИ',
    'svc.cta.tg':                'Обсудить в Telegram',
    'svc.cta.call':              'Позвонить',
    'svc.disclaimerLong':        'Информация на странице носит справочный характер и не является публичной офертой. Финальная стоимость определяется индивидуально после согласования технического задания.',
    'svc.crumbs.home':           'Главная',
    'svc.crumbs.services':       'Услуги',
    'svc.catalog.label':         'КАТАЛОГ',
    'svc.catalog.h1':            'Услуги',
    'svc.catalog.sub':           '46 услуг по 9 направлениям: разработка, AI, бизнес, безопасность, инфраструктура, отрасли, образование, медиа, инновации.',
  },
  en: {
    'svc.filter.all':            'All',
    'svc.filter.development':    'Development',
    'svc.filter.ai':             'AI & automation',
    'svc.filter.business':       'Business & management',
    'svc.filter.security':       'Security',
    'svc.filter.infrastructure': 'Infrastructure',
    'svc.filter.industry':       'Industries',
    'svc.filter.education':      'Education',
    'svc.filter.media':          'Media & content',
    'svc.filter.innovation':     'Blockchain & innovation',
    'svc.disclaimer':            'Information is for reference only and is not a public offer. Final cost is set individually after scoping.',
    'svc.viewAll':               'View full catalog',
    'svc.link':                  'Learn more',
    'svc.label':                 '03 / What I help with',
    'svc.heading':               'Services',
    'svc.factors.h2':            'What affects the price',
    'svc.related.label':         'RELATED SERVICES',
    'svc.cta.tg':                'Discuss on Telegram',
    'svc.cta.call':              'Call',
    'svc.disclaimerLong':        'The information on this page is for reference only and is not a public offer. Final pricing is determined individually after scoping the work.',
    'svc.crumbs.home':           'Home',
    'svc.crumbs.services':       'Services',
    'svc.catalog.label':         'CATALOG',
    'svc.catalog.h1':            'Services',
    'svc.catalog.sub':           '46 services across 9 areas: development, AI, business, security, infrastructure, industries, education, media, innovation.',
  },
  cn: {
    'svc.filter.all':            '全部',
    'svc.filter.development':    '开发',
    'svc.filter.ai':             'AI 与自动化',
    'svc.filter.business':       '商业与管理',
    'svc.filter.security':       '安全',
    'svc.filter.infrastructure': '基础设施',
    'svc.filter.industry':       '行业',
    'svc.filter.education':      '教育',
    'svc.filter.media':          '媒体与内容',
    'svc.filter.innovation':     '区块链与创新',
    'svc.disclaimer':            '本信息仅供参考，不构成公开要约。最终价格在确认任务书后单独商定。',
    'svc.viewAll':               '查看完整目录',
    'svc.link':                  '了解更多',
    'svc.label':                 '03 / 我能帮你做什么',
    'svc.heading':               '服务',
    'svc.factors.h2':            '影响价格的因素',
    'svc.related.label':         '相关服务',
    'svc.cta.tg':                '在 Telegram 沟通',
    'svc.cta.call':              '致电',
    'svc.disclaimerLong':        '页面上的信息仅供参考，不构成公开要约。最终价格在确认任务书后单独商定。',
    'svc.crumbs.home':           '首页',
    'svc.crumbs.services':       '服务',
    'svc.catalog.label':         '目录',
    'svc.catalog.h1':            '服务',
    'svc.catalog.sub':           '9 个方向 46 项服务：开发、AI、商业、安全、基础设施、行业、教育、媒体、创新。',
  },
};

module.exports = { i18nServices, i18nUi };
