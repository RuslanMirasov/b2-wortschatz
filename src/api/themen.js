export const themes = [
  { id: 1, name: 'Arbeitgeber und Branchen' },
  { id: 2, name: 'Ausbildung und Studium' },
  { id: 3, name: 'Statistiken' },
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
          { name: 'помощь', status: false },
        ],
        examples: [
          'Wie viele der Mitarbeiter haben ein Viertel ihres Urlaubs bereits genommen?',
          'Ein Viertel der Mitarbeiter hat bereits ein Viertel ihres Urlaubs genommen.',
        ],
        progress: 0,
      },
    ],
  },
  //   {
  //     id: 4,
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
