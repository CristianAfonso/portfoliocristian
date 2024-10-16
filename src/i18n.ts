import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header:{
        aboutMe: 'About me',
        skills: 'Skills',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        contact: 'Contact'
      },
      aboutMe: {
        title: "About Me",
        content: 'Soy un desarrollador de software apasionado con experiencia en la creación de aplicaciones web modernas utilizando tecnologías como React, TypeScript, y Go. Mi objetivo es crear soluciones efectivas y eficientes para resolver problemas reales.',
      },
      skills: {
        title: "Skills",
        technicalSkills: [
          { name: "JavaScript", level: "Advanced" },
          { name: "TypeScript", level: "Intermediate" },
          { name: "React", level: "Advanced" },
          { name: "Node.js", level: "Intermediate" }
        ],
        softSkills: [
          "Effective Communication",
          "Team Collaboration",
          "Problem Solving",
          "Adaptability",
          "Time Management"
        ]
      },
      experience: {
        title: "Experience",
        jobs: [
          {
            position: "Frontend Developer",
            company: "Company X",
            location: "New York, USA",
            duration: "January 2021 - Present",
            responsibilities: [
              "Developing and maintaining web applications using React and TypeScript.",
              "Collaborating with designers and developers to implement new features.",
              "Optimizing UI performance and improving user experience."
            ]
          },
          {
            position: "Full-Stack Developer",
            company: "Company Y",
            location: "Los Angeles, USA",
            duration: "May 2019 - December 2020",
            responsibilities: [
              "Building web applications with Node.js, React, and MongoDB.",
              "Implementing RESTful APIs and backend services.",
              "Debugging and troubleshooting issues in existing applications."
            ]
          }
        ]
      },
      education: {
        title: "Education",
        degrees: [
          {
            degree: "Bachelor of Computer Science",
            institution: "University Z",
            location: "Los Angeles, USA",
            graduationYear: 2019
          }
        ]
      },
      projects: {
        title: "Projects",
        repository:
          {
            link: 'View on GitHub',
            languages:'Used languages',
            last_update: 'Last update at'
          }
      },
      footer:{
        links: 'Contact Links'
      }
    }
  },
  es: {
    translation: {
      header:{
        aboutMe: 'Sobre mi',
        skills: 'Habilidades',
        experience: 'Experiencia',
        education: 'Formación',
        projects: 'Proyectos',
        contact: 'Contacto'
      },
      aboutMe: {
        title: "Sobre Mí",
        content: 'Soy un desarrollador de software apasionado con experiencia en la creación de aplicaciones web modernas utilizando tecnologías como React, TypeScript, y Go. Mi objetivo es crear soluciones efectivas y eficientes para resolver problemas reales.',
      },
      skills: {
        title: "Skills",
        technicalSkills: [
          { name: "JavaScript", level: "Advanced" },
          { name: "TypeScript", level: "Intermediate" },
          { name: "React", level: "Advanced" },
          { name: "Node.js", level: "Intermediate" }
        ],
        softSkills: [
          "Effective Communication",
          "Team Collaboration",
          "Problem Solving",
          "Adaptability",
          "Time Management"
        ]
      },
      experience: {
        title: "Experience",
        jobs: [
          {
            position: "Frontend Developer",
            company: "Company X",
            location: "New York, USA",
            duration: "January 2021 - Present",
            responsibilities: [
              "Developing and maintaining web applications using React and TypeScript.",
              "Collaborating with designers and developers to implement new features.",
              "Optimizing UI performance and improving user experience."
            ]
          },
          {
            position: "Full-Stack Developer",
            company: "Company Y",
            location: "Los Angeles, USA",
            duration: "May 2019 - December 2020",
            responsibilities: [
              "Building web applications with Node.js, React, and MongoDB.",
              "Implementing RESTful APIs and backend services.",
              "Debugging and troubleshooting issues in existing applications."
            ]
          }
        ]
      },
      education: {
        title: "Education",
        degrees: [
          {
            degree: "Bachelor of Computer Science",
            institution: "University Z",
            location: "Los Angeles, USA",
            graduationYear: 2019
          }
        ]
      },
      projects: {
        title: "Projects",
        repository:
          {
            link: 'Ver en GitHub',
            languages:'Lenguajes utilizados',
            last_update: 'Última actualización'
          }
      },
      footer:{
        links: 'Enlaces de contacto'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", 
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
