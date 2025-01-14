import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-5 font-[family-name:var(--font-geist-sans)]">
      <Image
      src="/logoAF.png"
      alt="Next.js logo"
      width={50}
      height={50}
      priority/>
      <a href="https://git.io/typing-svg" target="blanc"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=97aed8&center=true&vCenter=true&repeat=false&width=435&lines=Timetable" alt="My study project nodeJs" /></a>
      
        <div id="backTamle">
        <p className="headerInTable">ПРИЛЕТ</p>
          <div id="textInTable">
            <p>Рейс</p>
            <p>Направление</p>
            <p>По расписанию</p>
            <p>Направление</p>
            
          </div>
        <p className ="elemntInTable">fsfs</p>

        </div>
      </div>
      
  );
}

