'use client'

import { Button } from 'flowbite-react'
import {
  Banknote,
  BriefcaseIcon,
  Building2,
  Clock,
  GraduationCap,
  MapPin,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function JobDetailsView({ params }) {
  const router = useRouter()

  const handleOpenCompany = () => {
    router.push(`/empresas/${job.companyId}`)
  }

  return (
    <div className='min-h-auto'>
      <header className='bg-purple-700 py-6 text-white'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl font-bold'>{job.title}</h1>
          <div className='mt-4 flex flex-wrap gap-4'>
            <div className='flex items-center gap-2'>
              <Building2 className='h-5 w-5' />
              <button
                type='button'
                onClick={handleOpenCompany}
                className='hover:underline'
              >
                {job.company}
              </button>
            </div>
            <div className='flex items-center gap-2'>
              <MapPin className='h-5 w-5' />
              <span>{job.location}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Clock className='h-5 w-5' />
              <span>{job.type}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            <div className='mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
              <h2 className='mb-4 text-2xl font-semibold'>Descrição da vaga</h2>
              <div className='whitespace-pre-line'>{job.description}</div>
            </div>

            <div className='mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
              <h2 className='mb-4 text-2xl font-semibold'>Benefícios</h2>
              <ul className='grid grid-cols-2 gap-3'>
                {job.benefits.map((benefit, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <div className='h-2 w-2 rounded-full bg-purple-600' />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className='rounded-lg border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
              <h2 className='mb-4 text-2xl font-semibold'>Tecnologias</h2>
              <div className='flex flex-wrap gap-2'>
                {job.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-4 rounded-lg border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
              <h2 className='mb-4 text-xl font-semibold'>Detalhes da vaga</h2>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <BriefcaseIcon className='h-5 w-5 text-purple-600' />
                  <div>
                    <p className='text-sm text-gray-500'>Tipo de contrato</p>
                    <p className='font-medium'>{job.contract}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Banknote className='h-5 w-5 text-purple-600' />
                  <div>
                    <p className='text-sm text-gray-500'>Faixa salarial</p>
                    <p className='font-medium'>{job.salary}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <GraduationCap className='h-5 w-5 text-purple-600' />
                  <div>
                    <p className='text-sm text-gray-500'>Experiência</p>
                    <p className='font-medium'>{job.experience}</p>
                  </div>
                </div>
                <Button gradientDuoTone='purpleToPink' className='mt-4 w-full'>
                  Candidatar-se
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const job = {
  id: 1,
  title: 'Desenvolvedor(a) Full Stack',
  company: 'Empresa Tech',
  companyId: 1,
  location: 'São Paulo, SP',
  type: 'Híbrido',
  contract: 'Efetivo',
  salary: 'R$ 8.000 - R$ 12.000',
  experience: '3+ anos',
  description: `Estamos procurando um(a) Desenvolvedor(a) Full Stack apaixonado(a) por tecnologia para se juntar ao nosso time!

    Responsabilidades:
    • Desenvolver e manter aplicações web utilizando React e Node.js
    • Colaborar com o time de design para implementar interfaces responsivas
    • Participar de code reviews e contribuir com melhores práticas
    • Otimizar aplicações para máxima performance

    Requisitos:
    • Experiência com React, Node.js e TypeScript
    • Conhecimento em bancos de dados SQL e NoSQL
    • Familiaridade com metodologias ágeis
    • Boa comunicação e trabalho em equipe`,
  benefits: [
    'Vale Refeição',
    'Vale Transporte',
    'Plano de Saúde',
    'Plano Odontológico',
    'Gympass',
    'Day Off no aniversário',
  ],
  technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
}
