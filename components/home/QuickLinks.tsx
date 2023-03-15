import Image from 'next/image'
import React from 'react'
import { BsArrowRight, BsChevronRight } from 'react-icons/bs'
import Button from '../elements/Button'
import Layout from '../global/Layout'

export default function QuickLinks() {
  const links = [
    {
      iconImg: '/icons/pizza-driver.svg',
      title: 'Become a driver',
      desc: 'Make reliable money while helping out the community.',
      btnText: 'Learn more',
    },
    {
      iconImg: '/icons/pizza-restaurant.svg',
      title: 'Partner with us',
      desc: 'Grow your business to different lengths and reach new loyal customers.',
      btnText: 'Sign up your store',
    },
    {
      iconImg: '/icons/pizza-app.svg',
      title: 'Get the App',
      desc: 'Munch is much better experienced on the app store.',
      btnText: 'Get the app',
    },
  ]
  return (
    <section className="bg-yellow-50">
      <Layout className="flex flex-col items-center justify-between gap-6 py-16 lg:flex-row">
        {links.map((link) => (
          <div
            key={link.title}
            className="flex flex-row items-center justify-center gap-6 lg:flex-col lg:gap-0"
          >
            <div className="relative w-[200px] h-[200px]">
              <Image src={link.iconImg} alt={'Icon'} fill />
            </div>
            <div className="lg:flex lg:items-center lg:justify-center lg:flex-col">
              <p className="text-3xl font-semibold lg:text-center font-luckiestGuy">
                {link.title}
              </p>
              <p className="max-w-xs mt-1 lg:text-center xl:text-lg">
                {link.desc}
              </p>
              <Button
                href="#"
                className="inline-flex  p-0 mt-4 bg-transparent text-[#F94A29] font-medium  items-center justify-center gap-x-1"
              >
                {link.btnText}
                <BsChevronRight className="text-xs" />
              </Button>
            </div>
          </div>
        ))}
      </Layout>
    </section>
  )
}
