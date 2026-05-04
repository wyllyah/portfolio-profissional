import { CarFront, Globe2, WalletCards } from 'lucide-react'

export const projects = [
  {
    name: 'FinanceFlow',
    type: 'Full Stack',
    description:
      'Sistema full stack de controle financeiro pessoal, com autenticação JWT, recuperação de senha, CRUD de receitas e despesas, categorias personalizadas, filtros avançados, dashboard com gráficos, perfil do usuário e configurações de interface.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'JWT',
      'Axios',
      'Recharts',
      'Vercel',
      'Render',
    ],
    codeUrl: '#',
    deployUrl: 'https://financeflow-wheat-tau.vercel.app',
    backendUrl: 'https://financeflow-34u8.onrender.com',
    icon: WalletCards,
    accent: 'from-cyan-400/15 via-slate-900 to-emerald-400/15',
  },
  {
    name: 'DriveGestor',
    type: 'Frontend / Supabase',
    description:
      'Sistema web para gestão de aluguel de carros, com cadastro de clientes, carros, pagamentos, autenticação, dashboard e integração com Supabase.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'React Router DOM',
      'React Hook Form',
      'Zod',
    ],
    codeUrl: '#',
    deployUrl: 'https://wyllyah.github.io/drive-gestor/',
    icon: CarFront,
    accent: 'from-cyan-400/15 via-slate-900 to-blue-500/15',
  },
  {
    name: 'imediata.com',
    type: 'Frontend',
    description:
      'Site institucional desenvolvido para apresentar a empresa, destacar seus canais de contato e organizar informacoes comerciais em uma interface responsiva, objetiva e acessivel.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsividade',
      'SEO',
      'Performance',
    ],
    codeUrl: '#',
    deployUrl: 'https://www.imediata.com/',
    icon: Globe2,
    accent: 'from-emerald-400/15 via-slate-900 to-cyan-400/15',
  },
]
