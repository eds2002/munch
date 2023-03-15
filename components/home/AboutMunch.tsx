import Image from 'next/image'
import React from 'react'
import Button from '../elements/Button'
import Layout from '../global/Layout'

export default function BusinessOwners() {
  return (
    <section className="py-24 overflow-hidden bg-yellow-50">
      <Layout>
        <div className="flex flex-col items-center w-full gap-6 justify-evenly lg:flex-row">
          <div>
            <h2 className="max-w-lg text-4xl font-bold font-luckiestGuy">
              Munch aims to support small pizza chains.
            </h2>
            <p className="max-w-lg mt-2 text-base xl:text-lg">
              Munch loves pizza, probably just as much as you if you&apos;re
              reading this. Munch aims to provide awareness to your favorite
              pizza chains allowing them to compete with the bigger guys.
            </p>
            <Button className="p-4 mt-8 rounded-full">Catch a slice</Button>
          </div>
          <Image
            src="/bgImages/pizzaStand.svg"
            priority
            width={500}
            height={500}
            alt="Image of a pizza store"
          />
        </div>
        <div className="flex flex-col items-center w-full gap-6 mt-32 justify-evenly lg:flex-row-reverse">
          <div>
            <h2 className="max-w-lg text-4xl font-bold font-luckiestGuy">
              A variety of options to choose from.
            </h2>
            <p className="max-w-lg mt-2 text-base xl:text-lg">
              With a huge number of chains working with Munch, we guarantee we
              offer you the best, unique types of pizza out there. What are you
              waiting for?
            </p>
            <Button className="p-4 mt-8 rounded-full">Find a slice</Button>
          </div>
          <Image
            src="/bgImages/pizzas-multiple.svg"
            priority
            width={500}
            height={500}
            alt="Image of a pizza store"
          />
        </div>
      </Layout>
    </section>
  )
}
