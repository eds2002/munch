import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../elements/Button'
import Layout from './Layout'

export default function Footer() {
  const row1Links = [
    {
      title: 'Munch',
      links: [
        {
          name: 'About Us',
          href: '#',
        },
        {
          name: 'Careers',
          href: '#',
        },
        {
          name: 'Blog',
          href: '#',
        },
        {
          name: 'Pizza Near me',
          href: '#',
        },
      ],
    },
    {
      title: 'Let Us Help You',
      links: [
        {
          name: '24/7 Support',
          href: '#',
        },
        {
          name: 'FAQ',
          href: '#',
        },
        {
          name: 'Account',
          href: '#',
        },
      ],
    },
    {
      title: 'Get the App',
      links: [
        {
          name: 'Download for iOS',
          href: '#',
        },
        {
          name: 'Download for Android',
          href: '#',
        },
        {
          name: 'Other',
          href: '#',
        },
      ],
    },
    {
      title: 'Businesses',
      links: [
        {
          name: 'Aiming to grow your business? Munch is here to help with over 5 million active users daily. ',
          type: 'description',
        },
        {
          name: 'Get started with Munch',
          type: 'button',
          href: '#',
        },
      ],
    },
  ]
  const row2Links = [
    {
      title: 'Pizza types you might like',
      links: [
        {
          name: 'New York Pizza',
          href: '#',
        },
        {
          name: 'Sicilian Pizza',
          href: '#',
        },
        {
          name: 'Veggie Pizza',
          href: '#',
        },
        {
          name: 'Deep Dish Pizza',
          href: '#',
        },
      ],
    },
    {
      title: '',
      links: [
        {
          name: 'By the Slice',
          href: '#',
        },
        {
          name: 'Gluten Free Pizza',
          href: '#',
        },
        {
          name: 'Neopolitan Pizza',
          href: '#',
        },
        {
          name: 'Tomatoe Pie',
          href: '#',
        },
      ],
    },
    {
      title: '',
      links: [
        {
          name: 'Grandma Pizza',
          href: '#',
        },
        {
          name: 'Thin Crust Pizza',
          href: '#',
        },
        {
          name: 'Stuffed Pizza',
          href: '#',
        },
        {
          name: 'Thick Crust Pizza',
          href: '#',
        },
      ],
    },
  ]
  return (
    <footer className="py-16 bg-[#F94A29]">
      <Layout>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {row1Links.map((links) => (
            <div className="text-white/90" key={links.title}>
              {links.title === '' ? (
                <p className="font-bold">&nbsp;</p>
              ) : (
                <p className="font-bold ">{links.title}</p>
              )}
              <nav className="flex flex-col items-start mt-2.5 space-y-2 font-semibold">
                {links.links.map((link: any, index) => (
                  <React.Fragment key={link.name + index}>
                    {link?.type === 'description' && (
                      <p className="opacity-70">{link.name}</p>
                    )}
                    {link.type === 'button' && (
                      <Button
                        animate={false}
                        className="w-full mt-4 bg-transparent border rounded-full"
                      >
                        {link.name}
                      </Button>
                    )}
                    {!link?.type && (
                      <Link href={link.href} className="opacity-70">
                        {link.name}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 mt-12 lg:grid-cols-4">
          {row2Links.map((links) => (
            <div className="text-white/90" key={links.title}>
              {links.title === '' ? (
                <p className="font-bold select-none">&nbsp;</p>
              ) : (
                <p className="font-bold ">{links.title}</p>
              )}
              <nav className="flex flex-col items-start mt-2.5 space-y-2 font-semibold">
                {links.links.map((link: any, index) => (
                  <React.Fragment key={link.name + index}>
                    {link?.type === 'description' && (
                      <p className="opacity-70">{link.name}</p>
                    )}
                    {link.type === 'button' && (
                      <Button
                        animate={false}
                        className="w-full mt-4 bg-transparent border rounded-full"
                      >
                        {link.name}
                      </Button>
                    )}
                    {!link?.type && (
                      <Link href={link.href} className="opacity-70">
                        {link.name}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between mt-12 lg:items-center lg:flex-row">
          <Image
            src="/company/logoOriginal.svg"
            alt="Company logo"
            width={50}
            height={50}
          />
          <div className="flex flex-col font-semibold text-white lg:items-center gap-x-4 opacity-70 lg:flex-row ">
            <Link href="#" className="underline">
              Do not sell my data
            </Link>
            <Link href="#" className="underline">
              Terms of Service
            </Link>
            <Link href="#" className="underline">
              Privacy
            </Link>
            © Copyright 2023 Munch, Inc.
          </div>
        </div>
      </Layout>
    </footer>
  )
}
