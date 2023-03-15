import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

export default function Banner() {
  const { scrollYProgress } = useScroll()
  const arr = [
    '#Munch4l',
    'Munch',
    'pizzzzzaaaaaaaaa',
    'yums yummy yum',
    'We love pizza',
    'mmm pizza',
  ]

  const x = useTransform(scrollYProgress, [0, 0.5], [-200, 0])

  return (
    <section className="bg-[#F94A29] font-ramportOne">
      <motion.div
        style={{ x }}
        className="flex items-center gap-6 py-6 overflow-visible font-bold text-[#FCE22A] text-8xl flex-nowrap "
      >
        {arr.map((phrase, index) => (
          <>
            <p className="whitespace-nowrap" key={phrase + index}>
              {phrase.toUpperCase()}
            </p>
            <span>-</span>
          </>
        ))}
      </motion.div>
    </section>
  )
}
