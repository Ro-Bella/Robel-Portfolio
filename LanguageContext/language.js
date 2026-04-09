const translations = {
    en: {
        "nav-home": "Home",
        "nav-projects": "Projects",
        "nav-contact": "Contact Me",
        "hero-badge": "Security-First Engineering",
        "hero-name": "Robel Anbessie",
        "hero-subtitle": "Full-Stack Web Developer",
        "hero-desc": "Expertise in end-to-end development, delivering high-performance applications with a commitment to security, scalability, and robust architecture.",
        "hero-hire": "Hire Me",
        "hero-cv": "Download CV",
        "badge-fullstack": "Full Stack",
        "badge-mern": "MERN Expert",
        "focus-title": "Core Technology Focus",
        "competencies-title": "Technical Competencies",
        "competencies-subtitle": "A 3D showcase of my specialized engineering toolkit.",
        "projects-title": "Featured Projects",
        "projects-subtitle": "A selection of my recent work.",
        "project-shega-desc": "A full-stack MERN application for digitizing skin care studio appointments.",
        "project-demo": "Live Demo",
        "project-source": "Source Code",
        "why-title": "Why Partner With Me?",
        "why-quality-t": "Uncompromising Quality",
        "why-quality-d": "Clean, maintainable code following industry best practices and SOLID principles.",
        "why-scale-t": "Engineered for Scalability",
        "why-scale-d": "Systems built to handle growth without performance degradation.",
        "why-commit-t": "Project Commitment",
        "why-commit-d": "A security-first mindset combined with clear communication.",
        "contact-title": "Let's Work Together",
        "contact-desc": "I'm excited to collaborate on innovative projects! Feel free to reach out anytime.",
        "form-title": "Get in Touch",
        "label-name": "Full Name",
        "label-email": "Your Email",
        "label-subject": "Subject",
        "label-message": "Message",
        "btn-submit": "Submit Message",
        "footer-rights": "All rights reserved."
    },
    am: {
        "nav-home": "መነሻ",
        "nav-projects": "ፕሮጄክቶች",
        "nav-contact": "አግኙኝ",
        "hero-badge": "ለደህንነት ቅድሚያ የሚሰጥ ኢንጂነሪንግ",
        "hero-name": "ሮቤል አንበሴ",
        "hero-subtitle": "ሙሉ ድህረገጽ አልሚ",
        "hero-desc": "ደህንነታቸው የተጠበቁ፣ በቀላሉ ሊያድጉ የሚችሉ እና ጥራት ያላቸው የዌብ አፕሊኬሽኖችን ከመጀመሪያ እስከ መጨረሻ በመስራት ላይ ያተኮርኩ ባለሙያ ነኝ።",
        "hero-hire": "አብረን እንሰራ",
        "hero-cv": "ሲቪ አውርድ",
        "badge-fullstack": "ሙሉ ድህረገጽ",
        "badge-mern": "የMERN ባለሙያ",
        "focus-title": "ዋና ዋና የቴክኖሎጂ ትኩረቶች",
        "competencies-title": "የቴክኒክ ብቃቶች",
        "competencies-subtitle": "የምጠቀምባቸው የቴክኖሎጂ መሳሪያዎች በ3D እይታ።",
        "projects-title": "ዋና ዋና ፕሮጄክቶች",
        "projects-subtitle": "በቅርቡ የሰራኋቸው ስራዎች ስብስብ።",
        "project-shega-desc": "የቆዳ እንክብካቤ ስቱዲዮ የቀጠሮ መያዣ እና ማስተዳደሪያ (MERN)።",
        "project-demo": "ቀጥታ እይታ",
        "project-source": "ምንጭ ኮድ",
        "why-title": "ለምን ከእኔ ጋር ይሰራሉ?",
        "why-quality-t": "የማይደራደር ጥራት",
        "why-quality-d": "ኢንዱስትሪው የሚጠይቀውን ደረጃ የጠበቀ እና በቀላሉ ሊሻሻል የሚችል ኮድ።",
        "why-scale-t": "ለእድገት የተዘጋጀ",
        "why-scale-d": "የተጠቃሚዎች ቁጥር ሲጨምር ሳይቆራረጥ እንዲሰራ ተደርጎ የተገነባ ሲስተም።",
        "why-commit-t": "ለፕሮጄክት ታማኝነት",
        "why-commit-d": "ለደህንነት ቅድሚያ የሚሰጥ አሰራር እና ግልጽ ግንኙነት።",
        "contact-title": "አብረን እንስራ",
        "contact-desc": "አዳዲስ ፕሮጄክቶችን ለመጀመር ወይም ሃሳብ ለመለዋወጥ ዝግጁ ነኝ! በማንኛውም ሰዓት ያግኙኝ።",
        "form-title": "መልዕክት ይላኩ",
        "label-name": "ሙሉ ስም",
        "label-email": "ኢሜይል",
        "label-subject": "ርዕስ",
        "label-message": "መልዕክት",
        "btn-submit": "መልዕክት ላክ",
        "footer-rights": "መብቱ በህግ የተጠበቀ ነው።"
    }
};

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('.lang-text').forEach(el => {
        el.textContent = lang === 'en' ? 'Am' : 'En';
    });

    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
    
    // አማርኛ ሲሆን ፎንቱን ይቀይራል
    if (lang === 'am') {
        document.body.classList.add('font-amharic');
    } else {
        document.body.classList.remove('font-amharic');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    updateLanguage(savedLang);

    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('preferredLang') || 'en';
            updateLanguage(currentLang === 'en' ? 'am' : 'en');
        });
    });
});