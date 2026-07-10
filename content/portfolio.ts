export const portfolio = {
  name: "[ИМЯ И ФАМИЛИЯ]",
  role: "Senior Android Developer",
  eyebrow: "Kotlin · Compose · Architecture",
  slogan: "Проектирую Android-продукты, которые выдерживают рост.",
  description:
    "Превращаю сложные продуктовые сценарии в быстрые, надёжные приложения — от архитектуры и многопоточности до релиза и развития команды.",
  city: "[ГОРОД]",
  availability: "Открыт к сильным продуктовым задачам",
  experience: "7+",
  email: "[EMAIL]",
  telegram: "[TELEGRAM]",
  github: "[GITHUB]",
  linkedin: "[LINKEDIN]",
  resume: "/resume/android-developer-resume.pdf",
  metrics: [
    { value: "20+", label: "фич от идеи до релиза" },
    { value: "−31%", label: "время холодного старта" },
    { value: "99.7%", label: "crash-free sessions" },
  ],
  skills: [
    { title: "Android core", icon: "⌁", items: ["Kotlin", "Android SDK", "Jetpack Compose", "Material 3"] },
    { title: "Architecture", icon: "◇", items: ["Clean Architecture", "MVI / MVVM", "Multi-module", "SOLID"] },
    { title: "Concurrency", icon: "∿", items: ["Coroutines", "Flow", "Channels", "StateFlow"] },
    { title: "Quality", icon: "◎", items: ["JUnit", "MockK", "UI Tests", "Performance"] },
  ],
  experienceItems: [
    {
      period: "2022 — сейчас",
      company: "[КОМПАНИЯ 1]",
      role: "Senior Android Developer",
      points: [
        "Спроектировал модульную архитектуру приложения и сократил время сборки.",
        "Запустил Compose-first подход и инженерные метрики качества.",
        "Провожу design review, code review и менторю разработчиков.",
      ],
    },
    {
      period: "2019 — 2022",
      company: "[КОМПАНИЯ 2]",
      role: "Android Developer",
      points: [
        "Развивал приложение с высокой нагрузкой и сложной синхронизацией данных.",
        "Оптимизировал startup, память и стабильность ключевых пользовательских потоков.",
      ],
    },
  ],
  projects: [
    {
      index: "01",
      title: "Pulse Finance",
      category: "Fintech · Android",
      result: "−28% времени на ключевой сценарий",
      description: "Мобильный финансовый хаб с аналитикой, офлайн-режимом и безопасными транзакциями.",
      stack: ["Compose", "MVI", "Room"],
      accent: "violet",
    },
    {
      index: "02",
      title: "Teamline",
      category: "B2B · Collaboration",
      result: "+18% weekly retention",
      description: "Рабочее пространство с real-time чатами, задачами и умными уведомлениями.",
      stack: ["Coroutines", "WebSocket", "Flow"],
      accent: "cyan",
    },
    {
      index: "03",
      title: "Atlas Health",
      category: "Healthtech · Platform",
      result: "99.8% crash-free sessions",
      description: "Приложение мониторинга показателей с графиками, wearable-интеграциями и data sync.",
      stack: ["Kotlin", "BLE", "Clean"],
      accent: "mint",
    },
  ],
  expertise: [
    "Архитектура и декомпозиция",
    "Compose UI и дизайн-системы",
    "Производительность",
    "Интеграция backend API",
    "Code review и качество",
    "Технические собеседования",
  ],
  process: ["Контекст", "Архитектура", "Декомпозиция", "Разработка", "Проверка", "Наблюдение"],
} as const;

export type Portfolio = typeof portfolio;
