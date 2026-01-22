import { cn } from '@/lib/utils'
import { navLinks } from '@/data/data'
import { logo, menu, close } from "@/data/assets"
import { styles } from "@/style/styles"
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  let active;
  return (
    <div className={cn("fLex items-center py-5 fixed top-0 z-20 bg-primary w-full", styles.paddingX)}>
      <div className="w-full flex justify-between items-center m-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-[18px] text-white font-bold cursor-pointer">Bisakto Rahi
            <span className="hidden sm:block"> | Portfolio</span>
          </p>
        </Link>
        <nav className="hidden sm:flex sm:flex-row gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.id}
              className={cn(
                "text-[18px] font-medium cursor-pointer",
                "hover:text-red-400 transition-colors delay-75 ease-in-out",
                (active === link.id ? "text-white" : "text-secondary"),
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Navbar;