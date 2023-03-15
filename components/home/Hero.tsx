import React, { useState } from 'react'
import Layout from '../global/Layout'
import Image from 'next/image'
import {
  BsArrowRight,
  BsBellFill,
  BsCarFront,
  BsChevronRight,
  BsTruck,
} from 'react-icons/bs'
import Button from '../elements/Button'
import bgImg from '../../public/bgImages/pizza.png'

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Layout className="relative z-10 flex items-center justify-start">
        <div className="w-full max-w-2xl ">
          <h2 className="max-w-lg text-5xl font-bold md:text-6xl font-luckiestGuy">
            Fresh hot pizza, one search away.
          </h2>
          <InputContainer />
          <p className="mt-2 text-sm">
            Or{' '}
            <span className="font-semibold underline cursor-pointer">
              sign in
            </span>{' '}
            for your recent addresses
          </p>
        </div>
      </Layout>
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none ">
        <Image
          src={bgImg}
          width={2500}
          height={2500}
          priority
          alt="Image of pizza"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 rounded bg-gradient-to-r from-yellow-400 to-yellow-400/60 md:to-transparent"></div>
      </div>
    </section>
  )
}

function InputContainer() {
  return (
    <div className="w-full mt-6">
      <div className="relative flex flex-col items-center justify-center gap-3 md:flex-row">
        <div className="relative flex-1 w-full">
          <input
            className="w-full p-4 bg-white rounded-full"
            placeholder="Enter a delivery address"
          />
          <DeliveryOptions />
        </div>
        <Button className="flex items-center justify-center w-full py-4 font-medium rounded-full gap-x-1 group md:w-auto">
          Search Now
        </Button>
      </div>
    </div>
  )
}

function DeliveryOptions() {
  const [option, setOption] = useState<'ASAP' | 'Later'>('ASAP')
  return (
    <div className="absolute top-0 bottom-0 right-0 flex items-center justify-center py-4">
      <div className="p-1.5 py-4 bg-stone-200 hover:bg-stone-300 flex items-center justify-center gap-x-1 font-medium rounded-full px-6 cursor-pointer">
        <span>
          <BsTruck />
        </span>
        <span>{option}</span>
      </div>
    </div>
  )
}
