import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-5 font-[family-name:var(--font-geist-sans)]">
      <Image
      src="/logoAF.png"
      alt="Next.js logo"
      width={80}
      height={80}
      priority/>
      <a href="https://git.io/typing-svg" target="blanc"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=97aed8&center=true&vCenter=true&repeat=false&width=435&lines=Timetable" alt="Timetable" /></a>
      
        <div id="backTamle">
          
          <div className="headerInTable">
            <img id="imgArrival" height={30}
            width={30}
            decoding="async"
              loading="lazy"
              src="https://cdn-0.emojis.wiki/emoji-pics-lf/telegram/airplane-telegram.gif"
              alt="✈️"/>
              <p>ПРИЛЕТ</p>
          </div>

          <div id="textInTable">
            <p>Рейс</p>
            <p>Направление</p>
            <p>По расписанию</p>
            <p>Ожидаемое время</p>
            <p>Состояние</p>
            
          </div>
          
          <ol >
            <li>
              <div className ="elemntInTable">
            <p>СИ 9906</p>
            <p>Братск</p>
            <p>19:30</p>
            <p>15.01 22:00</p>
            <p>Посадка</p>
            {/* /JSOM FROM/ */}
            </div>
          </li>
          <li>
              <div className ="elemntInTable">
            <p>СИ 9906</p>
            <p>Братск</p>
            <p>19:30</p>
            <p>15.01 22:00</p>
            </div>
          </li>
          <li>
              <div className ="elemntInTable">
            <p>СИ 9906</p>
            <p>Братск</p>
            <p>19:30</p>
            <p>15.01 22:00</p>
            </div>
          </li>
          <li>
              <div className ="elemntInTable">
            <p>СИ 9906</p>
            <p>Братск</p>
            <p>19:30</p>
            <p>15.01 22:00</p>
            </div>
          </li>
          </ol>
          <br/>
          <div className="headerInTable">
            <img id="imgArrival" height={30}
            width={30}
            decoding="async"
              loading="lazy"
              src="https://cdn-0.emojis.wiki/emoji-pics-lf/telegram/airplane-telegram.gif"
              alt="✈️"/>
              <p>ВЫЛЕТ</p>
          </div>
          <div id="textInTable">
            <p>Рейс</p>
            <p>Направление</p>
            <p>По расписанию</p>
            <p>Зажержан до</p>
            <p>Состояние</p>
            
          </div>
          <ol >
            <li>
              <div className ="elemntInTable">
            <p>СИ 9906</p>
            <p>Братск</p>
            <p>19:30</p>
            <p>15.01 22:00</p>
            <p>Регистрация</p>
            {/* /JSOM FROM/ */}
            </div>
          </li>
          <li>
              <div className ="elemntInTable">
            <p>СИ 9906</p>
            <p>Братск</p>
            <p>19:30</p>
            <p>15.01 22:00</p>
            </div>
          </li>
          <li>
              <div className ="elemntInTable">
            <p>СИ 9906</p>
            <p>Братск</p>
            <p>19:30</p>
            <p>15.01 22:00</p>
            </div>
          </li>
          <li>
              <div className ="elemntInTable">
            <p>СИ 9906</p>
            <p>Братск</p>
            <p>19:30</p>
            <p>15.01 22:00</p>
            </div>
          </li>
          </ol>
        </div>
        
      </div>
      
  );
}

