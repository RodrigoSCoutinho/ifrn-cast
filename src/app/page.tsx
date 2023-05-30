import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
       <aside className="w-72 bg-zinc-950 p-6">
        
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"/>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
          <div className="w-3 h-3 bg-green-500 rounded-full"/>
        </div>

        <nav className="space-y-5 mt-10">
          <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
          <HomeIcon/>
            Home
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold  text-zinc-200">
          <Search/>
            Search
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold  text-zinc-200">
          <Library/>
            Your Library
          </a>
        </nav>

        <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Lo-fi Music</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist #2</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
        </nav>


        </aside>
       <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
          <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft/>
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronRight/>
          </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href= "#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/foo-fighters.jpg" width={104} height={104} alt="Capa do album Foo Fighters"/>
              <strong>Wasting Light</strong>
            </a>
            <a href= "#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20">
              <Image src="/foo-fighters.jpg" width={104} height={104} alt="Capa do album Foo Fighters"/>
              <strong>Wasting Light</strong>
            </a>
            <a href= "#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20">
              <Image src="/foo-fighters.jpg" width={104} height={104} alt="Capa do album Foo Fighters"/>
              <strong>Wasting Light</strong>
            </a>
            <a href= "#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20">
              <Image src="/foo-fighters.jpg" width={104} height={104} alt="Capa do album Foo Fighters"/>
              <strong>Wasting Light</strong>
            </a>
            <a href= "#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20">
              <Image src="/foo-fighters.jpg" width={104} height={104} alt="Capa do album Foo Fighters"/>
              <strong>Wasting Light</strong>
            </a>
            <a href= "#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20">
              <Image src="/foo-fighters.jpg" width={104} height={104} alt="Capa do album Foo Fighters"/>
              <strong>Wasting Light</strong>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>

  )
}
