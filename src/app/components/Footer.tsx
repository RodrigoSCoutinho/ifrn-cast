import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from 'next/image'

export function Footer(){
    return(
       <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
         <div className="flex items-center gap-3">
              <Image src="/foo-fighters.jpg" width={56} height={56} alt="Capa do album Foo Fighters"/>
           <div className="flex flex-col">
              <strong className="font-normal">Rope</strong>
              <span className="text-xs text-zinc-400">Foo Fighters</span>
           </div>
         </div>
         <div className="flex flex-col items-center gap-2">
         <div className="flex items-center gap-4">
           <Shuffle size={20} className="text-zinc-200"/>
           <SkipBack  size={20} className="text-zinc-200"/>

        <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play/>
        </button>

        <SkipForward size={20}/>
        <Repeat size={20}/>
         </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:17</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
            <Mic2 size={20}/>
            <LayoutList size={20}/>
            <Laptop2 size={20}/>

          <div className="flex items-center gap-2">
            <Volume size={20}/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
            <Maximize2 size={20}/>
        </div>
      </footer>
    )
}