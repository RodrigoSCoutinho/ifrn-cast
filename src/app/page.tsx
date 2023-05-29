import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
       <aside className="w-72 bg-zinc-950 p-6">
        <nav>
          <a href="">Home</a>
          <a href="">Search</a>
          <a href="">Your Library</a>
        </nav>
        </aside>
       <main className="flex-1 p-6">
        main
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>

  )
}
