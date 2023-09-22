import { Project } from "@/sections/projects/ProjectDetails";

export const projectsList: Project[] = [
    {
    name: "Sistema de Estudantes - Yoga Mangala",
    area: "Frontend",
    description: "O Yoga Mangala é um estúdio de Yoga e a aplicação permite aos alunos acessar informações sobre seus contratos e fazer check-in nas aulas. Para os administradores, ela oferece recursos de gerenciamento de usuários, contratos e horários de aulas.",
    status: "Em produção",
    techs: ["React", "Next.js", "Firebase", "ChakraUI", "Jest"],
    githubURL: "https://github.com/Rodrigo-Brezolin-Buquera/YGM-system"
  },
  {
    name: "Landing Page - Yoga Mangala",
    area: "Frontend",
    description: "A landing page do site Yoga Mangala é o ponto de entrada perfeito para conhecer o estúdio de Yoga. Ela oferece informações essenciais e proporciona uma experiência convidativa para explorar nossos serviços e aulas.",
    status: "Em produção",
    techs: ["React", "Next.js", "Firebase", "ChakraUI"],
    githubURL: "https://github.com/Rodrigo-Brezolin-Buquera/YGM-landing-page"
  },
  {
    name: "Backend - Yoga Mangala",
    area: "Backend",
    description: "A API dos serviços Yoga Mangala foi projetada utilizando uma arquitetura de 4 camadas, dividindo a aplicação em 6 módulos: Autenticação, Planos, Calendário, Contratos, Agendamentos e Empresa. Como banco de dados, optamos pelo banco de dados não relacional Firestore.",
    status: "Em testes",
    techs: ["Typescript", "Express", "Firebase-admin", "Jsonwebtoken", "Nodemailer", "Jest"],
    githubURL: "https://github.com/Rodrigo-Brezolin-Buquera/YGM-backend-firestore"
  },
  {
    name: "App - Yoga Mangala",
    area: "Frontend-mobile",
    description: "Versão mobile do sistema de estudantes web em estágio inicial de desenvolvimento. ",
    status: "Em desenvolvimento",
    techs: ["React Native", "Expo", "React Navigation"],
    githubURL: "https://github.com/Rodrigo-Brezolin-Buquera/YGM-mobile"
  }
]