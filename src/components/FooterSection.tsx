'use client'

import { Footer } from 'flowbite-react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

export default function FooterSection() {
  return (
    <Footer container>
      <div className='w-full px-4'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          <div className='flex items-center justify-center'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 p-4 text-2xl font-black'>
              <span className='text-white'>L</span>
              <span className='text-gray-200'>V</span>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='sobre nos' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>LasVagas</Footer.Link>
                <Footer.Link href='#'>Visão</Footer.Link>
                <Footer.Link href='#'>Equipe</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='siga nos' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Github</Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Política de privacidade</Footer.Link>
                <Footer.Link href='#'>Termos &amp; Condições</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href='#' by='LasVagas' year={2025} />
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='#' icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  )
}
