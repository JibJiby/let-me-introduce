import { Inter } from 'next/font/google'
import Image from 'next/image'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const inter = Inter({ subsets: ['latin'] })

/**
 * 그림자 : https://getcssscan.com/css-box-shadow-examples
 */

const icons = [
  {
    src: '/github-icon.png',
    alt: 'github icon',
    url: 'https://github.com/jibjiby',
    tooltip: 'Github',
  },
  {
    src: '/house-icon.png',
    alt: 'house icon',
    url: 'https://jiby.blog/',
    tooltip: 'Blog',
  },
  {
    src: '/notion-icon.png',
    alt: 'notion icon',
    url: 'https://jiby.notion.site/2190b56418c845d592b675eb12869074?pvs=4',
    tooltip: 'Notion',
  },
]

export default function Home() {
  return (
    <main className={`flex h-full flex-col ${inter.className}`}>
      <div className="flex items-center justify-center select-none">jiby</div>
      <div className="min-h-[60px] fixed bottom-2 w-full px-6 select-none flex justify-center">
        <footer
          className="flex flex-row w-full h-full max-w-lg px-4 py-3 space-x-4 rounded-2xl justify-evenly"
          style={{
            backgroundColor: 'rgba(51, 51, 51, 0.4)',
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
          }}
        >
          {icons.map((icon) => (
            <TooltipProvider
              key={icon.src}
              delayDuration={0}
              disableHoverableContent
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={icon.url} target="_blank" rel="noopener noreferrer">
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
                <TooltipContent>
                  <strong>{icon.tooltip}</strong>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </footer>
      </div>
    </main>
  )
}

type Props = React.ComponentProps<'div'>

function IconBox({ children }: Props) {
  return (
    <div
      className="p-2 transition-all duration-150 ease-in bg-white rounded-lg cursor-pointer hover:scale-125"
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',
      }}
    >
      {children}
    </div>
  )
}
