export const translations = {
  en: {
    // Header
    header: {
      title: 'Sunrise City',
      subtitle: 'Digital Office',
      nav: {
        home: 'Home',
        services: 'Services & Forms',
        cityHall: 'City Hall',
        community: 'Community',
        data: 'Data & Reports',
      },
    },

    // Home Page
    home: {
      title: 'Welcome to Sunrise City Digital Office',
      description: "Welcome to Sunrise City's official digital office. Here you can find city services, submit requests, and stay updated on news and alerts.",
      alert: {
        title: 'Emergency Alert:',
        message: 'City water maintenance scheduled on 28/11/2025 from 10:00 to 16:00.',
      },
      quickLinks: {
        title: 'Quick Links',
        businessLicense: 'Apply for Business License',
        complaint: 'Submit a Complaint',
        buildingPermit: 'Request Building Permit',
        eventPermit: 'Apply for Event Permit',
      },
      news: {
        title: 'Latest News',
        items: [
          { title: 'City park renovation completed!', date: '23/11/2025' },
          { title: 'Community festival scheduled for 05/12/2025.', date: '20/11/2025' },
          { title: 'New volunteer opportunities available this month.', date: '18/11/2025' },
        ],
      },
    },

    // Services Page
    services: {
      title: 'Online Services',
      description: 'Use the forms below to submit applications, complaints, or requests. All submissions are automatically saved and reviewed by city officials.',
      backButton: '← Back to all forms',
      forms: {
        business: {
          title: 'Business License Application',
          description: 'Apply for a new business license or renew existing',
          fields: {
            fullName: 'Full Name',
            companyName: 'Company Name',
            email: 'Email',
            phone: 'Phone',
            businessType: 'Business Type',
            address: 'Business Address',
            category: 'License Category',
            documents: 'Supporting Documents',
            date: 'Date of Application',
          },
          types: {
            select: 'Select type',
            retail: 'Retail',
            restaurant: 'Restaurant',
            service: 'Service',
            manufacturing: 'Manufacturing',
            other: 'Other',
          },
          categories: {
            select: 'Select category',
            general: 'General Business',
            food: 'Food Service',
            retail: 'Retail',
            professional: 'Professional Services',
          },
          documentsHelp: 'Upload relevant documents (max 10MB each)',
          submitButton: 'Submit Application',
          successTitle: 'Application Submitted Successfully!',
          successMessage: 'Your business license application has been received and will be reviewed by city officials.',
        },
        building: {
          title: 'Building Permit Request',
          description: 'Request permit for construction or renovation',
          fields: {
            fullName: 'Full Name',
            email: 'Email',
            phone: 'Phone',
            propertyAddress: 'Property Address',
            constructionType: 'Type of Construction',
            startDate: 'Start Date',
            endDate: 'Expected End Date',
            safetyConfirmation: 'I confirm that all safety regulations and building codes will be followed',
            designPlan: 'Design Plan',
          },
          types: {
            select: 'Select type',
            new: 'New Construction',
            renovation: 'Renovation',
            addition: 'Addition',
            demolition: 'Demolition',
          },
          planHelp: 'Upload architectural plans or drawings',
          submitButton: 'Submit Request',
          successTitle: 'Request Submitted Successfully!',
          successMessage: 'Your building permit request has been received and will be reviewed.',
        },
        complaint: {
          title: 'Public Complaint Form',
          description: 'Submit a complaint about city services or issues',
          fields: {
            name: 'Name (Optional)',
            nameHelp: 'You may submit anonymously',
            email: 'Email (Optional)',
            phone: 'Phone (Optional)',
            category: 'Complaint Category',
            description: 'Description',
            descriptionPlaceholder: 'Please describe the issue in detail...',
            location: 'Location',
            locationPlaceholder: 'Street address or area',
            date: 'Date of Incident',
            urgency: 'Urgency Level',
          },
          categories: {
            select: 'Select category',
            roads: 'Roads & Infrastructure',
            noise: 'Noise Complaint',
            sanitation: 'Sanitation',
            parks: 'Parks & Recreation',
            utilities: 'Utilities',
            other: 'Other',
          },
          urgencyLevels: {
            select: 'Select urgency',
            low: 'Low - Can wait',
            medium: 'Medium - Should be addressed soon',
            high: 'High - Requires immediate attention',
          },
          submitButton: 'Submit Complaint',
          successTitle: 'Complaint Submitted Successfully!',
          successMessage: 'Your complaint has been received and will be addressed by the appropriate department.',
        },
        event: {
          title: 'Event Permit Application',
          description: 'Apply for permit to organize public event',
          fields: {
            organizerName: 'Organizer Name',
            email: 'Email',
            phone: 'Phone',
            eventTitle: 'Event Title',
            eventType: 'Event Type',
            location: 'Location',
            locationPlaceholder: 'Event venue or address',
            date: 'Event Date',
            time: 'Event Time',
            participants: 'Expected Participants',
            participantsPlaceholder: 'Estimated number',
            safetyPlan: 'Safety Plan',
            safetyPlanPlaceholder: 'Describe security measures, emergency exits, medical facilities, etc.',
          },
          types: {
            select: 'Select type',
            festival: 'Festival',
            concert: 'Concert',
            parade: 'Parade',
            sports: 'Sports Event',
            fair: 'Fair/Market',
            other: 'Other',
          },
          submitButton: 'Submit Application',
          successTitle: 'Application Submitted Successfully!',
          successMessage: 'Your event permit application has been received and will be reviewed.',
        },
      },
      required: '*',
    },

    // City Hall Page
    cityHall: {
      title: 'City Hall',
      mayorVideo: {
        title: 'Message from the Mayor',
        message: 'Mayor John Smith welcomes all citizens to use digital services and stay informed.',
      },
      schedule: {
        title: 'City Council Schedule',
        items: [
          { date: '01/12/2025', title: 'Council Meeting', time: '10:00 AM' },
          { date: '08/12/2025', title: 'Budget Review', time: '11:00 AM' },
          { date: '15/12/2025', title: 'Community Forum', time: '2:00 PM' },
        ],
      },
      budget: {
        title: 'Budget Information',
        categories: {
          education: 'Education',
          infrastructure: 'Infrastructure',
          healthcare: 'Healthcare',
          parks: 'Parks & Recreation',
        },
        total: 'Total Budget',
      },
      contacts: {
        title: 'Department Contacts',
        departments: {
          publicWorks: 'Public Works',
          health: 'Health Department',
          council: 'City Council',
        },
      },
    },

    // Community Page
    community: {
      title: 'Get Involved',
      volunteer: {
        title: 'Volunteer Opportunities',
        fields: {
          name: 'Name',
          contact: 'Contact Info',
          contactPlaceholder: 'Email or phone',
          area: 'Area of Interest',
          availability: 'Availability',
        },
        areas: {
          select: 'Select area',
          environment: 'Environment',
          education: 'Education',
          elderly: 'Elderly Care',
          events: 'Event Organization',
          other: 'Other',
        },
        availabilities: {
          select: 'Select availability',
          weekdays: 'Weekdays',
          weekends: 'Weekends',
          flexible: 'Flexible',
        },
        submitButton: 'Register as Volunteer',
        successMessage: "Thank you for registering! We'll contact you soon.",
      },
      events: {
        title: 'Community Event Calendar',
        items: [
          { date: '05/12/2025', title: 'Winter Festival', location: 'City Park' },
          { date: '12/12/2025', title: 'Food Drive', location: 'Community Center' },
          { date: '20/12/2025', title: 'Charity Concert', location: 'Main Hall' },
        ],
      },
      survey: {
        title: 'Community Survey',
        question: 'What should we improve in Sunrise City?',
        placeholder: 'Share your thoughts and suggestions...',
        submitButton: 'Submit Feedback',
        successMessage: 'Thank you for your feedback!',
      },
      gallery: {
        title: 'Photo Gallery',
        photos: [
          'Sunrise City Park',
          'Community Cleanup Event',
          'Local Market Festival',
        ],
      },
    },

    // Data & Reports Page
    data: {
      title: 'Open Government',
      description: 'All forms and requests are tracked here. Charts show city activity and citizen feedback.',
      tables: {
        businessLicense: 'Business License Submissions',
        buildingPermit: 'Building Permit Requests',
        complaints: 'Public Complaints',
        eventApplications: 'Event Applications',
        headers: {
          companyName: 'Company Name',
          type: 'Type',
          date: 'Date',
          status: 'Status',
          owner: 'Owner',
          address: 'Address',
          category: 'Category',
          location: 'Location',
          urgency: 'Urgency',
          eventName: 'Event Name',
          organizer: 'Organizer',
        },
        statuses: {
          pending: 'Pending',
          approved: 'Approved',
          rejected: 'Rejected',
        },
      },
      charts: {
        title: 'Analytics & Insights',
        businessTypes: 'Most Common Business Types',
        complaintsByCategory: 'Complaints by Category',
        eventRequests: 'Event Requests per Month',
        complaintsLabel: 'Number of Complaints',
        eventsLabel: 'Event Applications',
      },
    },

    // Footer
    footer: {
      copyright: '© 2025 Sunrise City Digital Office. All rights reserved.',
    },
  },

  ru: {
    // Заголовок
    header: {
      title: 'Город Санрайз',
      subtitle: 'Цифровой Офис',
      nav: {
        home: 'Главная',
        services: 'Услуги и формы',
        cityHall: 'Мэрия',
        community: 'Сообщество',
        data: 'Данные и отчеты',
      },
    },

    // Главная страница
    home: {
      title: 'Добро пожаловать в цифровой офис города Санрайз',
      description: 'Добро пожаловать в официальный цифровой офис города Санрайз. Здесь вы можете найти городские услуги, подать заявки и быть в курсе новостей и оповещений.',
      alert: {
        title: 'Экстренное оповещение:',
        message: 'Плановое обслуживание водоснабжения 28.11.2025 с 10:00 до 16:00.',
      },
      quickLinks: {
        title: 'Быстрые ссылки',
        businessLicense: 'Подать заявку на лицензию для бизнеса',
        complaint: 'Подать жалобу',
        buildingPermit: 'Запросить разрешение на строительство',
        eventPermit: 'Подать заявку на разрешение мероприятия',
      },
      news: {
        title: 'Последние новости',
        items: [
          { title: 'Завершена реконструкция городского парка!', date: '23.11.2025' },
          { title: 'Общественный фестиваль запланирован на 05.12.2025.', date: '20.11.2025' },
          { title: 'В этом месяце доступны новые волонтерские возможности.', date: '18.11.2025' },
        ],
      },
    },

    // Страница услуг
    services: {
      title: 'Онлайн услуги',
      description: 'Используйте формы ниже для подачи заявок, жалоб или запросов. Все заявки автоматически сохраняются и рассматриваются городскими чиновниками.',
      backButton: '← Назад ко всем формам',
      forms: {
        business: {
          title: 'Заявка на лицензию для бизнеса',
          description: 'Подать заявку на новую или продлить существующую лицензию',
          fields: {
            fullName: 'Полное имя',
            companyName: 'Название компании',
            email: 'Электронная почта',
            phone: 'Телефон',
            businessType: 'Тип бизнеса',
            address: 'Адрес бизнеса',
            category: 'Категория лицензии',
            documents: 'Подтверждающие документы',
            date: 'Дата подачи заявки',
          },
          types: {
            select: 'Выберите тип',
            retail: 'Розничная торговля',
            restaurant: 'Ресторан',
            service: 'Услуги',
            manufacturing: 'Производство',
            other: 'Другое',
          },
          categories: {
            select: 'Выберите категорию',
            general: 'Общий бизнес',
            food: 'Общественное питание',
            retail: 'Розничная торговля',
            professional: 'Профессиональные услуги',
          },
          documentsHelp: 'Загрузите соответствующие документы (макс. 10 МБ каждый)',
          submitButton: 'Отправить заявку',
          successTitle: 'Заявка успешно отправлена!',
          successMessage: 'Ваша заявка на лицензию получена и будет рассмотрена городскими чиновниками.',
        },
        building: {
          title: 'Запрос разрешения на строительство',
          description: 'Запросить разрешение на строительство или ремонт',
          fields: {
            fullName: 'Полное имя',
            email: 'Электронная почта',
            phone: 'Телефон',
            propertyAddress: 'Адрес недвижимости',
            constructionType: 'Тип строительства',
            startDate: 'Дата начала',
            endDate: 'Ожидаемая дата завершения',
            safetyConfirmation: 'Я подтверждаю, что все правила безопасности и строительные нормы будут соблюдены',
            designPlan: 'Проектный план',
          },
          types: {
            select: 'Выберите тип',
            new: 'Новое строительство',
            renovation: 'Реконструкция',
            addition: 'Пристройка',
            demolition: 'Снос',
          },
          planHelp: 'Загрузите архитектурные планы или чертежи',
          submitButton: 'Отправить запрос',
          successTitle: 'Запрос успешно отправлен!',
          successMessage: 'Ваш запрос на разрешение на строительство получен и будет рассмотрен.',
        },
        complaint: {
          title: 'Форма подачи жалобы',
          description: 'Подать жалобу на городские услуги или проблемы',
          fields: {
            name: 'Имя (необязательно)',
            nameHelp: 'Вы можете подать анонимно',
            email: 'Электронная почта (необязательно)',
            phone: 'Телефон (необязательно)',
            category: 'Категория жалобы',
            description: 'Описание',
            descriptionPlaceholder: 'Пожалуйста, опишите проблему подробно...',
            location: 'Местоположение',
            locationPlaceholder: 'Адрес улицы или район',
            date: 'Дата инцидента',
            urgency: 'Уровень срочности',
          },
          categories: {
            select: 'Выберите категорию',
            roads: 'Дороги и инфраструктура',
            noise: 'Жалоба на шум',
            sanitation: 'Санитария',
            parks: 'Парки и отдых',
            utilities: 'Коммунальные услуги',
            other: 'Другое',
          },
          urgencyLevels: {
            select: 'Выберите срочность',
            low: 'Низкая - Можно подождать',
            medium: 'Средняя - Следует решить в ближайшее время',
            high: 'Высокая - Требует немедленного внимания',
          },
          submitButton: 'Отправить жалобу',
          successTitle: 'Жалоба успешно отправлена!',
          successMessage: 'Ваша жалоба получена и будет рассмотрена соответствующим департаментом.',
        },
        event: {
          title: 'Заявка на разрешение мероприятия',
          description: 'Подать заявку на разрешение для организации публичного мероприятия',
          fields: {
            organizerName: 'Имя организатора',
            email: 'Электронная почта',
            phone: 'Телефон',
            eventTitle: 'Название мероприятия',
            eventType: 'Тип мероприятия',
            location: 'Местоположение',
            locationPlaceholder: 'Место проведения или адрес',
            date: 'Дата мероприятия',
            time: 'Время мероприя��ия',
            participants: 'Ожидаемое количество участников',
            participantsPlaceholder: 'Примерное количество',
            safetyPlan: 'План безопасности',
            safetyPlanPlaceholder: 'Опишите меры безопасности, аварийные выходы, медицинские учреждения и т.д.',
          },
          types: {
            select: 'Выберите тип',
            festival: 'Фестиваль',
            concert: 'Концерт',
            parade: 'Парад',
            sports: 'Спортивное мероприятие',
            fair: 'Ярмарка/Рынок',
            other: 'Другое',
          },
          submitButton: 'Отправить заявку',
          successTitle: 'Заявка успешно отправлена!',
          successMessage: 'Ваша заявка на разрешение мероприятия получена и будет рассмотрена.',
        },
      },
      required: '*',
    },

    // Страница мэрии
    cityHall: {
      title: 'Мэрия',
      mayorVideo: {
        title: 'Обращение мэра',
        message: 'Мэр Джон Смит приветствует всех граждан использовать цифровые услу��и и быть в курсе событий.',
      },
      schedule: {
        title: 'Расписание городского совета',
        items: [
          { date: '01.12.2025', title: 'Заседание совета', time: '10:00' },
          { date: '08.12.2025', title: 'Обзор бюджета', time: '11:00' },
          { date: '15.12.2025', title: 'Общественный форум', time: '14:00' },
        ],
      },
      budget: {
        title: 'Информация о бюджете',
        categories: {
          education: 'Образование',
          infrastructure: 'Инфраструктура',
          healthcare: 'Здравоохранение',
          parks: 'Парки и отдых',
        },
        total: 'Общий бюджет',
      },
      contacts: {
        title: 'Контакты департаментов',
        departments: {
          publicWorks: 'Департамент общественных работ',
          health: 'Департамент здравоохранения',
          council: 'Городской совет',
        },
      },
    },

    // Страница сообщества
    community: {
      title: 'Примите участие',
      volunteer: {
        title: 'Волонтерские возможности',
        fields: {
          name: '��мя',
          contact: 'Контактная информация',
          contactPlaceholder: 'Email или телефон',
          area: 'Область интересов',
          availability: 'Доступность',
        },
        areas: {
          select: 'Выберите область',
          environment: 'Окружающая среда',
          education: 'Образование',
          elderly: 'Забота о пожилых',
          events: 'Организация мероприятий',
          other: 'Другое',
        },
        availabilities: {
          select: 'Выберите доступность',
          weekdays: 'Будние дни',
          weekends: 'Выходные',
          flexible: 'Гибкий график',
        },
        submitButton: 'Зарегистрироваться как волонтер',
        successMessage: 'Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.',
      },
      events: {
        title: 'Календарь общественных мероприятий',
        items: [
          { date: '05.12.2025', title: 'Зимний фестиваль', location: 'Городской парк' },
          { date: '12.12.2025', title: 'Сбор продуктов', location: 'Общественный цент��' },
          { date: '20.12.2025', title: 'Благотворительный концерт', location: 'Главный зал' },
        ],
      },
      survey: {
        title: 'Опрос жителей',
        question: 'Что нужно улучшить в городе Санрайз?',
        placeholder: 'Поделитесь своими мыслями и предложениями...',
        submitButton: 'Отправить отзыв',
        successMessage: 'Спасибо за ваш отзыв!',
      },
      gallery: {
        title: 'Фотогалерея',
        photos: [
          'Городской парк Санрайз',
          'Общественная уборка',
          'Фестиваль местного рынка',
        ],
      },
    },

    // Страница данных и отчетов
    data: {
      title: 'Открытое правительство',
      description: 'Все формы и запросы отслеживаются здесь. Графики показывают городскую активность и отзывы граждан.',
      tables: {
        businessLicense: 'Заявки на бизнес-лицензии',
        buildingPermit: 'Запросы на разрешения на строительство',
        complaints: 'Общественные жалобы',
        eventApplications: 'Заявки на мероприятия',
        headers: {
          companyName: 'Название компании',
          type: 'Тип',
          date: 'Дата',
          status: 'Статус',
          owner: 'Владелец',
          address: 'Адрес',
          category: 'Категория',
          location: 'Местоположение',
          urgency: 'Срочность',
          eventName: 'Название мероприятия',
          organizer: 'Организатор',
        },
        statuses: {
          pending: 'На рассмотрении',
          approved: 'Одобрено',
          rejected: 'Отклонено',
        },
      },
      charts: {
        title: 'Аналитика и статистика',
        businessTypes: 'Наиболее распространенные типы бизнеса',
        complaintsByCategory: 'Жалобы по категориям',
        eventRequests: 'Заявки на мероприятия по месяцам',
        complaintsLabel: 'Количество жалоб',
        eventsLabel: 'Заявки на мероприятия',
      },
    },

    // Подвал
    footer: {
      copyright: '© 2025 Цифровой офис города Санрайз. Все права защищены.',
    },
  },
};
