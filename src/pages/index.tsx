import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { CustomCursor } from '@/components/custom-cursor'
import { IconBox } from '@/components/icon-box'
import { ThemeToggle } from '@/components/theme-toggle'

import { icons } from '@/constants/icons'

const inter = Inter({ subsets: ['latin'] })

/**
 * 그림자 : https://getcssscan.com/css-box-shadow-examples
 */

export default function Home() {
  return (
    <>
      <Head>
        <title>Let me Introduce</title>
        <meta name="author" content="jibjiby" />
        <meta name="description" content="간단한 자기 소개 페이지 입니다." />

        {/* open graph metadata */}
        <meta property="og:title" content="JibJiby의 소개 페이지" />
      </Head>
      <main className={`flex h-full flex-col ${inter.className}`}>
        <section className="flex items-center justify-center w-full h-full px-16 sm:px-[25%] md:px-[30%] select-none">
          <div className="flex flex-col w-full">
            <TypeAnimation
              className="text-3xl font-light text-type-animation"
              sequence={['안녕하세요']}
              cursor={false}
            />
            <div>
              <TypeAnimation
                className="inline-block text-3xl font-semibold break-keep text-type-animation"
                sequence={[
                  1500,
                  'UX 지향적인',
                  2500,
                  '날마다 성장하기를 즐기는',
                  2500,
                  '주변에 공유하며, 같이 성장하는',
                  2500,
                  '문제 해결을 위해 치열하게 고민하는',
                ]}
                repeat={Infinity}
                speed={25}
                deletionSpeed={20}
                cursor
              />
              <TypeAnimation
                className="inline-block text-3xl font-light text-type-animation"
                sequence={[2500, '개발자']}
                cursor={false}
              />
            </div>
            <TypeAnimation
              className="text-3xl font-light text-type-animation"
              sequence={[3000, '김성집 입니다.']}
              cursor={false}
            />
          </div>
        </section>
        <footer className="min-h-[60px] fixed bottom-2 w-full px-6 select-none flex justify-center">
          <div
            className="flex flex-row w-full h-full max-w-md px-4 py-3 rounded-2xl justify-evenly bg-[#333]/40  dark:bg-white/50"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
            }}
          >
            {icons.map((icon) => (
              <TooltipProvider
                key={icon.src}
                delayDuration={0}
                disableHoverableContent
                skipDelayDuration={300}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={icon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBox>
                        <Image
                          alt={icon.alt}
                          src={icon.src}
                          height={40}
                          width={40}
                        />
                      </IconBox>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="mb-2 opacity-80">
                    <strong className="opacity-80">{icon.tooltip}</strong>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </footer>
      </main>
      <CustomCursor />
      <ThemeToggle />
    </>
  )
}
