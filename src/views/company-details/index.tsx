'use client'

import { Button } from 'flowbite-react'
import {
  Building2,
  MapPin,
  Globe,
  Users,
  Calendar,
  BriefcaseIcon,
} from 'lucide-react'
import Link from 'next/link'

// interface Company {
//   name: string;
//   industry: string;
//   size: string;
//   location: string;
//   founded: string;
//   website: string;
//   about: string;
//   benefits: string[];
//   culture: string[];
//   openPositions: number;
// }

export default function CompanyDetailsView() {
  return (
    <div className='h-auto'>
      <header className='bg-purple-700 py-6 text-white'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl font-bold'>{companyData.name}</h1>
          <div className='mt-4 flex flex-wrap gap-4'>
            <div className='flex items-center gap-2'>
              <Building2 className='h-5 w-5' />
              <span>{companyData.industry}</span>
            </div>
            <div className='flex items-center gap-2'>
              <MapPin className='h-5 w-5' />
              <span>{companyData.location}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Users className='h-5 w-5' />
              <span>{companyData.size}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            <div className='rounded-lgmb-6 border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
              <h2 className='mb-4 text-2xl font-semibold'>Sobre a empresa</h2>
              <div className='whitespace-pre-line'>{companyData.about}</div>
            </div>

            <div className='mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
              <h2 className='mb-4 text-2xl font-semibold'>Benefícios</h2>
              <ul className='grid grid-cols-2 gap-3'>
                {companyData.benefits.map((benefit, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <div className='h-2 w-2 rounded-full bg-purple-600' />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
              <h2 className='mb-4 text-2xl font-semibold'>Cultura</h2>
              <div className='flex flex-wrap gap-2'>
                {companyData.culture.map((value, index) => (
                  <span
                    key={index}
                    className='rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700'
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
              <h2 className='mb-4 text-xl font-semibold'>
                Informações da empresa
              </h2>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <Calendar className='h-5 w-5 text-purple-600' />
                  <div>
                    <p className='text-sm text-gray-500'>Fundação</p>
                    <p className='font-medium'>{companyData.founded}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Globe className='h-5 w-5 text-purple-600' />
                  <div>
                    <p className='text-sm text-gray-500'>Website</p>
                    <a
                      href={companyData.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-medium text-purple-600 hover:text-purple-700'
                    >
                      {companyData.website}
                    </a>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <BriefcaseIcon className='h-5 w-5 text-purple-600' />
                  <div>
                    <p className='text-sm text-gray-500'>Vagas abertas</p>
                    <p className='font-medium'>
                      {companyData.openPositions} vagas
                    </p>
                  </div>
                </div>
                <Link href='/vagas' className='mt-4 block'>
                  <Button gradientDuoTone='purpleToPink' className='w-full'>
                    Ver vagas disponíveis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Mock data - replace with real data fetching
const companyData = {
  name: 'Empresa Tech',
  industry: 'Tecnologia',
  size: '500-1000 funcionários',
  location: 'São Paulo, SP',
  founded: '2010',
  website: 'https://empresatech.com.br',
  about: `Somos uma empresa líder em soluções tecnológicas, focada em criar produtos inovadores que transformam a maneira como as pessoas trabalham e vivem.
  
  Nossa missão é desenvolver tecnologias que fazem a diferença na vida das pessoas, sempre priorizando a qualidade e a experiência do usuário.
  
  Com mais de uma década de experiência no mercado, nossa empresa tem crescido consistentemente, mantendo sempre nossa cultura de inovação e colaboração.`,
  benefits: [
    'Ambiente flexível e dinâmico',
    'Desenvolvimento profissional',
    'Plano de carreira estruturado',
    'Horário flexível',
    'Home Office',
    'Cultura inclusiva',
  ],
  culture: [
    'Inovação',
    'Colaboração',
    'Diversidade',
    'Aprendizado contínuo',
    'Bem-estar',
  ],
  openPositions: 12,
}
