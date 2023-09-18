import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

/**
 * 그림자 : https://getcssscan.com/css-box-shadow-examples
 */

const icons = [
  { src: '/github-icon.png', alt: 'github icon' },
  { src: '/house-icon.png', alt: 'house icon' },
  { src: '/notion-icon.png', alt: 'notion icon' },
]

export default function Home() {
  return (
    <main className={`flex h-full flex-col ${inter.className}`}>
      <div className="flex items-center justify-center select-none">jiby</div>
      <div className="min-h-[60px] fixed bottom-2 w-full px-6 select-none flex justify-center">
        <div
          className="flex flex-row w-full h-full max-w-lg px-4 py-3 space-x-4 rounded-xl justify-evenly"
          style={{
            backgroundColor: 'rgba(51, 51, 51, 0.4)',
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
          }}
        >
          {icons.map((icon) => (
            <IconBox key={icon.src}>
              <Image alt={icon.alt} src={icon.src} height={40} width={40} />
            </IconBox>
          ))}
        </div>
      </div>
    </main>
  )
}

type Props = {
  children: React.ReactNode
}

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
