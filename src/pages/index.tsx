import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex h-full flex-col ${inter.className}`}>
      <div className="flex items-center justify-center">jiby</div>
      <div className="min-h-[60px] space-x-4 absolute bottom-0 flex flex-row w-full border">
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </div>
    </main>
  )
}
