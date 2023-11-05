export const themes = [
  { id: 1, name: 'Arbeitgeber und Branchen' },
  { id: 2, name: 'Ausbildung und Studium' },
  { id: 3, name: 'Statistiken' },
  { id: 4, name: 'Beruf und Ausbildung' },
  { id: 5, name: 'Soft Skills und Eigenschaften' },
  { id: 6, name: 'Dokumente und Papiere' },
  { id: 7, name: 'Berufsbeschreibungen' },
];

export const words = [
  {
    id: 1,
    name: 'Arbeitgeber und Branchen',
    list: [
      {
        id: 1,
        name: 'der Arbeitgeber',
        translates: [
          { name: 'работодатель', status: true },
          { name: 'работник', status: false },
          { name: 'труд', status: false },
          { name: 'рабочий', status: false },
        ],
        examples: [
          'Wer ist dein Arbeitgeber, und wie lange arbeitest du schon dort?',
          'Mein Arbeitgeber legt viel Wert auf die Weiterbildung seiner Mitarbeiter.',
        ],
        progress: 0,
      },
      {
        id: 2,
        name: 'der Architekt',
        translates: [
          { name: 'архитектор', status: true },
          { name: 'строитель', status: false },
          { name: 'проектировщик', status: false },
          { name: 'дизайнер', status: false },
        ],
        examples: [
          'Was macht ein Architekt in seinem täglichen Arbeitsleben, und welche Projekte hat er abgeschlossen?',
          'Der Architekt entwirft Gebäude, plant Bauprojekte und arbeitet eng mit Bauherren zusammen.',
        ],
        progress: 0,
      },
      {
        id: 3,
        name: 'der Automechaniker',
        translates: [
          { name: 'автомеханик', status: true },
          { name: 'автолавка', status: false },
          { name: 'автомобиль', status: false },
          { name: 'механика', status: false },
        ],
        examples: [
          'Was macht ein Automechaniker in seiner täglichen Arbeit, und wie lange arbeitet er an Autos?',
          'Der Automechaniker repariert und wartet Fahrzeuge, um sicherzustellen, dass sie einwandfrei funktionieren.',
        ],
        progress: 0,
      },
      {
        id: 4,
        name: 'der Autoproduzent',
        translates: [
          { name: 'Производитель автомобилей', status: true },
          { name: 'Водитель автомобиля', status: false },
          { name: 'Автомеханик', status: false },
          { name: 'Автомобильный дилер', status: false },
        ],
        examples: [
          'Was macht ein Autoproduzent, um qualitativ hochwertige Fahrzeuge herzustellen, und wie viele Modelle gibt es?',
          'Der Autoproduzent investiert in moderne Fertigungstechnologien und bietet eine breite Palette von Automodellen an.',
        ],
        progress: 0,
      },
      {
        id: 5,
        name: 'die Beratung',
        translates: [
          { name: 'Консультация', status: true },
          { name: 'Работодатель', status: false },
          { name: 'Обучение', status: false },
          { name: 'Клиент', status: false },
        ],
        examples: [
          'Welche Beratungsdienstleistungen bietet Ihre Firma an, und wie kann ich einen Termin vereinbaren?',
          'Die Beratung umfasst Finanzberatung, Steuerberatung und Unternehmensentwicklung.',
        ],
        progress: 0,
      },
      {
        id: 6,
        name: 'die Betreuung',
        translates: [
          { name: 'уход', status: true },
          { name: 'транспорт', status: false },
          { name: 'образование', status: false },
          { name: 'строительство', status: false },
        ],
        examples: [
          'Welche Betreuungsdienstleistungen bietet Ihr Unternehmen an, und wie sind die Kosten?',
          'Die Betreuung älterer Menschen erfordert viel Geduld und Empathie.',
        ],
        progress: 0,
      },
      {
        id: 7,
        name: 'die Branche',
        translates: [
          { name: 'Отрасль', status: true },
          { name: 'Бренд', status: false },
          { name: 'Брак', status: false },
          { name: 'Образование', status: false },
        ],
        examples: [
          'Welche Branche ist in Ihrer Region besonders stark vertreten, und welche Unternehmen sind dort tätig?',
          'Die Automobilbranche spielt eine wichtige Rolle in der Wirtschaft unseres Landes.',
        ],
        progress: 0,
      },
      {
        id: 8,
        name: 'der Betrieb',
        translates: [
          { name: 'Предприятие', status: true },
          { name: 'Бюро', status: false },
          { name: 'Офис', status: false },
          { name: 'Здание', status: false },
        ],
        examples: [
          'Was ist das Hauptgeschäft Ihres Betriebs, und wie viele Mitarbeiter haben Sie?',
          'Unser Betrieb produziert hochwertige Maschinen und beschäftigt mehr als hundert Mitarbeiter.',
        ],
        progress: 0,
      },
      {
        id: 9,
        name: 'der Familienbetrieb',
        translates: [
          { name: 'Cемейное предприятие', status: true },
          { name: 'Семейная библиотека', status: false },
          { name: 'Фамильное учреждение', status: false },
          { name: 'Cемейный магазин', status: false },
        ],
        examples: [
          'Seit wie vielen Generationen führen Sie Ihren Familienbetrieb, und welche Produkte oder Dienstleistungen bieten Sie an?',
          'Unser Familienbetrieb existiert bereits seit über 100 Jahren und wir stellen handgefertigte Möbel her.',
        ],
        progress: 0,
      },
      {
        id: 10,
        name: 'die Hilfsorganisation',
        translates: [
          { name: 'благотворительная организация', status: true },
          { name: 'больничная организация', status: false },
          { name: 'образовательная организация', status: false },
          { name: 'финансовая организация', status: false },
        ],
        examples: [
          'Welche Hilfsorganisationen bieten Unterstützung für bedürftige Menschen in Ihrer Stadt an, und wie kann man sich ehrenamtlich engagieren?',
          'Die Hilfsorganisation leistet wichtige Arbeit bei der Versorgung von Flüchtlingen und Obdachlosen.',
        ],
        progress: 0,
      },
      {
        id: 11,
        name: 'die internationalen Unternehmen',
        translates: [
          { name: 'международные компании', status: true },
          { name: 'интересные проекты', status: false },
          { name: 'инновационные продукты', status: false },
          { name: 'информационные учреждения', status: false },
        ],
        examples: [
          'Welche internationalen Unternehmen haben Niederlassungen in Ihrer Stadt, und wie viele Arbeitsplätze bieten sie?',
          'Die internationalen Unternehmen investieren in die lokale Wirtschaft und schaffen Arbeitsplätze.',
        ],
        progress: 0,
      },
      {
        id: 12,
        name: 'die Lebensmittelbranche',
        translates: [
          { name: 'пищевая промышленность', status: true },
          { name: 'лечебная медицина', status: false },
          { name: 'лесная промышленность', status: false },
          { name: 'литературная сфера', status: false },
        ],
        examples: [
          'Welche Entwicklungen in der Lebensmittelbranche beeinflussen den Markt, und wie reagieren Unternehmen darauf?',
          'Die Lebensmittelbranche legt großen Wert auf Qualität und Sicherheit der Produkte.',
        ],
        progress: 0,
      },
      {
        id: 13,
        name: 'der Malerbetrieb',
        translates: [
          { name: 'малярное предприятие', status: true },
          { name: 'медицинская лаборатория', status: false },
          { name: 'автомастерская', status: false },
          { name: 'мебельный магазин', status: false },
        ],
        examples: [
          'Was bietet ein Malerbetrieb seinen Kunden, und wie lange dauert die Renovierung eines Durchschnittshauses?',
          'Ein Malerbetrieb ist auf Malerarbeiten im Innen- und Außenbereich spezialisiert und sorgt für frische Farben in Ihrem Zuhause.',
        ],
        progress: 0,
      },
      {
        id: 14,
        name: 'der soziale Bereich',
        translates: [
          { name: 'Социальная сфера', status: true },
          { name: 'Социальный область', status: false },
          { name: 'Общественная область', status: false },
          { name: 'Социальное пространство', status: false },
        ],
        examples: [
          'Was bedeutet der soziale Bereich in Deutschland?',
          'Der soziale Bereich umfasst Bildung, Gesundheit und Sozialleistungen.',
        ],
        progress: 0,
      },
      {
        id: 15,
        name: 'beschäftigen',
        translates: [
          { name: 'занять', status: true },
          { name: 'заниматься', status: false },
          { name: 'устроить на работу', status: false },
          { name: 'расследовать', status: false },
        ],
        examples: [
          'Womit beschäftigen Sie sich beruflich?',
          'Ich beschäftige mich mit der Entwicklung von Software',
        ],
        progress: 0,
      },
      {
        id: 16,
        name: 'produzieren',
        translates: [
          { name: 'производить', status: true },
          { name: 'создавать', status: false },
          { name: 'изготавливать', status: false },
          { name: 'выпускать', status: false },
        ],
        examples: [
          'Was produzieren Sie in dieser Fabrik?',
          'Wir produzieren hochwertige Elektronikgeräte.',
        ],
        progress: 0,
      },
      {
        id: 17,
        name: 'geistig',
        translates: [
          { name: 'умственный', status: true },
          { name: 'духовный', status: false },
          { name: 'интеллектуальный', status: false },
          { name: 'психический', status: false },
        ],
        examples: [
          'Wie kann man geistig anspruchsvolle Aufgaben im Beruf bewältigen?',
          'Geistige Arbeit erfordert Konzentration und Denkfähigkeiten.',
        ],
        progress: 0,
      },
      {
        id: 18,
        name: 'handwerklich',
        translates: [
          { name: 'ручной', status: true },
          { name: 'ремесленный', status: false },
          { name: 'мастерский', status: false },
          { name: 'умственный', status: false },
        ],
        examples: [
          'Wie wichtig ist handwerkliche Arbeit in der modernen Gesellschaft?',
          'Handwerkliche Fähigkeiten sind für viele Berufe nach wie vor von großer Bedeutung.',
        ],
        progress: 0,
      },
      {
        id: 19,
        name: 'sozial',
        translates: [
          { name: 'социальный', status: true },
          { name: 'общественный', status: false },
          { name: 'коммунальный', status: false },
          { name: 'государственный', status: false },
        ],
        examples: [
          'Wie beeinflusst die soziale Arbeit das Gemeinwohl?',
          'Das soziale Engagement ist wichtig für den Zusammenhalt der Gesellschaft.',
        ],
        progress: 0,
      },
    ],
  },
  {
    id: 2,
    name: 'Ausbildung und Studium',
    list: [
      {
        id: 1,
        name: 'die Grundschule',
        translates: [
          { name: 'начальная школа', status: true },
          { name: 'основная школа', status: false },
          { name: 'начальное образование', status: false },
          { name: 'первая школа', status: false },
        ],
        examples: [
          'Wie lange dauert die Grundschule in Deutschland?',
          'Die Grundschule dauert in der Regel vier Jahre',
        ],
        progress: 0,
      },
      {
        id: 2,
        name: 'die weiterführende Schule',
        translates: [
          { name: 'средняя школа', status: true },
          { name: 'продолжающая школа', status: false },
          { name: 'образовательное учреждение', status: false },
          { name: 'старшая школа', status: false },
        ],
        examples: [
          'Welche weiterführende Schule besucht dein Kind?',
          'Mein Kind geht auf eine Gesamtschule, das ist eine Art weiterführende Schule.',
        ],
        progress: 0,
      },
      {
        id: 3,
        name: 'die Hauptschule',
        translates: [
          { name: 'средняя школа', status: true },
          { name: 'основная школа', status: false },
          { name: 'начальная школа', status: false },
          { name: 'старшая школа', status: false },
        ],
        examples: [
          'Welche Schultypen gibt es nach der Grundschule in Deutschland, außer der Hauptschule?',
          'Die Hauptschule ist ein wichtiger Schultyp in Deutschland, der Schülern grundlegende Bildung vermittelt.',
        ],
        progress: 0,
      },
      {
        id: 4,
        name: 'die Mittelschule',
        translates: [
          { name: 'средняя школа', status: true },
          { name: 'среднее учебное заведение', status: false },
          { name: 'среднее образование', status: false },
          { name: 'старшая школа', status: false },
        ],
        examples: [
          'Welche Fächer werden in der Mittelschule unterrichtet?',
          'Die Mittelschule vermittelt Schülern eine breite Allgemeinbildung.',
        ],
        progress: 0,
      },
      {
        id: 5,
        name: 'die Realschule',
        translates: [
          { name: 'средняя общеобразовательная школа', status: true },
          { name: 'средняя школа', status: false },
          { name: 'среднее образование', status: false },
          { name: 'реальная школа', status: false },
        ],
        examples: [
          'Welche Abschlüsse kann man an der Realschule erreichen?',
          'Die Realschule bietet einen Bildungsweg mit einem mittleren Bildungsabschluss.',
        ],
        progress: 0,
      },
      {
        id: 6,
        name: 'die Gesamtschule',
        translates: [
          { name: 'общеобразовательная школа', status: true },
          { name: 'всеобщая школа', status: false },
          { name: 'комплексная школа', status: false },
          { name: 'средняя школа', status: false },
        ],
        examples: [
          'Welche Schüler besuchen normalerweise eine Gesamtschule?',
          'Die Gesamtschule bietet Schülern unterschiedlicher Leistungsniveaus die Möglichkeit, gemeinsam zu lernen.',
        ],
        progress: 0,
      },
      {
        id: 7,
        name: 'das Gymnasium',
        translates: [
          { name: 'гимназия', status: true },
          { name: 'средняя школа', status: false },
          { name: 'лицей', status: false },
          { name: 'общее образование', status: false },
        ],
        examples: [
          'Welche Fächer werden am Gymnasium besonders betont?',
          'Am Gymnasium legt man besonderen Wert auf die geisteswissenschaftlichen Fächer.',
        ],
        progress: 0,
      },
      {
        id: 8,
        name: 'der Hauptschulabschluss',
        translates: [
          { name: 'аттестат о базовом образовании', status: true },
          { name: 'заключительный аттестат основной школы', status: false },
          { name: 'свидетельство о среднем образовании', status: false },
          { name: 'аттестат о среднем образовании', status: false },
        ],
        examples: [
          'Welche Möglichkeiten stehen einem nach dem Hauptschulabschluss offen?',
          'Mit dem Hauptschulabschluss kann man verschiedene berufliche Wege einschlagen.',
        ],
        progress: 0,
      },
      {
        id: 9,
        name: 'das Abitur',
        translates: [
          { name: 'абитуриент', status: true },
          { name: 'высшее образование', status: false },
          { name: 'выпускной аттестат', status: false },
          { name: 'диплом', status: false },
        ],
        examples: [
          'Wie beeinflusst das Abitur die Berufsaussichten junger Menschen in Deutschland?',
          'Das Abitur ist in Deutschland oft Voraussetzung für den Zugang zu vielen Hochschulstudiengängen.',
        ],
        progress: 0,
      },
      {
        id: 10,
        name: 'die Mittlere Reife',
        translates: [
          { name: 'аттестат о среднем образовании', status: true },
          { name: 'средний образовательный уровень', status: false },
          { name: 'середняя школа', status: false },
          { name: 'средний балл', status: false },
        ],
        examples: [
          'Welche Voraussetzungen sind notwendig für den Erwerb der Mittleren Reife in Deutschland?',
          'Die Mittlere Reife ist ein wichtiger Bildungsabschluss, der den Zugang zu verschiedenen Berufen ermöglicht.',
        ],
        progress: 0,
      },
      {
        id: 11,
        name: 'die Berufsausbildung',
        translates: [
          { name: 'профессиональное образование', status: true },
          { name: 'обучение по профессии', status: false },
          { name: 'техническое образование', status: false },
          { name: 'профессиональная подготовка', status: false },
        ],
        examples: [
          'Wie lange dauert in Deutschland die Berufsausbildung in der Regel?',
          'Die Berufsausbildung dauert in der Regel zwischen zwei und drei Jahren.',
        ],
        progress: 0,
      },
      {
        id: 12,
        name: 'der Berufsabschluss',
        translates: [
          { name: 'профессиональная квалификация', status: true },
          { name: 'профессиональное обучение', status: false },
          { name: 'профессиональный ключ', status: false },
          { name: 'профессиональное предприятие', status: false },
        ],
        examples: [
          'Welche Vorteile bringt der Berufsabschluss für die Karriere?',
          'Der Berufsabschluss ist ein wichtiger Schritt für den beruflichen Erfolg.',
        ],
        progress: 0,
      },
      {
        id: 13,
        name: 'der Bachelor',
        translates: [
          { name: 'бакалавр', status: true },
          { name: 'диплом бакалавра', status: false },
          { name: 'бакалаврский экзамен', status: false },
          { name: 'первая ступень высшего образования', status: false },
        ],
        examples: [
          'Welche beruflichen Möglichkeiten bietet ein Bachelor-Abschluss?',
          'Mit einem Bachelor-Abschluss stehen viele Einstiegsmöglichkeiten in das Berufsleben zur Verfügung.',
        ],
        progress: 0,
      },
      {
        id: 14,
        name: 'der Master',
        translates: [
          { name: 'магистр', status: true },
          { name: 'бакалавр', status: false },
          { name: 'магистерская степень', status: false },
          { name: 'вторая ступень высшего образования', status: false },
        ],
        examples: [
          'Welche Vorteile bringt ein Master-Abschluss für die Karriere?',
          'Ein Master-Abschluss eröffnet oft bessere berufliche Perspektiven und höhere Gehaltsmöglichkeiten.',
        ],
        progress: 0,
      },
      {
        id: 15,
        name: 'das Zertifikat',
        translates: [
          { name: 'сертификат', status: true },
          { name: 'свидетельство', status: false },
          { name: 'аттестат', status: false },
          { name: 'удостоверение', status: false },
        ],
        examples: [
          'Welche Zertifikate sind in deinem Berufsfeld besonders wichtig?',
          'Ein Zertifikat kann die Chancen auf dem Arbeitsmarkt erhöhen.',
        ],
        progress: 0,
      },
      {
        id: 16,
        name: 'der Realschulabschluss',
        translates: [
          { name: 'аттестат о среднем образовании', status: true },
          { name: 'заключительный аттестат средней школы', status: false },
          { name: 'свидетельство о завершении средней школы', status: false },
          { name: 'аттестат о профессиональном образовании', status: false },
        ],
        examples: [
          'Welche Möglichkeiten eröffnet der Realschulabschluss auf dem Arbeitsmarkt?',
          'Mit dem Realschulabschluss stehen viele Berufsmöglichkeiten zur Auswahl.',
        ],
        progress: 0,
      },
    ],
  },
  {
    id: 3,
    name: 'Statistiken',
    list: [
      {
        id: 1,
        name: 'mehr als',
        translates: [
          { name: 'более чем', status: true },
          { name: 'менее чем', status: false },
          { name: 'больше всех', status: false },
          { name: 'превыше всего', status: false },
        ],
        examples: [
          'Wie viele Jahre Berufserfahrung benötigen Sie für diese Position?',
          'Für diese Position benötigen Sie mehr als zehn Jahre Berufserfahrung.',
        ],
        progress: 0,
      },
      {
        id: 2,
        name: 'weniger als',
        translates: [
          { name: 'менее чем', status: true },
          { name: 'ниже чем', status: false },
          { name: 'ниже', status: false },
          { name: 'более чем', status: false },
        ],
        examples: [
          'Wie viele Stunden pro Woche arbeiten Sie?',
          'Ich arbeite weniger als 40 Stunden pro Woche.',
        ],
        progress: 0,
      },
      {
        id: 3,
        name: 'fast alle',
        translates: [
          { name: 'почти все', status: true },
          { name: 'большинство', status: false },
          { name: 'почти никто', status: false },
          { name: 'почти каждый', status: false },
        ],
        examples: [
          'Wie viele Mitarbeiter haben an dem Projekt teilgenommen?',
          'Fast alle Mitarbeiter haben an dem Projekt teilgenommen.',
        ],
        progress: 0,
      },
      {
        id: 4,
        name: 'die Hälfte',
        translates: [
          { name: 'половина', status: true },
          { name: 'треть', status: false },
          { name: 'четверть', status: false },
          { name: 'помощь', status: false },
        ],
        examples: [
          'Wie viele der Mitarbeiter haben an der Schulung teilgenommen?',
          'Die Hälfte der Mitarbeiter hat an der Schulung teilgenommen.',
        ],
        progress: 0,
      },
      {
        id: 5,
        name: 'ein Viertel',
        translates: [
          { name: 'четверть', status: true },
          { name: 'половина', status: false },
          { name: 'треть', status: false },
          { name: 'все', status: false },
        ],
        examples: [
          'Wie viele der Mitarbeiter haben ein Viertel ihres Urlaubs bereits genommen?',
          'Ein Viertel der Mitarbeiter hat bereits ein Viertel ihres Urlaubs genommen.',
        ],
        progress: 0,
      },
      {
        id: 6,
        name: 'ein Drittel',
        translates: [
          { name: 'треть', status: true },
          { name: 'половина', status: false },
          { name: 'четверть', status: false },
          { name: 'часть', status: false },
        ],
        examples: [
          'Wie viele der Arbeitszeit widmen Sie der Projektarbeit?',
          'Ein Drittel der Arbeitszeit widme ich der Projektarbeit.',
        ],
        progress: 0,
      },
      {
        id: 7,
        name: 'jeder Zehnte',
        translates: [
          { name: 'каждый десятый', status: true },
          { name: 'десятое число', status: false },
          { name: 'десятичная дробь', status: false },
          { name: 'десять', status: false },
        ],
        examples: [
          'Wie viele der Bewerber erfüllen die Anforderungen?',
          'Jeder Zehnte der Bewerber erfüllt die Anforderungen.',
        ],
        progress: 0,
      },
    ],
  },
  {
    id: 4,
    name: 'Beruf und Ausbildung',
    list: [
      {
        id: 1,
        name: 'der Ansprechpartner',
        translates: [
          { name: 'Контактное лицо', status: true },
          { name: 'Партнер для разговора', status: false },
          { name: 'Партнер для переговоров', status: false },
          { name: 'Собеседник', status: false },
        ],
        examples: [
          'Wer ist der Ansprechpartner für dieses Projekt?',
          'Der Ansprechpartner für diese Angelegenheit ist Herr Müller.',
        ],
        progress: 0,
      },
      {
        id: 2,
        name: 'die Beratungsstelle',
        translates: [
          { name: 'Консультационный центр', status: true },
          { name: 'Профессиональный центр', status: false },
          { name: 'Консультационная плата', status: false },
          { name: 'Время консультации', status: false },
        ],
        examples: [
          'Wo befindet sich die nächste Beratungsstelle für Arbeitssuchende?',
          'Die Beratungsstelle bietet Unterstützung bei der Jobsuche und beruflichen Weiterentwicklung.',
        ],
        progress: 0,
      },
      {
        id: 3,
        name: 'das Berufspraktikum',
        translates: [
          { name: 'Профессиональная стажировка', status: true },
          { name: 'Свидетельство о стажировке', status: false },
          { name: 'Место стажировки', status: false },
          { name: 'Профессиональное обучение', status: false },
        ],
        examples: [
          'Wo kann ich ein Berufspraktikum in diesem Unternehmen machen?',
          'Das Berufspraktikum dauert sechs Monate und bietet wertvolle Erfahrungen.',
        ],
        progress: 0,
      },
      {
        id: 4,
        name: 'die duale Ausbildung',
        translates: [
          { name: 'Дуальное обучение', status: true },
          { name: 'Профессиональное обучение', status: false },
          { name: 'Трудовой договор об обучении', status: false },
          { name: 'Обучение учеников', status: false },
        ],
        examples: [
          'Welche Vorteile bietet die duale Ausbildung im Vergleich zu anderen Ausbildungswegen?',
          'Die duale Ausbildung kombiniert praktische Erfahrungen im Betrieb mit theoretischem Unterricht in der Schule.',
        ],
        progress: 0,
      },
      {
        id: 5,
        name: 'die Fachschule',
        translates: [
          { name: 'Техникум', status: true },
          { name: 'Высшее учебное заведение', status: false },
          { name: 'Начальная школа', status: false },
          { name: 'Средняя школа', status: false },
        ],
        examples: [
          'Welche Abschlüsse kann man an der Fachschule erwerben?',
          'An der Fachschule kann man Abschlüsse in verschiedenen Fachrichtungen erlangen, darunter Wirtschaft, Technik und Gesundheitswissenschaften.',
        ],
        progress: 0,
      },
      {
        id: 6,
        name: 'die Fortbildung',
        translates: [
          { name: 'Повышение квалификации', status: true },
          { name: 'Дополнительное образование', status: false },
          { name: 'Переквалификация', status: false },
          { name: 'Начальное образование', status: false },
        ],
        examples: [
          'Welche Fortbildungen sind für diesen Beruf besonders wichtig?',
          'Die Fortbildung ermöglicht es den Mitarbeitern, ihre Fähigkeiten und Kenntnisse auf dem neuesten Stand zu halten.',
        ],
        progress: 0,
      },
      {
        id: 7,
        name: 'die Meisterprüfung',
        translates: [
          { name: 'Экзамен на звание мастера', status: true },
          { name: 'Учительский экзамен', status: false },
          { name: 'Завершающий экзамен', status: false },
          { name: 'Экзамен на пригодность', status: false },
        ],
        examples: [
          'Wie bereitet man sich auf die Meisterprüfung vor?',
          'Die Meisterprüfung ist der Höhepunkt der handwerklichen Ausbildung und eröffnet neue berufliche Möglichkeiten.',
        ],
        progress: 0,
      },
      {
        id: 8,
        name: 'der Schichtdienst',
        translates: [
          { name: 'Вахтовая служба', status: true },
          { name: 'Ночная смена', status: false },
          { name: 'Регулирование рабочего времени', status: false },
          { name: 'Работа по сменам', status: false },
        ],
        examples: [
          'Wie funktioniert der Schichtdienst in diesem Unternehmen?',
          'Der Schichtdienst ermöglicht es, rund um die Uhr für die Kunden erreichbar zu sein.',
        ],
        progress: 0,
      },
      {
        id: 9,
        name: 'die staatliche Ausbildung',
        translates: [
          { name: 'государственное образование', status: true },
          { name: 'профессиональное обучение', status: false },
          { name: 'общественное образование', status: false },
          { name: 'государственный экзамен', status: false },
        ],
        examples: [
          'Welche Voraussetzungen gelten für die staatliche Ausbildung in diesem Land?',
          'Die staatliche Ausbildung ist in Deutschland kostenfrei und bietet eine solide Grundlage für den Berufseinstieg.',
        ],
        progress: 0,
      },
      {
        id: 10,
        name: 'die Weiterbildung',
        translates: [
          { name: 'Повышение квалификации', status: true },
          { name: 'Профессиональное обучение', status: false },
          { name: 'Школьное образование', status: false },
          { name: 'Начальное образование', status: false },
        ],
        examples: [
          'Welche Weiterbildungsmöglichkeiten gibt es in dieser Firma?',
          'Die Weiterbildung der Mitarbeiter ist ein wichtiger Teil der Unternehmensphilosophie.',
        ],
        progress: 0,
      },
      {
        id: 11,
        name: 'der Wunschberuf',
        translates: [
          { name: 'Желаемая профессия', status: true },
          { name: 'Идеальная профессия', status: false },
          { name: 'Любимая профессия', status: false },
          { name: 'Профессия мечты', status: false },
        ],
        examples: [
          'Was ist dein Wunschberuf und wie möchtest du ihn erreichen?',
          'Mein Wunschberuf ist Arzt, und ich werde Medizin studieren, um ihn zu erreichen.',
        ],
        progress: 0,
      },
      {
        id: 12,
        name: 'die Zugangsvoraussetzungen',
        translates: [
          { name: 'Условия для поступления', status: true },
          { name: 'Условия доступа', status: false },
          { name: 'Условия приема', status: false },
          { name: 'Условия присоединения', status: false },
        ],
        examples: [
          'Welche Zugangsvoraussetzungen gelten für die Ausbildung zum Ingenieur?',
          'Die Zugangsvoraussetzungen für die Ingenieurausbildung umfassen einen Bachelor-Abschluss in einem relevanten Fachgebiet.',
        ],
        progress: 0,
      },
      {
        id: 13,
        name: 'einen Beruf ausüben',
        translates: [
          { name: 'заниматься профессиональной деятельностью', status: true },
          { name: 'искать профессиональную должность', status: false },
          { name: 'строить карьеру', status: false },
          { name: 'обучаться новой профессии', status: false },
        ],
        examples: [
          'Was muss man tun, um einen Beruf ausüben zu können?',
          'Um einen Beruf ausüben zu können, muss man in der Regel eine entsprechende Ausbildung absolvieren.',
        ],
        progress: 0,
      },
      {
        id: 14,
        name: 'den Berufsabschluss anerkennen lassen',
        translates: [
          { name: 'признать профессиональный диплом', status: true },
          { name: 'признать образовательный диплом', status: false },
          { name: 'сертификация диплома', status: false },
          { name: 'сдать профессиональный экзамен', status: false },
        ],
        examples: [
          'Wie kann man den Berufsabschluss im Ausland anerkennen lassen?',
          'Um im Ausland zu arbeiten, muss man oft seinen Berufsabschluss anerkennen lassen, um die Qualifikationen nachzuweisen.',
        ],
        progress: 0,
      },
      {
        id: 15,
        name: 'finanzielle Unterstützung beantragen',
        translates: [
          { name: 'запрашивать финансовую поддержку', status: true },
          { name: 'запрашивать скидку', status: false },
          { name: 'получать финансовую поддержку', status: false },
          { name: 'поддерживать финансово', status: false },
        ],
        examples: [
          'Wie kann ich finanzielle Unterstützung beantragen, wenn ich arbeitslos bin?',
          'Um finanzielle Unterstützung zu beantragen, müssen Sie sich an das Arbeitsamt wenden und die erforderlichen Unterlagen vorlegen.',
        ],
        progress: 0,
      },
      {
        id: 16,
        name: 'jobben',
        translates: [
          { name: 'работать неполный рабочий день', status: true },
          { name: 'работать', status: false },
          { name: 'быть занятым', status: false },
          { name: 'быть деятельным', status: false },
        ],
        examples: [
          'Wo kann man in den Ferien jobben, um Geld zu verdienen?',
          'Viele Studenten jobben in Cafés oder Supermärkten, um ihre Studienkosten zu decken.',
        ],
        progress: 0,
      },
      {
        id: 17,
        name: 'Pflicht sein',
        translates: [
          { name: 'быть обязанным', status: true },
          { name: 'быть ответственным', status: false },
          { name: 'быть внимательным', status: false },
          { name: 'быть честным', status: false },
        ],
        examples: [
          'Welche Pflichten sind in Ihrem Beruf besonders wichtig?',
          'Die Pflicht, pünktlich zur Arbeit zu erscheinen, wird in den meisten Unternehmen sehr ernst genommen.',
        ],
        progress: 0,
      },
      {
        id: 18,
        name: 'in der Verwaltung arbeiten',
        translates: [
          { name: 'работать в администрации', status: true },
          { name: 'работать в офисе', status: false },
          { name: 'работать на почте', status: false },
          { name: 'работать удалённо', status: false },
        ],
        examples: [
          'Was sind die Hauptaufgaben, wenn Sie in der Verwaltung arbeiten?',
          'In der Verwaltung zu arbeiten erfordert organisatorische Fähigkeiten und eine genaue Arbeitsweise.',
        ],
        progress: 0,
      },
      {
        id: 19,
        name: 'sich selbstständig machen',
        translates: [
          { name: 'стать предпринимателем', status: true },
          { name: 'основать компанию', status: false },
          { name: 'искать работу', status: false },
          { name: 'уйти на пенсию', status: false },
        ],
        examples: [
          'Wie kann man sich selbstständig machen und ein erfolgreiches Unternehmen aufbauen?',
          'Viele Menschen träumen davon, sich selbstständig zu machen und ihre eigenen Geschäftsideen zu verwirklichen.',
        ],
        progress: 0,
      },
      {
        id: 20,
        name: 'zuständig sein',
        translates: [
          { name: 'быть ответственным', status: true },
          { name: 'быть обязанным', status: false },
          { name: 'быть самостоятельным', status: false },
          { name: 'быть пунктуальным', status: false },
        ],
        examples: [
          'Wer ist in Ihrem Unternehmen zuständig für die Personalangelegenheiten?',
          'Der Abteilungsleiter ist zuständig für die Koordination der Projekte und die Aufgabenverteilung im Team.',
        ],
        progress: 0,
      },
    ],
  },
  {
    id: 5,
    name: 'Soft Skills und Eigenschaften',
    list: [
      {
        id: 1,
        name: 'die Schwäche',
        translates: [
          { name: 'слабость', status: true },
          { name: 'усталость', status: false },
          { name: 'бессилие', status: false },
          { name: 'болезнь', status: false },
        ],
        examples: [
          'Was sind Ihre Schwächen in der Arbeit?',
          'Meine Schwäche in der Arbeit ist, dass ich manchmal zu perfektionistisch bin.',
        ],
        progress: 0,
      },
      {
        id: 2,
        name: 'Die Stärke',
        translates: [
          { name: 'сила', status: true },
          { name: 'мощь', status: false },
          { name: 'отвага', status: false },
          { name: 'мужество', status: false },
        ],
        examples: [
          'Welche Stärken bringen Sie in die Arbeit ein?',
          'Meine Stärke in der Arbeit ist meine Fähigkeit, kreativ Probleme zu lösen.',
        ],
        progress: 0,
      },
      {
        id: 3,
        name: 'belastbar',
        translates: [
          { name: 'способный к нагрузкам, выносливый', status: true },
          { name: 'стрессоустойчивый', status: false },
          { name: 'работоспособный', status: false },
          { name: 'сильный', status: false },
        ],
        examples: [
          'Sind Sie belastbar und können Sie unter Druck arbeiten?',
          'Ja, ich bin belastbar und kann unter Druck effektiv arbeiten.',
        ],
        progress: 0,
      },
      {
        id: 4,
        name: 'еigeninitiative',
        translates: [
          { name: 'инициативный', status: true },
          { name: 'проактивный', status: false },
          { name: 'самостоятельный', status: false },
          { name: 'безинициативный', status: false },
        ],
        examples: [
          'Haben Sie Eigeninitiative in Ihrer Arbeit gezeigt?',
          'Ja, ich habe Eigeninitiative gezeigt und neue Projekte initiiert.',
        ],
        progress: 0,
      },
      {
        id: 5,
        name: 'flexibel',
        translates: [
          { name: 'гибкий', status: true },
          { name: 'подвижный', status: false },
          { name: 'изменчивый', status: false },
          { name: 'податливый', status: false },
        ],
        examples: [
          'Sind Sie flexibel in Bezug auf Ihre Arbeitszeiten?',
          'Ja, ich bin flexibel und kann meine Arbeitszeiten anpassen, wenn nötig.',
        ],
        progress: 0,
      },
      {
        id: 6,
        name: 'hilfsbereit',
        translates: [
          { name: 'готовый помочь', status: true },
          { name: 'дружелюбный', status: false },
          { name: 'заботливый', status: false },
          { name: 'безпомощьный', status: false },
        ],
        examples: [
          'Sind Sie hilfsbereit gegenüber Ihren Kollegen in der Arbeit?',
          'Ja, ich bin hilfsbereit und stehe meinen Kollegen immer zur Verfügung.',
        ],
        progress: 0,
      },
      {
        id: 7,
        name: 'kreativ',
        translates: [
          { name: 'креативный', status: true },
          { name: 'творческий', status: false },
          { name: 'изобретательный', status: false },
          { name: 'фантазийный', status: false },
        ],
        examples: [
          'Sind Sie in Ihrer Arbeit kreativ?',
          'Ja, ich bin kreativ und suche immer nach neuen Lösungen.',
        ],
        progress: 0,
      },
      {
        id: 8,
        name: 'lernbereit',
        translates: [
          { name: 'готовый к обучению', status: true },
          { name: 'образованный', status: false },
          { name: 'умный', status: false },
          { name: 'знающий', status: false },
        ],
        examples: [
          'Sind Sie lernbereit und bereit, neue Fähigkeiten zu erlernen?',
          'Ja, ich bin lernbereit und freue mich darauf, neue Fähigkeiten zu erlernen.',
        ],
        progress: 0,
      },
      {
        id: 9,
        name: 'organisiert',
        translates: [
          { name: 'организованный', status: true },
          { name: 'структурированный', status: false },
          { name: 'систематичный', status: false },
          { name: 'пунктуальный', status: false },
        ],
        examples: [
          'Sind Sie organisiert in Ihrer Arbeit?',
          'Ja, ich bin sehr organisiert und halte immer meine Termine ein.',
        ],
        progress: 0,
      },
      {
        id: 10,
        name: 'selbstbewusst',
        translates: [
          { name: 'уверенный в себе', status: true },
          { name: 'самодостаточный', status: false },
          { name: 'независимый', status: false },
          { name: 'застенчивый', status: false },
        ],
        examples: [
          'Sind Sie selbstbewusst in Ihrer beruflichen Laufbahn?',
          'Ja, ich bin selbstbewusst und glaube an meine Fähigkeiten.',
        ],
        progress: 0,
      },
      {
        id: 11,
        name: 'teamfähig',
        translates: [
          { name: 'способный работать в команде', status: true },
          { name: 'коллективный', status: false },
          { name: 'кооперативный', status: false },
          { name: 'сотрудничающий', status: false },
        ],
        examples: [
          'Sind Sie teamfähig und können gut im Team arbeiten? ',
          'Ja, ich bin teamfähig und habe Erfahrung in der Zusammenarbeit mit verschiedenen Teams.',
        ],
        progress: 0,
      },
      {
        id: 12,
        name: 'tolerant',
        translates: [
          { name: 'толерантный', status: true },
          { name: 'индульгентный', status: false },
          { name: 'уважительный', status: false },
          { name: 'снисходительный', status: false },
        ],
        examples: [
          'Sind Sie tolerant gegenüber unterschiedlichen Ansichten in der Arbeit?',
          'Ja, ich bin tolerant und respektiere die Vielfalt der Meinungen und Ansichten in unserem Team.',
        ],
        progress: 0,
      },
      {
        id: 13,
        name: 'verantwortungsbewusst',
        translates: [
          { name: 'ответственный', status: true },
          { name: 'обязательный', status: false },
          { name: 'добросовестный', status: false },
          { name: 'аккуратный', status: false },
        ],
        examples: [
          'Sind Sie verantwortungsbewusst in Ihrer Arbeit?',
          'Ja, ich bin sehr verantwortungsbewusst und setze mich stets für die Erledigung meiner Aufgaben ein.',
        ],
        progress: 0,
      },
    ],
  },
  {
    id: 6,
    name: 'Dokumente und Papiere',
    list: [
      {
        id: 1,
        name: 'die Anerkennung',
        translates: [
          { name: 'признание', status: true },
          { name: 'одобрение', status: false },
          { name: 'уважение', status: false },
          { name: 'благодарность', status: false },
        ],
        examples: [
          'Wie wichtig ist Anerkennung in Ihrer Arbeitsumgebung? ',
          'Anerkennung spielt eine entscheidende Rolle in unserer Arbeitskultur, da sie die Motivation der Mitarbeiter steigert.',
        ],
        progress: 0,
      },
      {
        id: 2,
        name: 'der Antrag',
        translates: [
          { name: 'заявление', status: true },
          { name: 'предложение', status: false },
          { name: 'петиция', status: false },
          { name: 'ходатайство', status: false },
        ],
        examples: [
          'Wie reicht man einen Antrag auf Urlaub ein?',
          'Um einen Antrag auf Urlaub einzureichen, müssen Sie das entsprechende Formular ausfüllen und es Ihrem Vorgesetzten vorlegen.',
        ],
        progress: 0,
      },
      {
        id: 3,
        name: 'der Berufsabschluss',
        translates: [
          { name: 'профессиональный диплом (квалификация)', status: true },
          { name: 'рабочий опыт', status: false },
          { name: 'карьера', status: false },
          { name: 'рабочая специализация', status: false },
        ],
        examples: [
          'Welchen Berufsabschluss haben Sie?',
          'Ich habe einen Berufsabschluss als Elektriker.',
        ],
        progress: 0,
      },
      {
        id: 4,
        name: 'der Lebenslauf',
        translates: [
          { name: 'резюме', status: true },
          { name: 'жизненный путь', status: false },
          { name: 'биография', status: false },
          { name: 'карьера', status: false },
        ],
        examples: [
          'Wie schreibt man einen Lebenslauf?',
          'Der Lebenslauf ist eine wichtige Komponente bei der Jobsuche.',
        ],
        progress: 0,
      },
      {
        id: 5,
        name: 'die Unterlagen',
        translates: [
          { name: 'документы', status: true },
          { name: 'информация', status: false },
          { name: 'досье', status: false },
          { name: 'резюме', status: false },
        ],
        examples: [
          'Wo finde ich die notwendigen Unterlagen für die Bewerbung?',
          'Die Unterlagen für die Bewerbung befinden sich in der oberen Schublade meines Schreibtischs.',
        ],
        progress: 0,
      },
      {
        id: 6,
        name: 'das Zeugnis',
        translates: [
          { name: 'свидетельство', status: true },
          { name: 'диплом', status: false },
          { name: 'показания', status: false },
          { name: 'отчет', status: false },
        ],
        examples: [
          'Welche Zeugnisse sind für diese Position erforderlich?',
          'Für diese Position sind Zeugnisse über Ihre Qualifikationen und Berufserfahrung notwendig',
        ],
        progress: 0,
      },
      {
        id: 7,
        name: 'die Zulassung',
        translates: [
          { name: 'разрешение', status: true },
          { name: 'прием', status: false },
          { name: 'регистрация', status: false },
          { name: 'авторизация', status: false },
        ],
        examples: [
          'Wie bekomme ich die Zulassung für diese Position?',
          'Die Zulassung für diese Position wird aufgrund Ihrer Qualifikation und Erfahrung erteilt.',
        ],
        progress: 0,
      },
    ],
  },
  {
    id: 7,
    name: 'Berufsbeschreibungen',
    list: [
      {
        id: 1,
        name: 'wwwwwwwwwwwwwwww',
        translates: [
          { name: 'ttttttttttttttttttt', status: true },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
        ],
        examples: [
          'sssssssssssssssssssssssssssssssss',
          'sssssssssssssssssssssssssssssssss',
        ],
        progress: 0,
      },
      {
        id: 2,
        name: 'wwwwwwwwwwwwwwww',
        translates: [
          { name: 'ttttttttttttttttttt', status: true },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
        ],
        examples: [
          'sssssssssssssssssssssssssssssssss',
          'sssssssssssssssssssssssssssssssss',
        ],
        progress: 0,
      },
      {
        id: 3,
        name: 'wwwwwwwwwwwwwwww',
        translates: [
          { name: 'ttttttttttttttttttt', status: true },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
        ],
        examples: [
          'sssssssssssssssssssssssssssssssss',
          'sssssssssssssssssssssssssssssssss',
        ],
        progress: 0,
      },
      {
        id: 4,
        name: 'wwwwwwwwwwwwwwww',
        translates: [
          { name: 'ttttttttttttttttttt', status: true },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
        ],
        examples: [
          'sssssssssssssssssssssssssssssssss',
          'sssssssssssssssssssssssssssssssss',
        ],
        progress: 0,
      },
      {
        id: 5,
        name: 'wwwwwwwwwwwwwwww',
        translates: [
          { name: 'ttttttttttttttttttt', status: true },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
        ],
        examples: [
          'sssssssssssssssssssssssssssssssss',
          'sssssssssssssssssssssssssssssssss',
        ],
        progress: 0,
      },
      {
        id: 6,
        name: 'wwwwwwwwwwwwwwww',
        translates: [
          { name: 'ttttttttttttttttttt', status: true },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
        ],
        examples: [
          'sssssssssssssssssssssssssssssssss',
          'sssssssssssssssssssssssssssssssss',
        ],
        progress: 0,
      },
      {
        id: 7,
        name: 'wwwwwwwwwwwwwwww',
        translates: [
          { name: 'ttttttttttttttttttt', status: true },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
        ],
        examples: [
          'sssssssssssssssssssssssssssssssss',
          'sssssssssssssssssssssssssssssssss',
        ],
        progress: 0,
      },
      {
        id: 8,
        name: 'wwwwwwwwwwwwwwww',
        translates: [
          { name: 'ttttttttttttttttttt', status: true },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
        ],
        examples: [
          'sssssssssssssssssssssssssssssssss',
          'sssssssssssssssssssssssssssssssss',
        ],
        progress: 0,
      },
      {
        id: 9,
        name: 'wwwwwwwwwwwwwwww',
        translates: [
          { name: 'ttttttttttttttttttt', status: true },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
        ],
        examples: [
          'sssssssssssssssssssssssssssssssss',
          'sssssssssssssssssssssssssssssssss',
        ],
        progress: 0,
      },
      {
        id: 10,
        name: 'wwwwwwwwwwwwwwww',
        translates: [
          { name: 'ttttttttttttttttttt', status: true },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
        ],
        examples: [
          'sssssssssssssssssssssssssssssssss',
          'sssssssssssssssssssssssssssssssss',
        ],
        progress: 0,
      },
      {
        id: 11,
        name: 'wwwwwwwwwwwwwwww',
        translates: [
          { name: 'ttttttttttttttttttt', status: true },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
          { name: 'ttttttttttttttttttt', status: false },
        ],
        examples: [
          'sssssssssssssssssssssssssssssssss',
          'sssssssssssssssssssssssssssssssss',
        ],
        progress: 0,
      },
    ],
  },
  //   {
  //     id: 8,
  //     name: 'NNNNNNNNNNNNNNNNNNNNNNNNN',
  //     list: [
  //       {
  //         id: 1,
  //         name: 'wwwwwwwwwwwwwwww',
  //         translates: [
  //           { name: 'ttttttttttttttttttt', status: true },
  //           { name: 'ttttttttttttttttttt', status: false },
  //           { name: 'ttttttttttttttttttt', status: false },
  //           { name: 'ttttttttttttttttttt', status: false },
  //         ],
  //         examples: [
  //           'sssssssssssssssssssssssssssssssss',
  //           'sssssssssssssssssssssssssssssssss',
  //         ],
  //         progress: 0,
  //       },
  //     ],
  //   },
];
