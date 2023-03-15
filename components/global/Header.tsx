import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import React, { useState } from 'react'
import Layout from './Layout'
import Image from 'next/image'
import Button from '../elements/Button'
import { BsTruck } from 'react-icons/bs'
import { MdMenu } from 'react-icons/md'
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'
import Link from 'next/link'

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(true)
  const { scrollYProgress } = useScroll()
  const background = useTransform(
    scrollYProgress,
    [0.1, 0.3],
    ['rgba(255,255,255,0)', 'rgba(255,255,255,1)']
  )

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])

  return (
    <>
      <motion.header
        style={{ background }}
        className="fixed top-0 left-0 right-0 z-20 py-3"
      >
        <Layout className="w-full py-0.5 flex items-center justify-between gap-6">
          <div className="flex items-center gap-x-3">
            <MdMenu
              onClick={() => setOpenDrawer(true)}
              className="text-3xl cursor-pointer"
            />
            <div className="cursor-pointer">
              <Image
                src="/company/logoOriginal.svg"
                alt="Image of company"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="relative lg:flex-[0.5] flex-1">
            <motion.div style={{ opacity }}>
              <input
                className="w-full p-4 rounded-full bg-stone-200"
                placeholder="Enter a delivery address"
              />
              <DeliveryOptions />
            </motion.div>
          </div>
          <div className="items-center hidden gap-x-3 lg:flex">
            <Button
              animate={false}
              className="px-3 py-2 text-black rounded-full bg-stone-100"
            >
              Sign in
            </Button>
            <Button className="px-3 py-2 rounded-full">Sign Up</Button>
          </div>
        </Layout>
      </motion.header>
      <AnimatePresence>
        {openDrawer && <Drawer setOpenDrawer={setOpenDrawer} />}
      </AnimatePresence>
    </>
  )
}

function DeliveryOptions() {
  const [option, setOption] = useState<'ASAP' | 'Later'>('ASAP')
  return (
    <div className="absolute top-0 bottom-0 right-0 items-center justify-center hidden py-4 lg:flex">
      <div className="p-1.5 py-4 bg-stone-300 hover:bg-stone-400 flex items-center justify-center gap-x-1 font-medium rounded-full px-6 cursor-pointer">
        <span>
          <BsTruck />
        </span>
        <span>{option}</span>
      </div>
    </div>
  )
}

function Drawer({ setOpenDrawer }: { setOpenDrawer: (val: boolean) => void }) {
  const handleClick = (e: any) => {
    if (e.target.id === 'overlay') {
      setOpenDrawer(false)
    }
  }
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="fixed inset-0 z-50 "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ bounce: 0 }}
        id="overlay"
        className="absolute inset-0 bg-black/70 "
        onClick={handleClick}
      />
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{
          bounce: 0,
        }}
        className="relative z-10 flex flex-col items-center justify-between h-full max-w-xs p-6 bg-yellow-200 rounded-tr-3xl rounded-br-3xl"
      >
        <div className="w-full">
          <div>
            <Button
              animate={false}
              className="inline-block w-full p-4 mt-4 rounded-full hover:bg-stone-900"
            >
              Sign up
            </Button>
            <Button
              animate={false}
              className="inline-block w-full p-4 mt-2 text-black bg-white rounded-full hover:bg-stone-100"
            >
              Log in
            </Button>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-start justify-center mt-6 space-y-2 text-sm font-medium">
            <Link href="#">Connect your business</Link>
            <Link href="#">Create an business account</Link>
            <Link href="#">Become a munch driver</Link>
          </div>
        </div>
        <div className="w-full pb-5">
          <div className="flex items-center justify-between bg-[#F94A29] gap-x-2 rounded-xl p-2 text-white">
            <Image
              src="/icons/pizza-app.svg"
              alt="Pizza app"
              width={75}
              height={75}
            />
            <h6 className="font-semibold">More to love in the Munch app.</h6>
          </div>
          <div className="flex items-center justify-between gap-4 mt-4">
            <Button
              animate={false}
              className="flex items-center justify-center w-full text-black bg-white rounded-full gap-x-1 hover:bg-stone-100"
            >
              <AiFillApple />
              Apple
            </Button>
            <Button
              animate={false}
              className="flex items-center justify-center w-full text-black bg-white rounded-full gap-x-1 hover:bg-stone-100"
            >
              <AiFillAndroid />
              Android
            </Button>
          </div>
        </div>
      </motion.aside>
    </motion.div>
  )
}
