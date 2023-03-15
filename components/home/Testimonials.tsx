import React from 'react'
import Layout from '../global/Layout'

export default function Testimonials() {
  const reviews = []

  return (
    <section className="relative py-24 bg-yellow-50">
      <Layout className="relative">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl font-luckiestGuy">
            What are you waiting for?
          </h2>
          <p className="max-w-xs text-center xl:text-lg">
            A couple words from people who didn&apos;t wait around.{' '}
          </p>
        </div>
        <p className="text-5xl font-semibold text-center ">
          Munch has proved capable of supporting small businesses. I can now
          order from my favorite pizza place from the comfort of my home!
        </p>
      </Layout>
    </section>
  )
}
