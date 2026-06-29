/* ============================================================================
   Chicago Trip — bilingual content (single source of truth)
   Every text field is { en, zh }. Edit text here; the app renders it.
   To add a photo: drop a file into assets/img/ and set its name in `img`.
   ========================================================================== */

const I18N = {
  en: {
    appTitle: "Chicago Family Trip",
    appDates: "July 8 – 12, 2026",
    home: "Itinerary",
    back: "Back",
    day: "Day",
    overview: "Overview",
    transport: "Getting around",
    stops: "Stops & sights",
    openMaps: "Open in Apple Maps",
    mustSee: "Must-see highlights",
    intro: "About",
    story: "Background story",
    walk: "Walking",
    hours: "Hours",
    tips: "Good to know",
    practical: "Practical Info",
    practicalSub: "Hotel, parking, driving, tips",
    photoSoon: "Photo coming soon",
    tourTitle: "Suggested walking tour",
    website: "Website",
    listen: "Listen",
    pause: "Pause",
    readMore: "Read more",
    showLess: "Show less",
    source: "Source: Wikipedia",
    langName: "中文",
  },
  zh: {
    appTitle: "芝加哥家庭之旅",
    appDates: "2026年7月8日 – 12日",
    home: "行程总览",
    back: "返回",
    day: "第",
    overview: "今日概览",
    transport: "交通方式",
    stops: "景点安排",
    openMaps: "用 Apple 地图打开",
    mustSee: "必看亮点",
    intro: "景点简介",
    story: "背景故事",
    walk: "步行",
    hours: "开放时间",
    tips: "温馨提示",
    practical: "实用信息",
    practicalSub: "酒店、停车、驾车、贴士",
    photoSoon: "照片待补充",
    tourTitle: "建议步行路线",
    website: "官网",
    listen: "朗读",
    pause: "暂停",
    readMore: "展开全文",
    showLess: "收起",
    source: "资料来源：维基百科",
    langName: "EN",
  },
};

const TRIP = {
  title: { en: "Chicago Family Trip", zh: "芝加哥家庭之旅" },
  subtitle: {
    en: "A relaxed, senior-friendly 5-day guide — July 8 to 12, 2026",
    zh: "轻松、适合长者的五日游 — 2026年7月8日至12日",
  },

  days: [
    {
      id: "wed",
      label: { en: "Wed · Jul 8", zh: "周三 · 7月8日" },
      title: { en: "Arrive & Northwestern University", zh: "抵达 · 西北大学" },
      summary: {
        en: "Land at O'Hare around 9am, pick up the rental car, and spend the day at Northwestern's beautiful lakefront campus in Evanston. Mom and Sarah take the admissions tour; Dad, Brooke and grandparents follow the easy self-guided walk below. Check in at the hotel in the evening.",
        zh: "上午9点左右抵达奥黑尔机场，取租车，全天在埃文斯顿（Evanston）湖畔美丽的西北大学校园游览。妈妈和 Sarah 参加招生导览；爸爸、Brooke 和爷爷奶奶按下方轻松的自助路线游览。傍晚入住酒店。",
      },
      transport: {
        en: "Pick up the rental car at O'Hare (ORD). It's about a 30–40 min drive to Northwestern in Evanston. Park on campus, then about 15 min to the hotel in Northbrook in the evening.",
        zh: "在奥黑尔机场（ORD）取租车，到埃文斯顿的西北大学约30–40分钟车程。在校园停车，傍晚再开约15分钟到诺斯布鲁克（Northbrook）的酒店。",
      },
      sites: ["northwestern", "hotel"],
    },
    {
      id: "thu",
      label: { en: "Thu · Jul 9", zh: "周四 · 7月9日" },
      title: { en: "Day Trip to UIUC", zh: "伊利诺伊大学一日游" },
      summary: {
        en: "An early start for the drive south to the University of Illinois Urbana-Champaign. Mom and Sarah take the admissions tour; Dad, Brooke and grandparents follow the flat, easy self-guided walk around the Main Quad. Lunch on campus, then drive back with a rest stop.",
        zh: "一早出发南下，前往位于厄巴纳-香槟的伊利诺伊大学（UIUC）。妈妈和 Sarah 参加招生导览；爸爸、Brooke 和爷爷奶奶按下方平坦轻松的自助路线绕主四方庭院（Main Quad）游览。在校园午餐，之后驱车返回，途中休息一次。",
      },
      transport: {
        en: "About 2h30 each way by car (≈140 miles). Leave by 7:30am to make the morning tour. Plan one rest stop each way. It's a long driving day — keep it calm and unhurried.",
        zh: "单程约2小时30分（约140英里）。建议上午7:30前出发，赶上上午的导览。往返各安排一次休息。这是开车较多的一天——节奏放慢、不赶时间。",
      },
      sites: ["uiuc", "rest-stop"],
    },
    {
      id: "fri",
      label: { en: "Fri · Jul 10", zh: "周五 · 7月10日" },
      title: { en: "Downtown: Millennium Park & Art Institute", zh: "市区：千禧公园与艺术博物馆" },
      summary: {
        en: "Mom, Sarah and Brooke are at skating camp. Dad takes the grandparents downtown for the classic Chicago day — Cloud Gate ('The Bean'), the gardens of Millennium Park, a seated architecture river cruise, and the world-class Art Institute. Flat paths, plenty of benches.",
        zh: "妈妈、Sarah 和 Brooke 参加滑冰营。爸爸带爷爷奶奶进城，体验经典的芝加哥一日——“云门”（俗称“豆子”）、千禧公园的花园、坐船游览的建筑游船，以及世界级的艺术博物馆。路面平坦，长椅众多。",
      },
      transport: {
        en: "Drive ~40 min downtown and park at the Millennium Park Garage. Everything today is within a few flat blocks; the river cruise dock is a short, level walk along Michigan Avenue.",
        zh: "驱车约40分钟进城，停在千禧公园停车楼（Millennium Park Garage）。今天所有景点都在几个平坦的街区之内；游船码头沿密歇根大道平路步行不远即到。",
      },
      sites: ["millennium-park", "river-cruise", "art-institute"],
    },
    {
      id: "sat",
      label: { en: "Sat · Jul 11", zh: "周六 · 7月11日" },
      title: { en: "Museum Campus & Chinatown", zh: "博物馆园区与唐人街" },
      summary: {
        en: "A second skating-camp day. Dad and the grandparents enjoy the lakefront Museum Campus — the Field Museum and a grand skyline view — then a warm, familiar dim-sum lunch in Chinatown, just minutes away. Indoors and restful when it's hot.",
        zh: "滑冰营第二天。爸爸和爷爷奶奶游览湖畔的博物馆园区——菲尔德自然史博物馆和壮丽的天际线景观——之后到几分钟车程外的唐人街吃一顿熟悉暖心的点心午餐。天热时室内凉爽、轻松休憩。",
      },
      transport: {
        en: "Drive ~40 min to the Museum Campus and park in the Soldier Field garages. Chinatown is a 5-minute drive (or short cab) southwest, with its own parking.",
        zh: "驱车约40分钟到博物馆园区，停在士兵球场（Soldier Field）停车楼。唐人街在西南方向约5分钟车程（或乘出租车），有自己的停车场。",
      },
      sites: ["field-museum", "chinatown"],
    },
    {
      id: "sun",
      label: { en: "Sun · Jul 12", zh: "周日 · 7月12日" },
      title: { en: "Fly Home", zh: "返程回家" },
      summary: {
        en: "Check out, return the rental car at O'Hare, and fly home. Allow extra time for the airport on a Sunday.",
        zh: "退房，在奥黑尔机场还租车，乘机回家。周日机场较忙，请预留充裕时间。",
      },
      transport: {
        en: "About 30–40 min from the hotel to O'Hare. Return the rental car at the airport. Aim to arrive at the airport about 2.5 hours before the flight.",
        zh: "酒店到奥黑尔机场约30–40分钟。在机场归还租车。建议在航班起飞前约2.5小时抵达机场。",
      },
      sites: ["departure"],
    },
  ],

  sites: {
    /* ---------------------------------------------------------------- WED */
    northwestern: {
      emoji: "🎓",
      name: { en: "Northwestern University (self-guided)", zh: "西北大学（自助游览）" },
      area: { en: "Evanston, Illinois", zh: "伊利诺伊州 埃文斯顿" },
      summary: {
        en: "A gentle, flat stroll on a gorgeous lakefront campus with Chicago skyline views.",
        zh: "在风景绝美的湖畔校园轻松平坦地散步，远眺芝加哥天际线。",
      },
      intro: {
        en: "Northwestern's Evanston campus sits right on Lake Michigan, just north of Chicago. The grounds are flat and leafy with benches everywhere, and the man-made 'Lakefill' gives one of the best skyline views in the area — perfect for an easy, unhurried self-guided walk.",
        zh: "西北大学的埃文斯顿校区紧邻密歇根湖，就在芝加哥以北。校园平坦、绿树成荫，处处有长椅；人工填出的“湖滨地”（Lakefill）拥有本地区最佳的天际线景观之一——非常适合轻松悠闲的自助散步。",
      },
      story: {
        en: "Northwestern University is a private research university founded in 1851. Its founders wanted to serve the people of the former Northwest Territory, which is how the school got its name. Classes began in 1855 with two faculty members and ten students.\n\nThe town of Evanston grew up around the university and is named for one of its founders, John Evans. Today the leafy lakeshore campus stretches along Lake Michigan, and a large section of it — the 'Lakefill' — was created in the 1960s by filling part of the lake with earth and stone, adding new land for the growing school.\n\nNorthwestern is known for journalism (the Medill School), theater and music, law, business (the Kellogg School), and engineering. Its sports teams, the Wildcats, play in the Big Ten Conference.\n\nThe university's faculty and graduates include Nobel laureates, Pulitzer Prize winners, and many well-known figures in film, television, and public life. The Evanston campus is especially loved for its calm, parklike setting beside the water.",
        zh: "西北大学是一所创立于1851年的私立研究型大学。创办者希望服务于原“西北地区”（Northwest Territory）的民众，校名也由此而来。学校于1855年开课，最初只有两名教师和十名学生。\n\n埃文斯顿镇随大学发展而兴起，并以创校者之一约翰·埃文斯（John Evans）命名。如今绿意盎然的湖滨校园沿密歇根湖伸展，其中很大一片——“湖滨地”（Lakefill）——是1960年代用泥土和石块填湖造出的新陆地，为不断壮大的学校提供了用地。\n\n西北大学以新闻学（梅迪尔学院）、戏剧与音乐、法学、商学（凯洛格学院）和工程学闻名。其体育代表队“野猫队”（Wildcats）征战大十联盟（Big Ten）。\n\n学校的教师与毕业生中有诺贝尔奖得主、普利策奖得主，以及众多电影、电视和公共领域的知名人物。埃文斯顿校区尤以其临水而建、宁静如公园般的环境而广受喜爱。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Northwestern_University",
      walk: { en: "Easy & flat (about 1.5 miles, with rests).", zh: "轻松平坦（约1.5英里，可随时休息）。" },
      hours: { en: "Campus open daily; museum & buildings ~10am–5pm.", zh: "校园全天开放；博物馆与楼宇约10:00–17:00。" },
      tips: {
        en: "Mom and Sarah's admissions tour starts at the Segal Visitors Center (1841 Sheridan Rd) — drop them there, where there is also visitor parking. The campus is flat with benches and shade. Norris University Center (stop 6) has restrooms, cafés and lake views — a great place to meet up and rest. For lunch, Norris or downtown Evanston's Davis Street are both easy.",
        zh: "妈妈和 Sarah 的招生导览在西格尔访客中心（Segal Visitors Center，1841 Sheridan Rd）集合——把她们送到那里，那儿也有访客停车。校园平坦，长椅和树荫充足。诺里斯学生中心（第6站）有洗手间、咖啡馆和湖景，是会合和休息的好地方。午餐可选诺里斯中心或市区 Davis 街，都很方便。",
      },
      coords: [42.0560, -87.6740],
      mapQuery: "Northwestern University Segal Visitors Center, 1841 Sheridan Rd Evanston IL",
      links: [
        { label: { en: "Segal Visitors Center", zh: "西格尔访客中心" }, url: "https://www.northwestern.edu/visit/" },
        { label: { en: "Searchable campus map", zh: "校园地图（可搜索）" }, url: "https://maps.northwestern.edu/" },
        { label: { en: "Parking: Segal Visitors Center Lot", zh: "停车：访客中心停车场" }, url: "https://maps.apple.com/?q=Northwestern%20Segal%20Visitors%20Center%20Parking&ll=42.0566,-87.6747" },
      ],
      tour: {
        en: "Drop Mom and Sarah at the Segal Visitors Center (1841 Sheridan Rd) and park nearby. This flat loop hugs the lakeshore and uses the wide, level campus paths. Start at the Weber Arch, the grand campus gateway, then walk to the Gothic Deering Library and historic University Hall. Pause at the peaceful Shakespeare Garden and the painted Rock, then head to the lake: Norris University Center for restrooms, a snack and lake views, the Lakefill for the Chicago skyline, and the Block Museum of Art (free, indoor). The Dearborn Observatory is an optional final stop. Pick as many stops as your legs like — benches are everywhere.",
        zh: "把妈妈和 Sarah 送到西格尔访客中心（1841 Sheridan Rd），就近停车。这条平坦的环线沿湖滨展开，走的都是宽阔平整的校园步道。从宏伟的校园门户韦伯拱门（Weber Arch）出发，走到哥特式的迪林图书馆（Deering Library）和历史悠久的大学楼（University Hall）。在宁静的莎士比亚花园和被涂满油漆的“岩石”（The Rock）稍作停留，再走向湖边：诺里斯学生中心有洗手间、点心和湖景，“湖滨地”可眺望芝加哥天际线，布洛克艺术博物馆（免费、室内）。迪尔伯恩天文台为可选的最后一站。体力允许就多看几处——长椅随处可见。",
      },
      tourMapSvg: `<svg viewBox="0 0 360 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Northwestern walking tour map" font-family="-apple-system,Helvetica,Arial,sans-serif">
  <rect x="0" y="0" width="360" height="500" fill="#f4f1ea"/>
  <!-- lake (east) -->
  <rect x="262" y="0" width="98" height="500" fill="#cfe0ea"/>
  <!-- campus blocks -->
  <rect x="120" y="150" width="120" height="120" rx="3" fill="#dfe8d8" stroke="#cdddc2"/>
  <!-- streets -->
  <g stroke="#d4ccba" stroke-width="7" stroke-linecap="round">
    <line x1="96" y1="40" x2="96" y2="460"/>
    <line x1="250" y1="40" x2="250" y2="460"/>
    <line x1="60" y1="120" x2="262" y2="120"/>
    <line x1="60" y1="300" x2="262" y2="300"/>
  </g>
  <g font-size="10.5" fill="#8a8270">
    <text x="100" y="200" transform="rotate(90 100,200)">Sheridan Rd</text>
    <text x="64" y="116">Lincoln St</text>
  </g>
  <g font-size="11" text-anchor="middle">
    <text class="i18n-en" x="180" y="216" fill="#7a8a6a">Deering Meadow</text>
    <text class="i18n-zh" x="180" y="216" fill="#7a8a6a">迪林草坪</text>
    <text class="i18n-en" x="310" y="250" fill="#5b7d96">Lake Michigan</text>
    <text class="i18n-zh" x="310" y="250" fill="#5b7d96">密歇根湖</text>
  </g>
  <!-- walking loop P -> 1..8 -> P -->
  <path d="M118,96 L120,128 L150,170 L138,210 L150,300 L168,250 L232,256 L236,210 L150,135 L118,96" fill="none" stroke="#00598c" stroke-width="7" stroke-opacity="0.45" stroke-linejoin="round" stroke-linecap="round"/>
  <!-- optional to observatory (north) -->
  <path d="M150,135 L150,70" fill="none" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6" stroke-linecap="round"/>
  <!-- numbered markers -->
  <g text-anchor="middle" font-size="14" font-weight="700" fill="#fff">
    <circle cx="120" cy="128" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="120" y="133">1</text>
    <circle cx="150" cy="170" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="150" y="175">2</text>
    <circle cx="138" cy="210" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="138" y="215">3</text>
    <circle cx="150" cy="135" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="150" y="140">4</text>
    <circle cx="150" cy="300" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="150" y="305">5</text>
    <circle cx="232" cy="256" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="232" y="261">6</text>
    <circle cx="248" cy="210" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="248" y="215">7</text>
    <circle cx="168" cy="250" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="168" y="255">8</text>
    <circle cx="150" cy="70" r="13" fill="#6b7280" stroke="#fff" stroke-width="2.5"/><text x="150" y="75">9</text>
  </g>
  <!-- parking / visitor center -->
  <rect x="105" y="83" width="26" height="26" rx="5" fill="#00598c" stroke="#fff" stroke-width="2.5"/>
  <text x="118" y="102" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">P</text>
  <g text-anchor="middle" font-size="10">
    <text class="i18n-en" x="150" y="58" fill="#6b7280">Dearborn Obs. &#8593;</text>
    <text class="i18n-zh" x="150" y="58" fill="#6b7280">天文台 &#8593;</text>
    <text class="i18n-en" x="118" y="123" fill="#00598c">Visitors Center</text>
    <text class="i18n-zh" x="118" y="123" fill="#00598c">访客中心</text>
  </g>
  <!-- north arrow -->
  <g><line x1="32" y1="55" x2="32" y2="36" stroke="#5a6776" stroke-width="2"/><path d="M32,32 L28,41 L36,41 Z" fill="#5a6776"/><text x="32" y="70" text-anchor="middle" font-size="11" fill="#5a6776">N</text></g>
  <!-- legend -->
  <g font-size="11" fill="#5a6776">
    <line x1="30" y1="420" x2="58" y2="420" stroke="#00598c" stroke-width="6" stroke-opacity="0.5" stroke-linecap="round"/>
    <text class="i18n-en" x="64" y="424">Walking loop (about 1.5 miles)</text>
    <text class="i18n-zh" x="64" y="424">步行环线（约1.5英里）</text>
    <line x1="30" y1="446" x2="58" y2="446" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6"/>
    <text class="i18n-en" x="64" y="450">Optional to ⑨ Observatory</text>
    <text class="i18n-zh" x="64" y="450">可选前往⑨天文台</text>
    <rect x="30" y="462" width="16" height="16" rx="3" fill="#00598c"/><text x="38" y="474" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">P</text>
    <text class="i18n-en" x="54" y="474">Parking — start &amp; end of the walk</text>
    <text class="i18n-zh" x="54" y="474">停车场 — 步行起点与终点</text>
  </g>
</svg>`,
      mustSee: [
        { emoji: "🏛️", img: "nu-arch.jpg", link: "https://www.northwestern.edu/visit/",
          caption: { en: "1. The Weber Arch", zh: "1. 韦伯拱门" },
          desc: { en: "The grand stone gateway onto campus from Sheridan Road — Northwestern's classic 'welcome' photo and an easy first stop.", zh: "从谢里登路（Sheridan Rd）进入校园的宏伟石砌门户——西北大学经典的“欢迎”合影点，也是轻松的第一站。" } },
        { emoji: "📚", img: "nu-deering.jpg", link: "https://www.library.northwestern.edu/",
          caption: { en: "2. Deering Library", zh: "2. 迪林图书馆" },
          desc: { en: "A beautiful 1933 Collegiate Gothic library with stained glass and a hushed reading room — step inside to admire it.", zh: "建于1933年的哥特复兴式图书馆，有彩色玻璃和静谧的阅览室——可入内欣赏。" } },
        { emoji: "🏰", img: "nu-university-hall.jpg", link: "https://maps.northwestern.edu/",
          caption: { en: "3. University Hall", zh: "3. 大学楼" },
          desc: { en: "The oldest building on campus (1869), with its castle-like tower — the romantic heart of old Northwestern.", zh: "校园最古老的建筑（1869年），有城堡般的塔楼——老西北大学浪漫的核心。" } },
        { emoji: "🌷", img: "nu-shakespeare-garden.jpg", link: "https://maps.northwestern.edu/",
          caption: { en: "4. Shakespeare Garden", zh: "4. 莎士比亚花园" },
          desc: { en: "A small, hedged English garden of flowers and benches — a peaceful, shaded place to sit and rest.", zh: "一座以绿篱围合的小型英式花园，花团锦簇、设有长椅——清幽遮阴、适合坐下歇脚。" } },
        { emoji: "🪨", img: "nu-rock.jpg", link: "https://www.northwestern.edu/",
          caption: { en: "5. The Rock", zh: "5. “岩石”" },
          desc: { en: "A boulder students repaint constantly with colorful messages — a fun, ever-changing campus tradition.", zh: "一块被学生不断刷上彩色留言的巨石——有趣且日日变化的校园传统。" } },
        { emoji: "🏢", img: "nu-norris.jpg", link: "https://www.northwestern.edu/norris/",
          caption: { en: "6. Norris University Center", zh: "6. 诺里斯学生中心" },
          desc: { en: "The student center right on the lake, with restrooms, cafés, seating and big water views — the perfect rest and lunch stop.", zh: "紧邻湖边的学生中心，有洗手间、咖啡馆、座位和开阔的湖景——歇脚和午餐的理想之处。" } },
        { emoji: "🌆", img: "nu-lakefill.jpg", link: "https://maps.northwestern.edu/",
          caption: { en: "7. The Lakefill", zh: "7. 湖滨地" },
          desc: { en: "A landscaped lakefront with paths and benches and a sweeping view of the Chicago skyline across the water — the campus highlight.", zh: "经过造景的湖滨，步道与长椅相伴，隔水可饱览芝加哥天际线——全校园的亮点。" } },
        { emoji: "🖼️", img: "nu-block.jpg", link: "https://www.blockmuseum.northwestern.edu/",
          caption: { en: "8. Block Museum of Art", zh: "8. 布洛克艺术博物馆" },
          desc: { en: "Northwestern's free art museum with rotating exhibitions — a cool, restful indoor stop. Admission is always free.", zh: "西北大学的免费艺术博物馆，展览定期更换——是凉爽、可休息的室内之选。常年免费入场。" } },
        { emoji: "🔭", img: "nu-observatory.jpg", link: "https://ciera.northwestern.edu/dearborn-observatory/",
          caption: { en: "9. Dearborn Observatory (optional)", zh: "9. 迪尔伯恩天文台（可选）" },
          desc: { en: "An 1889 domed observatory with a historic refracting telescope, north of the main path. A short optional add-on.", zh: "一座1889年的圆顶天文台，藏有历史悠久的折射望远镜，位于主路北侧。可作短途加选。" } },
      ],
    },
    hotel: {
      emoji: "🏨",
      name: { en: "Renaissance Chicago North Shore Hotel", zh: "芝加哥北岸万丽酒店" },
      area: { en: "Northbrook, Illinois", zh: "伊利诺伊州 诺斯布鲁克" },
      summary: {
        en: "Your home base for four nights, in the quiet northern suburbs.",
        zh: "四晚的落脚之处，位于安静的北郊。",
      },
      intro: {
        en: "A comfortable hotel in Northbrook, well placed for Evanston, the skating camp, and the drive into the city.",
        zh: "一家舒适的酒店，位于诺斯布鲁克，前往埃文斯顿、滑冰营和进城都很方便。",
      },
      story: {
        en: "Northbrook is a calm, leafy suburb on Chicago's North Shore, with easy access to the expressways. It makes a relaxed base away from downtown crowds, close to Evanston (about 15 minutes) and within an easy drive of the city's lakefront attractions.",
        zh: "诺斯布鲁克是芝加哥北岸一处宁静、绿意盎然的郊区，上下高速都很方便。它远离市区喧嚣，是轻松的落脚点：到埃文斯顿约15分钟，开车前往市区湖滨景点也很便捷。",
      },
      walk: { en: "None — park at the door.", zh: "无需步行——车停门口。" },
      hours: { en: "Check-in from 3pm.", zh: "下午3点起可入住。" },
      tips: {
        en: "Address: 933 Skokie Blvd, Northbrook, IL 60062. On arrival day you'll be at Northwestern until the afternoon; check in on the way back. Free parking on site.",
        zh: "地址：933 Skokie Blvd, Northbrook, IL 60062。抵达当天白天在西北大学，返回途中再办理入住。酒店提供免费停车。",
      },
      coords: [42.1310, -87.7610],
      mapQuery: "Renaissance Chicago North Shore Hotel, 933 Skokie Blvd Northbrook IL",
      mustSee: [],
    },

    /* ---------------------------------------------------------------- THU */
    uiuc: {
      emoji: "🌽",
      name: { en: "University of Illinois (self-guided)", zh: "伊利诺伊大学（自助游览）" },
      area: { en: "Urbana-Champaign, Illinois", zh: "伊利诺伊州 厄巴纳-香槟" },
      summary: {
        en: "A flat, classic Midwestern quad — grand halls, a famous statue, and shady elms.",
        zh: "平坦经典的中西部四方庭院——宏伟楼宇、著名雕像与成荫的榆树。",
      },
      intro: {
        en: "The heart of the U of I is the Main Quad, a long, flat green framed by historic buildings and shaded by tall elms, with benches all along it. Almost everything worth seeing is right here or a few level steps away — an easy, rewarding self-guided walk.",
        zh: "伊利诺伊大学的核心是主四方庭院（Main Quad）——一片狭长平坦的草坪，四周环绕历史建筑，高大的榆树投下绿荫，沿途遍布长椅。几乎所有值得一看的景点都集中于此，或在几步平路之外——是一条轻松又值得的自助散步路线。",
      },
      story: {
        en: "The University of Illinois Urbana-Champaign is the flagship campus of the University of Illinois system, founded in 1867 as a public land-grant university. It sits in the twin cities of Urbana and Champaign in central Illinois.\n\nIt grew from a small agricultural and engineering college into one of the largest public universities in the country, especially renowned for engineering, computer science, agriculture, and accountancy. Its library is among the largest university libraries in the world.\n\nThe campus has a long history of innovation. The PLATO system, an early computer-based teaching network developed here in the 1960s, pioneered ideas like online forums, message boards, and instant messaging. The web browser Mosaic, which helped launch the modern internet, was created at the university's NCSA supercomputing center.\n\nThe school's teams are the Fighting Illini, and the marching band's tradition gave the world the song 'Hail to the Orange.' Faculty and alumni include many Nobel and Pulitzer Prize winners. The Morrow Plots, in the middle of campus, are the oldest experimental crop field in the Americas.",
        zh: "伊利诺伊大学厄巴纳-香槟分校是伊利诺伊大学系统的旗舰校区，创立于1867年，是一所公立赠地大学，坐落于伊利诺伊州中部的厄巴纳与香槟双城。\n\n它从一所小型的农业与工程学院发展为全美规模最大的公立大学之一，尤以工程、计算机科学、农学和会计学闻名。其图书馆是全球最大的大学图书馆之一。\n\n校园有着悠久的创新传统。1960年代在此研发的 PLATO 系统是早期的计算机教学网络，开创了在线论坛、留言板和即时通讯等理念。帮助点燃现代互联网的浏览器 Mosaic，正诞生于学校的 NCSA 超级计算中心。\n\n学校的代表队是“战斗伊利尼”（Fighting Illini）。位于校园中心的莫罗试验田（Morrow Plots）是美洲最古老的作物试验田。学校的教师与校友中有众多诺贝尔奖和普利策奖得主。",
      },
      storySrc: "https://en.wikipedia.org/wiki/University_of_Illinois_Urbana-Champaign",
      walk: { en: "Easy & flat (about 1 mile, with rests).", zh: "轻松平坦（约1英里，可随时休息）。" },
      hours: { en: "Quad open daily; buildings & museum ~9am–5pm.", zh: "四方庭院全天开放；楼宇与博物馆约9:00–17:00。" },
      tips: {
        en: "Mom and Sarah's admissions tour starts at the Illini Union (1401 W Green St). Park in the Illini Union parking garage right behind it. The Quad is flat with shade and benches. The Illini Union (stop 2) and Krannert Art Museum (stop 7) have restrooms and cool seating. For lunch, the Illini Union food court or Green Street ('Campustown') are both easy.",
        zh: "妈妈和 Sarah 的招生导览在伊利尼联合楼（Illini Union，1401 W Green St）集合。把车停在它后方的联合楼停车库。四方庭院平坦，有树荫和长椅。伊利尼联合楼（第2站）和克兰纳特艺术博物馆（第7站）有洗手间和凉爽的座位。午餐可选联合楼美食广场或绿街（Green Street，校区商业街），都很方便。",
      },
      coords: [40.1095, -88.2272],
      mapQuery: "Illini Union, 1401 W Green St Urbana IL",
      links: [
        { label: { en: "Visit U of I", zh: "伊利诺伊大学参观" }, url: "https://visit.illinois.edu/" },
        { label: { en: "Searchable campus map", zh: "校园地图（可搜索）" }, url: "https://map.illinois.edu/" },
        { label: { en: "Parking: Illini Union Garage", zh: "停车：伊利尼联合楼停车库" }, url: "https://maps.apple.com/?q=Illini%20Union%20Parking%20Garage%20Champaign&ll=40.1101,-88.2272" },
      ],
      tour: {
        en: "Drop Mom and Sarah at the Illini Union (1401 W Green St) and park in the garage behind it. This is a flat loop around the Main Quad. Start at the iconic Alma Mater statue on the corner, then step into the grand Illini Union. Walk the length of the shaded Main Quad to the domed Foellinger Auditorium at the south end. Detour to historic Altgeld Hall (listen for its chimes), see the small Morrow Plots cornfield, and finish at the free Krannert Art Museum. Memorial Stadium and the State Farm Center are an optional short drive away. Benches and shade line the whole route.",
        zh: "把妈妈和 Sarah 送到伊利尼联合楼（1401 W Green St），停在其后方的停车库。这是一条绕主四方庭院的平坦环线。先到街角标志性的“母校”雕像（Alma Mater），再走进宏伟的伊利尼联合楼。沿绿荫覆盖的主四方庭院走到南端圆顶的弗林格礼堂（Foellinger Auditorium）。绕道去看历史悠久的阿尔特盖尔德楼（Altgeld Hall，听一听它的排钟），再看小小的莫罗试验田玉米地，最后到免费的克兰纳特艺术博物馆收尾。纪念体育场和 State Farm 中心可开车短途前往，作为可选项目。全程沿途都有长椅和树荫。",
      },
      tourMapSvg: `<svg viewBox="0 0 360 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="University of Illinois walking tour map" font-family="-apple-system,Helvetica,Arial,sans-serif">
  <rect x="0" y="0" width="360" height="500" fill="#f4f1ea"/>
  <!-- the quad (long green) -->
  <rect x="150" y="120" width="80" height="250" rx="3" fill="#dfe8d8" stroke="#cdddc2"/>
  <!-- streets -->
  <g stroke="#d4ccba" stroke-width="7" stroke-linecap="round">
    <line x1="40" y1="110" x2="320" y2="110"/>
    <line x1="40" y1="380" x2="320" y2="380"/>
    <line x1="120" y1="60" x2="120" y2="440"/>
    <line x1="260" y1="60" x2="260" y2="440"/>
  </g>
  <g font-size="10.5" fill="#8a8270">
    <text x="44" y="104">Green St</text>
    <text x="44" y="400">Gregory Dr</text>
    <text x="124" y="76" transform="rotate(90 124,76)">Wright St</text>
  </g>
  <g font-size="11" text-anchor="middle">
    <text class="i18n-en" x="190" y="240" fill="#7a8a6a">Main Quad</text>
    <text class="i18n-zh" x="190" y="240" fill="#7a8a6a">主四方庭院</text>
  </g>
  <!-- walking loop -->
  <path d="M132,128 L150,118 L160,140 L168,130 L190,360 L160,318 L130,330 L120,400 L160,318 L132,128" fill="none" stroke="#00598c" stroke-width="7" stroke-opacity="0.42" stroke-linejoin="round" stroke-linecap="round"/>
  <!-- optional drive to stadium (south) -->
  <path d="M120,400 L120,452" fill="none" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6" stroke-linecap="round"/>
  <g text-anchor="middle" font-size="14" font-weight="700" fill="#fff">
    <circle cx="150" cy="118" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="150" y="123">1</text>
    <circle cx="190" cy="120" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="190" y="125">2</text>
    <circle cx="190" cy="240" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="190" y="245">3</text>
    <circle cx="190" cy="360" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="190" y="365">4</text>
    <circle cx="132" cy="128" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="132" y="133">5</text>
    <circle cx="160" cy="318" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="160" y="323">6</text>
    <circle cx="130" cy="330" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="130" y="335">7</text>
    <circle cx="120" cy="452" r="13" fill="#6b7280" stroke="#fff" stroke-width="2.5"/><text x="120" y="457">8</text>
  </g>
  <!-- parking near union -->
  <rect x="205" y="100" width="26" height="26" rx="5" fill="#00598c" stroke="#fff" stroke-width="2.5"/>
  <text x="218" y="119" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">P</text>
  <g text-anchor="middle" font-size="10">
    <text class="i18n-en" x="120" y="470" fill="#6b7280">Stadium &#8595;</text>
    <text class="i18n-zh" x="120" y="470" fill="#6b7280">体育场 &#8595;</text>
    <text class="i18n-en" x="232" y="94" fill="#00598c">Union Garage</text>
    <text class="i18n-zh" x="232" y="94" fill="#00598c">联合楼停车库</text>
  </g>
  <g><line x1="32" y1="55" x2="32" y2="36" stroke="#5a6776" stroke-width="2"/><path d="M32,32 L28,41 L36,41 Z" fill="#5a6776"/><text x="32" y="70" text-anchor="middle" font-size="11" fill="#5a6776">N</text></g>
  <g font-size="11" fill="#5a6776">
    <line x1="30" y1="420" x2="58" y2="420" stroke="#00598c" stroke-width="6" stroke-opacity="0.5" stroke-linecap="round"/>
    <text class="i18n-en" x="64" y="424">Walking loop (about 1 mile)</text>
    <text class="i18n-zh" x="64" y="424">步行环线（约1英里）</text>
    <line x1="30" y1="446" x2="58" y2="446" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6"/>
    <text class="i18n-en" x="64" y="450">Optional drive to ⑧ Stadium</text>
    <text class="i18n-zh" x="64" y="450">可选驾车前往⑧体育场</text>
    <rect x="30" y="462" width="16" height="16" rx="3" fill="#00598c"/><text x="38" y="474" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">P</text>
    <text class="i18n-en" x="54" y="474">Parking — start &amp; end of the walk</text>
    <text class="i18n-zh" x="54" y="474">停车场 — 步行起点与终点</text>
  </g>
</svg>`,
      mustSee: [
        { emoji: "🗿", img: "uiuc-alma-mater.jpg", link: "https://visit.illinois.edu/",
          caption: { en: "1. Alma Mater statue", zh: "1. “母校”雕像" },
          desc: { en: "The beloved bronze statue (1929) of a welcoming mother figure with two attendants — the campus's most famous photo spot, right on the corner.", zh: "深受喜爱的青铜雕像（1929年），是一位张开双臂的“母亲”与两位侍者——校园最著名的合影点，就在街角。" } },
        { emoji: "🏛️", img: "uiuc-illini-union.jpg", link: "https://union.illinois.edu/",
          caption: { en: "2. Illini Union", zh: "2. 伊利尼联合楼" },
          desc: { en: "The grand Georgian student union at the head of the Quad, with restrooms, a food court and comfortable lounges — an ideal rest stop.", zh: "庭院北端宏伟的乔治亚式学生联合楼，设有洗手间、美食广场和舒适的休息厅——理想的歇脚处。" } },
        { emoji: "🌳", img: "uiuc-quad.jpg", link: "https://map.illinois.edu/",
          caption: { en: "3. The Main Quad", zh: "3. 主四方庭院" },
          desc: { en: "A long, flat green shaded by elms and lined with benches and historic halls — the gentle, beautiful heart of campus.", zh: "一片狭长平坦的草坪，榆树成荫，长椅与历史楼宇相伴——校园温柔而美丽的核心。" } },
        { emoji: "🏛️", img: "uiuc-foellinger.jpg", link: "https://map.illinois.edu/",
          caption: { en: "4. Foellinger Auditorium", zh: "4. 弗林格礼堂" },
          desc: { en: "The handsome domed auditorium (1907) anchoring the south end of the Quad — a classic photo looking back up the green.", zh: "庭院南端气派的圆顶礼堂（1907年）——回望整片草坪的经典取景点。" } },
        { emoji: "🔔", img: "uiuc-altgeld.jpg", link: "https://map.illinois.edu/",
          caption: { en: "5. Altgeld Hall", zh: "5. 阿尔特盖尔德楼" },
          desc: { en: "A Romanesque landmark (1897) with a bell tower whose chimes ring across campus. Step inside to see the murals.", zh: "一座罗马式地标（1897年），钟楼的排钟声回荡全校。可入内欣赏壁画。" } },
        { emoji: "🌽", img: "uiuc-morrow.jpg", link: "https://map.illinois.edu/",
          caption: { en: "6. Morrow Plots", zh: "6. 莫罗试验田" },
          desc: { en: "The oldest experimental crop field in the Americas (1876), still growing corn each year — a U.S. National Historic Landmark in the middle of campus.", zh: "美洲最古老的作物试验田（1876年），至今每年仍种植玉米——是位于校园中心的美国国家历史地标。" } },
        { emoji: "🖼️", img: "uiuc-krannert.jpg", link: "https://kam.illinois.edu/",
          caption: { en: "7. Krannert Art Museum", zh: "7. 克兰纳特艺术博物馆" },
          desc: { en: "A large free art museum with collections from ancient to modern — a cool, restful indoor finish to the walk. Admission is free.", zh: "一座大型免费艺术博物馆，藏品从古代到现代——是散步收尾时凉爽、可休息的室内之选。免费入场。" } },
        { emoji: "🏟️", img: "uiuc-stadium.jpg", link: "https://fightingillini.com/",
          caption: { en: "8. Memorial Stadium (optional)", zh: "8. 纪念体育场（可选）" },
          desc: { en: "The historic football stadium and the State Farm Center arena, home of the Fighting Illini — a short optional drive south of the Quad.", zh: "历史悠久的橄榄球场与 State Farm 中心球馆，“战斗伊利尼”的主场——在庭院以南，可开车短途前往。" } },
      ],
    },
    "rest-stop": {
      emoji: "⛽",
      name: { en: "Rest Stop on I-57", zh: "57号州际公路休息站" },
      area: { en: "Between Chicago & Champaign", zh: "芝加哥与香槟之间" },
      summary: {
        en: "A planned break to stretch, use the restroom, and get a snack.",
        zh: "计划中的休息：下车舒展、上洗手间、买点零食。",
      },
      intro: {
        en: "On the long drive each way, plan one comfortable stop. The Illinois Tollway oases and highway service plazas have clean restrooms, food and fuel — an easy, senior-friendly place to pause.",
        zh: "在往返的长途驾驶中，各安排一次舒适的休息。伊利诺伊收费公路的“绿洲”服务区和高速服务站有干净的洗手间、餐饮和加油——是方便、适合长者的歇脚地。",
      },
      story: {
        en: "Illinois is known for its highway 'oases' — service plazas that span the road or sit alongside it, with restrooms, fast food and gas all in one place. On the route south, good options include the highway plazas near Tinley Park and the rest areas along I-57. Stopping every 1–1.5 hours keeps a long drive comfortable for everyone.",
        zh: "伊利诺伊州以高速“绿洲”服务区闻名——这些服务站横跨公路或设于路旁，集洗手间、快餐和加油于一处。南下途中，可选蒂尼帕克（Tinley Park）附近的高速服务区以及57号州际公路沿线的休息区。每1–1.5小时停一次，能让长途驾驶对每个人都更舒适。",
      },
      walk: { en: "None — a short stretch and restroom break.", zh: "无需步行——下车舒展、上个洗手间。" },
      hours: { en: "Open 24 hours.", zh: "24小时开放。" },
      tips: {
        en: "Aim to stop once on the way down (about halfway) and once on the way back. Keep water and light snacks in the car, and don't rush — a relaxed pace matters most on this long-driving day.",
        zh: "建议去程在中途停一次，回程再停一次。车上备好水和清淡零食，不要赶路——在这开车较多的一天，从容的节奏最重要。",
      },
      coords: [41.2050, -87.8650],
      mapQuery: "Illinois I-57 rest area",
      mustSee: [],
    },

    /* ---------------------------------------------------------------- FRI */
    "millennium-park": {
      emoji: "🫘",
      name: { en: "Millennium Park & Cloud Gate", zh: "千禧公园与云门" },
      area: { en: "Downtown Chicago (The Loop)", zh: "芝加哥市区（卢普区）" },
      summary: {
        en: "Chicago's showcase park — the shiny 'Bean,' gardens, and grand spaces, all flat.",
        zh: "芝加哥的招牌公园——闪亮的“豆子”、花园与开阔场地，全程平坦。",
      },
      intro: {
        en: "Millennium Park is Chicago's beloved downtown park, built over old rail yards. It's completely flat with wide paved paths and benches everywhere, home to the mirror-like Cloud Gate ('The Bean'), the playful Crown Fountain, a soaring Frank Gehry music pavilion, and the lovely Lurie Garden.",
        zh: "千禧公园是芝加哥深受喜爱的市区公园，建在旧铁路货场之上。园内完全平坦，铺装步道宽阔，长椅随处可见，坐落着镜面般的“云门”（俗称“豆子”）、趣味十足的皇冠喷泉、弗兰克·盖里设计的高耸音乐亭，以及秀美的卢里花园。",
      },
      story: {
        en: "Millennium Park opened in 2004 on what had long been railroad tracks and parking lots at the northwest corner of Grant Park. It quickly became one of the most popular attractions in the Midwest.\n\nIts centerpiece is Cloud Gate, a 110-ton polished stainless-steel sculpture by artist Anish Kapoor that everyone calls 'The Bean' for its shape. Its mirror surface reflects the skyline and the people around it, making it Chicago's most famous photo spot.\n\nThe park also holds the Crown Fountain, two glass towers that project giant video faces and spout water in warm weather; the Jay Pritzker Pavilion, a dramatic outdoor concert stage designed by Frank Gehry; and Lurie Garden, a peaceful planted garden. A pedestrian bridge, also by Gehry, curves over the road to neighboring Maggie Daley Park.\n\nThe whole park sits on top of a parking garage and rail lines, making it one of the largest rooftop gardens in the world.",
        zh: "千禧公园于2004年开放，原址是格兰特公园西北角长期被铁轨和停车场占据的地带。它很快成为美国中西部最受欢迎的景点之一。\n\n公园的核心是“云门”——艺术家安尼施·卡普尔创作的110吨抛光不锈钢雕塑，因形似豆子而被人们昵称为“豆子”（The Bean）。它的镜面映出天际线和周围的人群，是芝加哥最著名的合影地点。\n\n公园里还有皇冠喷泉——两座玻璃塔投映出巨大的人脸影像，天暖时喷水；杰伊·普利兹克音乐亭——由弗兰克·盖里设计、造型夺目的露天音乐舞台；以及宁静的植栽花园卢里花园。一座同样由盖里设计的人行天桥越过马路，蜿蜒通往相邻的玛吉·戴利公园。\n\n整座公园建在停车场和铁路线之上，是世界上最大的屋顶花园之一。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Millennium_Park",
      walk: { en: "Very gentle; flat paved paths & lots of benches.", zh: "非常轻松；铺装步道平坦，长椅众多。" },
      hours: { en: "Park open daily 6am–11pm; free.", zh: "公园每日6:00–23:00开放；免费。" },
      tips: {
        en: "Park at the Millennium Park Garage right underneath. Restrooms are at the Welcome Center on Michigan Ave. The Bean is busiest midday — early or late is calmer. Benches and shade are everywhere, so rest as often as you like.",
        zh: "把车停在公园正下方的千禧公园停车楼。洗手间在密歇根大道上的游客中心。正午时“豆子”最拥挤——早些或晚些更清静。长椅和树荫随处可见，可随时休息。",
      },
      coords: [41.8826, -87.6226],
      mapQuery: "Cloud Gate Millennium Park Chicago",
      links: [
        { label: { en: "Millennium Park official site", zh: "千禧公园官网" }, url: "https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park.html" },
        { label: { en: "Parking: Millennium Park Garage", zh: "停车：千禧公园停车楼" }, url: "https://maps.apple.com/?q=Millennium%20Park%20Garage%20Chicago&ll=41.8839,-87.6213" },
      ],
      tour: {
        en: "Park in the Millennium Park Garage and come up into the park — everything here is flat and paved with benches throughout. Start at Cloud Gate, the mirror-polished 'Bean,' for the classic skyline photo. Walk to the Crown Fountain to watch the giant video faces and water, then by the soaring Pritzker Pavilion music stage. Stroll the peaceful Lurie Garden, and if you like, cross the curving BP Bridge toward Maggie Daley Park. The Art Institute is just across Monroe Street to the south for the afternoon.",
        zh: "把车停在千禧公园停车楼，再上到公园——这里全程平坦铺装，长椅遍布。先到镜面抛光的“云门”（豆子），拍下经典的天际线合影。走到皇冠喷泉看巨大的人脸影像和水景，再经过高耸的普利兹克音乐亭。漫步宁静的卢里花园，若有兴致，可走过蜿蜒的 BP 天桥前往玛吉·戴利公园。下午的艺术博物馆就在南面、门罗街（Monroe St）对面。",
      },
      tourMapSvg: `<svg viewBox="0 0 360 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Millennium Park walking map" font-family="-apple-system,Helvetica,Arial,sans-serif">
  <rect x="0" y="0" width="360" height="420" fill="#f4f1ea"/>
  <!-- park green -->
  <rect x="70" y="90" width="230" height="210" rx="4" fill="#dfe8d8" stroke="#cdddc2"/>
  <!-- streets -->
  <g stroke="#d4ccba" stroke-width="7" stroke-linecap="round">
    <line x1="40" y1="80" x2="330" y2="80"/>
    <line x1="40" y1="310" x2="330" y2="310"/>
    <line x1="62" y1="50" x2="62" y2="350"/>
    <line x1="308" y1="50" x2="308" y2="350"/>
  </g>
  <g font-size="10.5" fill="#8a8270">
    <text x="44" y="74">Randolph St</text>
    <text x="44" y="328">Monroe St</text>
    <text x="66" y="44" transform="rotate(0 66,44)">Michigan Ave</text>
    <text x="250" y="44">Columbus Dr</text>
  </g>
  <g font-size="11" text-anchor="middle">
    <text class="i18n-en" x="180" y="200" fill="#7a8a6a">Millennium Park</text>
    <text class="i18n-zh" x="180" y="200" fill="#7a8a6a">千禧公园</text>
  </g>
  <!-- loop -->
  <path d="M96,300 L120,170 L100,140 L185,150 L205,110 L250,210 L290,230 L120,290 L96,300" fill="none" stroke="#00598c" stroke-width="7" stroke-opacity="0.45" stroke-linejoin="round" stroke-linecap="round"/>
  <!-- to art institute (south) -->
  <path d="M120,290 L120,340" fill="none" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6" stroke-linecap="round"/>
  <g text-anchor="middle" font-size="14" font-weight="700" fill="#fff">
    <circle cx="120" cy="170" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="120" y="175">1</text>
    <circle cx="100" cy="140" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="100" y="145">2</text>
    <circle cx="205" cy="110" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="205" y="115">3</text>
    <circle cx="250" cy="210" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="250" y="215">4</text>
    <circle cx="290" cy="230" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="290" y="235">5</text>
    <circle cx="120" cy="340" r="13" fill="#6b7280" stroke="#fff" stroke-width="2.5"/><text x="120" y="345">6</text>
  </g>
  <!-- parking -->
  <rect x="83" y="287" width="26" height="26" rx="5" fill="#00598c" stroke="#fff" stroke-width="2.5"/>
  <text x="96" y="306" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">P</text>
  <g text-anchor="middle" font-size="10">
    <text class="i18n-en" x="120" y="360" fill="#6b7280">Art Institute &#8595;</text>
    <text class="i18n-zh" x="120" y="360" fill="#6b7280">艺术博物馆 &#8595;</text>
    <text class="i18n-en" x="96" y="328" fill="#00598c">Garage</text>
    <text class="i18n-zh" x="96" y="328" fill="#00598c">停车楼</text>
  </g>
  <g><line x1="32" y1="125" x2="32" y2="106" stroke="#5a6776" stroke-width="2"/><path d="M32,102 L28,111 L36,111 Z" fill="#5a6776"/><text x="32" y="140" text-anchor="middle" font-size="11" fill="#5a6776">N</text></g>
  <g font-size="11" fill="#5a6776">
    <line x1="30" y1="376" x2="58" y2="376" stroke="#00598c" stroke-width="6" stroke-opacity="0.5" stroke-linecap="round"/>
    <text class="i18n-en" x="64" y="380">Walking loop (flat, under 1 mile)</text>
    <text class="i18n-zh" x="64" y="380">步行环线（平坦，不到1英里）</text>
    <line x1="30" y1="398" x2="58" y2="398" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6"/>
    <text class="i18n-en" x="64" y="402">Walk to ⑥ Art Institute (afternoon)</text>
    <text class="i18n-zh" x="64" y="402">步行至⑥艺术博物馆（下午）</text>
  </g>
</svg>`,
      mustSee: [
        { emoji: "🫘", img: "millennium-bean.jpg", link: "https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park.html",
          caption: { en: "1. Cloud Gate ('The Bean')", zh: "1. 云门（“豆子”）" },
          desc: { en: "Chicago's most famous photo — a giant mirror-polished steel sculpture reflecting the skyline. You can walk right under it.", zh: "芝加哥最著名的合影点——一座抛光如镜的巨型钢雕，映出整片天际线。可以直接走到它下方。" } },
        { emoji: "⛲", img: "millennium-crown.jpg", link: "https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park.html",
          caption: { en: "2. Crown Fountain", zh: "2. 皇冠喷泉" },
          desc: { en: "Two tall glass towers display giant changing faces and spout water in summer — fun to watch from a shaded bench.", zh: "两座高大的玻璃塔投映出不断变换的巨大人脸，夏天还会喷水——坐在树荫长椅上看尤其惬意。" } },
        { emoji: "🎵", img: "millennium-pavilion.jpg", link: "https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park.html",
          caption: { en: "3. Jay Pritzker Pavilion", zh: "3. 杰伊·普利兹克音乐亭" },
          desc: { en: "Frank Gehry's dramatic outdoor concert stage with swooping steel ribbons and a great lawn — free concerts in summer.", zh: "弗兰克·盖里设计的露天音乐舞台，钢带如丝带飞舞，前有大草坪——夏季有免费音乐会。" } },
        { emoji: "🌼", img: "millennium-lurie.jpg", link: "https://www.luriegarden.org/",
          caption: { en: "4. Lurie Garden", zh: "4. 卢里花园" },
          desc: { en: "A peaceful planted garden of prairie flowers and grasses with benches and a quiet water channel — a calm place to rest.", zh: "一座宁静的植栽花园，种满草原花卉与禾草，设有长椅和静水渠——歇脚小憩的清幽之地。" } },
        { emoji: "🌉", img: "millennium-bridge.jpg", link: "https://www.maggiedaleypark.com/",
          caption: { en: "5. BP Bridge & Maggie Daley Park", zh: "5. BP 天桥与玛吉·戴利公园" },
          desc: { en: "Gehry's curving stainless-steel walking bridge leads gently over the road to leafy Maggie Daley Park — optional if energy allows.", zh: "盖里设计的不锈钢曲线人行天桥平缓越过马路，通往绿意盎然的玛吉·戴利公园——体力允许可前往，属可选。" } },
      ],
    },
    "river-cruise": {
      emoji: "🚤",
      name: { en: "Architecture River Cruise", zh: "建筑游船" },
      area: { en: "Chicago River, Downtown", zh: "芝加哥河，市中心" },
      summary: {
        en: "A 90-minute seated boat tour — no walking, and the best way to see the skyline.",
        zh: "90分钟全程坐着的游船——无需步行，是欣赏天际线的最佳方式。",
      },
      intro: {
        en: "Chicago's famous architecture boat tour glides along the river through the heart of downtown while a guide explains the skyscrapers. It's fully seated and shaded, with a gentle step on and off — a relaxing, senior-friendly highlight with no walking at all.",
        zh: "芝加哥著名的建筑游船沿河穿行于市中心，由导览员讲解沿岸摩天大楼。全程坐着、有遮阳，上下船只需一小步——是轻松、适合长者的亮点，完全无需步行。",
      },
      story: {
        en: "Chicago is the birthplace of the modern skyscraper, and the river that runs through downtown offers an unmatched view of its architecture. Guided boat tours along the Chicago River have become one of the city's signature experiences.\n\nAfter the Great Chicago Fire of 1871, the city rebuilt rapidly and became a laboratory for tall-building design. Architects of the 'Chicago School' pioneered the steel-frame skyscraper here in the 1880s, and the city has been a center of bold architecture ever since.\n\nAround forty buildings are pointed out on a typical tour, from century-old terra-cotta towers to gleaming modern glass. Guides explain how the river was famously reversed in 1900 to send the city's water away from Lake Michigan — one of the great engineering feats of its time.\n\nThe most respected tours are led by the Chicago Architecture Center's trained volunteer docents, though several companies run boats from docks near the Michigan Avenue Bridge.",
        zh: "芝加哥是现代摩天大楼的发源地，穿城而过的河流为欣赏其建筑提供了无与伦比的视角。沿芝加哥河的导览游船，已成为这座城市的标志性体验之一。\n\n1871年芝加哥大火之后，城市迅速重建，成为高层建筑设计的试验场。1880年代，“芝加哥学派”的建筑师在此开创了钢框架摩天大楼，此后这座城市一直是大胆建筑的中心。\n\n一趟典型的游览会介绍约四十座建筑，从百年的赤陶高塔到熠熠生辉的现代玻璃大厦。导览员还会讲述1900年芝加哥河如何被著名地“倒流”，将城市污水引离密歇根湖——这是当时伟大的工程壮举之一。\n\n口碑最佳的游览由芝加哥建筑中心（Chicago Architecture Center）训练有素的志愿讲解员带领，此外也有数家公司从密歇根大道桥附近的码头发船。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Chicago_River",
      walk: { en: "Zero walking — fully seated, 90 minutes.", zh: "完全无需步行——全程坐着，90分钟。" },
      hours: { en: "Departs through the day, spring–fall.", zh: "春至秋季全天多班次发船。" },
      tips: {
        en: "Book ahead online and pick a departure with a short, level walk from where you park (docks sit at the Michigan Avenue Bridge, near Millennium Park). The Chicago Architecture Center tours have the best guides. Boats are shaded and seated; staff help with boarding. Bring a light jacket — it can be breezy on the water.",
        zh: "建议提前网上订票，并选择离停车处只需一小段平路的班次（码头在密歇根大道桥，靠近千禧公园）。芝加哥建筑中心的游览导览最佳。船上有遮阳和座位，工作人员协助上船。带件薄外套——水上可能有风。",
      },
      coords: [41.8881, -87.6249],
      mapQuery: "Chicago Architecture Center River Cruise dock, 112 E Wacker Dr Chicago",
      links: [
        { label: { en: "Chicago Architecture Center cruise", zh: "芝加哥建筑中心游船" }, url: "https://www.architecture.org/tours/detail/chicago-architecture-foundation-center-river-cruise-aboard-chicagos-first-lady/" },
        { label: { en: "Dock: Michigan Ave Bridge", zh: "码头：密歇根大道桥" }, url: "https://maps.apple.com/?q=Chicago%20Architecture%20Center%20River%20Cruise%20Dock&ll=41.8881,-87.6249" },
      ],
      mustSee: [
        { emoji: "🚤", img: "cruise-boat.jpg", link: "https://www.architecture.org/",
          caption: { en: "Board the river boat", zh: "登上游船" },
          desc: { en: "A roomy, shaded tour boat with comfortable seating. One gentle step aboard and you're seated for the whole 90 minutes.", zh: "宽敞、有遮阳的游船，座位舒适。轻轻一步上船，全程90分钟舒适落座。" } },
        { emoji: "🏙️", img: "cruise-skyline.jpg", link: "https://www.architecture.org/",
          caption: { en: "Skyscrapers from the water", zh: "从水上看摩天大楼" },
          desc: { en: "Glide past about 40 famous buildings while the guide tells their stories — the city's architecture at its most impressive.", zh: "在导览员讲解下驶过约40座名建筑——这是欣赏城市建筑最震撼的方式。" } },
        { emoji: "🌉", img: "cruise-riverwalk.jpg", link: "https://www.chicago.gov/city/en/depts/cdot/supp_info/chicago_riverwalk.html",
          caption: { en: "The Chicago Riverwalk", zh: "芝加哥河滨步道" },
          desc: { en: "The landscaped riverside promenade lined with cafés and the city's famous drawbridges — lovely from the water.", zh: "经过造景的河滨长廊，咖啡馆林立，还有城市著名的开合桥——从水上看格外美丽。" } },
      ],
    },
    "art-institute": {
      emoji: "🖼️",
      name: { en: "Art Institute of Chicago", zh: "芝加哥艺术博物馆" },
      area: { en: "Downtown Chicago (The Loop)", zh: "芝加哥市区（卢普区）" },
      summary: {
        en: "One of the world's great art museums — indoor, cool, and full of seating.",
        zh: "世界级的伟大美术馆之一——室内、凉爽，座位充足。",
      },
      intro: {
        en: "Guarded by two famous bronze lions, the Art Institute is one of the finest art museums anywhere. It's the ideal afternoon: indoors and air-conditioned, with benches in the galleries, an easy elevator to every floor, and masterpieces everyone recognizes.",
        zh: "由两尊著名的青铜狮子守门，芝加哥艺术博物馆是世界上最杰出的美术馆之一。它是下午的理想去处：室内、有空调，展厅内设有长椅，电梯直达各层，还有人人耳熟能详的名作。",
      },
      story: {
        en: "The Art Institute of Chicago, founded in 1879, is both a museum and a school. Its grand Beaux-Arts building opened on Michigan Avenue in 1893, and the two bronze lions guarding its steps have been Chicago landmarks ever since.\n\nIt holds one of the world's most important art collections, especially strong in French Impressionism and Post-Impressionism, American art, and modern masters. Famous works include Georges Seurat's 'A Sunday on La Grande Jatte,' Grant Wood's 'American Gothic,' Edward Hopper's 'Nighthawks,' and paintings by Monet, Van Gogh, and Picasso.\n\nThe modern collection grew enormously with the 2009 opening of the Modern Wing, designed by Renzo Piano, which made the Art Institute the second-largest art museum in the United States.\n\nIt is consistently ranked among the best museums in the world, welcoming well over a million visitors a year. With elevators, benches throughout, and wheelchairs available, it is a comfortable, fully indoor visit.",
        zh: "芝加哥艺术博物馆创立于1879年，既是博物馆，也是一所艺术学校。其宏伟的布扎艺术（Beaux-Arts）建筑于1893年在密歇根大道落成，守在台阶两侧的两尊青铜狮子从此成为芝加哥的地标。\n\n它拥有世界上最重要的艺术收藏之一，尤以法国印象派与后印象派、美国艺术和现代大师作品见长。著名藏品包括修拉的《大碗岛的星期日下午》、格兰特·伍德的《美国哥特式》、爱德华·霍珀的《夜游者》，以及莫奈、梵高和毕加索的画作。\n\n随着2009年由伦佐·皮亚诺设计的“现代馆”（Modern Wing）落成，现代艺术收藏大幅扩充，使芝加哥艺术博物馆成为全美第二大的美术馆。\n\n它长年位居世界最佳博物馆之列，每年迎来一百多万名观众。馆内有电梯、处处设有长椅，并可借用轮椅，是一处舒适、全室内的参观去处。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Art_Institute_of_Chicago",
      walk: { en: "Indoor; go at your own pace, benches throughout.", zh: "室内参观；可随性慢走，处处有长椅。" },
      hours: { en: "Daily 11am–5pm (Thu until 8pm).", zh: "每日11:00–17:00（周四至20:00）。" },
      tips: {
        en: "Buy timed tickets online. Illinois residents and seniors get discounts; ask at the desk. Pick up a map and head straight for the highlights — Impressionists on the upper level, 'American Gothic' and 'Nighthawks' in the American galleries. Borrow a wheelchair at coat check if helpful. There's a café and restaurant inside for a rest.",
        zh: "建议网上购买分时段门票。伊利诺伊州居民和长者有优惠，可在前台询问。取一张导览图，直奔亮点——印象派在楼上，《美国哥特式》和《夜游者》在美国艺术展厅。需要时可在存衣处借用轮椅。馆内设有咖啡馆和餐厅，可供休息。",
      },
      coords: [41.8796, -87.6237],
      mapQuery: "Art Institute of Chicago, 111 S Michigan Ave",
      links: [
        { label: { en: "Art Institute official site", zh: "艺术博物馆官网" }, url: "https://www.artic.edu/visit" },
      ],
      mustSee: [
        { emoji: "🦁", img: "artic-lions.jpg", link: "https://www.artic.edu/visit",
          caption: { en: "The bronze lions", zh: "青铜狮子" },
          desc: { en: "The two beloved lion statues guarding the Michigan Avenue steps since 1894 — a Chicago landmark and a fine photo.", zh: "自1894年起守在密歇根大道台阶两侧、深受喜爱的两尊狮子雕像——芝加哥的地标，也是绝佳的合影点。" } },
        { emoji: "🖼️", img: "artic-galleries.jpg", link: "https://www.artic.edu/highlights",
          caption: { en: "Masterpiece galleries", zh: "名作展厅" },
          desc: { en: "See 'American Gothic,' 'Nighthawks,' and Seurat's huge 'La Grande Jatte,' plus Monet and Van Gogh — with benches to sit and look.", zh: "可看《美国哥特式》《夜游者》、修拉的巨幅《大碗岛》，以及莫奈和梵高的作品——还有长椅可坐下慢慢欣赏。" } },
        { emoji: "🏛️", img: "artic-modern.jpg", link: "https://www.artic.edu/visit",
          caption: { en: "The Modern Wing", zh: "现代馆" },
          desc: { en: "Renzo Piano's light-filled 2009 wing for modern and contemporary art, with a pleasant café and an elevator to every floor.", zh: "伦佐·皮亚诺设计、采光通透的2009年现代与当代艺术新馆，设有舒适的咖啡馆和直达各层的电梯。" } },
      ],
    },

    /* ---------------------------------------------------------------- SAT */
    "field-museum": {
      emoji: "🦖",
      name: { en: "Field Museum & Museum Campus", zh: "菲尔德博物馆与博物馆园区" },
      area: { en: "Museum Campus, Lakefront", zh: "湖畔博物馆园区" },
      summary: {
        en: "A grand natural-history museum on the lake — dinosaurs, treasures, and skyline views.",
        zh: "湖畔宏伟的自然史博物馆——恐龙、珍宝与天际线景观。",
      },
      intro: {
        en: "The Field Museum is one of the world's great natural-history museums, set on Chicago's lakefront Museum Campus. It's fully indoor and flat with elevators, benches and wheelchairs — home to SUE, the largest, most complete T. rex ever found. Just outside, the Museum Campus offers one of the city's best skyline views.",
        zh: "菲尔德博物馆是世界上伟大的自然史博物馆之一，坐落在芝加哥湖畔的博物馆园区。馆内全室内、地面平坦，配有电梯、长椅和轮椅——这里安放着 SUE：迄今发现的最大、最完整的霸王龙化石。园区外的博物馆园区还能看到全城最佳的天际线景观之一。",
      },
      story: {
        en: "The Field Museum of Natural History grew out of the 1893 World's Columbian Exposition, the great world's fair held in Chicago. It was founded to keep many of the fair's exhibits and named for Marshall Field, the department-store magnate who funded it.\n\nIts collection holds tens of millions of specimens and artifacts, from dinosaur skeletons and Egyptian mummies to gems, meteorites, and objects from cultures around the world. The museum is both a public attraction and a serious scientific research institution.\n\nIts most famous resident is SUE, the largest and most complete Tyrannosaurus rex skeleton ever discovered, displayed in its own gallery. The grand marble Stanley Field Hall, with a towering dinosaur and hanging models, greets every visitor.\n\nThe Field Museum anchors Chicago's Museum Campus, a lakefront park it shares with the Shedd Aquarium and the Adler Planetarium — together one of the finest clusters of museums in the country.",
        zh: "菲尔德自然史博物馆源自1893年在芝加哥举办的“哥伦布纪念世界博览会”这一盛大的世界博览会。它的创立是为了保存博览会的众多展品，并以出资的百货业巨头马歇尔·菲尔德（Marshall Field）命名。\n\n馆藏包含数千万件标本与文物，从恐龙骨架、埃及木乃伊到宝石、陨石以及世界各地文化的器物。这里既是公众景点，也是一所严肃的科研机构。\n\n它最著名的“居民”是 SUE——迄今发现的最大、最完整的霸王龙骨架，陈列于专属展厅。宏伟的大理石斯坦利·菲尔德大厅（Stanley Field Hall）矗立着高大的恐龙与悬挂的模型，迎接每一位来访者。\n\n菲尔德博物馆是芝加哥博物馆园区的核心，这片湖畔园区还有谢德水族馆和阿德勒天文馆——共同构成全美最出色的博物馆群之一。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Field_Museum_of_Natural_History",
      walk: { en: "Indoor & flat; elevators, benches, wheelchairs.", zh: "室内平坦；有电梯、长椅、轮椅。" },
      hours: { en: "Daily 9am–5pm (last entry 4pm).", zh: "每日9:00–17:00（最晚入场16:00）。" },
      tips: {
        en: "Park in the Soldier Field North or Adler garages and take the short, flat path to the entrance. Buy tickets online; ask about senior pricing. Don't miss SUE the T. rex and the Egyptian tombs. Prefer something else? The Shedd Aquarium next door is equally restful and indoor. Step out behind Adler Planetarium for the famous skyline view.",
        zh: "把车停在士兵球场北侧停车楼或阿德勒停车楼，沿平坦的短路走到入口。建议网上购票，并询问长者票价。别错过霸王龙 SUE 和埃及墓室。想换个去处？隔壁的谢德水族馆同样室内、轻松。到阿德勒天文馆后方走一走，可看到著名的天际线景观。",
      },
      coords: [41.8663, -87.6170],
      mapQuery: "Field Museum, 1400 S Lake Shore Dr Chicago",
      links: [
        { label: { en: "Field Museum official site", zh: "菲尔德博物馆官网" }, url: "https://www.fieldmuseum.org/" },
        { label: { en: "Shedd Aquarium (alternative)", zh: "谢德水族馆（备选）" }, url: "https://www.sheddaquarium.org/" },
        { label: { en: "Parking: Soldier Field garages", zh: "停车：士兵球场停车楼" }, url: "https://maps.apple.com/?q=Soldier%20Field%20North%20Garage%20Chicago&ll=41.8657,-87.6175" },
      ],
      mustSee: [
        { emoji: "🦖", img: "field-sue.jpg", link: "https://www.fieldmuseum.org/exhibition/sue-t-rex",
          caption: { en: "SUE the T. rex", zh: "霸王龙 SUE" },
          desc: { en: "The largest, most complete Tyrannosaurus rex ever found, in its own gallery — the museum's star and a thrill for the grandkids.", zh: "迄今发现的最大、最完整的霸王龙化石，陈列于专属展厅——博物馆的明星，孩子们尤其惊喜。" } },
        { emoji: "🏛️", img: "field-building.jpg", link: "https://www.fieldmuseum.org/",
          caption: { en: "Stanley Field Hall", zh: "斯坦利·菲尔德大厅" },
          desc: { en: "The vast marble entrance hall with a towering dinosaur and hanging aircraft-sized models — grand and easy to stroll, with benches.", zh: "宏阔的大理石入口大厅，矗立着高大的恐龙、悬挂着巨型模型——气派而好走，设有长椅。" } },
        { emoji: "🌆", img: "museum-campus-skyline.jpg", link: "https://www.maggiedaleypark.com/",
          caption: { en: "Skyline view from Museum Campus", zh: "博物馆园区的天际线景观" },
          desc: { en: "The lawn behind Adler Planetarium gives one of Chicago's best skyline photos across the water — a short, flat stroll outside.", zh: "阿德勒天文馆后方的草坪是隔水拍摄芝加哥天际线的最佳地点之一——出馆走一小段平路即到。" } },
        { emoji: "🐠", img: "shedd-aquarium.jpg", link: "https://www.sheddaquarium.org/",
          caption: { en: "Shedd Aquarium (alternative)", zh: "谢德水族馆（备选）" },
          desc: { en: "If you'd rather see sea life, the Shedd next door is just as indoor and restful, with gentle ramps and seating throughout.", zh: "若更想看海洋生物，隔壁的谢德水族馆同样室内、轻松，坡道平缓、处处有座位。" } },
      ],
    },
    chinatown: {
      emoji: "🏮",
      name: { en: "Chicago Chinatown", zh: "芝加哥唐人街" },
      area: { en: "South Side, near downtown", zh: "市区以南" },
      summary: {
        en: "A warm, familiar dim-sum lunch and an easy stroll under the Chinatown Gate.",
        zh: "在唐人街牌楼下，吃一顿熟悉暖心的点心午餐，轻松散步。",
      },
      intro: {
        en: "Chicago's Chinatown, just south of downtown, is one of the most vibrant in the country. A few flat, easy blocks packed with restaurants, bakeries and shops, plus a pretty riverside park — a comfortable, familiar break with great food.",
        zh: "芝加哥唐人街就在市区以南，是全美最有活力的唐人街之一。几个平坦好走的街区，餐馆、糕点店和商铺林立，还有一座秀美的河滨公园——是舒适、熟悉又美食满满的歇脚之处。",
      },
      story: {
        en: "Chicago's Chinatown was established around 1912 along Cermak Road and Wentworth Avenue, when Chinese residents moved south from the downtown Loop. It remains one of the largest and most stable Chinese communities in the United States.\n\nUnlike some Chinatowns that have shrunk, Chicago's has grown, thanks in part to Chinatown Square, a two-level outdoor mall built in the 1990s, and Ping Tom Memorial Park along the river. The neighborhood blends long-established family associations and restaurants with newer shops and bakeries.\n\nThe ornate Chinatown Gate at Cermak and Wentworth, the Nine Dragon Wall (a replica of the famous wall in Beijing's Beihai Park), and the zodiac statues in Chinatown Square are favorite landmarks.\n\nIt is best known for its food — dim sum, Cantonese seafood, hand-pulled noodles, and Chinese bakeries — and for a calm riverside park with a graceful pagoda and views back toward the skyline.",
        zh: "芝加哥唐人街约于1912年沿石匠路（Cermak Rd）和云华街（Wentworth Ave）一带形成，当时华人居民从市中心卢普区南迁至此。它至今仍是全美最大、最稳定的华人社区之一。\n\n与一些日渐萎缩的唐人街不同，芝加哥唐人街反而不断壮大，这在一定程度上得益于1990年代建成的两层露天商场“华埠广场”（Chinatown Square）和河畔的“谭继平纪念公园”（Ping Tom Memorial Park）。这里既有历史悠久的宗亲会馆和老餐馆，也有新开的商铺和糕点店。\n\n云华街与石匠路交口华丽的唐人街牌楼、九龙壁（仿北京北海公园著名的九龙壁），以及华埠广场上的生肖雕像，都是人们喜爱的地标。\n\n这里最为人称道的是美食——点心、广式海鲜、手拉面和中式糕点——以及一座宁静的河滨公园，园中有典雅的宝塔，还可回望天际线。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Chinatown,_Chicago",
      walk: { en: "A few flat, easy blocks.", zh: "几个平坦好走的街区。" },
      hours: { en: "Restaurants open late morning onward.", zh: "餐馆从上午晚些时候起营业。" },
      tips: {
        en: "Park in the Chinatown Square lot off Archer Ave. For dim sum, MingHin Cuisine or Phoenix Restaurant are reliable favorites. Arrive around 11:30am to beat the crowd. Pick up egg tarts or buns from a Chinese bakery for later. Ping Tom Memorial Park, with its pagoda and river views, is a peaceful place to sit.",
        zh: "把车停在阿彻大道（Archer Ave）旁的华埠广场停车场。点心可选 MingHin（明轩）或 Phoenix（凤凰），都是稳妥的人气之选。建议约上午11:30到，避开人潮。到中式糕点店买些蛋挞或包点留作下午吃。谭继平纪念公园有宝塔和河景，是坐下小憩的清静之地。",
      },
      coords: [41.8527, -87.6320],
      mapQuery: "Chinatown Gate Chicago, Cermak Rd & Wentworth Ave",
      links: [
        { label: { en: "Parking: Chinatown Square Lot", zh: "停车：华埠广场停车场" }, url: "https://maps.apple.com/?q=Chinatown%20Square%20Parking%20Chicago&ll=41.8546,-87.6328" },
        { label: { en: "MingHin Cuisine (dim sum)", zh: "明轩 MingHin（点心）" }, url: "https://maps.apple.com/?q=MingHin+Cuisine+Chinatown+Chicago" },
        { label: { en: "Ping Tom Memorial Park", zh: "谭继平纪念公园" }, url: "https://maps.apple.com/?q=Ping+Tom+Memorial+Park+Chicago" },
      ],
      tour: {
        en: "Park in the Chinatown Square lot off Archer Avenue and enjoy a few flat, easy blocks. Start at the grand Chinatown Gate on Wentworth Avenue, stroll the lantern-lined shops, and see the colorful zodiac statues and Nine Dragon Wall in Chinatown Square. Have an early dim-sum lunch, then pick up sweets at a Chinese bakery. If you like, finish at riverside Ping Tom Memorial Park, with its graceful pagoda and a quiet bench by the water.",
        zh: "把车停在阿彻大道旁的华埠广场停车场，悠闲地逛几个平坦好走的街区。先到云华街上宏伟的唐人街牌楼，沿挂满灯笼的店铺散步，再看华埠广场里色彩缤纷的生肖雕像和九龙壁。吃一顿早点心午餐，然后到中式糕点店买些点心。若有兴致，可在河畔的谭继平纪念公园收尾——那里有典雅的宝塔，水边还有安静的长椅。",
      },
      tourMapSvg: `<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chicago Chinatown walking map" font-family="-apple-system,Helvetica,Arial,sans-serif">
  <rect x="0" y="0" width="360" height="360" fill="#f4f1ea"/>
  <!-- river (top) -->
  <rect x="0" y="0" width="360" height="46" fill="#cfe0ea"/>
  <!-- square block -->
  <rect x="120" y="120" width="120" height="90" rx="3" fill="#dfe8d8" stroke="#cdddc2"/>
  <g stroke="#d4ccba" stroke-width="7" stroke-linecap="round">
    <line x1="40" y1="280" x2="320" y2="280"/>
    <line x1="150" y1="60" x2="150" y2="320"/>
    <line x1="90" y1="100" x2="320" y2="100"/>
  </g>
  <g font-size="10.5" fill="#8a8270">
    <text x="44" y="298">Cermak Rd</text>
    <text x="154" y="320" transform="rotate(-90 154,320)">Wentworth Ave</text>
    <text x="240" y="94">Archer Ave</text>
  </g>
  <g font-size="11" text-anchor="middle">
    <text class="i18n-en" x="180" y="170" fill="#7a8a6a">Chinatown Sq</text>
    <text class="i18n-zh" x="180" y="170" fill="#7a8a6a">华埠广场</text>
    <text class="i18n-en" x="300" y="30" fill="#5b7d96">Chicago River</text>
    <text class="i18n-zh" x="300" y="30" fill="#5b7d96">芝加哥河</text>
  </g>
  <!-- loop -->
  <path d="M150,270 L150,235 L180,210 L130,150 L195,140 L150,235 L150,70" fill="none" stroke="#e4002b" stroke-width="6" stroke-opacity="0.5" stroke-linejoin="round" stroke-linecap="round"/>
  <g text-anchor="middle" font-size="14" font-weight="700" fill="#fff">
    <circle cx="150" cy="235" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="150" y="240">1</text>
    <circle cx="180" cy="210" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="180" y="215">2</text>
    <circle cx="195" cy="140" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="195" y="145">3</text>
    <circle cx="130" cy="150" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="130" y="155">4</text>
    <circle cx="150" cy="70" r="13" fill="#e4002b" stroke="#fff" stroke-width="2.5"/><text x="150" y="75">5</text>
  </g>
  <rect x="200" y="258" width="24" height="24" rx="5" fill="#00598c" stroke="#fff" stroke-width="2.5"/>
  <text x="212" y="276" text-anchor="middle" font-size="15" font-weight="700" fill="#fff">P</text>
  <g text-anchor="middle" font-size="10">
    <text class="i18n-en" x="150" y="258" fill="#e4002b">Gate</text>
    <text class="i18n-zh" x="150" y="258" fill="#e4002b">牌楼</text>
    <text class="i18n-en" x="150" y="92" fill="#7a8a6a">Ping Tom Park</text>
    <text class="i18n-zh" x="150" y="92" fill="#7a8a6a">谭继平公园</text>
    <text class="i18n-en" x="224" y="252" fill="#00598c">Sq Lot</text>
    <text class="i18n-zh" x="224" y="252" fill="#00598c">广场停车场</text>
  </g>
  <g><line x1="32" y1="120" x2="32" y2="101" stroke="#5a6776" stroke-width="2"/><path d="M32,97 L28,106 L36,106 Z" fill="#5a6776"/><text x="32" y="135" text-anchor="middle" font-size="11" fill="#5a6776">N</text></g>
  <g font-size="10.5" fill="#5a6776">
    <line x1="30" y1="326" x2="56" y2="326" stroke="#e4002b" stroke-width="6" stroke-opacity="0.5" stroke-linecap="round"/>
    <text class="i18n-en" x="62" y="330">Walking loop (a few flat blocks)</text>
    <text class="i18n-zh" x="62" y="330">步行环线（几个平坦街区）</text>
    <rect x="30" y="342" width="15" height="15" rx="3" fill="#00598c"/><text x="37.5" y="354" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">P</text>
    <text class="i18n-en" x="52" y="354">Parking — start &amp; end of the walk</text>
    <text class="i18n-zh" x="52" y="354">停车场 — 步行起点与终点</text>
  </g>
</svg>`,
      mustSee: [
        { emoji: "🏮", img: "chinatown-gate.jpg", link: "https://maps.apple.com/?q=Chinatown%20Gate%20Chicago",
          caption: { en: "1. The Chinatown Gate", zh: "1. 唐人街牌楼" },
          desc: { en: "The ornate paifang gate at Cermak and Wentworth, inscribed with Chinese characters — Chinatown's grand entrance and first photo.", zh: "云华街与石匠路交口华丽的牌楼，上书汉字——唐人街宏伟的入口，也是第一张合影。" } },
        { emoji: "🐉", img: "chinatown-square.jpg", link: "https://maps.apple.com/?q=Chinatown%20Square%20Chicago",
          caption: { en: "2. Chinatown Square & zodiac statues", zh: "2. 华埠广场与生肖雕像" },
          desc: { en: "A two-level open-air mall lined with the twelve bronze Chinese zodiac animals — fun to find your birth-year sign.", zh: "一座两层的露天商场，沿途立着十二尊青铜生肖像——找一找自己的属相，很有趣。" } },
        { emoji: "🏯", img: "chinatown-pingtom.jpg", link: "https://maps.apple.com/?q=Ping+Tom+Memorial+Park+Chicago",
          caption: { en: "3. Ping Tom Memorial Park", zh: "3. 谭继平纪念公园" },
          desc: { en: "A serene riverside park with a graceful pagoda, Chinese-style landscaping and benches — a quiet place to sit by the water.", zh: "一座宁静的河滨公园，有典雅的宝塔、中式园林造景和长椅——是水边坐下小憩的清静之地。" } },
        { emoji: "🥟", img: "chinatown-dimsum.jpg", link: "https://maps.apple.com/?q=MingHin+Cuisine+Chinatown+Chicago",
          caption: { en: "4. Dim sum lunch", zh: "4. 点心午餐" },
          desc: { en: "Two good choices: MingHin Cuisine for classic dim sum, or Phoenix Restaurant for cart-style. Arrive around 11:30am to beat the crowd.", zh: "两个好选择：明轩（MingHin）供应经典点心，凤凰（Phoenix）则是推车式。建议约上午11:30到，避开人潮。" } },
        { emoji: "🥮", img: "chinatown-bakery.jpg", link: "https://maps.apple.com/?q=Chinese+bakery+Chinatown+Chicago",
          caption: { en: "5. Chinese bakery treats", zh: "5. 中式糕点" },
          desc: { en: "Before heading back, pick up egg tarts, pineapple buns or mooncakes from a Chinese bakery to enjoy later.", zh: "返回前，到中式糕点店买些蛋挞、菠萝包或月饼，留待下午享用。" } },
      ],
    },

    /* ---------------------------------------------------------------- SUN */
    departure: {
      emoji: "✈️",
      name: { en: "Departure — O'Hare Airport", zh: "返程 — 奥黑尔机场" },
      area: { en: "Chicago O'Hare (ORD)", zh: "芝加哥奥黑尔机场（ORD）" },
      summary: {
        en: "Check out, return the rental car, and fly home.",
        zh: "退房、还车、乘机回家。",
      },
      intro: {
        en: "An easy final morning. Check out of the hotel, drive about 30–40 minutes to O'Hare, return the rental car, and head to your gate.",
        zh: "轻松的最后一个上午。退房后开车约30–40分钟到奥黑尔机场，归还租车，再前往登机口。",
      },
      story: {
        en: "Chicago O'Hare is one of the busiest airports in the world, so allow extra time on a Sunday. Rental-car returns are well signed as you approach the airport; after dropping the car, a shuttle or the airport train (the ATS people-mover) takes you to the terminals. Wheelchairs and airport assistance can be arranged with the airline in advance for easier connections through the terminal.",
        zh: "奥黑尔机场是全球最繁忙的机场之一，周日请预留充裕时间。临近机场时，还车指示牌清晰可见；还车后，可乘摆渡车或机场轻轨（ATS 旅客捷运系统）前往航站楼。可提前向航空公司预约轮椅和机场协助，便于在航站楼内顺利通行。",
      },
      walk: { en: "Some walking in the terminal; request assistance if needed.", zh: "航站楼内有一定步行；需要时可申请协助。" },
      hours: { en: "Arrive ~2.5 hours before your flight.", zh: "建议航班起飞前约2.5小时抵达。" },
      tips: {
        en: "Fill the rental car's gas tank near the airport to avoid refueling fees. If anyone needs a wheelchair or extra time, tell the airline ahead and arrive earlier. Keep snacks and water handy for the grandparents.",
        zh: "在机场附近把租车油箱加满，以免被收加油费。若有人需要轮椅或更多时间，请提前告知航空公司并尽早抵达。为爷爷奶奶备好零食和水。",
      },
      coords: [41.9742, -87.9073],
      mapQuery: "O'Hare International Airport rental car return",
      mustSee: [],
    },
  },

  /* ------------------------------------------------------------- PRACTICAL */
  practical: {
    intro: {
      en: "Key addresses, driving notes and senior-friendly tips for the trip.",
      zh: "本次旅行的重要地址、驾车提示与适合长者的贴士。",
    },
    sections: [
      {
        title: { en: "🏨 Hotel", zh: "🏨 酒店" },
        body: {
          en: "Renaissance Chicago North Shore Hotel, 933 Skokie Blvd, Northbrook, IL 60062. Four nights (Jul 8–12). Free on-site parking. About 15 min to Evanston and 35–45 min to downtown.",
          zh: "芝加哥北岸万丽酒店，地址 933 Skokie Blvd, Northbrook, IL 60062。共四晚（7月8–12日）。酒店免费停车。到埃文斯顿约15分钟，到市区约35–45分钟。",
        },
        mapQuery: "Renaissance Chicago North Shore Hotel, 933 Skokie Blvd Northbrook IL",
      },
      {
        title: { en: "✈️ Arrival (Wed Jul 8)", zh: "✈️ 抵达（7月8日 周三）" },
        body: {
          en: "United flight UA 2800 lands at O'Hare (ORD) around 9am. Pick up the rental car at the airport, then drive ~35 min to Northwestern in Evanston for the day. Check in at the hotel in the evening.",
          zh: "美联航 UA 2800 航班于上午9点左右抵达奥黑尔机场（ORD）。在机场取租车，再开约35分钟到埃文斯顿的西北大学，白天在那里游览。傍晚入住酒店。",
        },
        mapQuery: "O'Hare International Airport rental car",
      },
      {
        title: { en: "🚗 UIUC Day Trip (Thu Jul 9)", zh: "🚗 伊利诺伊大学一日游（7月9日 周四）" },
        body: {
          en: "About 2h30 each way (≈140 miles, mostly I-57). Leave by 7:30am for the morning admissions tour. Plan one rest stop each way at an Illinois highway oasis. Keep water and snacks in the car and don't rush — it's a long driving day for the grandparents.",
          zh: "单程约2小时30分（约140英里，主要走57号州际公路）。建议上午7:30前出发，赶上上午的招生导览。往返各在伊利诺伊高速“绿洲”服务区休息一次。车上备好水和零食，不要赶路——对爷爷奶奶来说这是开车较多的一天。",
        },
        mapQuery: "University of Illinois Urbana-Champaign",
      },
      {
        title: { en: "⛸️ Skating Camp (Fri–Sat Jul 10–11)", zh: "⛸️ 滑冰营（7月10–11日 周五至周六）" },
        body: {
          en: "Mom, Sarah and Brooke are at skating camp both days. Drop them off in the morning, then Dad takes the grandparents into the city (see the Friday and Saturday plans). Confirm the camp's drop-off and pick-up times the day before.",
          zh: "妈妈、Sarah 和 Brooke 两天都参加滑冰营。上午送她们过去，之后爸爸带爷爷奶奶进城（见周五和周六的安排）。请提前一天确认滑冰营的接送时间。",
        },
        mapQuery: "",
      },
      {
        title: { en: "🅿️ Downtown Parking", zh: "🅿️ 市区停车" },
        body: {
          en: "Friday: Millennium Park Garage, under the park. Saturday: Soldier Field North Garage at the Museum Campus, and the Chinatown Square lot off Archer Ave. Booking a spot ahead on a parking app is often cheaper.",
          zh: "周五：公园下方的千禧公园停车楼。周六：博物馆园区的士兵球场北侧停车楼，以及阿彻大道旁的华埠广场停车场。提前用停车 App 预订车位通常更便宜。",
        },
        mapQuery: "Millennium Park Garage Chicago",
      },
      {
        title: { en: "👵 Senior-Friendly Tips", zh: "👵 长者贴士" },
        body: {
          en: "Walking each day stays under 2 miles, broken into short stretches with frequent benches. Campuses and parks are flat; museums have elevators and wheelchairs. The architecture river cruise lets everyone sit. Carry water, wear comfortable shoes, and plan an afternoon rest. Summer can be hot and humid — favor mornings and indoor stops midday. Emergency number in the U.S. is 911.",
          zh: "每天步行不超过2英里，分成多段短途，沿途长椅充足。校园和公园都很平坦；博物馆有电梯和轮椅。建筑游船让大家全程坐着。请带水、穿舒适的鞋，并在下午安排休息。夏季可能炎热潮湿——多安排上午活动，正午选室内景点。美国紧急电话为911。",
        },
        mapQuery: "",
      },
    ],
  },
};
