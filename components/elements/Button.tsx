import { motion, useAnimationControls } from 'framer-motion'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Button({
  children,
  onClick,
  href,
  className,
  animate = true,
}: {
  children: ReactNode
  onClick?: any
  href?: string
  className?: string
  animate?: boolean
}) {
  const defaultStyle = 'bg-black text-white rounded-md px-4 py-2'
  const style = twMerge(defaultStyle, className)
  const controls = useAnimationControls()

  const handleMouseOver = () => {
    controls.start('leftToRight')
  }

  const variants = {
    leftToRight: {
      x: '2000%',
      rotate: 35,
      transition: {
        duration: 0.5,
      },
      width: 10,
    },
    rightToLeft: {
      x: '-2000%',
      rotate: 35,
      transition: {
        duration: 0.2,
        x: {
          duration: 0,
        },
      },
      width: 4,
    },
  }

  return (
    <>
      {href ? (
        <Link href={href} className={style}>
          {children}
        </Link>
      ) : (
        <motion.button
          onMouseOver={handleMouseOver}
          className={`${style} relative overflow-hidden ${
            animate ? 'hover:bg-gray-900' : ''
          }`}
          onClick={onClick}
        >
          {animate && (
            <div className="absolute bottom-0 hidden pointer-events-none -top-10 mix-blend-difference md:block">
              <motion.div
                variants={variants}
                initial={'rightToLeft'}
                animate={controls}
                onAnimationComplete={(variant) => {
                  if (variant === 'leftToRight') {
                    controls.set('rightToLeft')
                  }
                }}
                className="bg-yellow-400 pointer-events-none h-28 "
              />
            </div>
          )}
          {children}
        </motion.button>
      )}
    </>
  )
}
