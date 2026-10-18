import fs from 'fs';
import path from 'path';

const localesDir = path.resolve('src/locales');
const enPath = path.join(localesDir, 'en.json');
const frPath = path.join(localesDir, 'fr.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frPath, 'utf8'));

// 1. FAQ in French
const frFaq = {
  intro: "Trouvez des réponses à certaines des questions les plus courantes sur les personnes intersexes, leurs droits et la façon de les soutenir. Si vous avez d'autres questions, n'hésitez pas à nous contacter.",
  q1: "L'intersexuation est-elle la même chose que la « transidentité » ?",
  a1: "L'intersexuation concerne les variations innées des caractéristiques biologiques du sexe, tandis que la transidentité fait référence à une identité de genre. Être une personne transgenre signifie avoir un sentiment intime et profond d'être un homme, une femme, les deux ou aucun. Une personne transgenre a une identité de genre différente du sexe qui lui a été assigné à la naissance. Par exemple, une personne assignée femme à la naissance (AFAB) mais qui s'identifie comme un homme est un homme transgenre. Cela n'a rien à voir avec son corps physique, mais plutôt avec qui elle est intérieurement.",
  q2: "L'intersexuation est-elle la même chose qu'« hermaphrodite » ?",
  a2: "Non. « Hermaphrodite » n'est pas synonyme d'intersexe. Ce terme provient de la mythologie et ne doit pas être utilisé pour décrire une personne intersexe.\nHermaphrodite désigne un organisme produisant à la fois des gamètes mâles et femelles, alors qu'intersexe est un terme générique désignant les personnes nées avec des variations innées de leurs caractéristiques sexuelles (gonades, organes génitaux, hormones ou schémas chromosomiques) qui ne correspondent pas aux définitions binaires typiques des corps masculins ou féminins.\nMême s'il existe de nombreuses variations intersexes, une personne ne peut pas posséder à la fois un pénis et un vagin entièrement développés et fonctionnels.",
  q3: "L'intersexuation est-elle la même chose qu'un « trouble du développement du sexe » (DSD) ?",
  a3: "L'expression « Trouble du développement du sexe » (DSD) reste courante dans les contextes médicaux. De nombreuses personnes intersexes et défenseurs des droits humains rejettent ce terme car il alimente l'idée que les corps intersexes seraient anormaux et qu'il incomberait aux médecins de « réparer ce qui n'est pas naturel ».\nLe terme « trouble » présente une variation biologique naturelle comme un problème médical ou une pathologie. Il implique qu'il y a quelque chose de cassé à réparer, ce qui constitue une approche pathologisante. Les corps intersexes ne sont ni « anormaux » ni « contre-nature » ; ils font partie intégrante de la diversité humaine, au même titre que les variations de taille, de couleur des yeux ou de texture des cheveux. En qualifiant cela de trouble, le corps médical s'octroie une justification pour intervenir, même en l'absence de tout risque pour la santé.",
  q4: "L'intersexuation est-elle une malformation congénitale ?",
  a4: "Les personnes nées avec des variations innées du développement sexuel présentent des variations biologiques saines. De plus, aucune étude n'a jamais prouvé que l'intersexuation soit une anomalie.\nLe terme « malformation » sous-entend un défaut, une erreur ou un dysfonctionnement. Qualifier un trait intersexe de « malformation » suggère à tort que la personne est incomplète ou que son corps est « anormal ».\nToutes les personnes intersexes sont en parfaite santé. Bien que certaines variations puissent nécessiter des considérations médicales spécifiques, les variations en elles-mêmes ne constituent pas une maladie. Le problème réside le plus souvent non pas dans le corps, mais dans les attentes sociétales et les pratiques médicales qui traitent ces variations saines comme devant être « corrigées » pour s'adapter à une binarité de sexe rigide.",
  q5: "L'intersexuation est-elle une urgence médicale ?",
  a5: "L'intersexuation est une variation biologique naturelle des caractéristiques sexuelles et ne constitue aucunement une urgence médicale.\nBien que les conditions intersexes soient souvent entourées d'idées fausses et de stigmatisation, il est essentiel de reconnaître qu'être intersexe est un aspect normal de la diversité humaine. Des urgences médicales peuvent survenir chez n'importe qui, indépendamment de ses caractéristiques sexuelles ou de son identité de genre (infections, maladies chroniques, blessures). L'essentiel est de dispenser des soins appropriés qui respectent l'identité et les besoins de chaque personne.",
  q6: "La chirurgie est-elle la solution ?",
  a6: "Les bébés, adolescents et adultes intersexes ont-ils besoin d'une chirurgie ?\nNon, la majorité des personnes intersexes n'ont absolument pas besoin de chirurgie. Si de rares variations peuvent exiger une intervention pour des raisons médicales vitales, ce n'est pas le cas pour la plupart. Le problème réside dans la pratique d'opérations chirurgicales médicalement non nécessaires sur des nourrissons et adolescents intersexes, qui bafouent leur autonomie corporelle simplement pour conformer leur apparence à un modèle masculin ou féminin typique.",
  q7: "Quels sont les effets physiques et psychologiques des chirurgies non consenties sur les nourrissons et enfants intersexes ?",
  a7: "Les chirurgies non consenties pratiquées sur les nourrissons et enfants intersexes entraînent des complications physiques majeures, notamment des cicatrices, une perte de sensibilité, une incontinence urinaire, des dysfonctions sexuelles et le risque d'interventions chirurgicales répétées tout au long de la vie.\nSur le plan psychologique, ces personnes peuvent éprouver des traumatismes, de la honte, de la dépression et de l'anxiété, altérant leur estime de soi et leur image corporelle. Il est fondamental de privilégier le consentement éclairé et le bien-être des personnes intersexes en leur permettant de prendre elles-mêmes les décisions concernant leur propre corps lorsqu'elles grandissent.",
  q8: "L'intersexuation est-elle un tabou ou un mauvais présage ?",
  a8: "L'intersexuation est une diversité biologique et innée des caractéristiques sexuelles humaines, et non un tabou.\nL'idée fausse selon laquelle l'intersexuation serait un tabou ou un mauvais présage résulte d'incompréhensions sociétales et culturelles. Depuis des siècles, les sociétés fonctionnent selon une binarité stricte homme/femme. Tout ce qui sort de cette norme est souvent mal compris, craint et stigmatisé. En raison de ces préjugés, certains voient à tort une personne intersexe comme le signe d'une malédiction ou d'un châtiment.",
  q9: "Comment savoir si je suis intersexe ?",
  a9: "Une personne peut être intersexe sans le savoir. Voici les moments les plus fréquents où une personne découvre que son corps est différent :\n● À la naissance, par des différences génitales visibles ;\n● À la puberté, lorsque les changements corporels surviennent trop tôt, de manière inattendue ou pas du tout ;\n● À l'âge adulte, lors d'investigations pour infertilité ou d'autres examens révélant des différences internes ;\n● En découvrant des dossiers médicaux d'enfance dissimulés ;\n● Lors de bilans de santé de routine.\nIl existe également des personnes présentant des variations des caractéristiques sexuelles qui n'ont jamais entendu le mot intersexe ni appris qui elles sont.",
  q10: "Les personnes intersexes peuvent-elles avoir des enfants ou tomber enceintes ?",
  a10: "Oui / peut-être. Comme pour toute personne, cela dépend des organes corporels (et parfois du recours aux technologies médicales).\nCréer un embryon nécessite un spermatozoïde et un ovule. Le fœtus a ensuite besoin d'un utérus pour se développer. Les progrès médicaux offrent de multiples voies, valables aussi pour les personnes non-intersexes. Les personnes intersexes peuvent également fonder une famille par grossesse, adoption, PMA, etc.",
  q11: "Message à un parent ou tuteur d'une personne intersexe",
  a11: "Un enfant a avant tout besoin de soutien affectif, bienveillant et psychologique. Il est crucial d'instaurer un dialogue ouvert et honnête sur les variations corporelles au sein de la famille. Cacher la vérité enseigne à l'enfant que son corps est une source de honte.\nLes familles sont encouragées à s'informer auprès d'associations et d'adultes intersexes, dont l'expérience apporte des repères inestimables et un sentiment d'appartenance.\nComme tout enfant, un enfant intersexe peut être élevé et s'épanouir socialement sans chirurgie inutile. Les décisions chirurgicales non vitales doivent être différées jusqu'à ce que la personne soit en âge de comprendre et de donner un consentement libre et éclairé. Cette approche honore l'autonomie de votre enfant et son droit fondamental à disposer de son corps."
};

// 2. What is Intersex in French
const frWhatIsIntersex = {
  subtitle: "Découvrir la diversité naturelle des caractéristiques sexuelles humaines et promouvoir la sensibilisation. Comprenons l'intersexuation.",
  definitionTitle: "Définition de l'intersexuation",
  definitionP1: "L'intersexuation est un terme générique désignant le spectre des variations innées des caractéristiques sexuelles qui se produisent naturellement au sein de l'espèce humaine. Les personnes intersexes naissent avec des variations de caractéristiques sexuelles (telles que les organes génitaux, les gonades, les organes reproducteurs, les profils hormonaux et chromosomiques) plus diversifiées que les définitions stéréotypées des corps masculins ou féminins.",
  definitionP2: "Certains traits intersexes sont identifiés dès la naissance, tandis que d'autres ne sont découverts qu'à la puberté, plus tard dans la vie, ou parfois jamais.",
  genderVsSexTitle: "Distinguer le genre des caractéristiques sexuelles",
  genderTitle: "Genre",
  genderDesc: "Le genre est un concept qui fait référence aux rôles, comportements, expressions et identités socialement construits qu'une société donnée considère comme appropriés pour les individus en fonction de leur sexe perçu ou assigné à la naissance.",
  sexCharacteristicsTitle: "Caractéristiques sexuelles",
  sexCharacteristicsDesc: "Les caractéristiques sexuelles sont les traits physiques relatifs au sexe. Chaque personne naît avec des caractéristiques sexuelles innées primaires et secondaires.",
  primaryLabel: "Caractéristiques sexuelles primaires -",
  primaryDesc: "présentes dès la naissance, comprenant les organes génitaux, les gonades (organes reproducteurs internes), les chromosomes et les hormones.",
  secondaryLabel: "Caractéristiques sexuelles secondaires -",
  secondaryDesc: "se développant à la puberté (pilosité faciale, poitrine, timbre de la voix, développement musculaire, etc.).",
  sexDefinition: "Le sexe est la catégorisation biologique d'une personne fondée sur ses caractéristiques sexuelles.",
  howCommonTitle: "Quelle est la fréquence de l'intersexuation ?",
  stat1Number: "1,7 %",
  stat1Label: "de la population mondiale",
  stat2Number: "1 sur 60",
  stat2Label: "naissances dans le monde",
  statsDescP1: "Les variations intersexes constituent une composante naturelle et saine de la biodiversité humaine, et non une anomalie rare. Les spécialistes estiment que 1,7 % de la population mondiale est intersexe, soulignant que les traits intersexes concernent environ 1 naissance sur 60 dans le monde, ce qui les rend aussi fréquents que le fait d'être gaucher.",
  statsDescP2: "Ce constat bat en brèche l'idée selon laquelle l'intersexuation serait une anomalie exceptionnelle et confirme son statut de variation humaine naturelle.",
  variationsTitle: "QUELQUES VARIATIONS INTERSEXES EXISTANTES",
  variationsDesc: "Les variations intersexes peuvent se manifester de multiples manières, visibles à la naissance, à la puberté ou plus tard dans la vie. Certaines personnes intersexes traversent leur vie sans jamais savoir qu'elles le sont. Parmi les variations intersexes les plus courantes, on compte :"
};

// 3. Variations in French
const frVariations = {
  aisTitle: "Syndrome d'insensibilité aux androgènes (SIA / AIS)",
  aisDesc: "Variations chez des personnes ayant des chromosomes XY qui présentent une résistance aux hormones mâles et développent des caractéristiques typiquement féminines ou mixtes.",
  cahTitle: "Hyperplasie congénitale des surrénales (HCS / CAH)",
  cahDesc: "Variation génétique affectant la production d'hormones, pouvant entraîner des variations des caractéristiques sexuelles secondaires. Plusieurs formes d'HCS existent.",
  ovotestesTitle: "Ovo-testes (intersexuation gonadique vraie)",
  ovotestesDesc: "Cette variation indique la présence simultanée de tissus ovariens et testiculaires chez une même personne.",
  klinefelterTitle: "Syndrome de Klinefelter (Chromosomes XXY)",
  klinefelterDesc: "Variation dans laquelle les personnes assignées garçons à la naissance possèdent un chromosome X supplémentaire.",
  turnerTitle: "Syndrome de Turner (Chromosome XO)",
  turnerDesc: "Variation touchant des personnes assignées filles à la naissance auxquelles il manque un second chromosome sexuel.",
  fiveAlphaTitle: "Déficit en 5-alpha-réductase",
  fiveAlphaDesc: "Variation où les personnes assignées garçons à la naissance présentent un développement génital atypique en raison d'une conversion hormonale réduite.",
  hypospadiasTitle: "Hypospadias",
  hypospadiasDesc: "Variation où le méat urinaire n'est pas situé à l'extrémité du pénis, mais sur sa face inférieure, parfois plus en arrière vers le scrotum.",
  swyerTitle: "Syndrome de Swyer (Dysgénésie gonadique XY)",
  swyerDesc: "Variation où les personnes naissent avec des chromosomes XY, mais leurs gonades ne se sont pas développées en testicules. En l'absence de production de testostérone, le corps développe une vulve, un vagin, et souvent un utérus et des trompes de Fallope."
};

// 4. Careers in French
const frCareers = {
  joinOurTeam: "Rejoindre notre équipe",
  intro: "Nous recherchons des personnes passionnées et déterminées à bâtir une société plus inclusive pour les personnes intersexes au Nigeria. Rejoignez notre équipe dévouée et diversifiée à Intersex Nigeria !",
  noOpeningsP1: "Merci pour votre intérêt à travailler avec nous. Malheureusement, nous n'avons aucun poste vacant pour le moment dans notre organisation. Si vous souhaitez contribuer à notre action, vous pouvez",
  volunteerLink: "devenir bénévole avec nous",
  noOpeningsP2: "Restez à l'écoute, les futures offres d'emploi seront publiées ici."
};

// 5. Team in EN & FR
const enTeam = {
  title: "Meet the team behind Intersex Nigeria",
  subtitle: "Meet the passionate and diverse team behind Intersex Nigeria, dedicated to advocating for the rights, health, and autonomy of intersex people. Together, we are working to create meaningful change and build a more inclusive society.",
  boardMembers: "Board Members",
  teamMembers: "Team Members",
  philosophy: "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.",
  breadcrumb: "Meet-the-team"
};

const frTeam = {
  title: "Rencontrez l'équipe d'Intersex Nigeria",
  subtitle: "Rencontrez l'équipe passionnée et diversifiée d'Intersex Nigeria, dédiée à la défense des droits, de la santé et de l'autonomie des personnes intersexes. Ensemble, nous travaillons à créer un changement significatif et à bâtir une société plus inclusive.",
  boardMembers: "Membres du conseil d'administration",
  teamMembers: "Membres de l'équipe",
  philosophy: "Notre philosophie est simple : recruter une équipe de personnes diverses et passionnées et favoriser une culture qui vous permet de donner le meilleur de vous-même.",
  breadcrumb: "Rencontrez-l-équipe"
};

// 6. About Objectives in EN & FR
const enAboutObjectives = {
  advocacyTitle: "Advocacy",
  advocacyDesc: "Lead advocacy efforts and strategies to influence and sustain policies and laws that protect and promote intersex rights.",
  empowermentTitle: "Empowerment and Support",
  empowermentDesc: "Establish and maintain a comprehensive support network for intersex persons and their families, through online and in-person forums and activities.",
  educationTitle: "Information and Education",
  educationDesc: "Utilizing digital platforms and printed materials to distribute developed accessible educational resources on intersex issues, to broaden public awareness and understanding of intersex rights and needs.",
  engagementTitle: "Stakeholder Engagement",
  engagementDesc: "Increase recognition and support for intersex rights by securing commitments from key stakeholders across healthcare, legal, policy, human rights and other sectors, ensuring their active participation in initiatives for intersex individuals.",
  partnershipsTitle: "Strategic Partnerships",
  partnershipsDesc: "Form strategic partnerships with organizations that align with our mission, through movement building, resource mobilization, and collaborations to support key human rights initiatives."
};

const frAboutObjectives = {
  advocacyTitle: "Plaidoyer",
  advocacyDesc: "Mener des efforts et des stratégies de plaidoyer pour influencer et pérenniser des politiques et des lois qui protègent et promeuvent les droits des personnes intersexes.",
  empowermentTitle: "Autonomisation et soutien",
  empowermentDesc: "Établir et maintenir un réseau de soutien complet pour les personnes intersexes et leurs familles, par le biais de forums et d'activités en ligne et en présentiel.",
  educationTitle: "Information et éducation",
  educationDesc: "Utiliser les plateformes numériques et les supports imprimés pour diffuser des ressources éducatives accessibles et développées sur les questions intersexes, afin d'élargir la sensibilisation et la compréhension du public sur les droits et les besoins des personnes intersexes.",
  engagementTitle: "Engagement des parties prenantes",
  engagementDesc: "Accroître la reconnaissance et le soutien des droits des personnes intersexes en obtenant des engagements de parties prenantes clés des secteurs de la santé, du droit, des politiques, des droits humains et d'autres secteurs, garantissant leur participation active aux initiatives en faveur des personnes intersexes.",
  partnershipsTitle: "Partenariats stratégiques",
  partnershipsDesc: "Former des partenariats stratégiques avec des organisations alignées sur notre mission, par le renforcement du mouvement, la mobilisation des ressources et des collaborations pour soutenir des initiatives clés en matière de droits humains."
};

// 7. Resources in EN & FR
const enResources = {
  epublications: "Epublications",
  annualReports: "Annual Reports",
  annualReportsDesc: "Intersex Nigeria remains dedicated to sharing in-depth and transparent updates on our activities and achievements each year. Our annual reports offer a comprehensive look into our advocacy work, detailing the progress we've made in advancing the rights and visibility of intersex persons in Nigeria.",
  toolkits: "Toolkits",
  articles: "Articles",
  ourPrograms: "Our Programs",
  download: "Download",
  readMore: "Read more",
  readMoreDots: "Read more...",
  animationVideos: "Animation Videos",
  downloadFrench: "Download Nigerian french translation",
  downloadHausa: "Download Hausa translation",
  downloadYoruba: "Download Yoruba translation",
  downloadIgbo: "Download Igbo translation"
};

const frResources = {
  epublications: "Publications électroniques",
  annualReports: "Rapports annuels",
  annualReportsDesc: "Intersex Nigeria demeure déterminé à partager chaque année des bilans détaillés et transparents de ses activités et réalisations. Nos rapports annuels offrent une vue d'ensemble de notre travail de plaidoyer, décrivant les progrès accomplis pour faire avancer les droits et la visibilité des personnes intersexes au Nigeria.",
  toolkits: "Boîtes à outils",
  articles: "Articles",
  ourPrograms: "Nos programmes",
  download: "Télécharger",
  readMore: "Lire la suite",
  readMoreDots: "Lire plus...",
  animationVideos: "Vidéos d'animation",
  downloadFrench: "Télécharger la traduction française nigériane",
  downloadHausa: "Télécharger la traduction en haoussa",
  downloadYoruba: "Télécharger la traduction en yoruba",
  downloadIgbo: "Télécharger la traduction en igbo"
};

// 8. Gallery in EN & FR
const enGallery = {
  title: "A Photo Gallery of Intersex Nigeria’s thematic area",
  loadMore: "Load more",
  otherEvents: "Other Events"
};

const frGallery = {
  title: "Une galerie photo des axes thématiques d'Intersex Nigeria",
  loadMore: "Charger plus",
  otherEvents: "Autres événements"
};

// 9. NewsPage & Memos in EN & FR
const enNewsPage = {
  title: "Intersex in the News",
  readMore: "Read more"
};
const frNewsPage = {
  title: "L'intersexuation dans les actualités",
  readMore: "Lire la suite"
};

const enMemos = {
  title: "Memo",
  subtitle: "Official statements and memoranda from Intersex Nigeria."
};
const frMemos = {
  title: "Mémorandums",
  subtitle: "Déclarations officielles et mémorandums d'Intersex Nigeria."
};

// 10. Safeguarding Page in EN & FR
const enSafeguarding = {
  bannerTitle: "Safeguarding at Intersex Nigeria",
  intro: "Intersex Nigeria is committed to keeping every stakeholder and community member safe. We work to prevent harm, respond quickly to concerns and ensure that people can engage with us without fear. Safeguarding is everyone’s duty — including staff, volunteers, consultants, partners, and the wider community.",
  whatMeansTitle: "What Safeguarding Means",
  whatMeans1: "Protecting people from any form of abuse, discrimination or exploitation",
  whatMeans2: "Respecting confidentiality while taking action when safety is at risk",
  whatMeans3: "Maintaining clear boundaries in online and in-person engagement",
  whatMeans4: "Following the Code of Conduct and responding to concerns without delay",
  whatMeans5: "Supporting children, young people and vulnerable adults in line with best practice",
  whenRaiseTitle: "When to Raise a Concern",
  whenRaiseIntro: "You can report if you notice or experience:",
  whenRaise1: "Unsafe behaviour by anyone connected to Intersex Nigeria",
  whenRaise2: "Boundary violations",
  whenRaise3: "Harassment or discrimination",
  whenRaise4: "Abuse or suspected abuse",
  whenRaise5: "Misconduct during online or offline activities",
  whenRaise6: "Any situation that makes you feel unsafe or unsure",
  reportForSelf: "You can report for yourself or for someone else.",
  howHandleTitle: "How We Handle Reports",
  howHandle1: "Every report is received with respect and confidentiality",
  howHandle2: "Only the relevant safeguarding staff will see the information",
  howHandle3: "The Designated Safeguarding Lead reviews the case",
  howHandle4: "Actions are taken quickly and records are kept securely",
  howHandle5: "If the concern involves senior staff, it is escalated to the Disciplinary Committee",
  howHandle6: "No one is punished for reporting in good faith",
  optionsTitle: "Reporting Options",
  optionsIntro: "You can choose the option that feels safest:",
  emailCardTitle: "Email",
  emailCardDesc: "Or email the safeguarding team at",
  emailCardSub: "This will forward directly to the safeguarding team.",
  footerNote: "Safeguarding is everyone's responsibility. If you have any concerns, please don't hesitate to report them."
};

const frSafeguarding = {
  bannerTitle: "Protection à Intersex Nigeria",
  intro: "Intersex Nigeria s'engage à assurer la sécurité de chaque partie prenante et membre de la communauté. Nous œuvrons pour prévenir les préjudices, réagir rapidement aux préoccupations et veiller à ce que chacun puisse interagir avec nous sans crainte. La protection est le devoir de chacun — y compris le personnel, les bénévoles, les consultants, les partenaires et la communauté au sens large.",
  whatMeansTitle: "Ce que signifie la protection",
  whatMeans1: "Protéger les personnes contre toute forme d'abus, de discrimination ou d'exploitation",
  whatMeans2: "Respecter la confidentialité tout en agissant lorsque la sécurité est menacée",
  whatMeans3: "Maintenir des limites claires dans les interactions en ligne et en personne",
  whatMeans4: "Suivre le code de conduite et répondre aux préoccupations sans délai",
  whatMeans5: "Soutenir les enfants, les jeunes et les adultes vulnérables conformément aux meilleures pratiques",
  whenRaiseTitle: "Quand signaler une préoccupation",
  whenRaiseIntro: "Vous pouvez signaler si vous observez ou subissez :",
  whenRaise1: "Un comportement dangereux de la part de toute personne liée à Intersex Nigeria",
  whenRaise2: "Des violations de limites",
  whenRaise3: "Du harcèlement ou de la discrimination",
  whenRaise4: "Des abus ou soupçons d'abus",
  whenRaise5: "Une faute professionnelle lors d'activités en ligne ou hors ligne",
  whenRaise6: "Toute situation qui vous fait vous sentir en danger ou dans l'incertitude",
  reportForSelf: "Vous pouvez signaler pour vous-même ou pour quelqu'un d'autre.",
  howHandleTitle: "Comment nous traitons les signalements",
  howHandle1: "Chaque signalement est accueilli avec respect et confidentialité",
  howHandle2: "Seul le personnel de protection habilité consultera les informations",
  howHandle3: "Le responsable désigné de la protection examine le dossier",
  howHandle4: "Des mesures sont prises rapidement et les dossiers sont conservés en toute sécurité",
  howHandle5: "Si la préoccupation concerne des cadres supérieurs, elle est transmise au comité de discipline",
  howHandle6: "Personne n'est sanctionné pour avoir signalé de bonne foi",
  optionsTitle: "Options de signalement",
  optionsIntro: "Vous pouvez choisir l'option qui vous paraît la plus sûre :",
  emailCardTitle: "Email",
  emailCardDesc: "Ou envoyez un email à l'équipe de protection à",
  emailCardSub: "Le message sera transmis directement à l'équipe de protection.",
  footerNote: "La protection est la responsabilité de tous. Si vous avez la moindre préoccupation, n'hésitez pas à la signaler."
};

// 11. Violations Page in EN & FR
const enViolations = {
  bannerTitle: "Intersex Violations and Cases",
  heading: "Thank you for taking this step to share your story with us.",
  courage: "We know that taking the step to share takes a lot of courage.",
  secureNotice: "Know that whatever you share with us is safe and secure, and the information shared and data collected is confidential and protected under Intersex Nigeria's safeguarding and data policies."
};

const frViolations = {
  bannerTitle: "Violations et cas intersexes",
  heading: "Merci d'avoir franchi cette étape pour partager votre histoire avec nous.",
  courage: "Nous savons que franchir le pas pour partager demande beaucoup de courage.",
  secureNotice: "Sachez que tout ce que vous partagez avec nous est sûr et sécurisé, et que les informations partagées et les données recueillies sont confidentielles et protégées par les politiques de protection et de confidentialité des données d'Intersex Nigeria."
};

// 12. Get To Know in EN & FR
const enGetToKnow = {
  bannerTitle: "Intersex Get To Know Questions",
  stepperWelcome: "Welcome",
  stepperAbout: "About You",
  stepperStory: "Your Story",
  stepperFinal: "Final",
  step1Title: "A Safe Space to Connect",
  step1P1: "This questionnaire helps us connect with intersex persons in Nigeria, understand your unique experiences, and explore ways we can provide support, advocacy, and community.",
  step1P2: "Your privacy and confidentiality are paramount. All information provided will be treated with the strictest confidence and will never be shared without your explicit consent.",
  consentQuestion: "Do you consent to proceed with this questionnaire?",
  consentYes: "Yes, I consent to continue",
  consentNo: "No, I do not wish to continue",
  continueBtn: "Continue",
  backBtn: "Back",
  nextBtn: "Next Step",
  submitBtn: "Submit",
  submittingBtn: "Submitting...",
  successTitle: "Thank You for Sharing Your Story",
  successP1: "We have received your submission. Your courage in sharing your experiences means everything to our community.",
  successP2: "A member of our team will review your responses with the utmost confidentiality. If you indicated you'd like us to reach out, we'll be in touch through your preferred contact method.",
  homeBtn: "Return to Home",
  nameRequired: "Name is required",
  prefNameRequired: "Preferred name is required",
  dobRequired: "Date of birth is required",
  phoneRequired: "Phone number is required",
  emailRequired: "Email is required",
  emailInvalid: "Enter a valid email",
  stateRequired: "State of origin is required",
  locationRequired: "Current location is required",
  genderRequired: "Gender is required",
  sexOrientationRequired: "Sexual orientation is required",
  pronounsRequired: "Pronouns are required",
  selectOption: "Please select an option",
  fieldRequired: "This field is required",
  specifyRequired: "Please specify"
};

const frGetToKnow = {
  bannerTitle: "Questions pour mieux connaître les personnes intersexes",
  stepperWelcome: "Bienvenue",
  stepperAbout: "À propos de vous",
  stepperStory: "Votre histoire",
  stepperFinal: "Final",
  step1Title: "Un espace sûr pour se connecter",
  step1P1: "Ce questionnaire nous permet d'entrer en contact avec des personnes intersexes au Nigeria, de comprendre vos expériences uniques et d'explorer des manières de vous offrir soutien, plaidoyer et communauté.",
  step1P2: "Votre vie privée et votre confidentialité sont primordiales. Toutes les informations fournies seront traitées avec la plus stricte confidentialité et ne seront jamais partagées sans votre consentement explicite.",
  consentQuestion: "Consentez-vous à poursuivre ce questionnaire ?",
  consentYes: "Oui, je consens à poursuivre",
  consentNo: "Non, je ne souhaite pas poursuivre",
  continueBtn: "Continuer",
  backBtn: "Retour",
  nextBtn: "Étape suivante",
  submitBtn: "Envoyer",
  submittingBtn: "Envoi en cours...",
  successTitle: "Merci d'avoir partagé votre histoire",
  successP1: "Nous avons bien reçu votre soumission. Votre courage de partager vos expériences est inestimable pour notre communauté.",
  successP2: "Un membre de notre équipe examinera vos réponses dans la plus grande confidentialité. Si vous avez indiqué souhaiter être contacté(e), nous vous joindrons selon votre méthode de contact préférée.",
  homeBtn: "Retour à l'accueil",
  nameRequired: "Le nom est obligatoire",
  prefNameRequired: "Le prénom souhaité est obligatoire",
  dobRequired: "La date de naissance est obligatoire",
  phoneRequired: "Le numéro de téléphone est obligatoire",
  emailRequired: "L'email est obligatoire",
  emailInvalid: "Entrez un email valide",
  stateRequired: "L'État d'origine est obligatoire",
  locationRequired: "La localisation actuelle est obligatoire",
  genderRequired: "Le genre est obligatoire",
  sexOrientationRequired: "L'orientation sexuelle est obligatoire",
  pronounsRequired: "Les pronoms sont obligatoires",
  selectOption: "Veuillez sélectionner une option",
  fieldRequired: "Ce champ est obligatoire",
  specifyRequired: "Veuillez préciser"
};

// Assemble objects
en.team = enTeam;
en.aboutObjectives = enAboutObjectives;
en.resources = enResources;
en.gallery = enGallery;
en.newsPage = enNewsPage;
en.memos = enMemos;
en.safeguarding = enSafeguarding;
en.violations = enViolations;
en.getToKnow = enGetToKnow;

fr.faq = frFaq;
fr.whatIsIntersex = frWhatIsIntersex;
fr.variations = frVariations;
fr.careers = frCareers;
fr.team = frTeam;
fr.aboutObjectives = frAboutObjectives;
fr.resources = frResources;
fr.gallery = frGallery;
fr.newsPage = frNewsPage;
fr.memos = frMemos;
fr.safeguarding = frSafeguarding;
fr.violations = frViolations;
fr.getToKnow = frGetToKnow;

fs.writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync(frPath, JSON.stringify(fr, null, 2), 'utf8');
console.log('Locales successfully updated!');
