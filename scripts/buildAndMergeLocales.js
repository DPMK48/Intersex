import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { board, team } from "../src/components/pages/AboutUs/items.js";
import { positions } from "../src/components/pages/Career/item.js";
import { articles } from "../src/components/pages/Resources/items.js";
import { advocacyProjects } from "../src/components/pages/Home/items.js";
import { newsItem, memoItems } from "../src/components/pages/News/items.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const enPath = path.join(__dirname, "../src/locales/en.json");
const frPath = path.join(__dirname, "../src/locales/fr.json");

const en = JSON.parse(fs.readFileSync(enPath, "utf8"));
const fr = JSON.parse(fs.readFileSync(frPath, "utf8"));

// ─────────────────────────────────────────────────────────────
// 1. COMMON
// ─────────────────────────────────────────────────────────────
en.common = en.common || {};
fr.common = fr.common || {};
en.common.yes = "Yes";
fr.common.yes = "Oui";
en.common.no = "No";
fr.common.no = "Non";
en.common.sendNow = "Send now";
fr.common.sendNow = "Envoyer maintenant";

// ─────────────────────────────────────────────────────────────
// 2. JOB DETAILS COMMON KEYS
// ─────────────────────────────────────────────────────────────
en.jobDetails = {
  ...en.jobDetails,
  standardBackgroundP1:
    "Intersex Nigeria (Center for Healthcare Development and Youth Empowerment) is an intersex-led and focused Non-Governmental Organization in Nigeria. We promote and advocate for the sexual reproductive health, self-determination, bodily autonomy, and overall human rights of intersex people in all diversity in Nigeria. Through community building, advocacy, evidence-based research, empowerment, educational and informational resources on intersex-related issues to the public, partners, stakeholders, and our community.",
  standardBackgroundP2:
    "We want to see a society where intersex bodies are not stigmatized and discriminated against, and where intersex rights are recognized and respected.",
  seeMoreAbout: "See more about Intersex Nigeria",
  here: "here",
  closingDate: "APPLICATION CLOSING DATE",
  whenCandidateSelected: "When the needed candidate is selected.",
  equalOpportunity:
    "Intersex Nigeria is an equal opportunity employer and encourages applications from qualified individuals regardless of gender, sex, sexual orientation, (dis)ability, religion, or ethnic background.",
};

fr.jobDetails = {
  ...fr.jobDetails,
  standardBackgroundP1:
    "Intersex Nigeria (Centre pour le développement des soins de santé et l'autonomisation des jeunes) est une organisation non gouvernementale nigériane dirigée par et pour les personnes intersexes. Nous promouvons et défendons la santé sexuelle et reproductive, l'autodétermination, l'autonomie corporelle et l'ensemble des droits humains des personnes intersexes dans toute leur diversité au Nigeria. À travers le renforcement communautaire, le plaidoyer, la recherche fondée sur des preuves, l'autonomisation et la diffusion de ressources éducatives et informatives auprès du public, de nos partenaires et de notre communauté.",
  standardBackgroundP2:
    "Nous œuvrons pour une société où les corps intersexes ne sont ni stigmatisés ni discriminés, et où les droits intersexes sont pleinement reconnus et respectés.",
  seeMoreAbout: "En savoir plus sur Intersex Nigeria",
  here: "ici",
  closingDate: "DATE DE CLÔTURE DES CANDIDATURES",
  whenCandidateSelected: "Dès que le profil adéquat est retenu.",
  equalOpportunity:
    "Intersex Nigeria souscrit au principe de l'égalité d'accès à l'emploi et encourage les candidatures de toute personne qualifiée, sans distinction de genre, de sexe, d'orientation sexuelle, de handicap, de religion ou d'origine ethnique.",
};

// ─────────────────────────────────────────────────────────────
// 3. TEAM MEMBERS (Board + Staff)
// ─────────────────────────────────────────────────────────────
en.teamMembers = en.teamMembers || {};
fr.teamMembers = fr.teamMembers || {};

const teamTranslations = {
  "sendi-danjuma-dafwat": {
    enTitle: "Board Chairperson",
    frTitle: "Président du Conseil d'Administration",
    frText:
      "Sendi Danjuma Dafwat est un psychologue nigérian et militant de la santé mentale avec plus de six ans d'expérience dans le secteur du développement social. Il a apporté des contributions significatives à la recherche sur la santé mentale, la promotion des droits humains et le plaidoyer pour les populations vulnérables et marginalisées, notamment les femmes, les enfants, les minorités sexuelles et de genre, ainsi que les personnes intersexes.\n\nSendi s'engage activement dans le mentorat des jeunes et l'organisation communautaire, favorisant des espaces sécurisés et d'affirmation favorisant la résilience et le bien-être.",
  },
  "oluwaseyi-ogunfodunrin": {
    enTitle: "Board Secretary",
    frTitle: "Secrétaire du Conseil d'Administration",
    frText:
      "Oluwaseyi Ogunfodunrin est un expert chevronné en qualité et réglementation comptant plus d'une décennie d'expérience dans les secteurs pharmaceutique et de la santé. Il a piloté avec succès des initiatives d'assurance qualité, de conformité réglementaire et de renforcement des capacités institutionnelles.\n\nFervent défenseur de l'équité en santé et de l'accès aux soins pour tous, Oluwaseyi met ses compétences de gouvernance au service du Conseil d'Administration d'Intersex Nigeria afin de promouvoir des politiques inclusives et protectrices.",
  },
  "rose-ene-eleyi-ashonibare": {
    enTitle: "Board Member",
    frTitle: "Membre du Conseil d'Administration",
    frText:
      "Rose Ene-Eleyi Ashonibare est praticienne du droit chez Levite Solicitors & Arbitrators. Forte d'une vaste expérience en contentieux des droits humains, en arbitrage et en défense de la justice sociale, elle milite pour la protection juridique des communautés marginalisées au Nigeria.\n\nSon expertise aiguisée en droit constitutionnel et droits de la personne éclaire et renforce les interventions juridiques et stratégiques d'Intersex Nigeria.",
  },
  "rosemary-eseh-logue": {
    enTitle: "Board Member",
    frTitle: "Membre du Conseil d'Administration",
    frText:
      "Rosemary Eseh-Logue, M.D., est médecin interniste certifiée nigériano-américaine avec plus de 15 ans de pratique clinique, d'enseignement médical et de leadership en santé publique. Elle s'investit passionnément dans l'amélioration de la prise en charge médicale des personnes ayant des variations des caractéristiques sexuelles et dans la sensibilisation des praticiens de santé aux soins affirmatifs sans mutilations.",
  },
  "obioma-chukwuike": {
    enTitle: "Executive Director",
    frTitle: "Directeur Exécutif",
    frText:
      "Obioma Chukwuike est un activiste intersexe et des droits humains, chercheur et écologiste chevronné. En tant que fondateur et directeur exécutif d'Intersex Nigeria, il milite sans relâche pour la fin des interventions chirurgicales non consenties et des discriminations à l'encontre des personnes intersexes au Nigeria et en Afrique.\n\nSes travaux pionniers allient recherche empirique, plaidoyer législatif, autonomisation socio-économique et dialogue institutionnel de haut niveau pour garantir la pleine dignité et reconnaissance des personnes intersexes.",
  },
  "victoria-abutu": {
    enTitle: "Program Officer | SRHR & Youth Advocate | Public Health Specialist",
    frTitle:
      "Chargée de Programmes | Défenseuse de la SDSR et de la Jeunesse | Spécialiste en Santé Publique",
    frText:
      "Abutu Victoria Onyechi est une professionnelle dévouée de la santé publique et militante avec plus de cinq ans d'expérience dans la santé et les droits sexuels et reproductifs (SDSR), le développement des jeunes et le plaidoyer communautaire. Elle conçoit et coordonne les programmes innovants d'Intersex Nigeria pour renforcer l'accès aux soins de santé équitables.",
  },
  "grace-iho": {
    enTitle: "Program Manager",
    frTitle: "Responsable des Programmes",
    frText:
      "Grace Iho est une gestionnaire de programmes expérimentée dans le pilotage de programmes complexes et à fort impact dans le secteur du développement. Elle supervise la planification, le suivi-évaluation et la mise en œuvre stratégique des projets d'Intersex Nigeria avec rigueur et leadership.",
  },
  "victoria-augustine": {
    enTitle: "Program Officer (Empowerment)",
    frTitle: "Chargée de Programmes (Autonomisation)",
    frText:
      "Victoria est une professionnelle passionnée dotée d'une riche expérience en mobilisation communautaire et émancipation économique. Elle pilote les programmes d'autonomisation, de subventions de démarrage et de développement des compétences pour les personnes intersexes au Nigeria.",
  },
  "oyawa-olubukola": {
    enTitle: "Finance Officer",
    frTitle: "Responsable Financière",
    frText:
      "Oyawa Olubukola a débuté sa carrière dans la gestion financière au sein d'ONG nationales. Elle assure avec rigueur et transparence la gestion comptable, les rapports financiers et la conformité budgétaire des financements de projets d'Intersex Nigeria.",
  },
  "sandra-gbilah": {
    enTitle: "Admin Officer",
    frTitle: "Responsable Administrative",
    frText:
      "Sandra Gbilah est une fervente défenseuse des droits intersexes et une administratrice engagée. Elle veille au bon fonctionnement opérationnel, à la logistique des événements et au soutien administratif quotidien de l'ensemble de l'équipe.",
  },
  "festus-aigbe": {
    enTitle: "Finance Manager",
    frTitle: "Directeur Financier",
    frText:
      "Festus Aigbe est le directeur financier d'Intersex Nigeria. Comptable chevronné cumulant de nombreuses années d'expérience dans le secteur associatif et institutionnel, il garantit la soutenabilité financière, les audits et la gestion optimale des ressources fiduciaires.",
  },
  "hyellaiti-david-haniel": {
    enTitle: "Programs Associate",
    frTitle: "Associé aux Programmes",
    frText:
      "David est passionné par la narration visuelle, la création de contenus et l'engagement communautaire. Il soutient l'équipe des programmes dans la conception pédagogique, la communication numérique et l'animation des ateliers.",
  },
};

[...board, ...team].forEach((member) => {
  const slug = slugify(member.name);
  const trans = teamTranslations[slug];
  en.teamMembers[slug] = {
    title: member.title,
    text: member.text || "",
  };
  fr.teamMembers[slug] = {
    title: trans?.frTitle || member.title,
    text: trans?.frText || member.text || "",
  };
});

// ─────────────────────────────────────────────────────────────
// 4. CAREER JOBS (7 Positions)
// ─────────────────────────────────────────────────────────────
en.careerJobs = en.careerJobs || {};
fr.careerJobs = fr.careerJobs || {};

const jobTranslations = {
  "small-and-medium-enterprise-support-for-intersex-persons-in-nigeria": {
    frTitle: "Soutien aux Petites et Moyennes Entreprises pour les Personnes Intersexes au Nigeria",
    frDesc: "SEED GRANT 4.0 AMPLIFIÉ - Initiative d'autonomisation économique des personnes intersexes au Nigeria.",
    frLocation: "À l'échelle nationale, Nigeria",
    frType: "Soutien par Subventions & Formation",
    frCustomTitle: "Soutien aux PME pour les Personnes Intersexes au Nigeria - SEED GRANT 4.0 AMPLIFIÉ",
    frAbout: "Intersex Nigeria met en œuvre une initiative d'autonomisation économique visant à renforcer la résilience financière et l'indépendance des personnes intersexes au Nigeria.",
  },
  "small-and-medium-sized-enterprise-sme-development-expert": {
    frTitle: "Expert en Développement des Petites et Moyennes Entreprises (PME)",
    frDesc: "Intersex Nigeria recrute un consultant expert en développement des PME.",
    frLocation: "À l'échelle nationale, Nigeria",
    frType: "Consultance",
    frAbout: "L'expert en développement des PME dispensera une formation sur mesure en entrepreneuriat, du mentorat et un soutien au développement des entreprises pour les bénéficiaires de subventions.",
  },
  "facilitators-eee-program-2026": {
    frTitle: "Facilitateurs - Programme EEE 2026",
    frDesc: "Facilitation d'ateliers et de sessions d'autonomisation pour le programme EEE 2026.",
    frLocation: "Lagos, Nigeria",
    frType: "Consultance",
    frAbout: "Les facilitateurs guideront les participants à travers des modules interactifs axés sur le développement économique, l'éducation et l'autonomisation communautaire.",
  },
  "program-associate-consultancy": {
    frTitle: "Associé aux Programmes (Consultance)",
    frDesc: "Appui à la mise en œuvre et au suivi des programmes d'Intersex Nigeria.",
    frLocation: "Lagos, Nigeria",
    frType: "Temps plein (Hybride)",
    frAbout: "L'associé aux programmes travaillera en étroite collaboration avec l'équipe de direction pour coordonner les activités de plaidoyer et les projets sur le terrain.",
  },
  "finance-assistant": {
    frTitle: "Assistant Financier",
    frDesc: "Gestion comptable, rapprochements bancaires et suivi des décaissements de projets.",
    frLocation: "Lagos, Nigeria",
    frType: "Temps plein (Hybride)",
    frAbout: "L'assistant financier appuie le directeur financier dans la tenue de la comptabilité générale, la gestion de la petite caisse et la préparation des rapports financiers.",
  },
  "communications-strategist": {
    frTitle: "Stratège en Communication",
    frDesc: "Élaboration et exécution de la stratégie de communication externe, médias et réseaux sociaux.",
    frLocation: "Abuja, Nigeria",
    frType: "Temps plein (Hybride)",
    frAbout: "Le stratège en communication concevra des campagnes d'impact, gérera les relations publiques et assurera la visibilité des initiatives d'Intersex Nigeria.",
  },
  "administrative-officer": {
    frTitle: "Responsable Administratif",
    frDesc: "Coordination des opérations de bureau, logistique et conformité administrative.",
    frLocation: "Lagos, Nigeria",
    frType: "Temps plein (Hybride)",
    frAbout: "Le responsable administratif assure l'intendance quotidienne des locaux, l'approvisionnement en fournitures et l'organisation logistique des missions et ateliers.",
  },
};

positions.forEach((job) => {
  const slug = slugify(job.title);
  const trans = jobTranslations[slug] || {};
  en.careerJobs[slug] = {
    title: job.title,
    description: job.description,
    location: job.location,
    type: job.type,
    about: job.about || job.description || "",
    customTitle: job.customTitle || job.title,
  };
  fr.careerJobs[slug] = {
    title: trans.frTitle || job.title,
    description: trans.frDesc || job.description,
    location: trans.frLocation || job.location,
    type: trans.frType || job.type,
    about: trans.frAbout || job.about || "",
    customTitle: trans.frCustomTitle || trans.frTitle || job.customTitle || job.title,
  };
});

// ─────────────────────────────────────────────────────────────
// 5. NEWS DATA (6 Items)
// ─────────────────────────────────────────────────────────────
en.newsData = en.newsData || {};
fr.newsData = fr.newsData || {};

const newsTranslations = [
  {
    frTitle: "Le gouvernement fédéral et les OSC s'associent pour promouvoir des politiques de santé inclusives",
    frText: "Le gouvernement fédéral nigérian et les organisations de la société civile ont noué un partenariat stratégique pour garantir que les besoins médicaux des personnes intersexes soient pleinement intégrés dans les réformes du système national de santé.",
  },
  {
    frTitle: "Gouvernement fédéral et OSC : ensemble pour des politiques de santé inclusives",
    frText: "Des parties prenantes issues des ministères et de la société civile se sont réunies pour formuler des directives pratiques visant à éliminer les barrières d'accès aux soins pour les personnes intersexes.",
  },
  {
    frTitle: "Santé au Nigeria : la communauté intersexe appelle à des réformes pour combler le déficit de connaissances",
    frText: "Intersex Nigeria exhorte les professionnels de santé et les universités à intégrer les variations des caractéristiques sexuelles dans les programmes de formation médicale afin d'éviter les diagnostics erronés et les mutilations.",
  },
  {
    frTitle: "Le gouvernement fédéral s'engage à inclure les personnes intersexes dans l'agenda national de santé",
    frText: "Le ministère fédéral de la Santé et du Bien-être social annonce des démarches concrètes pour intégrer les réalités intersexes dans les protocoles nationaux de prise en charge hospitalière.",
  },
  {
    frTitle: "Intersex Nigeria vous invite à deux événements majeurs dédiés à la sensibilisation et au plaidoyer !",
    frText: "Rejoignez Intersex Nigeria pour une série d'ateliers et d'échanges communautaires marquants visant à célébrer la diversité corporelle et à revendiquer l'égalité des droits au Nigeria.",
  },
  {
    frTitle: "Le gouvernement exhorté à mettre fin aux discriminations contre les personnes intersexes",
    frText: "Des militants et experts juridiques appellent les autorités législatives et exécutives à adopter des mesures fermes contre la stigmatisation et pour la protection des droits fondamentaux des personnes intersexes.",
  },
];

newsItem.forEach((item, idx) => {
  en.newsData[idx] = {
    title: item.title,
    text: item.text,
  };
  fr.newsData[idx] = {
    title: newsTranslations[idx]?.frTitle || item.title,
    text: newsTranslations[idx]?.frText || item.text,
  };
});

// ─────────────────────────────────────────────────────────────
// 6. MEMO DATA (Official Statement)
// ─────────────────────────────────────────────────────────────
en.memoData = en.memoData || {};
fr.memoData = fr.memoData || {};

const memo = memoItems[0];
if (memo) {
  en.memoData["0"] = {
    title: memo.title,
    subtitle: memo.subtitle,
    description: memo.description,
    intro: memo.intro,
    concerns: memo.concerns,
    conclusion: memo.conclusion,
  };

  fr.memoData["0"] = {
    title:
      "Déclaration officielle : Intersex Nigeria réagit à la nouvelle politique du Comité International Olympique (CIO) sur les tests de féminité ; préjudices et discriminations envers les femmes intersexes",
    subtitle:
      "Intersex Nigeria condamne fermement la nouvelle politique de vérification du sexe du CIO et appelle à l'inclusion, à l'équité et au respect des droits humains dans le sport",
    description:
      "Déclaration officielle sur la nouvelle politique du CIO relative aux tests de féminité et à la discrimination envers les femmes intersexes dans le sport.",
    intro: [
      "Intersex Nigeria (Centre pour le développement des soins de santé et l'autonomisation des jeunes) exprime sa vive préoccupation et sa ferme opposition face à la récente décision du Comité International Olympique (CIO) d'introduire des réglementations plus restrictives sur les tests de sexe visant les femmes présentant des variations des caractéristiques sexuelles (personnes intersexes) dans les compétitions sportives.",
      "Cette politique constitue un recul alarmant pour les droits humains, la dignité corporelle et l'équité sportive, ciblant de manière disproportionnée les femmes du Sud global et perpétuant une surveillance invasive et discriminatoire de leur anatomie.",
      "Exiger des femmes athlètes qu'elles modifient médicalement leur corps naturel par des interventions chirurgicales ou des traitements hormonaux forcés viole les principes éthiques fondamentaux de l'autonomie corporelle et du consentement libre et éclairé.",
      "Le sport doit être un espace d'émancipation, de célébration du talent humain et d'inclusion, et non une arène d'exclusion et de stigmatisation basée sur des préjugés biologiques dépassés.",
    ],
    concerns: [
      {
        title: "Violation de l'autonomie corporelle et des droits humains",
        body: "Contraindre des athlètes féminines en parfaite santé à subir des examens génitaux invasifs ou des thérapies hormonales obligatoires pour pouvoir concourir viole les conventions internationales des droits humains et le droit à l'intégrité physique.",
      },
      {
        title: "Impact disproportionné sur les femmes du Sud global",
        body: "L'histoire des tests de féminité dans l'athlétisme démontre que ces règles ciblent quasi exclusivement les femmes noires, africaines et du Sud global, renforçant les stéréotypes raciaux et eurocentrés de la féminité.",
      },
      {
        title: "Défaut de consensus scientifique et médical",
        body: "Il n'existe aucune preuve scientifique indiscutable établissant qu'un taux d'androgènes endogène naturellement plus élevé confère à lui seul un avantage injuste par rapport à la multitude d'autres avantages génétiques célébrés chez les athlètes masculins.",
      },
      {
        title: "Détresse psychologique et fin de carrière injustifiée",
        body: "Ces politiques créent une humiliation publique, brisent des carrières durement bâties et causent des traumatismes psychologiques durables à des athlètes qui ont dédié leur vie à l'excellence sportive.",
      },
    ],
    conclusion:
      "Intersex Nigeria appelle le CIO, les fédérations sportives internationales et les gouvernements nationaux à révoquer immédiatement ces directives discriminatoires et à adopter une approche sportive résolument fondée sur la compassion, l'inclusion et le plein respect des droits humains de chaque individu.",
  };
}

// ─────────────────────────────────────────────────────────────
// 7. ARTICLES DATA (6 Articles)
// ─────────────────────────────────────────────────────────────
en.articlesData = en.articlesData || {};
fr.articlesData = fr.articlesData || {};

const articlesTranslations = {
  "why-menstrual-healthcare-for-intersex-people-matters": {
    frTitle: "Pourquoi la santé menstruelle des personnes intersexes est primordiale",
    frText: "La santé menstruelle est trop souvent abordée de manière binaire. Cet article explore les réalités vécues par les personnes intersexes et la nécessité de soins menstruels inclusifs et bienveillants.",
    frPost: "La santé menstruelle est un droit humain fondamental. Pourtant, les personnes intersexes ayant des menstruations font face à des barrières invisibles, à l'incompréhension médicale et à une stigmatisation persistante. Il est urgent d'adapter les politiques de santé publique pour garantir une prise en charge digne et accessible à toutes et tous.",
  },
  "the-intersection-of-our-narratives-in-the-face-of-discrimination": {
    frTitle: "L'intersection de nos récits face à la discrimination",
    frText: "Récits puissants et réflexions croisées sur la résilience des personnes intersexes naviguant entre préjugés sociaux, barrières institutionnelles et affirmation de soi.",
    frPost: "Nos histoires individuelles se rejoignent dans un combat commun pour la reconnaissance. Face aux discriminations structurelles, le partage de nos voix et la solidarité communautaire constituent nos remparts les plus solides pour bâtir une société juste et respectueuse des diversités.",
  },
  "unite-to-end-violence-against-women-and-girls": {
    frTitle: "UNiTE pour mettre fin à la violence à l'égard des femmes et des filles",
    frText: "Plaidoyer d'Intersex Nigeria dans le cadre de la campagne mondiale des 16 jours d'activisme contre la violence basée sur le genre, incluant les femmes et filles intersexes.",
    frPost: "La violence basée sur le genre touche de plein fouet les femmes et les filles dans toute leur diversité, y compris celles nées avec des variations des caractéristiques sexuelles. Mettre fin aux violences exige d'inclure expressément les violences médicales et les mutilations génitales intersexes dans les stratégies nationales.",
  },
  "gender-based-violence-against-intersex-people-hidden-realities-and-the-urgent-call-for-justice": {
    frTitle: "Violence basée sur le genre contre les personnes intersexes : réalités cachées et appel urgent à la justice",
    frText: "Analyse approfondie des formes méconnues de violences subies par les personnes intersexes au Nigeria, de l'enfance à l'âge adulte, et pistes d'action pour la justice.",
    frPost: "Derrière le silence social se cachent des interventions médicales non consenties, des abandons d'enfants et des violences psychologiques systématiques. Cet article dénonce ces atteintes aux droits fondamentaux et formule des recommandations claires pour la protection légale des personnes intersexes.",
  },
  "towards-beijing-30-confronting-gender-based-violence-against-women-and-girls-in-their-diversity": {
    frTitle: "Vers Beijing +30 : affronter la violence basée sur le genre envers les femmes et les filles dans leur diversité",
    frText: "Bilan stratégique à l'approche du 30e anniversaire de la Déclaration de Beijing : intégrer pleinement les droits et la protection des femmes intersexes.",
    frPost: "Trente ans après la Déclaration historique de Beijing, les promesses d'égalité doivent embrasser toutes les femmes sans exception. La communauté internationale et les États doivent reconnaître et combattre les violences spécifiques vécues par les femmes et les filles intersexes.",
  },
  "photo-story-of-intersex-persons-in-nigeria": {
    frTitle: "Récit photographique des personnes intersexes au Nigeria",
    frText: "Une série documentaire captivante illustrant la dignité, la créativité, la force et le quotidien de membres de la communauté intersexe à travers le pays.",
    frPost: "À travers des portraits authentiques et des récits intimes, ce projet photographique brise les stéréotypes et célèbre la fierté, la beauté et l'humanité des personnes intersexes au Nigeria.",
  },
};

articles.forEach((art) => {
  const slug = slugify(art.title);
  const trans = articlesTranslations[slug] || {};
  en.articlesData[slug] = {
    title: art.title,
    text: art.text,
    post: art.post || art.text || "",
  };
  fr.articlesData[slug] = {
    title: trans.frTitle || art.title,
    text: trans.frText || art.text,
    post: trans.frPost || art.post || art.text || "",
  };
});

// ─────────────────────────────────────────────────────────────
// 8. PROGRAMS DATA (10 Advocacy Projects)
// ─────────────────────────────────────────────────────────────
en.programsData = en.programsData || {};
fr.programsData = fr.programsData || {};

const programsTranslations = {
  "dialogue-on-strengthening-child-protection-and-addressing-harmful-practices-affecting-people-with-variations-in-sex-development-intersex-people": {
    frTitle: "Dialogue sur le renforcement de la protection de l'enfance et la lutte contre les pratiques néfastes affectant les personnes présentant des variations du développement sexuel (personnes intersexes)",
    frText: "Table ronde multipartite réunissant décideurs, professionnels de santé et acteurs de la protection de l'enfance pour prévenir les chirurgies non urgentes sur les nourrissons.",
  },
  "national-youth-service-sensitization-youth-focused-advocacy-2025": {
    frTitle: "Sensibilisation auprès du Corps National des Jeunes (Plaidoyer Jeunesse) 2025",
    frText: "Campagne de formation et de sensibilisation déployée dans les camps d'orientation du NYSC à travers le Nigeria pour démystifier l'intersexualité auprès des jeunes diplômés.",
  },
  "csos-stakeholders-engagement-in-makurdi-benue-state-nigeria": {
    frTitle: "Mobilisation des parties prenantes et OSC à Makurdi, État de Benue, Nigeria",
    frText: "Atelier consultatif visant à bâtir des coalitions locales de défense des droits humains et à protéger les personnes intersexes contre la stigmatisation dans la région Centre-Nord.",
  },
  "a-sensitization-workshop-for-the-federal-ministry-of-health-and-social-welfare-on-understanding-intersex-and-inclusive-intersex-healthcare": {
    frTitle: "Atelier de sensibilisation pour le Ministère Fédéral de la Santé et du Bien-être Social sur la compréhension de l'intersexualité et des soins inclusifs",
    frText: "Session technique de haut niveau avec les directeurs et experts ministériels pour élaborer des directives de soins respectueuses du consentement et de l'éthique médicale.",
  },
  "national-youth-service-sensitization-youth-focused-advocacy-2024": {
    frTitle: "Sensibilisation auprès du Corps National des Jeunes (Plaidoyer Jeunesse) 2024",
    frText: "Deuxième édition de notre initiative phare engageant des milliers de jeunes appelés au service national comme ambassadeurs de la diversité corporelle et des droits humains.",
  },
  "media-engagement-on-positive-media-representation-of-intersex-persons-in-nigeria": {
    frTitle: "Engagement des médias pour une représentation positive des personnes intersexes au Nigeria",
    frText: "Formation de journalistes, rédacteurs en chef et créateurs de contenus pour encourager un traitement médiatique éthique, digne et bien informé des sujets intersexes.",
  },
  "national-youth-service-sensitization-youth-focused-advocacy-2023": {
    frTitle: "Sensibilisation auprès du Corps National des Jeunes (Plaidoyer Jeunesse) 2023",
    frText: "Lancement pionnier de la caravane de sensibilisation NYSC ayant touché directement plus de 5 000 jeunes professionnels dans les États clés du Nigeria.",
  },
  "world-untold-echoes-of-silence-an-educative-and-entertaining-stage-play-project": {
    frTitle: "« World Untold, Echoes Of Silence » - (Projet de pièce de théâtre éducative et artistique)",
    frText: "Production théâtrale novatrice mêlant art dramatique et sensibilisation sociale pour toucher un large public sur les réalités et espoirs des familles de personnes intersexes.",
  },
  "radio-sensitization-in-local-communities": {
    frTitle: "Sensibilisation radiophonique dans les communautés locales",
    frText: "Émissions radiophoniques interactives diffusées en plusieurs langues locales pour lutter contre la désinformation et promouvoir la protection des enfants intersexes à la base.",
  },
  "viral-project": {
    frTitle: "Projet VIRAL",
    frText: "Campagne digitale interactive mobilisant les créateurs de contenus et les réseaux sociaux pour amplifier la visibilité intersexe et contrer la haine en ligne.",
  },
};

advocacyProjects.forEach((proj) => {
  const slug = slugify(proj.title);
  const trans = programsTranslations[slug] || {};
  en.programsData[slug] = {
    title: proj.title,
    text: proj.text,
  };
  fr.programsData[slug] = {
    title: trans.frTitle || proj.title,
    text: trans.frText || proj.text,
  };
});

// ─────────────────────────────────────────────────────────────
// 9. REPORT ABUSE FORM
// ─────────────────────────────────────────────────────────────
en.reportAbuseForm = en.reportAbuseForm || {};
fr.reportAbuseForm = fr.reportAbuseForm || {};

en.reportAbuseForm = {
  ...en.reportAbuseForm,
  intro:
    "Intersex Nigeria is committed to providing a safe, affirming, and supportive environment for all community members, partners, and stakeholders. If you have experienced, witnessed, or suspect any form of abuse, misconduct, exploitation, or safeguarding concern, please use this form to report it. Reports can be submitted anonymously or with your contact details if you would like us to follow up with you. All information will be treated with the strictest confidentiality and reviewed only by the Safeguarding team.",
  fullName: "Full Name (Optional)",
  yourAnswer: "Your answer",
  contactMethod: "Email or Phone Number (Optional — required if you would like follow-up)",
  reportingFor: "Who are you reporting this for?",
  myself: "Myself",
  someoneElse: "Someone else",
  safeTime: "If you shared contact details, what is the safest way and time to reach you?",
  ageRange: "Age Range (Optional)",
  otherColon: "Other:",
  natureOfIncident: "What is the nature of the incident?",
  describeIncident: "Please describe what happened (Share as much detail as you feel comfortable with)",
  personSafe: "Is the person affected currently in a safe place?",
  yes: "Yes",
  no: "No",
  maybe: "Maybe",
  needsImmediateSupport: "Do you or the person affected need immediate emotional, medical, or legal support?",
  supportType: "What type of support are you hoping to receive from Intersex Nigeria?",
  wantContact: "Would you like someone from our Safeguarding team to contact you?",
  permissionToReach: "Do you give us permission to securely store this information and reach out if necessary?",
  notYet: "Not yet",
  additionalInfo: "Is there anything else you would like us to know?",
  closingNote:
    "We take every report seriously. Your courage in coming forward helps protect our entire community. If you are in immediate physical danger, please also reach out to local emergency services or a trusted support person.",
  clearForm: "Clear form",
  incidentOptions: {
    "Harassment": "Harassment",
    "Discrimination": "Discrimination",
    "Bullying": "Bullying",
    "Physical abuse": "Physical abuse",
    "Sexual abuse": "Sexual abuse",
    "Emotional abuse": "Emotional abuse",
    "Boundary violation": "Boundary violation",
    "Misconduct during an Intersex Nigeria activity": "Misconduct during an Intersex Nigeria activity",
    "Online misconduct": "Online misconduct",
    "Concerns about a staff member or volunteer": "Concerns about a staff member or volunteer",
    "Safety risk": "Safety risk",
  },
  supportOptions: {
    "Confidential conversation": "Confidential conversation",
    "Safety planning": "Safety planning",
    "Referral to a support service": "Referral to a support service",
    "Follow up with the person affected": "Follow up with the person affected",
    "Not sure yet": "Not sure yet",
  },
  ageOptions: {
    "Under 18": "Under 18",
    "18-24": "18-24",
    "25-34": "25-34",
    "Prefer not to say": "Prefer not to say",
  },
};

fr.reportAbuseForm = {
  ...fr.reportAbuseForm,
  intro:
    "Intersex Nigeria s'engage à offrir un environnement sécurisé, bienveillant et solidaire à tous les membres de la communauté, partenaires et parties prenantes. Si vous avez subi, été témoin ou soupçonnez une forme quelconque d'abus, d'inconduite, d'exploitation ou de manquement à la protection, veuillez utiliser ce formulaire pour le signaler. Les signalements peuvent être soumis de manière anonyme ou avec vos coordonnées si vous souhaitez un suivi. Toutes les informations seront traitées dans la plus stricte confidentialité et examinées uniquement par l'équipe de protection.",
  fullName: "Nom complet (Facultatif)",
  yourAnswer: "Votre réponse",
  contactMethod: "E-mail ou numéro de téléphone (Facultatif — requis si vous souhaitez un suivi)",
  reportingFor: "Pour qui effectuez-vous ce signalement ?",
  myself: "Moi-même",
  someoneElse: "Quelqu'un d'autre",
  safeTime: "Si vous avez fourni vos coordonnées, quel est le moyen et le moment le plus sûr pour vous contacter ?",
  ageRange: "Tranche d'âge (Facultatif)",
  otherColon: "Autre :",
  natureOfIncident: "Quelle est la nature de l'incident ?",
  describeIncident: "Veuillez décrire ce qui s'est passé (partagez autant de détails que vous le souhaitez)",
  personSafe: "La personne concernée est-elle actuellement en sécurité ?",
  yes: "Oui",
  no: "Non",
  maybe: "Peut-être",
  needsImmediateSupport: "La personne concernée a-t-elle besoin d'un soutien émotionnel, médical ou juridique immédiat ?",
  supportType: "Quel type de soutien espérez-vous recevoir d'Intersex Nigeria ?",
  wantContact: "Souhaitez-vous qu'un membre de notre équipe de protection vous contacte ?",
  permissionToReach: "Nous autorisez-vous à conserver ces informations en toute sécurité et à vous contacter si nécessaire ?",
  notYet: "Pas encore",
  additionalInfo: "Souhaitez-vous nous faire part d'autres éléments ?",
  closingNote:
    "Nous prenons chaque signalement très au sérieux. Votre courage contribue à protéger l'ensemble de notre communauté. Si vous êtes en danger physique immédiat, veuillez également contacter les services d'urgence locaux ou une personne de confiance.",
  clearForm: "Effacer le formulaire",
  incidentOptions: {
    "Harassment": "Harcèlement",
    "Discrimination": "Discrimination",
    "Bullying": "Intimidation",
    "Physical abuse": "Abus physique",
    "Sexual abuse": "Abus sexuel",
    "Emotional abuse": "Abus émotionnel / psychologique",
    "Boundary violation": "Violation des limites personnelles",
    "Misconduct during an Intersex Nigeria activity": "Inconduite lors d'une activité d'Intersex Nigeria",
    "Online misconduct": "Inconduite ou harcèlement en ligne",
    "Concerns about a staff member or volunteer": "Préoccupations concernant un membre du personnel ou un bénévole",
    "Safety risk": "Risque pour la sécurité",
  },
  supportOptions: {
    "Confidential conversation": "Échange confidentiel",
    "Safety planning": "Planification de sécurité",
    "Referral to a support service": "Orientation vers un service d'accompagnement spécialisé",
    "Follow up with the person affected": "Suivi personnalisé avec la personne concernée",
    "Not sure yet": "Pas encore certain(e)",
  },
  ageOptions: {
    "Under 18": "Moins de 18 ans",
    "18-24": "18-24 ans",
    "25-34": "25-34 ans",
    "Prefer not to say": "Préfère ne pas répondre",
  },
};

// ─────────────────────────────────────────────────────────────
// 10. REPORT RIGHTS VIOLATION FORM
// ─────────────────────────────────────────────────────────────
en.reportViolationForm = en.reportViolationForm || {};
fr.reportViolationForm = fr.reportViolationForm || {};

en.reportViolationForm = {
  ...en.reportViolationForm,
  email: "Email address",
  emailPlaceholder: "Your email address",
  phone: "Phone Number",
  phonePlaceholder: "Your phone number",
  fullName: "Full Name",
  fullNamePlaceholder: "Your legal or chosen name",
  preferredName: "Preferred Name",
  preferredNamePlaceholder: "Name you want us to address you by",
  pronoun: "Pronoun",
  pronounPlaceholder: "e.g. He/Him, She/Her, They/Them",
  age: "Age",
  agePlaceholder: "Your age",
  genderIdentity: "Gender Identity",
  genderIdentityPlaceholder: "e.g. Male, Female, Non-binary, etc.",
  sexualOrientation: "Sexual Orientation",
  sexualOrientationPlaceholder: "e.g. Heterosexual, Queer, etc.",
  location: "Location",
  locationPlaceholder: "City, State, Country",
  typeOfViolation: "Type of Violation",
  selectViolationPlaceholder: "Select the type of violation",
  describeOtherPlaceholder: "Please describe the violation...",
  submittingForSelf: "Are you submitting this report for yourself?",
  relationship: "If you are submitting this report for someone else, what is your relationship to the person?",
  relationshipPlaceholder: "e.g. Friend, Colleague, Family member",
  incidentType: "Type of incident",
  incidentTypePlaceholder: "Brief title or nature of incident",
  incidentLocation: "Location where the incident occurred",
  incidentLocationPlaceholder: "State, City, Community, or Specific place",
  narrative: "Narrative of what happened",
  narrativeHint:
    "Please provide as much detail as you can: what happened, when, who was involved, and any actions taken so far.",
  narrativePlaceholder: "Describe the incident in detail...",
  supportNeeded: "What support do you need, or what would you like Intersex Nigeria to do?",
  supportNeededPlaceholder: "e.g. Legal advice, medical referral, psychosocial support, advocacy, emergency shelter...",
  wantContact: "Would you like someone from Intersex Nigeria to contact you regarding this report?",
  privacyFooter:
    "Intersex Nigeria respects your privacy. All information submitted through this form will be stored securely and treated with strict confidentiality. It will not be shared with any third party without your explicit consent.",
  options: {
    "Non-consensual medical surgery (Intersex Genital Mutilation) IGM":
      "Non-consensual medical surgery (Intersex Genital Mutilation) IGM",
    "Forced hormone treatment without informed consent":
      "Forced hormone treatment without informed consent",
    "Denial of medical diagnosis or records to the person":
      "Denial of medical diagnosis or records to the person",
    "Discrimination in healthcare settings":
      "Discrimination in healthcare settings",
    "Stigma & Discrimination in spaces.":
      "Stigma & Discrimination in spaces.",
    "Employment discrimination based on intersex status":
      "Employment discrimination based on intersex status",
    "Discrimination in education settings":
      "Discrimination in education settings",
    "Physical violence or abuse": "Physical violence or abuse",
    "Sexual violence or abuse": "Sexual violence or abuse",
    "Forced or coerced gender assignment":
      "Forced or coerced gender assignment",
    "Family or domestic violence related to intersex status":
      "Family or domestic violence related to intersex status",
    "Denial of identity documents or legal recognition":
      "Denial of identity documents or legal recognition",
    "Social exclusion or ostracism from a community or religious group":
      "Social exclusion or ostracism from a community or religious group",
    "Online harassment or doxing": "Online harassment or doxing",
    "Psychological abuse or coercion": "Psychological abuse or coercion",
    "Institutional neglect or failure of duty of care":
      "Institutional neglect or failure of duty of care",
    "Invasion of Privacy": "Invasion of Privacy",
    "Conversation of Practice (Therapy)":
      "Conversation of Practice (Conversion Therapy)",
    "Unlawful Arrest or Blackmail": "Unlawful Arrest or Blackmail",
    "Outing": "Outing",
    "Other — describe below": "Other — describe below",
  },
};

fr.reportViolationForm = {
  ...fr.reportViolationForm,
  email: "Adresse e-mail",
  emailPlaceholder: "Votre adresse e-mail",
  phone: "Numéro de téléphone",
  phonePlaceholder: "Votre numéro de téléphone",
  fullName: "Nom complet",
  fullNamePlaceholder: "Votre nom légal ou d'usage",
  preferredName: "Nom d'usage préféré",
  preferredNamePlaceholder: "Le prénom ou nom par lequel vous souhaitez être appelé(e)",
  pronoun: "Pronoms",
  pronounPlaceholder: "ex. Il/Lui, Elle/Elle, Iel, etc.",
  age: "Âge",
  agePlaceholder: "Votre âge",
  genderIdentity: "Identité de genre",
  genderIdentityPlaceholder: "ex. Homme, Femme, Non-binaire, etc.",
  sexualOrientation: "Orientation sexuelle",
  sexualOrientationPlaceholder: "ex. Hétérosexuel(le), Queer, etc.",
  location: "Lieu de résidence",
  locationPlaceholder: "Ville, État, Pays",
  typeOfViolation: "Type de violation des droits",
  selectViolationPlaceholder: "Sélectionnez le type de violation",
  describeOtherPlaceholder: "Veuillez préciser la violation...",
  submittingForSelf: "Soumettez-vous ce signalement pour vous-même ?",
  relationship: "Si vous soumettez pour quelqu'un d'autre, quel est votre lien avec cette personne ?",
  relationshipPlaceholder: "ex. Ami(e), Collègue, Membre de la famille",
  incidentType: "Type d'incident",
  incidentTypePlaceholder: "Intitulé bref ou nature de l'incident",
  incidentLocation: "Lieu où l'incident s'est produit",
  incidentLocationPlaceholder: "État, Ville, Communauté ou lieu précis",
  narrative: "Récit détaillé des faits",
  narrativeHint:
    "Veuillez fournir autant de détails que possible : ce qui s'est produit, la date, les personnes impliquées et les démarches déjà entreprises.",
  narrativePlaceholder: "Décrivez l'incident en détail...",
  supportNeeded: "De quel soutien avez-vous besoin ou que souhaitez-vous qu'Intersex Nigeria fasse ?",
  supportNeededPlaceholder: "ex. Conseils juridiques, orientation médicale, soutien psychosocial, plaidoyer, hébergement d'urgence...",
  wantContact: "Souhaitez-vous qu'un membre d'Intersex Nigeria vous contacte au sujet de ce signalement ?",
  privacyFooter:
    "Intersex Nigeria respecte votre vie privée. Toutes les informations transmises via ce formulaire sont stockées de manière sécurisée et traitées avec une stricte confidentialité. Elles ne seront jamais partagées avec des tiers sans votre consentement explicite.",
  options: {
    "Non-consensual medical surgery (Intersex Genital Mutilation) IGM":
      "Chirurgie médicale non consentie (Mutilation Génitale Intersexe) MGI",
    "Forced hormone treatment without informed consent":
      "Traitement hormonal forcé sans consentement éclairé",
    "Denial of medical diagnosis or records to the person":
      "Refus d'accès au diagnostic ou au dossier médical",
    "Discrimination in healthcare settings":
      "Discrimination dans les structures de santé",
    "Stigma & Discrimination in spaces.":
      "Stigmatisation et discrimination dans les espaces publics ou privés",
    "Employment discrimination based on intersex status":
      "Discrimination à l'embauche ou au travail liée au statut intersexe",
    "Discrimination in education settings":
      "Discrimination en milieu scolaire ou universitaire",
    "Physical violence or abuse": "Violence ou agression physique",
    "Sexual violence or abuse": "Violence ou agression sexuelle",
    "Forced or coerced gender assignment":
      "Assignation de genre forcée ou sous contrainte",
    "Family or domestic violence related to intersex status":
      "Violence familiale ou domestique liée à l'intersexualité",
    "Denial of identity documents or legal recognition":
      "Refus de délivrance de documents d'identité ou de reconnaissance légale",
    "Social exclusion or ostracism from a community or religious group":
      "Exclusion sociale ou rejet communautaire/religieux",
    "Online harassment or doxing": "Harcèlement en ligne ou divulgation malveillante de données (doxing)",
    "Psychological abuse or coercion": "Abus psychologique, harcèlement moral ou coercition",
    "Institutional neglect or failure of duty of care":
      "Négligence institutionnelle ou manquement à l'obligation de protection",
    "Invasion of Privacy": "Atteinte à la vie privée",
    "Conversation of Practice (Therapy)":
      "Pratiques ou thérapies de conversion",
    "Unlawful Arrest or Blackmail": "Arrestation arbitraire, détention illégale ou chantage",
    "Outing": "Révélation forcée de l'intersexualité (outing)",
    "Other — describe below": "Autre — préciser ci-dessous",
  },
};

// ─────────────────────────────────────────────────────────────
// 11. GET TO KNOW QUESTIONS
// ─────────────────────────────────────────────────────────────
en.getToKnow = {
  ...en.getToKnow,
  stepperWelcome: "Welcome",
  stepperAbout: "About You",
  stepperStory: "Your Story",
  stepperFinal: "Final",
  welcomeTitle: "Welcome",
  welcomeP1:
    "Thank you for taking this step to connect with us. We understand it may have taken courage to reach out. This is a safe and affirming space. We honour your trust and are here to support you — whatever stage of your journey you are at.",
  welcomeP2:
    "To maintain the integrity and safety of all, the GET TO KNOW documents helps us protect our community members and also ensure a safe and secure space for you and helps us map out exactly what kind of support (medical, legal, emotional, or emergency) you need right now.",
  confidentialNotice:
    "The information shared and data collected is confidential and protected under Intersex Nigeria's safeguarding and data policies.",
  consentTitle: "Data Protection Consent",
  required: "Required",
  consentText:
    '"I understand that the information provided here will be stored securely and used solely for the purpose of community building in Intersex Nigeria."',
  consentYes: "Yes, I consent.",
  consentNo: "No, I do not consent.",
  ownLanguageNotice:
    "We advise that in filling out the form you use your own language, terminology, voice, and writing, and reduce the use of AI.",
  continueBtn: "Continue",
  backBtn: "Back",
  submitBtn: "Submit",
  deniedTitle: "Consent Required",
  deniedP1:
    "We respect your decision. Unfortunately, we are unable to proceed without your consent to our data protection policy. This is to ensure the safety and security of all community members.",
  deniedP2:
    "If you change your mind, you are welcome to return at any time. We are always here for you.",
  personalInfoTitle: "Personal Information",
  personalInfoDesc: "About you — please provide your safe contact details.",
  legalNameLabel: "Name (as appeared in your documents)",
  legalNamePlaceholder: "Enter your legal name",
  preferredNameLabel: "Preferred Name",
  preferredNamePlaceholder: "What would you like to be called?",
  dobLabel: "Date of Birth",
  ageLabel: "Age",
  agePlaceholder: "Auto-calculated",
  phoneLabel: "Phone Number (WhatsApp preferred)",
  phonePlaceholder: "Enter your phone number",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter your email address",
  stateOfOriginLabel: "State of Origin",
  selectState: "Select your state",
  locationLabel: "Location (where you are presently residing)",
  locationPlaceholder: "City, State",
  genderLabel: "Gender",
  genderPlaceholder: "Enter your gender",
  sexualOrientationLabel: "Sexual Orientation",
  sexualOrientationPlaceholder: "Enter your sexual orientation",
  pronounsLabel: "Pronouns",
  pronounsPlaceholder: "e.g. he/him, she/her, they/them",
  howHeardLabel:
    'How did you first come across the term "intersex" or "variations in sex characteristics" in relation to yourself?',
  howHeardMed: "From a medical professional",
  howHeardFamily: "From family/parents",
  howHeardMedia: "Online or through media/Social media",
  howHeardOrg: "Intersex Nigeria/another advocacy group/organization",
  howHeardOthers: "Others",
  specifyPlaceholder: "Please specify...",
  selfIdentifyLabel: "Do you openly self-identify as having an intersex variation?",
  selfIdentifyExploring: "I am currently questioning or exploring this",
  selfIdentifyNoNotice:
    'Since you selected "No", you will be directed to the final page of the form.',
  physicalIndicatorsTitle: "Physical Indicators",
  physicalIndicatorsDesc: "Your medical and physical history — share in your own words.",
  attachDocLabel: "Attach a document or file (optional)",
  clickToUpload: "Click to upload",
  orDragDrop: "or drag and drop",
  fileFormats: "PDF, DOC, JPG, PNG (max 10MB)",
  qVariation: "How do you prefer to describe your variation and at what age did you get to know?",
  qVariationPlaceholder: "Use the terminology and knowledge you are most comfortable with...",
  qLivedExp: "In your own words, could you briefly describe your lived experience as an intersex person growing up?",
  qLivedExpPlaceholder: "Share your experience...",
  qChallenges:
    "Many intersex individuals face unique challenges navigating life in Nigeria. Have you experienced any of these challenges?",
  qChallengesPlaceholder: "Describe any challenges you have faced...",
  qWhyConnect: "Can you briefly share what specific challenges or what drew you to connect with Intersex Nigeria?",
  qWhyConnectPlaceholder: "This helps us understand your intentions and how best to assist you...",
  qSupportAreas:
    "How or what areas of support do you think Intersex Nigeria can support you in relation to your challenges?",
  qSupportAreasPlaceholder: "Medical, legal, emotional, emergency, or other areas...",
  qAnythingElse: "Is there anything you would like us to know or add before we reach out?",
  qAnythingElsePlaceholder: "Any additional information...",
  finalQuestionsTitle: "Final Questions",
  finalQuestionsDesc: "Just a couple more questions before we finish.",
  qPreviousEngagement:
    "Have you previously engaged with any other intersex support networks, or is this your first time reaching out to an Intersex Organization?",
  qPreviousEngagementPlaceholder: "This helps us verify your background...",
  consentReachOutLabel: "Do you consent to us reaching out after filling out this form?",
  thankYouTitle: "Thank You!",
  thankYouP1:
    "Thank you for reaching out to Intersex Nigeria and taking this brave step. We have received your submission and will be in touch soon.",
  thankYouP2: "You are not alone. We are here for you. 💛💜",
  bannerTitle: "INTERSEX GET TO KNOW Questions",
};

fr.getToKnow = {
  ...fr.getToKnow,
  stepperWelcome: "Bienvenue",
  stepperAbout: "À propos de vous",
  stepperStory: "Votre histoire",
  stepperFinal: "Finalisation",
  welcomeTitle: "Bienvenue",
  welcomeP1:
    "Merci d'avoir fait cette démarche pour entrer en contact avec nous. Nous savons qu'il faut du courage pour franchir ce pas. Cet espace est sécurisé et bienveillant. Nous honorons votre confiance et sommes là pour vous accompagner, quelle que soit l'étape de votre cheminement.",
  welcomeP2:
    "Pour garantir la sécurité et l'intégrité de tous, ce questionnaire APPRENDRE À SE CONNAÎTRE nous permet de protéger notre communauté, de créer un cadre de confiance et de définir le soutien exact (médical, juridique, psychologique ou d'urgence) dont vous avez besoin.",
  confidentialNotice:
    "Les renseignements transmis sont strictement confidentiels et protégés par les politiques de sauvegarde et de protection des données d'Intersex Nigeria.",
  consentTitle: "Consentement à la protection des données",
  required: "Requis",
  consentText:
    "« Je comprends que les informations fournies ici seront conservées de manière sécurisée et utilisées exclusivement pour le renforcement communautaire au sein d'Intersex Nigeria. »",
  consentYes: "Oui, je consens.",
  consentNo: "Non, je ne consens pas.",
  ownLanguageNotice:
    "Nous vous invitons à vous exprimer avec vos propres mots, votre propre voix et sensibilité, en évitant l'usage de l'intelligence artificielle.",
  continueBtn: "Continuer",
  backBtn: "Retour",
  submitBtn: "Soumettre",
  deniedTitle: "Consentement requis",
  deniedP1:
    "Nous respectons votre choix. Malheureusement, nous ne pouvons pas poursuivre sans votre consentement à notre politique de protection des données, qui garantit la sécurité de tous les membres.",
  deniedP2:
    "Si vous changez d'avis, vous êtes toujours le bienvenu pour revenir à tout moment. Nous serons là pour vous accueillir.",
  personalInfoTitle: "Informations personnelles",
  personalInfoDesc: "À propos de vous — veuillez nous communiquer des coordonnées sécurisées.",
  legalNameLabel: "Nom officiel (tel qu'il figure sur vos documents)",
  legalNamePlaceholder: "Entrez votre nom légal",
  preferredNameLabel: "Nom d'usage préféré",
  preferredNamePlaceholder: "Comment préférez-vous être appelé(e) ?",
  dobLabel: "Date de naissance",
  ageLabel: "Âge",
  agePlaceholder: "Calcul automatique",
  phoneLabel: "Numéro de téléphone (WhatsApp recommandé)",
  phonePlaceholder: "Entrez votre numéro de téléphone",
  emailLabel: "Adresse e-mail",
  emailPlaceholder: "Entrez votre adresse e-mail",
  stateOfOriginLabel: "État d'origine",
  selectState: "Sélectionnez votre État",
  locationLabel: "Lieu de résidence actuel",
  locationPlaceholder: "Ville, État",
  genderLabel: "Genre",
  genderPlaceholder: "Précisez votre genre",
  sexualOrientationLabel: "Orientation sexuelle",
  sexualOrientationPlaceholder: "Précisez votre orientation sexuelle",
  pronounsLabel: "Pronoms",
  pronounsPlaceholder: "ex. Il/Lui, Elle/Elle, Iel, etc.",
  howHeardLabel:
    "Comment avez-vous rencontré pour la première fois le mot « intersexe » ou « variations des caractéristiques sexuelles » en rapport avec vous-même ?",
  howHeardMed: "Auprès d'un professionnel de santé",
  howHeardFamily: "De la part de ma famille / mes parents",
  howHeardMedia: "En ligne ou via les réseaux sociaux / médias",
  howHeardOrg: "Par Intersex Nigeria / une autre organisation",
  howHeardOthers: "Autre moyen",
  specifyPlaceholder: "Veuillez préciser...",
  selfIdentifyLabel: "Vous identifiez-vous ouvertement comme ayant une variation intersexe ?",
  selfIdentifyExploring: "Je me pose actuellement des questions / j'explore cette réalité",
  selfIdentifyNoNotice:
    'Puisque vous avez sélectionné "Non", vous serez directement redirigé(e) vers la page finale.',
  physicalIndicatorsTitle: "Indicateurs physiques & Parcours",
  physicalIndicatorsDesc: "Votre histoire médicale et corporelle — partagez-la avec vos propres mots.",
  attachDocLabel: "Joindre un document ou fichier (facultatif)",
  clickToUpload: "Cliquez pour téléverser",
  orDragDrop: "ou glissez-déposez ici",
  fileFormats: "PDF, DOC, JPG, PNG (max 10 Mo)",
  qVariation: "Comment préférez-vous décrire votre variation et à quel âge l'avez-vous découverte ?",
  qVariationPlaceholder: "Utilisez les termes avec lesquels vous vous sentez le plus à l'aise...",
  qLivedExp: "Avec vos propres mots, pourriez-vous décrire brièvement votre expérience d'enfance et de jeunesse en tant que personne intersexe ?",
  qLivedExpPlaceholder: "Partagez votre vécu...",
  qChallenges:
    "De nombreuses personnes intersexes font face à des défis particuliers au Nigeria. Avez-vous rencontré ces difficultés ?",
  qChallengesPlaceholder: "Décrivez les obstacles que vous avez pu affronter...",
  qWhyConnect: "Pouvez-vous expliquer ce qui vous a encouragé(e) à entrer en contact avec Intersex Nigeria ?",
  qWhyConnectPlaceholder: "Cela nous aide à mieux cerner vos attentes et vous apporter la meilleure aide...",
  qSupportAreas:
    "Dans quels domaines pensez-vous qu'Intersex Nigeria peut vous épauler face à ces défis ?",
  qSupportAreasPlaceholder: "Médical, juridique, psychologique, urgence ou autres domaines...",
  qAnythingElse: "Y a-t-il un autre élément que vous souhaitez nous transmettre avant que nous vous contactions ?",
  qAnythingElsePlaceholder: "Toute information complémentaire utile...",
  finalQuestionsTitle: "Dernières questions",
  finalQuestionsDesc: "Encore deux petites questions avant d'avoir terminé.",
  qPreviousEngagement:
    "Avez-vous déjà été en contact avec d'autres réseaux de soutien intersexe, ou est-ce votre premier contact avec une organisation intersexe ?",
  qPreviousEngagementPlaceholder: "Cela nous permet de mieux connaître votre parcours...",
  consentReachOutLabel: "Consentez-vous à ce que notre équipe prenne contact avec vous suite à ce formulaire ?",
  thankYouTitle: "Merci beaucoup !",
  thankYouP1:
    "Merci d'avoir contacté Intersex Nigeria et d'avoir franchi cette étape courageuse. Nous avons bien reçu vos réponses et nous reprendrons contact avec vous très bientôt.",
  thankYouP2: "Vous n'êtes pas seul(e). Nous sommes là pour vous. 💛💜",
  bannerTitle: "QUESTIONS APPRENDRE À SE CONNAÎTRE",
};

// ─────────────────────────────────────────────────────────────
// WRITE OUTPUT
// ─────────────────────────────────────────────────────────────
fs.writeFileSync(enPath, JSON.stringify(en, null, 2) + "\n", "utf8");
fs.writeFileSync(frPath, JSON.stringify(fr, null, 2) + "\n", "utf8");

console.log("Successfully merged all translations into en.json and fr.json!");
