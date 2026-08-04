(function() {
      "use strict";

      /* ================= translations ================= */
      const translations = {
        fa: {
          dir: 'rtl',
          title: 'صبا سیف الهی نیک — توسعه‌دهنده فول‌استک و بازی‌ساز',
          loading: 'در حال بارگذاری پروفایل…',
          brand: 'صبا سیف الهی نیک',
          nav_about: 'درباره من',
          nav_skills: 'مهارت‌ها',
          nav_projects: 'پروژه‌ها',
          nav_contact: 'تماس',
          hero_projects_btn: 'دیدن پروژه‌ها',
          hero_contact_btn: 'بیا همکاری کنیم',
          name: 'صبا سیف الهی نیک',
          verify_tip: 'توسعه‌دهنده تأییدشده',
          bio: 'بازی ها و وبسایت های قشنگ میسازم واسه لذت بردن چشمای قشنگت',
          meta_location: 'جایی بین دنیای واقعی و دنیای کد',
          meta_joined: 'از ۲۰۲۶ در حال ساختن',
          meta_open: 'آماده همکاری و پروژه‌های جدید',
          about_eyebrow: 'درباره من',
          about_heading: 'با من آشنا شو!',
          about_p1: 'من صبا ام ،رشتم کامپیوتره و از جایی کد نویسی رو شروع کردم که فهمیدم چند تا خط کد به چه چیز هایی میتونه تبدیل بشه',
          about_p2: 'دوست دارم بازی ها و وبسایت های خوشگل بسازم تا بقیه هم از ایده هام لذت ببرن',
          fact1: 'من عاشق انیمیشن وبسایت هام',
          fact2: 'از مشکلات کد زدن اینه که باعث میشه کم کم دیوونه به نظر بیای',
          fact3: 'عاشق جزئیات ریز UI',
          fact4: 'سناریو نویسی واسه پروژه هایی که شروع نمیکنم',
          skills_eyebrow: 'جعبه‌ابزار',
          skills_heading: 'چیزهایی که باهاشون می‌سازم',
          skills_sub: 'از رابط کاربری گرفته تا موتور بازی، همه‌جا هستم!',
          projects_eyebrow: 'پست‌های پین‌شده',
          projects_heading: 'چیزهایی که ساختم',
          projects_sub: 'یه رمان تصویری ترسناک روان‌شناختی، ساخته‌شده با Ren\'Py.',
          contact_eyebrow: 'تماس',
          contact_heading: 'بیا یه چیزی بسازیم',
          contact_sub: 'میخوای همکاری کنیم؟',
          form_name_placeholder: 'اسمت چیه؟',
          form_name_error: 'این فیلد لازمه.',
          form_email_placeholder: 'you@example.com',
          form_email_error: 'ایمیل معتبر نیست.',
          form_message_placeholder: 'ایدتو بنویس!',
          form_message_error: 'پیام نمی‌تونه خالی باشه.',
          form_submit: 'ارسال',
          form_success: 'پیامت رسید!',
          contact_side_eyebrow: 'راه‌های دیگه',
          contact_side_p: 'یا مستقیم پیام بده، جواب می‌دم',
          footer_copy: '© ۲۰۲۶ صبا سیف الهی نیک',
          footer_crafted: 'ساخته‌شده با بی خوابی و پف زیر چشم',
          tags: ['توسعه بازی', 'فول‌استک', 'UI/UX', 'Python', 'Ren\'Py و Godot', 'React'],
          skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Ren\'Py', 'Godot', 'C#', 'Three.js',
            'Tailwind', 'Prisma', 'Python'
          ],
          roles: ['توسعه‌دهنده فول‌استک', 'بازی‌ساز', 'طراح رابط کاربری', 'عاشق طراحی'],
          contacts: [
            { icon: 'mail', label: 'ایمیل', value: 'saba.seifollahi.nik@gmail.com',
            href: 'mailto:saba.seifollahi.nik@gmail.com' },
            { icon: 'chat', label: 'تلگرام', value: '@sabaseifollahinik',
            href: 'https://t.me/sabaseifollahinik' },
          ],
          projects: [
            {
              title: 'PearlVine',
              status: 'Live',
              tagAvatar: 'ص',
              banner: 'https://raw.githubusercontent.com/saba-nik/portfolio/main/pearlvinebaner.jpg',
              bannerPosition: 'center',
              short: 'سایت گالری محور مزون شخصی و دوخت اختصاصی با طراحی مدرن و مینیمال.',
              long: 'PearlVine یک وب‌سایت گالری محور برای مزون شخصی و دوخت اختصاصی است که با طراحی مدرن و مینیمال، تجربه‌ای لوکس و بصری را برای کاربران به ارمغان می‌آورد. این سایت با استفاده از React و Tailwind CSS ساخته شده و دارای گالری تصاویر اسلایدی، صفحه‌ی تماس و بخش معرفی خدمات است.',
              warn: '',
              tags: ['React', 'Tailwind CSS', 'گالری محور', 'طراحی مدرن'],
              features: [
                { t: 'گالری اسلایدی', d: 'نمایش تصاویر با کیفیت بالا در یک اسلایدر زیبا.' },
                { t: 'طراحی مینیمال', d: 'تمرکز بر روی محتوا با فضای سفید و تایپوگرافی تمیز.' },
                { t: 'پاسخگو', d: 'طراحی کاملاً واکنش‌گرا برای تمام دستگاه‌ها.' },
                { t: 'صفحه تماس', d: 'فرم تماس برای ارتباط با مزون.' },
              ],
              meta: { genre: 'وب‌سایت گالری', engine: 'React / Tailwind', version: 'v1.0', release: '۲۰۲۶' },
              warning: '',
              downloads: {
                Windows: 'https://pearlvine.ir',
              },
              download: 'مشاهده سایت',
              details: 'جزئیات بیشتر',
              play: '',
              images: [
                'https://raw.githubusercontent.com/saba-nik/portfolio/main/p1.jpg',
                'https://raw.githubusercontent.com/saba-nik/portfolio/main/p2.jpg',
                'https://raw.githubusercontent.com/saba-nik/portfolio/main/p3.jpg',
                'https://raw.githubusercontent.com/saba-nik/portfolio/main/p4.jpg',
                'https://raw.githubusercontent.com/saba-nik/portfolio/main/p5.jpg'
              ]
            },
            {
              title: 'Cosmic Code: Yandere',
              status: 'Demo released',
              tagAvatar: 'س',
              banner: 'https://raw.githubusercontent.com/kochinatsu/Studio/main/baner.jpg',
              bannerPosition: 'top',
              playUrl: 'https://kochinatsu.github.io/cosmic-code-yandere/',
              short: "یک رمان تصویری ترسناک روان‌شناختی درباره‌ی ملاقات با یک غریبه — و فهمیدن این‌که چیزی به‌شدت اشتباه است.",
              long: "Cosmic Code: Yandere یک رمان تصویری ترسناک روان‌شناختی است که با Ren'Py ساخته شده. با یک غریبه آشنا می‌شوی، چیزهایی می‌بینی که نباید ببینی، و هرچه جلوتر می‌روی بیشتر حس می‌کنی... چیزی درست نیست.",
              warn: 'این بازی شامل مضامین تاریک و ترس روان‌شناختی است و برای مخاطبان بزرگسال مناسب می‌باشد.',
              tags: ['داستان شاخه‌ای', 'شکستن دیوار چهارم', 'ترس روان‌شناختی', 'هنر و صدای اصلی'],
              features: [
                { t: 'روایت شاخه‌ای', d: 'مسیرها و پایان‌های متفاوت بر اساس انتخاب‌های شما.' },
                { t: 'عناصر شکستن دیوار چهارم', d: 'بازی بیشتر از آنچه باید می‌داند.' },
                { t: 'ترس روان‌شناختی', d: 'دلهره‌ای که از فضا می‌آید، نه جامپ‌اسکر.' },
                { t: 'هنر و صدای اصلی', d: 'اسپرایت، پس‌زمینه و موسیقی متن اختصاصی.' },
              ],
              meta: { genre: 'رمان تصویری / ترسناک', engine: "Ren'Py", version: 'v1.0-demo', release: '۲۰۲۶' },
              warning: 'این بازی شامل مضامین تاریک، ترس روان‌شناختی، محتوای بزرگسالان و عناصر شکستن دیوار چهارم است که ممکن است باعث ناراحتی واقعی شود. احتیاط بازیکن به شدت توصیه می‌شود.',
              downloads: {
                Windows: 'https://mega.nz/file/pYUUjJDD#_Lmd2YYoOZI-UCAIODyZGLi_Fqk4YYWNwrpYwgPSJso',
                macOS: 'https://mega.nz/file/YM1HwQoA#fctfNg1eQj7-A3Rq41yoF8dd5o5-l02EGm1YdODTaqc',
                Linux: 'https://mega.nz/file/pcNjlYhR#hmnLQyTdnP41QF9jpwi1gQ21GxiS5p6t1WsjxbXLND8'
              },
              download: 'دانلود',
              details: 'جزئیات بیشتر',
              play: 'بازی آنلاین',
              images: []
            }
          ],
          modal_genre: 'ژانر',
          modal_engine: 'موتور',
          modal_version: 'نسخه',
          modal_release: 'انتشار',
          modal_features: 'ویژگی‌ها',
          modal_download: 'دانلود',
          modal_play: 'بازی آنلاین',
          modal_play_loading: 'در حال بارگذاری بازی…',
          modal_mute: 'قطع صدا',
          modal_unmute: 'پخش صدا',
          modal_fullscreen: 'تمام‌صفحه',
          windows: 'ویندوز',
          macos: 'مک',
          linux: 'لینوکس',
          view_site: 'مشاهده سایت',
        },
        en: {
          dir: 'ltr',
          title: 'Saba Seifollahi Nik — Full-Stack & Game Developer',
          loading: 'Loading profile…',
          brand: 'Saba Seifollahi Nik',
          nav_about: 'About',
          nav_skills: 'Skills',
          nav_projects: 'Projects',
          nav_contact: 'Contact',
          hero_projects_btn: 'View Projects',
          hero_contact_btn: "Let's collaborate",
          name: 'Saba Seifollahi Nik',
          verify_tip: 'Verified developer',
          bio: "I make pretty games and pretty websites — just for your pretty eyes to enjoy.",
          meta_location: 'Somewhere between real life and the codebase',
          meta_joined: 'Building since 2026',
          meta_open: 'Open to new projects & collabs',
          about_eyebrow: 'About',
          about_heading: 'Get to know me!',
          about_p1: "I'm Saba — I study computer science, and I started coding the moment I realized what a few lines of code could turn into.",
          about_p2: 'I love building beautiful games and websites so other people can enjoy my ideas too.',
          fact1: "Obsessed with my websites' animations",
          fact2: 'Coding slowly makes you look a little unhinged',
          fact3: 'Obsessed with tiny UI details',
          fact4: "Writes scripts for projects I'll never start",
          skills_eyebrow: 'Toolkit',
          skills_heading: 'What I build with',
          skills_sub: 'From pixel-perfect UI to game engines, I go everywhere.',
          projects_eyebrow: 'Pinned posts',
          projects_heading: "What I've shipped",
          projects_sub: "A psychological horror visual novel built with Ren'Py.",
          contact_eyebrow: 'Contact',
          contact_heading: "Let's build something",
          contact_sub: 'Want to work together?',
          form_name_placeholder: "What's your name?",
          form_name_error: 'This field is required.',
          form_email_placeholder: 'you@example.com',
          form_email_error: 'Invalid email.',
          form_message_placeholder: "What's on your mind? Let's build it.",
          form_message_error: "Message can't be empty.",
          form_submit: 'Send',
          form_success: 'Message received!',
          contact_side_eyebrow: 'Other ways',
          contact_side_p: "Or just message me directly, I'll reply.",
          footer_copy: '© 2026 Saba Seifollahi Nik',
          footer_crafted: 'Made with sleepless nights and under-eye bags.',
          tags: ['Game Dev', 'Full-Stack', 'UI/UX', 'Python', 'Ren\'Py & Godot', 'React'],
          skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Ren\'Py', 'Godot', 'C#', 'Three.js',
            'Tailwind', 'Prisma', 'Python'
          ],
          roles: ['Full-Stack Developer', 'Game Developer', 'UI/UX Designer', 'Design lover'],
          contacts: [
            { icon: 'mail', label: 'Email', value: 'saba.seifollahi.nik@gmail.com',
            href: 'mailto:saba.seifollahi.nik@gmail.com' },
            { icon: 'chat', label: 'Telegram', value: '@sabaseifollahinik',
            href: 'https://t.me/sabaseifollahinik' },
          ],
          projects: [
            {
              title: 'PearlVine',
              status: 'Live',
              tagAvatar: 'P',
              banner: 'https://raw.githubusercontent.com/saba-nik/portfolio/main/pearlvinebaner.jpg',
              bannerPosition: 'center',
              short: 'A gallery-focused website for a personal tailoring and custom dressmaking studio, featuring a modern and minimal design.',
              long: 'PearlVine is a gallery-driven website for a personal tailoring and custom dressmaking studio. Built with React and Tailwind CSS, it offers a luxurious visual experience with a slideshow gallery, contact page, and service introduction section.',
              warn: '',
              tags: ['React', 'Tailwind CSS', 'Gallery-driven', 'Modern design'],
              features: [
                { t: 'Slideshow gallery', d: 'High-quality image slider.' },
                { t: 'Minimal design', d: 'Focus on content with clean typography.' },
                { t: 'Responsive', d: 'Fully responsive for all devices.' },
                { t: 'Contact page', d: 'Contact form for communication.' },
              ],
              meta: { genre: 'Gallery Website', engine: 'React / Tailwind', version: 'v1.0', release: '2026' },
              warning: '',
              downloads: {
                Windows: 'https://pearlvine.ir',
              },
              download: 'View Site',
              details: 'More details',
              play: '',
              images: [
                'https://raw.githubusercontent.com/saba-nik/portfolio/main/p1.jpg',
                'https://raw.githubusercontent.com/saba-nik/portfolio/main/p2.jpg',
                'https://raw.githubusercontent.com/saba-nik/portfolio/main/p3.jpg',
                'https://raw.githubusercontent.com/saba-nik/portfolio/main/p4.jpg',
                'https://raw.githubusercontent.com/saba-nik/portfolio/main/p5.jpg'
              ]
            },
            {
              title: 'Cosmic Code: Yandere',
              status: 'Demo released',
              tagAvatar: 'S',
              banner: 'https://raw.githubusercontent.com/kochinatsu/Studio/main/baner.jpg',
              bannerPosition: 'top',
              playUrl: 'https://kochinatsu.github.io/cosmic-code-yandere/',
              short: "A psychological horror visual novel about meeting a stranger — and realizing something is terribly wrong.",
              long: "Cosmic Code: Yandere is a psychological horror visual novel built in Ren'Py. You meet a stranger, see things you shouldn't, and the deeper you go, the more you feel it... something is wrong.",
              warn: 'This game contains dark themes and psychological horror, intended for mature audiences.',
              tags: ['Branching story', 'Fourth-wall breaks', 'Psychological horror', 'Original art & sound'],
              features: [
                { t: 'Branching narrative', d: 'Multiple paths and endings based on your choices.' },
                { t: 'Fourth-wall elements', d: 'The game knows more than it should.' },
                { t: 'Psychological horror', d: 'Atmosphere-driven dread, not jump scares.' },
                { t: 'Original art & sound', d: 'Custom sprites, backgrounds, and soundtrack.' },
              ],
              meta: { genre: 'Visual Novel / Horror', engine: "Ren'Py", version: 'v1.0-demo', release: '2026' },
              warning: 'This game contains dark themes, psychological horror, mature content, and fourth-wall breaking elements that may cause genuine distress. Player discretion is strongly advised.',
              downloads: {
                Windows: 'https://mega.nz/file/pYUUjJDD#_Lmd2YYoOZI-UCAIODyZGLi_Fqk4YYWNwrpYwgPSJso',
                macOS: 'https://mega.nz/file/YM1HwQoA#fctfNg1eQj7-A3Rq41yoF8dd5o5-l02EGm1YdODTaqc',
                Linux: 'https://mega.nz/file/pcNjlYhR#hmnLQyTdnP41QF9jpwi1gQ21GxiS5p6t1WsjxbXLND8'
              },
              download: 'Download',
              details: 'More details',
              play: 'Play online',
              images: []
            }
          ],
          modal_genre: 'Genre',
          modal_engine: 'Engine',
          modal_version: 'Version',
          modal_release: 'Release',
          modal_features: 'Features',
          modal_download: 'Download',
          modal_play: 'Play online',
          modal_play_loading: 'Loading the game…',
          modal_mute: 'Mute',
          modal_unmute: 'Unmute',
          modal_fullscreen: 'Fullscreen',
          windows: 'Windows',
          macos: 'macOS',
          linux: 'Linux',
          view_site: 'View Site',
        }
      };

      const ICONS = {
        mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/>',
        chat: '<path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1L21 3l-1 4.5a8.5 8.5 0 0 1 1 4z"/>',
        play: '<path d="M6 3l16 9-16 9V3z"/>',
        close: '<path d="M18 6L6 18M6 6l12 12"/>',
        download: '<path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16"/>',
        external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>',
        info: '<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>',
        pin: '<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
        warn: '<path d="M12 3l10 18H2L12 3z"/><path d="M12 10v4M12 17h.01"/>',
        unmuted: '<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a9 9 0 0 1 0 12"/>',
        muted: '<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M16 9l6 6M22 9l-6 6"/>',
        expand: '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/>',
        compress: '<path d="M9 3v4a2 2 0 0 1-2 2H3"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/><path d="M9 21v-4a2 2 0 0 0-2-2H3"/><path d="M15 21v-4a2 2 0 0 1 2-2h4"/>',
      };

      function icon(name, cls) {
        return `<svg class="icon ${cls || ''}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;
      }

      function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }

      let currentLang = 'en';
      let typingTimer = null;
      let isDeleting = false;
      let currentRoleIndex = 0;
      let currentText = '';
      let rolesArray = [];

      function setLanguage(lang) {
        const t = translations[lang];
        if (!t) return;
        currentLang = lang;
        document.documentElement.lang = lang;
        document.title = t.title;
        document.getElementById('lang-label').textContent = lang === 'fa' ? 'EN' : 'فا';

        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (t[key] !== undefined) el.textContent = t[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
          const key = el.getAttribute('data-i18n-placeholder');
          if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
        });
        document.getElementById('tags-row').innerHTML = t.tags.map(tag => `<span class="chip">${tag}</span>`).join('');
        document.getElementById('skills-cloud').innerHTML = t.skills.map(s =>
          `<span class="skill-chip"><span class="dot"></span>${s}</span>`).join('');
        document.getElementById('contact-list').innerHTML = t.contacts.map(c =>
          `<a href="${c.href}"><span class="icon-wrap">${icon(c.icon)}</span><span class="ctext"><small>${c.label}</small><span>${c.value}</span></span></a>`
        ).join('');
        document.getElementById('footer-social').innerHTML = t.contacts.map(c =>
          `<a href="${c.href}" aria-label="${c.label}: ${c.value}">${icon(c.icon)}</a>`
        ).join('');
        buildPosts(t);
        rolesArray = t.roles || [];
        currentRoleIndex = 0;
        currentText = '';
        isDeleting = false;
        clearTimeout(typingTimer);
        startTyping();
        try { localStorage.setItem('kc_lang', lang); } catch (e) {}
      }

      function buildPosts(t) {
        const list = document.getElementById('posts-list');
        list.innerHTML = t.projects.map((p, i) => {
          const isGame = p.title === 'Cosmic Code: Yandere';
          const btnIcon = isGame ? 'download' : 'external';
          const btnLabel = p.download;
          const gradientOverlay = `linear-gradient(135deg, #2b1533, #5a2560 40%, #a34a7a 70%, #ff8fb3)`;
          const bannerStyle = `background-image: url('${p.banner}'), ${gradientOverlay}; background-blend-mode: overlay; background-size: cover, 100% 100%; background-position: ${p.bannerPosition || 'center'};`;
          return `
          <article class="post-card card-glow">
            <div class="post-head">
              <div class="mini-avatar"></div>
              <div class="who">${t.name}<span class="verify-badge" style="width:16px;height:16px;"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" width="9" height="9"><path d="M20 6L9 17l-5-5"/></svg></span></div>
              <div class="pin">${icon('pin')} ${lang_pin_label()}</div>
            </div>
            <div class="post-banner" data-project="${i}" tabindex="0" role="button" aria-label="${p.title}" style="${bannerStyle}">
              <span class="game-float">❀</span>
              <span class="game-float">⋆</span>
              <span class="game-float">࿔</span>
              <span class="game-float">✮</span>
              <span class="game-float">♪</span>
              <span class="game-float">ᶻ</span>
              <span class="game-float">𐰁</span>
              <span class="game-float">✦</span>
              <span class="game-float">𖤐</span>
              <span class="game-float">★</span>
              <span class="game-float">✴︎</span>
              <span class="game-float">♡</span>
              <span class="game-float">✧</span>
              <span class="game-float">｡</span>
              <span class="game-float">˖</span>
              <span class="game-float">ֶ</span>
              <span class="game-float">ᵔ</span>
              <span class="game-float">ᯓ</span>
              <span class="game-float">݁</span>
              <span class="game-float">ˊ</span>
              <span class="game-float">ˎ</span>
              <span class="game-float">˗</span>
              <span class="game-float">✧</span>
              <span class="game-float">♡</span>
              <span class="game-float">✧</span>
              <span class="game-float">·</span>
              <span class="status-pill">${p.status}</span>
              <span class="banner-title">${p.title}</span>
              ${p.warn ? `<div class="warn-overlay"><p>${p.warn}</p></div>` : ''}
              <div class="sweep"></div>
            </div>
            <div class="post-body">
              <p class="post-desc">${p.short}</p>
              <div class="post-tags">${p.tags.map(x => `<span>${x}</span>`).join('')}</div>
              <div class="post-actions">
                <button type="button" class="primary open-project" data-project="${i}">${icon('info')}<span>${p.details}</span></button>
                <a href="${p.downloads.Windows}" target="_blank" rel="noopener" class="download-btn" style="text-decoration:none;display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:30px;border:2px solid var(--line-strong);background:var(--surface);color:var(--ink);font-size:13px;font-weight:700;transition:transform .3s var(--ease-btn), box-shadow .35s var(--ease-out-expo), border-color .3s var(--ease), background .3s var(--ease);">
                  ${icon(btnIcon)}<span>${btnLabel}</span>
                </a>
              </div>
            </div>
          </article>`;
        }).join('');
        document.querySelectorAll('.open-project, .post-banner').forEach(el => {
          el.addEventListener('click', () => openProjectModal(parseInt(el.dataset.project, 10)));
          el.addEventListener('keydown', e => { if (e.key === 'Enter') openProjectModal(parseInt(el.dataset.project,
              10)); });
        });
        document.querySelectorAll('.post-actions .download-btn').forEach(el => {
          el.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.015)';
            this.style.borderColor = 'var(--pink-deep)';
            this.style.boxShadow = '0 14px 30px -12px rgba(46,36,56,0.3)';
          });
          el.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.borderColor = '';
            this.style.boxShadow = '';
          });
        });
      }

      function lang_pin_label() {
        return currentLang === 'fa' ? 'پین‌شده' : 'Pinned';
      }

      /* ---------- project modal ---------- */
      const modal = document.getElementById('project-modal');
      const modalPanel = document.getElementById('project-modal-panel');
      let lastFocusEl = null;
      let fsChangeHandler = null;
      let slideIndex = 0;
      let slideInterval = null;

      function openProjectModal(idx) {
        const t = translations[currentLang];
        const p = t.projects[idx];
        lastFocusEl = document.activeElement;

        let imagesHtml = '';
        if (p.images && p.images.length > 0) {
          imagesHtml = `
            <div class="modal-slideshow" style="position:relative;width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:16px;margin-bottom:20px;background:#000;">
              <div class="slideshow-container" style="display:flex;transition:transform 0.5s ease;height:100%;">
                ${p.images.map(img => `<img src="${img}" style="min-width:100%;height:100%;object-fit:cover;flex-shrink:0;" />`).join('')}
              </div>
              ${p.images.length > 1 ? `
                <button class="slide-btn prev" style="position:absolute;top:50%;left:10px;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:#fff;border:none;border-radius:50%;width:36px;height:36px;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);">&lt;</button>
                <button class="slide-btn next" style="position:absolute;top:50%;right:10px;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:#fff;border:none;border-radius:50%;width:36px;height:36px;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);">&gt;</button>
                <div class="slide-dots" style="position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:8px;">
                  ${p.images.map((_, i) => `<span class="dot" data-index="${i}" style="width:10px;height:10px;border-radius:50%;background:${i===0?'#fff':'rgba(255,255,255,0.4)'};cursor:pointer;transition:all 0.3s;"></span>`).join('')}
                </div>
              ` : ''}
            </div>
          `;
        }

        const isGame = p.title === 'Cosmic Code: Yandere';
        const downloadLabel = isGame ? t.modal_download : t.view_site;
        const downloadIcon = isGame ? 'download' : 'external';
        const modalBannerStyle = `background-image: url('${p.banner}'), linear-gradient(135deg, #2b1533, #5a2560 40%, #a34a7a 70%, #ff8fb3); background-blend-mode: overlay;`;

        modalPanel.innerHTML = `
        <button class="modal-close" id="modal-close" aria-label="close">${icon('close')}</button>
        <div class="modal-banner" style="${modalBannerStyle} background-size: cover; background-position: ${p.bannerPosition || 'center'};">
          <span class="float">✦</span>
          <span class="float">⋆</span>
          <span class="float">𖦹</span>
          <span class="float">꩜</span>
          <span class="float">✧</span>
          <span class="float">♡</span>
          <span class="float">✿</span>
          <span class="float">☆</span>
          <span class="modal-status">${p.status}</span>
          <span class="modal-banner-title">${p.title}</span>
        </div>
        <div class="modal-body">
          ${imagesHtml}
          <div class="modal-info-row">
            <div><small>${t.modal_genre}</small><span>${p.meta.genre}</span></div>
            <div><small>${t.modal_engine}</small><span>${p.meta.engine}</span></div>
            <div><small>${t.modal_version}</small><span>${p.meta.version}</span></div>
            <div><small>${t.modal_release}</small><span>${p.meta.release}</span></div>
          </div>
          <p class="modal-desc">${p.long}</p>
          <h3 class="modal-section-title">${t.modal_features}</h3>
          <div class="feature-grid">${p.features.map(f => `<div class="feature-card"><b>${f.t}</b><p>${f.d}</p></div>`).join('')}</div>
          ${p.warning ? `<div class="warning-box">${p.warning}</div>` : ''}
          ${p.playUrl ? `
          <h3 class="modal-section-title">${t.modal_play}</h3>
          <div class="play-frame" id="play-frame">
            <div class="play-poster" style="background-image:url('${p.banner}');background-position:${p.bannerPosition || 'center'};">
              <button type="button" class="play-btn" id="play-start-btn">
                <span class="play-btn-icon">${icon('play')}</span>
                <span>${t.modal_play}</span>
              </button>
            </div>
          </div>` : ''}
          <h3 class="modal-section-title">${downloadLabel}</h3>
          <div class="download-grid">
            ${isGame ? `
              <a href="${p.downloads.Windows}" target="_blank" rel="noopener" class="download-btn">
                <span class="shine"></span><span class="glow-ring"></span>
                ${icon('download')}<span>${t.windows}</span>
              </a>
              <a href="${p.downloads.macOS}" target="_blank" rel="noopener" class="download-btn">
                <span class="shine"></span><span class="glow-ring"></span>
                ${icon('download')}<span>${t.macos}</span>
              </a>
              <a href="${p.downloads.Linux}" target="_blank" rel="noopener" class="download-btn">
                <span class="shine"></span><span class="glow-ring"></span>
                ${icon('download')}<span>${t.linux}</span>
              </a>
            ` : `
              <a href="${p.downloads.Windows}" target="_blank" rel="noopener" class="download-btn">
                <span class="shine"></span><span class="glow-ring"></span>
                ${icon('external')}<span>${t.view_site}</span>
              </a>
            `}
          </div>
        </div>`;
        modalPanel.querySelector('#modal-close').addEventListener('click', closeProjectModal);

        if (p.images && p.images.length > 1) {
          const container = modalPanel.querySelector('.slideshow-container');
          const dots = modalPanel.querySelectorAll('.dot');
          const prevBtn = modalPanel.querySelector('.slide-btn.prev');
          const nextBtn = modalPanel.querySelector('.slide-btn.next');
          slideIndex = 0;

          function goToSlide(index) {
            slideIndex = (index + p.images.length) % p.images.length;
            container.style.transform = `translateX(-${slideIndex * 100}%)`;
            dots.forEach((dot, i) => {
              dot.style.background = i === slideIndex ? '#fff' : 'rgba(255,255,255,0.4)';
            });
          }

          prevBtn.addEventListener('click', () => goToSlide(slideIndex - 1));
          nextBtn.addEventListener('click', () => goToSlide(slideIndex + 1));
          dots.forEach((dot, i) => {
            dot.addEventListener('click', () => goToSlide(i));
          });

          if (slideInterval) clearInterval(slideInterval);
          slideInterval = setInterval(() => goToSlide(slideIndex + 1), 4000);

          const slideshow = modalPanel.querySelector('.modal-slideshow');
          slideshow.addEventListener('mouseenter', () => clearInterval(slideInterval));
          slideshow.addEventListener('mouseleave', () => {
            if (slideInterval) clearInterval(slideInterval);
            slideInterval = setInterval(() => goToSlide(slideIndex + 1), 4000);
          });
        }

        modalPanel.querySelectorAll('.download-btn').forEach(el => {
          el.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const size = Math.max(rect.width, rect.height) * 0.7;
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 800);
          });
        });

        const playStartBtn = modalPanel.querySelector('#play-start-btn');
        if (playStartBtn) {
          playStartBtn.addEventListener('click', () => {
            const frame = modalPanel.querySelector('#play-frame');
            const iframe = document.createElement('iframe');
            iframe.src = p.playUrl;
            iframe.setAttribute('allow', 'autoplay; fullscreen');
            iframe.setAttribute('allowfullscreen', '');
            frame.innerHTML = '';
            frame.appendChild(iframe);
            const loadingWrap = document.createElement('div');
            loadingWrap.className = 'play-loading';
            loadingWrap.innerHTML = `<span class="spin"></span><span>${t.modal_play_loading}</span>`;
            frame.appendChild(loadingWrap);
            iframe.addEventListener('load', () => loadingWrap.remove(), { once: true });

            const controls = document.createElement('div');
            controls.className = 'play-controls';
            controls.innerHTML = `
              <button type="button" class="play-ctrl-btn" id="play-fs-btn" aria-label="${t.modal_fullscreen}" title="${t.modal_fullscreen}">
                <span class="icon-fs-expand">${icon('expand')}</span><span class="icon-fs-compress" style="display:none;">${icon('compress')}</span>
              </button>`;
            frame.appendChild(controls);

            const fsBtn = controls.querySelector('#play-fs-btn');
            fsBtn.addEventListener('click', () => {
              if (!document.fullscreenElement) {
                frame.requestFullscreen ? frame.requestFullscreen() : frame.webkitRequestFullscreen && frame.webkitRequestFullscreen();
              } else {
                document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
              }
            });
            if (fsChangeHandler) document.removeEventListener('fullscreenchange', fsChangeHandler);
            fsChangeHandler = () => {
              const isFs = document.fullscreenElement === frame;
              fsBtn.querySelector('.icon-fs-expand').style.display = isFs ? 'none' : '';
              fsBtn.querySelector('.icon-fs-compress').style.display = isFs ? '' : 'none';
            };
            document.addEventListener('fullscreenchange', fsChangeHandler);
          });
        }
        modal.scrollTop = 0;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onModalKeydown);
        modalPanel.focus();
      }

      function closeProjectModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onModalKeydown);
        if (fsChangeHandler) { document.removeEventListener('fullscreenchange', fsChangeHandler); fsChangeHandler = null; }
        if (slideInterval) { clearInterval(slideInterval); slideInterval = null; }
        const activeFrame = modalPanel.querySelector('#play-frame iframe');
        if (activeFrame) activeFrame.src = 'about:blank';
        if (lastFocusEl) { lastFocusEl.focus();
          lastFocusEl = null; }
      }

      function onModalKeydown(e) { if (e.key === 'Escape') closeProjectModal(); }
      modal.addEventListener('click', e => { if (e.target === modal) closeProjectModal(); });

      let toastTimer = null;

      function showToast(msg) {
        const t = document.getElementById('toast');
        t.textContent = msg;
        t.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
      }

      const header = document.getElementById('site-header');
      const scrollProgress = document.getElementById('scroll-progress');
      const backToTop = document.getElementById('back-to-top');
      const backToTopRing = document.getElementById('back-to-top-ring');
      const RING_CIRC = 2 * Math.PI * 19.5;
      let scrollTicking = false;

      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('nav-links');
      hamburger.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open);
        header.classList.toggle('menu-open', open);
      });
      navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        header.classList.remove('menu-open');
      }));

      const navPill = document.getElementById('nav-pill');
      const navAnchors = Array.from(navLinks.querySelectorAll('a[href^="#"]'));
      const spySections = navAnchors
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);
      const PILL_PAD_Y = 7;

      function movePillTo(link) {
        if (!navPill) return;
        if (!link) { navPill.style.opacity = '0'; return; }
        const linkRect = link.getBoundingClientRect();
        const parentRect = navLinks.getBoundingClientRect();
        navPill.style.opacity = '1';
        navPill.style.width = (linkRect.width + 24) + 'px';
        navPill.style.height = (linkRect.height + PILL_PAD_Y * 2) + 'px';
        navPill.style.transform =
          'translate(' + (linkRect.left - parentRect.left - 12) + 'px, ' +
          (linkRect.top - parentRect.top - PILL_PAD_Y) + 'px)';
      }

      function setActive(id) {
        let matched = null;
        navAnchors.forEach(a => {
          const isMatch = a.getAttribute('href') === '#' + id;
          a.classList.toggle('active', isMatch);
          if (isMatch) matched = a;
        });
        if (matched) movePillTo(matched);
      }

      function repositionActivePill() {
        const active = navLinks.querySelector('a.active');
        if (active) movePillTo(active);
      }

      if (navPill && spySections.length && !prefersReducedMotion() && 'IntersectionObserver' in window) {
        const spy = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
        spySections.forEach(sec => spy.observe(sec));
      }
      window.addEventListener('resize', repositionActivePill, { passive: true });

      function updateScrollUI() {
        scrollTicking = false;
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const wasScrolled = header.classList.contains('scrolled');
        const nowScrolled = scrollY > 40;
        header.classList.toggle('scrolled', nowScrolled);
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
        if (scrollProgress) scrollProgress.style.width = (ratio * 100) + '%';
        if (backToTopRing) backToTopRing.style.strokeDashoffset = RING_CIRC * (1 - ratio);
        if (backToTop) backToTop.classList.toggle('show', scrollY > 480);
        repositionActivePill();
        if (wasScrolled !== nowScrolled) {
          setTimeout(repositionActivePill, 420);
        }
      }
      window.addEventListener('scroll', () => {
        if (!scrollTicking) {
          scrollTicking = true;
          requestAnimationFrame(updateScrollUI);
        }
      }, { passive: true });
      updateScrollUI();

      if (backToTop) {
        backToTop.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
        });
      }

      document.getElementById('lang-toggle').addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX || rect.left + rect.width / 2;
        const y = e.clientY || rect.top + rect.height / 2;
        const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

        const wipe = document.createElement('div');
        wipe.className = 'lang-wipe';
        wipe.style.width = wipe.style.height = (radius * 2) + 'px';
        wipe.style.left = x + 'px';
        wipe.style.top = y + 'px';
        document.body.appendChild(wipe);

        const nextLang = currentLang === 'fa' ? 'en' : 'fa';
        setTimeout(() => {
          setLanguage(nextLang);
        }, 200);

        wipe.addEventListener('animationend', () => {
          wipe.remove();
        });
        setTimeout(() => {
          if (wipe.parentNode) wipe.remove();
        }, 900);
      });

      function startTyping() {
        const roleText = document.getElementById('role-text');
        if (!roleText) return;
        if (rolesArray.length === 0) {
          roleText.textContent = '';
          return;
        }
        const currentRole = rolesArray[currentRoleIndex];
        const speed = isDeleting ? 40 : 80;
        const pause = 1500;

        if (!isDeleting) {
          if (currentText.length < currentRole.length) {
            currentText = currentRole.substring(0, currentText.length + 1);
            roleText.textContent = currentText;
            typingTimer = setTimeout(startTyping, speed);
          } else {
            typingTimer = setTimeout(() => {
              isDeleting = true;
              startTyping();
            }, pause);
          }
        } else {
          if (currentText.length > 0) {
            currentText = currentText.substring(0, currentText.length - 1);
            roleText.textContent = currentText;
            typingTimer = setTimeout(startTyping, speed);
          } else {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % rolesArray.length;
            typingTimer = setTimeout(startTyping, 300);
          }
        }
      }

      const THEME_KEY = 'kc_theme';
      const themeToggleBtn = document.getElementById('theme-toggle');
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');

      function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;
        if (themeColorMeta) themeColorMeta.setAttribute('content', theme === 'dark' ? '#181120' : '#FF9EC4');
        try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
      }

      function currentTheme() {
        return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      }

      function setThemeWithTransition(theme, originEvent) {
        if (theme === currentTheme()) return;
        if (prefersReducedMotion() || !originEvent) {
          applyTheme(theme);
          return;
        }
        const x = originEvent.clientX,
          y = originEvent.clientY;
        const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
        const wipe = document.createElement('div');
        wipe.className = 'theme-wipe';
        wipe.style.width = wipe.style.height = (radius * 2) + 'px';
        wipe.style.left = x + 'px';
        wipe.style.top = y + 'px';
        wipe.style.background = 'var(--grad-rainbow)';
        document.body.appendChild(wipe);
        requestAnimationFrame(() => {
          applyTheme(theme);
          requestAnimationFrame(() => wipe.classList.add('animate'));
        });
        wipe.addEventListener('animationend', () => wipe.remove());
        setTimeout(() => { if (wipe.parentNode) wipe.remove(); }, 900);
      }

      themeToggleBtn.addEventListener('click', (e) => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        setThemeWithTransition(next, e);
        const rect = themeToggleBtn.getBoundingClientRect();
        burstSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);
      });

      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          let hasSaved = false;
          try { hasSaved = !!localStorage.getItem(THEME_KEY); } catch (err) {}
          if (!hasSaved) applyTheme(e.matches ? 'dark' : 'light');
        });
      }

      if (!prefersReducedMotion() && window.matchMedia('(min-width:901px)').matches && window.matchMedia('(hover:hover)')
        .matches) {
        document.querySelectorAll('.about-card, .about-visual, .post-card, .avatar-wrap').forEach(el => {
          el.classList.add('tilt');
          let raf = null;
          el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.5;
            const py = (e.clientY - rect.top) / rect.height - 0.5;
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
              el.style.transform =
                `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg) translateZ(4px)`;
            });
          });
          el.addEventListener('mouseleave', () => {
            if (raf) cancelAnimationFrame(raf);
            el.style.transform = '';
          });
        });

        document.querySelectorAll('.btn-primary, #back-to-top').forEach(el => {
          el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const mx = (e.clientX - rect.left - rect.width / 2) * 0.3;
            const my = (e.clientY - rect.top - rect.height / 2) * 0.3;
            el.style.setProperty('--mx', (e.clientX - rect.left) / rect.width * 100 + '%');
            el.style.setProperty('--my', (e.clientY - rect.top) / rect.height * 100 + '%');
            el.style.transform = `translate(${mx.toFixed(1)}px, ${my.toFixed(1)}px) scale(1.04)`;
          });
          el.addEventListener('mouseleave', () => {
            el.style.setProperty('--mx', '50%');
            el.style.setProperty('--my', '50%');
            el.style.transform = '';
          });
        });
      }

      if (!prefersReducedMotion() && window.matchMedia('(min-width:901px)').matches) {
        const glow = document.getElementById('cursor-glow');
        let gx = 0,
          gy = 0,
          cx = 0,
          cy = 0;
        window.addEventListener('mousemove', e => { gx = e.clientX;
          gy = e.clientY; });
        (function raf() {
          cx += (gx - cx) * 0.12;
          cy += (gy - cy) * 0.12;
          glow.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
          requestAnimationFrame(raf);
        })();
      }
      const symbolPool = ['⋆', '✦', '𖦹', '꩜', '𐙚', '𝄢', '˖', '·', '•', '˚', '｡'];

      function burstSparkles(x, y, count) {
        for (let i = 0; i < count; i++) {
          const s = document.createElement('span');
          s.className = 'spark';
          s.textContent = symbolPool[Math.floor(Math.random() * symbolPool.length)];
          const ang = Math.random() * Math.PI * 2,
            dist = 50 + Math.random() * 80;
          s.style.setProperty('--sx', Math.cos(ang) * dist + 'px');
          s.style.setProperty('--sy', Math.sin(ang) * dist + 'px');
          s.style.left = x + 'px';
          s.style.top = y + 'px';
          document.body.appendChild(s);
          setTimeout(() => s.remove(), 1000);
        }
      }

      const messageField = document.getElementById('field-message');
      const charFill = document.getElementById('char-fill');
      const CIRC = 2 * Math.PI * 13;
      messageField.addEventListener('input', () => {
        const ratio = Math.min(messageField.value.length / 280, 1);
        charFill.style.strokeDasharray = CIRC;
        charFill.style.strokeDashoffset = CIRC * (1 - ratio);
        charFill.style.stroke = ratio > 0.9 ? 'var(--pink-deep)' : (ratio > 0.6 ? 'var(--peach-deep)' :
          'var(--mint-deep)');
      });

      const form = document.getElementById('contact-form');
      const nameField = document.getElementById('field-name');
      const emailField = document.getElementById('field-email');
      try { emailjs.init('DGpuAdpPeQ6aG01nP'); } catch (e) {}

      function setValidity(field, valid) {
        field.closest('.field').classList.toggle('invalid', !valid);
      }
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nameValid = nameField.value.trim().length > 0;
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim());
        const messageValid = messageField.value.trim().length >= 4;
        setValidity(nameField, nameValid);
        setValidity(emailField, emailValid);
        setValidity(messageField, messageValid);
        if (!nameValid || !emailValid || !messageValid) {
          const firstInvalid = [nameField, emailField, messageField].find(f => f.closest('.field').classList.contains(
            'invalid'));
          if (firstInvalid) firstInvalid.focus();
          return;
        }
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.textContent;
        btn.textContent = '...';
        btn.disabled = true;
        const params = { name: nameField.value.trim(), email: emailField.value.trim(), message: messageField.value
            .trim() };
        emailjs.send('service_5dkh2jf', 'template_s05k03k', params)
          .then(function() {
            document.getElementById('form-success').classList.add('show');
            form.reset();
            charFill.style.strokeDashoffset = CIRC;
            const rect = btn.getBoundingClientRect();
            burstSparkles(rect.left + rect.width / 2, rect.top, 14);
            showToast(translations[currentLang].form_success);
          })
          .catch(function() {
            showToast(currentLang === 'fa' ? 'خطا در ارسال. دوباره امتحان کن.' : 'Error sending. Please try again.');
          })
          .finally(function() {
            btn.textContent = original;
            btn.disabled = false;
            setTimeout(() => document.getElementById('form-success').classList.remove('show'), 5000);
          });
      });

      if (prefersReducedMotion()) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
      } else {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add('in'), i * 120);
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
        document.querySelectorAll('.reveal').forEach(el => io.observe(el));
      }

      const loader = document.getElementById('loader');
      const loaderFill = document.getElementById('loader-fill');
      const loaderPct = document.getElementById('loader-pct');
      let progress = 0;
      let loadInterval = null;
      let loaderFinished = false;

      function finishLoad() {
        if (loaderFinished) return;
        loaderFinished = true;
        clearInterval(loadInterval);
        loaderFill.style.width = '100%';
        if (loaderPct) loaderPct.textContent = '100%';
        setTimeout(() => {
          loader.classList.add('hide');
          document.getElementById('main-content').style.display = 'block';
          document.body.style.overflow = '';
          updateScrollUI();
          if (!prefersReducedMotion()) {
            const io2 = new IntersectionObserver((entries) => {
              entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                  setTimeout(() => entry.target.classList.add('in'), i * 120);
                  io2.unobserve(entry.target);
                }
              });
            }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
            document.querySelectorAll('.reveal').forEach(el => io2.observe(el));
          }
        }, 260);
      }

      function startLoading() {
        if (loadInterval) return;
        loader.classList.remove('hide');
        loader.style.display = 'flex';
        loaderFinished = false;
        progress = 0;
        loaderFill.style.width = '0%';
        if (loaderPct) loaderPct.textContent = '0%';
        loadInterval = setInterval(() => {
          progress += Math.random() * 12 + 2;
          if (progress >= 100) {
            progress = 100;
            finishLoad();
            clearInterval(loadInterval);
            loadInterval = null;
            return;
          }
          loaderFill.style.width = progress + '%';
          if (loaderPct) loaderPct.textContent = Math.round(progress) + '%';
        }, 120);
        setTimeout(() => {
          if (!loaderFinished) {
            progress = 100;
            finishLoad();
            clearInterval(loadInterval);
            loadInterval = null;
          }
        }, 5000);
      }

      let savedLang = 'en';
      try { savedLang = localStorage.getItem('kc_lang') || 'en'; } catch (e) {}
      setLanguage(translations[savedLang] ? savedLang : 'en');

      (function initIntroGate() {
        const gate = document.getElementById('intro-gate');
        if (!gate) return;
        const gateText = {
          fa: {
            avatar: 'صن',
            name: 'صبا سیف‌الهی نیک',
            tagline: 'توسعه‌دهنده فول‌استک و بازی‌ساز. یکی از گزینه‌ها رو انتخاب کن.',
            enter: 'ورود به وبسایت',
          },
          en: {
            avatar: 'SS',
            name: 'Saba Seifollahi Nik',
            tagline: 'Full-stack & game developer. Pick a place to go.',
            enter: 'Enter the website',
          }
        };
        const g = gateText[savedLang] || gateText.en;
        document.getElementById('gate-avatar').setAttribute('alt', g.avatar);
        document.getElementById('gate-name').textContent = g.name;
        document.getElementById('gate-tagline').textContent = g.tagline;
        document.getElementById('gate-enter-label').textContent = g.enter;

        const enterBtn = document.getElementById('gate-enter-site');
        enterBtn.addEventListener('click', function(e) {
          e.preventDefault();
          gate.classList.add('gate-hide');
          setTimeout(() => {
            gate.style.display = 'none';
            startLoading();
          }, 650);
        });

        document.querySelectorAll('.gate-link').forEach(el => {
          el.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const size = Math.max(rect.width, rect.height) * 0.7;
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 800);
          });
        });
      })();

      console.log('%c SABA_SEIFOLLAHI_NIK ✨ ', 'background:linear-gradient(120deg,#FF9AC2,#A57DFF);color:#fff;font-family:monospace;padding:4px 10px;border-radius:6px;');

      document.querySelectorAll('.btn, .post-actions button, .post-actions a, .lang-toggle, .theme-toggle, .download-btn, #back-to-top')
        .forEach(el => {
          el.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const size = Math.max(rect.width, rect.height) * 0.8;
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 800);
          });
        });

    })();