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
        en: "Land at O'Hare around 9am, pick up the rental car, and head to Northwestern's beautiful lakefront campus in Evanston. There's a morning for the easy self-guided walk, then the official campus tour from 12–1pm (everyone except the grandparents), followed by the Engineering (McCormick) school tour for Bridget and Sarah. The grandparents — and Brooke, during the engineering tour — rest at the air-conditioned Norris University Center by the lake. Check in at the hotel in the evening.",
        zh: "上午9点左右抵达奥黑尔机场，取租车，前往埃文斯顿（Evanston）湖畔美丽的西北大学校园。上午可走下方轻松的自助路线；中午12–1点参加官方校园导览（除爷爷奶奶外全体参加），随后是 Bridget 和 Sarah 的工程学院（McCormick）专场导览。爷爷奶奶——以及工程导览期间的 Brooke——在湖边有空调的诺里斯学生中心（Norris）休息。傍晚入住酒店。",
      },
      transport: {
        en: "Pick up the rental car at O'Hare (ORD). It's about a 30–40 min drive to Northwestern in Evanston. Park at the Segal Visitors Center or a nearby campus lot. Everything today is a short, flat walk; the grandparents' base at Norris is a 5-minute walk from the engineering building. About 15 min to the hotel in Northbrook in the evening.",
        zh: "在奥黑尔机场（ORD）取租车，到埃文斯顿的西北大学约30–40分钟车程。停在西格尔访客中心或附近校园停车场。今天各处都是平坦的短途步行；爷爷奶奶在诺里斯中心的落脚点距工程楼步行约5分钟。傍晚再开约15分钟到诺斯布鲁克（Northbrook）的酒店。",
      },
      sites: ["northwestern", "nu-norris", "hotel"],
    },
    {
      id: "thu",
      label: { en: "Thu · Jul 9", zh: "周四 · 7月9日" },
      title: { en: "Day Trip to UIUC", zh: "伊利诺伊大学一日游" },
      summary: {
        en: "An early start for the drive south to the University of Illinois Urbana-Champaign. Two tours today: a campus tour from 10–12:30 and an engineering tour from 1:30–3:45, with lunch in between. Brooke and the grandparents wait in the cool, comfortable Illini Union — food court, lounges and restrooms all indoors. They can also do a little of the flat Main Quad walk if they like. Drive back with a rest stop.",
        zh: "一早出发南下，前往位于厄巴纳-香槟的伊利诺伊大学（UIUC）。今天有两场导览：上午10:00–12:30的校园导览，以及下午1:30–3:45的工程学院导览，中间午餐。Brooke 和爷爷奶奶在凉爽舒适的伊利尼联合楼（Illini Union）等候——美食广场、休息厅和洗手间都在室内。他们也可随意走一小段平坦的主四方庭院。返程途中休息一次。",
      },
      transport: {
        en: "About 2h30 each way by car (≈140 miles). Leave by 7:00am to reach the 10am tour with time to park. Plan one rest stop each way. It's a long driving day — keep it calm and unhurried.",
        zh: "单程约2小时30分（约140英里）。建议上午7:00前出发，留出停车时间赶上10点的导览。往返各安排一次休息。这是开车较多的一天——节奏放慢、不赶时间。",
      },
      sites: ["uiuc", "uiuc-wait", "rest-stop"],
    },
    {
      id: "fri",
      label: { en: "Fri · Jul 10", zh: "周五 · 7月10日" },
      title: { en: "University of Chicago & Botanic Garden", zh: "芝加哥大学与植物园" },
      summary: {
        en: "A morning admissions tour at the University of Chicago in Hyde Park (8:30–11:30). The grandparents sleep in and rest at the hotel. Back in the afternoon, Brooke and Sarah start skating camp at 2:30. While they skate, Dad, Bridget and the grandparents enjoy a relaxed afternoon at the nearby Chicago Botanic Garden — flat paths, a narrated tram, cool greenhouses and a café. Nothing in the city for the grandparents today; it's an easy, local afternoon.",
        zh: "上午参加芝加哥大学（海德公园校区）的招生导览（8:30–11:30）。爷爷奶奶睡到自然醒，在酒店休息。下午返回后，Brooke 和 Sarah 于2:30开始滑冰营。她们滑冰期间，爸爸、Bridget 和爷爷奶奶到附近的芝加哥植物园（Chicago Botanic Garden）度过轻松的下午——路面平坦、有讲解游览车、凉爽的温室和咖啡馆。今天不带爷爷奶奶进城，是一个轻松的本地下午。",
      },
      transport: {
        en: "For the tour, drive ~45 min to Hyde Park and park in a University of Chicago visitor garage. Back to the hotel by early afternoon to drop the girls at camp (near Northbrook). The Botanic Garden is a 10-minute drive from the hotel in Glencoe, with a large, easy parking garage.",
        zh: "参加导览时，开车约45分钟到海德公园，停在芝加哥大学的访客停车楼。下午早些回到酒店，送两个女孩去滑冰营（在诺斯布鲁克附近）。植物园在格伦科（Glencoe），距酒店约10分钟车程，有宽敞好停的停车楼。",
      },
      sites: ["uchicago", "botanic-garden"],
    },
    {
      id: "sat",
      label: { en: "Sat · Jul 11", zh: "周六 · 7月11日" },
      title: { en: "River Cruise, Chinatown & Museum Campus", zh: "建筑游船、唐人街与博物馆园区" },
      summary: {
        en: "The girls are at skating camp, so Dad, Bridget and the grandparents have a full day downtown. First the booked architecture river cruise (arrive by 9:30 for the 10:00–11:30 departure) — 90 minutes fully seated on the water. Then a warm, familiar dim-sum lunch in Chinatown, and an easy afternoon at the lakefront Field Museum with its grand skyline view. Indoors and restful when it's hot.",
        zh: "两个女孩在滑冰营，因此爸爸、Bridget 和爷爷奶奶有一整天在市区。先是已预订的建筑游船（10:00–11:30 发船，请9:30前到达）——90分钟全程坐在水上。之后到唐人街吃一顿熟悉暖心的点心午餐，再从容地游览湖畔的菲尔德博物馆及其壮丽的天际线景观。天热时室内凉爽、轻松休憩。",
      },
      transport: {
        en: "Drive ~40 min downtown and park near the river dock (Michigan Avenue Bridge) — leave the hotel by ~8:30 to arrive by 9:30. After the cruise, Chinatown is a 5-minute drive south; the Field Museum's Museum Campus is 5 minutes from Chinatown, with parking in the Soldier Field garages.",
        zh: "驱车约40分钟进城，停在游船码头（密歇根大道桥）附近——约8:30离开酒店，以便9:30前到达。游船结束后，唐人街在南面约5分钟车程；菲尔德博物馆所在的博物馆园区距唐人街5分钟，可停在士兵球场（Soldier Field）停车楼。",
      },
      sites: ["river-cruise", "chinatown", "field-museum"],
    },
    {
      id: "sun",
      label: { en: "Sun · Jul 12", zh: "周日 · 7月12日" },
      title: { en: "Baha'i Temple & Fly Home", zh: "巴哈伊灵曦堂与返程" },
      summary: {
        en: "A calm last morning. The girls finish skating camp in the afternoon, and the flight is at 6pm, so there's time for one gentle, local outing: the beautiful Baha'i House of Worship in nearby Wilmette — quiet gardens and a soaring domed temple, free to visit. Then pick up the girls, return the rental car at O'Hare, and fly home.",
        zh: "宁静的最后一个上午。两个女孩下午结束滑冰营，航班在傍晚6点，因此还有时间安排一次轻松的本地出游：附近威尔米特（Wilmette）美丽的巴哈伊灵曦堂（Baha'i House of Worship）——宁静的花园与高耸的圆顶圣殿，免费参观。之后接上女孩，在奥黑尔机场还车，乘机回家。",
      },
      transport: {
        en: "The Baha'i Temple is about 15 min from the hotel. Return to pick up the girls when camp ends, then it's about 30–40 min to O'Hare. Aim to arrive at the airport by ~3:30pm for the 6pm flight; return the rental car first.",
        zh: "巴哈伊灵曦堂距酒店约15分钟。滑冰营结束后回来接女孩，再开约30–40分钟到奥黑尔机场。建议约下午3:30抵达机场，赶傍晚6点的航班；先归还租车。",
      },
      sites: ["bahai-temple", "departure"],
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
        en: "The official campus tour (12–1pm) and the Engineering (McCormick) tour both start at the Segal Visitors Center (1841 Sheridan Rd), where there is visitor parking. Use the morning before noon for this flat self-guided loop. During the tours, the grandparents' base is Norris University Center by the lake (see its own card) — air-conditioned, with a food court, restrooms and benches; Brooke joins them there during the engineering tour. The engineering building (Technological Institute, 2145 Sheridan Rd) is a 5-minute flat walk from Norris.",
        zh: "官方校园导览（12–1点）和工程学院（McCormick）导览都在西格尔访客中心（Segal Visitors Center，1841 Sheridan Rd）集合，那里有访客停车。中午之前的上午时段可走这条平坦的自助环线。导览期间，爷爷奶奶的落脚点是湖边的诺里斯学生中心（见其专属卡片）——有空调、美食广场、洗手间和长椅；工程导览期间 Brooke 也在那里陪他们。工程楼（Technological Institute，2145 Sheridan Rd）距诺里斯步行约5分钟平路。",
      },
      coords: [42.0560, -87.6740],
      mapQuery: "Northwestern University Segal Visitors Center, 1841 Sheridan Rd Evanston IL",
      links: [
        { label: { en: "Segal Visitors Center", zh: "西格尔访客中心" }, url: "https://www.northwestern.edu/visit/" },
        { label: { en: "Searchable campus map", zh: "校园地图（可搜索）" }, url: "https://maps.northwestern.edu/" },
        { label: { en: "Parking: Segal Visitors Center Lot", zh: "停车：访客中心停车场" }, url: "https://maps.apple.com/?q=Northwestern%20Segal%20Visitors%20Center%20Parking&ll=42.0566,-87.6747" },
      ],
      tour: {
        en: "Park at the Segal Visitors Center (1841 Sheridan Rd). This flat loop hugs the lakeshore and uses the wide, level campus paths — a good way to fill the morning before the noon tour, and a gentle option for the grandparents too. Start at the Weber Arch, the grand campus gateway, then walk to the Gothic Deering Library and historic University Hall. Pause at the peaceful Shakespeare Garden and the painted Rock, then head to the lake: Norris University Center for restrooms, a snack and lake views, the Lakefill for the Chicago skyline, and the Block Museum of Art (free, indoor). The Dearborn Observatory is an optional final stop. Pick as many stops as your legs like — benches are everywhere.",
        zh: "停在西格尔访客中心（1841 Sheridan Rd）。这条平坦的环线沿湖滨展开，走的都是宽阔平整的校园步道——很适合在中午导览前填满上午时光，也是爷爷奶奶的轻松之选。从宏伟的校园门户韦伯拱门（Weber Arch）出发，走到哥特式的迪林图书馆（Deering Library）和历史悠久的大学楼（University Hall）。在宁静的莎士比亚花园和被涂满油漆的“岩石”（The Rock）稍作停留，再走向湖边：诺里斯学生中心有洗手间、点心和湖景，“湖滨地”可眺望芝加哥天际线，布洛克艺术博物馆（免费、室内）。迪尔伯恩天文台为可选的最后一站。体力允许就多看几处——长椅随处可见。",
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
    "nu-norris": {
      emoji: "🍔",
      name: { en: "Norris Center — grandparents' base", zh: "诺里斯中心 — 爷爷奶奶落脚点" },
      area: { en: "Northwestern, on the lake", zh: "西北大学 · 湖边" },
      summary: {
        en: "A cool, comfortable food court by Lake Michigan — lunch and an easy place to wait.",
        zh: "密歇根湖畔凉爽舒适的美食广场——吃午餐、轻松等候的好地方。",
      },
      intro: {
        en: "Norris University Center is Northwestern's student center, right on Lake Michigan. It's the perfect base for the grandparents while the family is on the tours: air-conditioned, with a casual food court, plenty of indoor seating, clean restrooms, and big windows over the water. Have lunch here during the 12–1pm campus tour, then simply stay and relax through the engineering tour — Brooke joins you here.",
        zh: "诺里斯学生中心是西北大学的学生活动中心，紧邻密歇根湖。当家人参加导览时，这里是爷爷奶奶理想的落脚点：有空调、设有休闲美食广场、大量室内座位、干净的洗手间，还有俯瞰湖面的大窗。可在12–1点的校园导览期间在此午餐，之后就留在这里休息，度过工程学院导览的时间——Brooke 也会来这里陪你们。",
      },
      story: {
        en: "The food court is quick, casual and familiar — think burgers, deli sandwiches, pizza, a Starbucks and bubble tea, ordered at the counter and eaten at your own pace. It's cashless, so bring a card or phone to pay. Outside the big windows, the terrace looks straight across the water to the Chicago skyline. Summer hours can be shorter than the school year, so if it's quiet, the Segal Visitors Center or downtown Evanston (a short drive) are easy fallbacks for a bite and a sit-down.",
        zh: "美食广场快捷、休闲又熟悉——有汉堡、三明治、披萨、星巴克和珍珠奶茶，在柜台点餐、按自己的节奏用餐。这里只收银行卡或手机支付，请备好卡或手机。大窗外的露台可隔水直望芝加哥天际线。夏季营业时间可能比学期内短，若太清静，西格尔访客中心或市区埃文斯顿（开车不远）都是吃点东西、坐下歇脚的便捷备选。",
      },
      walk: { en: "None — sit and relax; restrooms on site.", zh: "无需步行——坐下休息；设有洗手间。" },
      hours: { en: "Food court midday; summer hours may be shorter.", zh: "美食广场中午营业；夏季时间可能较短。" },
      tips: {
        en: "Address: 1999 Campus Dr, Evanston. It's a 5-minute flat walk from the engineering building (Technological Institute, 2145 Sheridan Rd) and a short walk from the Segal Visitors Center. Payment is cashless — bring a card or phone. Get the grandparents settled with lunch before the family heads to the noon tour, and agree on a meeting time and spot.",
        zh: "地址：1999 Campus Dr, Evanston。距工程楼（Technological Institute，2145 Sheridan Rd）步行约5分钟平路，离西格尔访客中心也很近。这里不收现金——请带卡或手机。在家人去参加中午导览前，先安顿好爷爷奶奶用午餐，并约好会合的时间和地点。",
      },
      coords: [42.0533, -87.6720],
      mapQuery: "Norris University Center, 1999 Campus Dr Evanston IL",
      links: [
        { label: { en: "Norris University Center", zh: "诺里斯学生中心" }, url: "https://www.northwestern.edu/norris/" },
        { label: { en: "Open in Apple Maps", zh: "用 Apple 地图打开" }, url: "https://maps.apple.com/?q=Norris%20University%20Center%20Evanston&ll=42.0533,-87.6720" },
      ],
      mustSee: [
        { emoji: "🍔", img: "norris-foodcourt.jpg", link: "https://www.northwestern.edu/norris/retail-operations/dining.html",
          caption: { en: "Norris University Center", zh: "诺里斯学生中心" },
          desc: { en: "The lakeside student center. Inside: casual counters — burgers, deli, pizza, Starbucks and bubble tea — with lots of indoor seating. Cashless; bring a card or phone.", zh: "湖畔的学生中心。内有休闲柜台——汉堡、三明治、披萨、星巴克和珍珠奶茶——室内座位充足。仅收卡或手机支付。" } },
        { emoji: "🌆", img: "norris-lakeview.jpg", link: "https://www.northwestern.edu/norris/",
          caption: { en: "Lakefront by Norris", zh: "诺里斯旁的湖滨" },
          desc: { en: "Norris sits right on Lake Michigan, with big windows and a terrace over the water and the skyline beyond — a pleasant place to sit and wait.", zh: "诺里斯紧邻密歇根湖，大窗和露台俯瞰水面，远处是天际线——坐下等候十分惬意。" } },
      ],
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
        en: "Both tours today center on the Illini Union area (1401 W Green St); park in the Illini Union garage right behind it. The 10–12:30 campus tour and the 1:30–3:45 engineering tour leave time for lunch in between at the Illini Union food court or on Green Street ('Campustown'). Brooke and the grandparents wait at the Illini Union (see its own card) — cool lounges, food and restrooms indoors — and can stroll a little of the flat, shaded Quad if they like. The engineering buildings are a few flat blocks north of the Union.",
        zh: "今天两场导览都以伊利尼联合楼一带（Illini Union，1401 W Green St）为中心；把车停在它后方的联合楼停车库。10:00–12:30 的校园导览与 1:30–3:45 的工程导览之间有午餐时间，可选联合楼美食广场或绿街（Green Street，校区商业街）。Brooke 和爷爷奶奶在伊利尼联合楼等候（见其专属卡片）——凉爽的休息厅、餐饮和洗手间都在室内——也可随意走一小段平坦、遮阴的四方庭院。工程楼群在联合楼以北几个平坦街区处。",
      },
      coords: [40.1095, -88.2272],
      mapQuery: "Illini Union, 1401 W Green St Urbana IL",
      links: [
        { label: { en: "Visit U of I", zh: "伊利诺伊大学参观" }, url: "https://visit.illinois.edu/" },
        { label: { en: "Searchable campus map", zh: "校园地图（可搜索）" }, url: "https://map.illinois.edu/" },
        { label: { en: "Parking: Illini Union Garage", zh: "停车：伊利尼联合楼停车库" }, url: "https://maps.apple.com/?q=Illini%20Union%20Parking%20Garage%20Champaign&ll=40.1101,-88.2272" },
      ],
      tour: {
        en: "Park in the garage behind the Illini Union (1401 W Green St). This is a flat loop around the Main Quad — a pleasant way for Brooke and the grandparents to pass time between the tours. Start at the iconic Alma Mater statue on the corner, then step into the grand Illini Union. Walk the length of the shaded Main Quad to the domed Foellinger Auditorium at the south end. Detour to historic Altgeld Hall (listen for its chimes), see the small Morrow Plots cornfield, and finish at the free Krannert Art Museum. Memorial Stadium and the State Farm Center are an optional short drive away. Benches and shade line the whole route.",
        zh: "停在伊利尼联合楼（1401 W Green St）后方的停车库。这是一条绕主四方庭院的平坦环线——是 Brooke 和爷爷奶奶在两场导览之间消磨时光的惬意方式。先到街角标志性的“母校”雕像（Alma Mater），再走进宏伟的伊利尼联合楼。沿绿荫覆盖的主四方庭院走到南端圆顶的弗林格礼堂（Foellinger Auditorium）。绕道去看历史悠久的阿尔特盖尔德楼（Altgeld Hall，听一听它的排钟），再看小小的莫罗试验田玉米地，最后到免费的克兰纳特艺术博物馆收尾。纪念体育场和 State Farm 中心可开车短途前往，作为可选项目。全程沿途都有长椅和树荫。",
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
    "uiuc-wait": {
      emoji: "🥤",
      name: { en: "Illini Union — waiting spot", zh: "伊利尼联合楼 — 等候处" },
      area: { en: "UIUC Main Quad", zh: "UIUC 主四方庭院" },
      summary: {
        en: "A cool, indoor student union — food, lounges and restrooms between the two tours.",
        zh: "凉爽的室内学生联合楼——两场导览之间的餐饮、休息厅与洗手间。",
      },
      intro: {
        en: "The Illini Union is the grand student center at the head of the Main Quad and the natural base for Brooke and the grandparents on the long UIUC day. It's air-conditioned with a food court, comfortable lounges, restrooms and a bookstore — an easy place to sit through the 10–12:30 tour, have lunch, and wait out the 1:30–3:45 engineering tour.",
        zh: "伊利尼联合楼是主四方庭院北端宏伟的学生活动中心，是 Brooke 和爷爷奶奶在漫长的 UIUC 一日里天然的落脚点。这里有空调，设有美食广场、舒适的休息厅、洗手间和书店——是坐等10:00–12:30导览、用午餐、再等候1:30–3:45工程导览的轻松去处。",
      },
      story: {
        en: "Built in 1941, the Illini Union sits right on the Main Quad, so if the grandparents feel like a short stroll, the flat, shaded green with the Alma Mater statue and historic halls is just outside the door. The food court has quick, familiar options; for a sit-down lunch between the tours, Green Street ('Campustown') just north is lined with restaurants. Lounges and benches are everywhere inside for an unhurried rest.",
        zh: "伊利尼联合楼建于1941年，紧邻主四方庭院——若爷爷奶奶想散散步，门外就是平坦、遮阴的草坪，还有“母校”雕像和历史楼宇。美食广场有快捷、熟悉的选择；若想在两场导览间坐下好好吃顿午餐，北面的绿街（Green Street，校区商业街）餐馆林立。室内到处是休息厅和长椅，可从容歇息。",
      },
      walk: { en: "None needed — sit and relax; a flat Quad stroll is optional.", zh: "无需步行——坐下休息；平坦的庭院散步可选。" },
      hours: { en: "Union open daily; food court midday.", zh: "联合楼每日开放；美食广场中午营业。" },
      tips: {
        en: "Address: 1401 W Green St, Urbana. Park in the Illini Union garage right behind the building so the grandparents have the shortest possible walk. Agree on a meeting spot in the main lounge and swap phone numbers before each tour. Keep water handy — it's a hot, long day.",
        zh: "地址：1401 W Green St, Urbana。把车停在楼后的联合楼停车库，让爷爷奶奶步行距离最短。每场导览前约好在大休息厅的会合点并互留电话。备好饮用水——这一天既热又长。",
      },
      coords: [40.1093, -88.2277],
      mapQuery: "Illini Union, 1401 W Green St Urbana IL",
      links: [
        { label: { en: "Illini Union", zh: "伊利尼联合楼" }, url: "https://union.illinois.edu/" },
        { label: { en: "Open in Apple Maps", zh: "用 Apple 地图打开" }, url: "https://maps.apple.com/?q=Illini%20Union%20Urbana&ll=40.1093,-88.2277" },
      ],
      mustSee: [
        { emoji: "🛋️", img: "union-lounge.jpg", link: "https://union.illinois.edu/",
          caption: { en: "Illini Union", zh: "伊利尼联合楼" },
          desc: { en: "The grand student union at the head of the Quad — inside are comfortable, air-conditioned lounges and seating, an easy place to rest for a couple of hours.", zh: "庭院北端宏伟的学生联合楼——内有舒适、有空调的休息厅和座位，歇上几个小时也很轻松。" } },
        { emoji: "🍽️", img: "union-food.jpg", link: "https://union.illinois.edu/eat",
          caption: { en: "Café & food at the Union", zh: "联合楼的咖啡馆与餐饮" },
          desc: { en: "Quick, familiar food at the Union, with more restaurants along Green Street just north for a sit-down lunch between the two tours.", zh: "联合楼有快捷熟悉的餐饮，北面绿街还有更多餐馆，可在两场导览之间坐下用午餐。" } },
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
    uchicago: {
      emoji: "🏛️",
      name: { en: "University of Chicago (morning tour)", zh: "芝加哥大学（上午导览）" },
      area: { en: "Hyde Park, South Side", zh: "海德公园（南区）" },
      summary: {
        en: "A Gothic campus in Hyde Park — the morning admissions tour, 8:30–11:30.",
        zh: "海德公园的哥特式校园——上午招生导览，8:30–11:30。",
      },
      intro: {
        en: "The University of Chicago sits in leafy Hyde Park on the South Side, about 45 minutes from the hotel. Its ivy-covered Gothic quadrangles feel like an old European university. The morning admissions tour runs 8:30–11:30; the grandparents rest at the hotel today rather than making the long round trip.",
        zh: "芝加哥大学坐落在南区绿意盎然的海德公园，距酒店约45分钟。其爬满常春藤的哥特式四方庭院宛如古老的欧洲学府。上午的招生导览时间为8:30–11:30；今天爷爷奶奶在酒店休息，不必来回奔波。",
      },
      story: {
        en: "The University of Chicago was founded in 1890 with support from oil magnate John D. Rockefeller, who once called it the best investment he ever made. It opened in 1892 and quickly became one of the world's leading research universities.\n\nIts limestone Gothic campus, modeled on the colleges of Oxford and Cambridge, is arranged around a series of quadrangles. The university is famous for rigorous scholarship and for the 'Chicago school' of thought in fields from economics to sociology.\n\nThe campus made history in 1942 when, beneath the stands of an old football field, a team led by Enrico Fermi produced the world's first controlled, self-sustaining nuclear chain reaction — a moment now marked by Henry Moore's sculpture 'Nuclear Energy.' The university counts around 100 Nobel laureates among its faculty, researchers and alumni, one of the highest totals of any institution.\n\nHyde Park is also home to the neo-Gothic Rockefeller Memorial Chapel, the Frank Lloyd Wright–designed Robie House, and the Oriental Institute's collection of ancient Near Eastern treasures.",
        zh: "芝加哥大学创立于1890年，得到石油大亨约翰·D·洛克菲勒的资助——他曾称之为一生中最好的投资。学校于1892年开学，很快跻身世界顶尖研究型大学之列。\n\n其石灰岩哥特式校园以牛津和剑桥的学院为蓝本，环绕一系列四方庭院布置。学校以严谨的学风以及从经济学到社会学的“芝加哥学派”思想而闻名。\n\n1942年，校园写下历史：在一座旧橄榄球场看台之下，恩里科·费米领导的团队实现了世界上首次受控、自持的核链式反应——如今由亨利·摩尔的雕塑《核能》（Nuclear Energy）纪念这一时刻。学校的教师、研究者与校友中约有100位诺贝尔奖得主，位居各机构前列。\n\n海德公园还有新哥特式的洛克菲勒纪念教堂、弗兰克·劳埃德·赖特设计的罗比之家（Robie House），以及东方研究所收藏的古代近东珍宝。",
      },
      storySrc: "https://en.wikipedia.org/wiki/University_of_Chicago",
      walk: { en: "The tour covers a flat campus; wear comfortable shoes.", zh: "导览走平坦校园；请穿舒适的鞋。" },
      hours: { en: "Admissions tour 8:30–11:30am (confirm your booking).", zh: "招生导览 8:30–11:30（请确认预订）。" },
      tips: {
        en: "Leave the hotel by ~7:30am to reach Hyde Park with time to park; the tour meets at the Office of College Admissions (Rosenwald Hall, 1101 E 58th St). Park in the Campus North or East 55th Street garage. Grab coffee near the quads beforehand. After the tour, drive back to the hotel to drop Brooke and Sarah at skating camp by 2:30.",
        zh: "约7:30离开酒店，留出停车时间抵达海德公园；导览在招生办公室（Rosenwald Hall，1101 E 58th St）集合。停在校园北侧或东55街停车楼。可先在庭院附近买杯咖啡。导览结束后开车返回酒店，于2:30前送 Brooke 和 Sarah 去滑冰营。",
      },
      coords: [41.7886, -87.5987],
      mapQuery: "University of Chicago Office of College Admissions, 1101 E 58th St Chicago",
      links: [
        { label: { en: "UChicago visit & tours", zh: "芝大参观与导览" }, url: "https://collegeadmissions.uchicago.edu/visit" },
        { label: { en: "Parking: Campus North Garage", zh: "停车：校园北侧停车楼" }, url: "https://maps.apple.com/?q=University%20of%20Chicago%20Campus%20North%20Parking&ll=41.7920,-87.5990" },
      ],
      mustSee: [
        { emoji: "🏛️", img: "uchicago-quad.jpg", link: "https://www.uchicago.edu/",
          caption: { en: "The Gothic quadrangles", zh: "哥特式四方庭院" },
          desc: { en: "Ivy-covered limestone courtyards modeled on Oxford and Cambridge — the beautiful heart of campus.", zh: "以牛津、剑桥为蓝本、爬满常春藤的石灰岩庭院——校园最美的核心。" } },
        { emoji: "⛪", img: "uchicago-chapel.jpg", link: "https://rockefeller.uchicago.edu/",
          caption: { en: "Rockefeller Chapel", zh: "洛克菲勒纪念教堂" },
          desc: { en: "A soaring neo-Gothic chapel with a 72-bell carillon — the tallest building on campus.", zh: "高耸的新哥特式教堂，设有72钟的排钟——校园最高的建筑。" } },
        { emoji: "⚛️", img: "uchicago-nuclear.jpg", link: "https://en.wikipedia.org/wiki/Nuclear_Energy_(sculpture)",
          caption: { en: "'Nuclear Energy' sculpture", zh: "《核能》雕塑" },
          desc: { en: "Henry Moore's bronze marks the site of the world's first controlled nuclear chain reaction (1942).", zh: "亨利·摩尔的青铜雕塑，标记世界首次受控核链式反应的发生地（1942年）。" } },
      ],
    },
    "botanic-garden": {
      emoji: "🌷",
      name: { en: "Chicago Botanic Garden", zh: "芝加哥植物园" },
      area: { en: "Glencoe (near the hotel)", zh: "格伦科（近酒店）" },
      summary: {
        en: "A relaxed, senior-friendly afternoon — flat paths, a narrated tram, and cool greenhouses.",
        zh: "轻松、适合长者的下午——路面平坦、有讲解游览车与凉爽的温室。",
      },
      intro: {
        en: "While the girls are at skating camp, the Chicago Botanic Garden is a gentle, beautiful afternoon just 10 minutes from the hotel. It spreads across 385 acres of islands, lakes and gardens with wide, flat paved paths and benches everywhere. A narrated tram means no one has to walk far, and the greenhouses and café are pleasantly air-conditioned.",
        zh: "两个女孩在滑冰营期间，芝加哥植物园是距酒店仅10分钟、温柔又美丽的下午去处。它占地385英亩，由岛屿、湖泊和花园组成，铺装步道宽阔平坦，长椅随处可见。有讲解的游览车让人无需远行，温室和咖啡馆则清凉宜人。",
      },
      story: {
        en: "The Chicago Botanic Garden opened in 1972 in Glencoe, just north of Northbrook, and has grown into one of the most-visited public gardens in the United States. It is really a chain of nine islands set among lakes, linked by bridges and gentle paths.\n\nAmong its favorite areas are the tranquil Japanese Garden ('Sansho-En,' the Garden of Three Islands), the English Walled Garden, the Rose Garden, the Waterfall Garden, and a large greenhouse complex. A working fruit-and-vegetable garden and a prairie round out the grounds.\n\nBeyond its beauty, the Garden is a serious center for plant science and conservation, with laboratories and one of the country's leading programs for training plant scientists.\n\nFor a relaxed visit, the narrated Grand Tram Tour (about 35 minutes) circles the islands and is an easy, seated way to see the highlights — a comfortable choice on a warm afternoon.",
        zh: "芝加哥植物园于1972年在诺斯布鲁克以北的格伦科开放，如今已成为全美最受欢迎的公共花园之一。它其实是散落在湖中、由桥梁和平缓步道相连的九座岛屿。\n\n最受喜爱的区域包括宁静的日本庭园（“三松园”，三岛之园）、英式围墙花园、玫瑰园、瀑布花园，以及一处大型温室群。园中还有一片可耕作的果蔬园和一片草原。\n\n除了美景，植物园也是植物科学与保育的重要中心，设有实验室，并拥有全美领先的植物科学人才培养项目之一。\n\n若想轻松游览，有讲解的“大游览车”（Grand Tram Tour，约35分钟）绕岛一周，是坐着看遍亮点的轻松方式——炎热的下午尤为舒适。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Chicago_Botanic_Garden",
      walk: { en: "As much or as little as you like; flat paths, or ride the tram.", zh: "多走少走随意；路面平坦，也可乘游览车。" },
      hours: { en: "Garden open daily to 8pm in summer; tram runs May–Oct.", zh: "夏季每日开放至20:00；游览车5–10月运营。" },
      tips: {
        en: "Address: 1000 Lake Cook Rd, Glencoe. Admission is free, but parking is charged per car — a large, easy garage is right at the entrance. Do the narrated Grand Tram Tour first (small fee, senior discount) to see the whole garden seated, then walk the areas you liked, such as the Japanese Garden. The Garden View Café and the greenhouses are cool spots to rest. Bring a hat and water.",
        zh: "地址：1000 Lake Cook Rd, Glencoe。入园免费，但按车收停车费——入口处就有宽敞好停的停车楼。建议先坐有讲解的“大游览车”（小额收费，长者有优惠）坐着看遍全园，再步行去喜欢的区域，比如日本庭园。花园景观咖啡馆（Garden View Café）和温室都是凉爽的歇脚处。请带帽子和水。",
      },
      coords: [42.1489, -87.7896],
      mapQuery: "Chicago Botanic Garden, 1000 Lake Cook Rd Glencoe IL",
      links: [
        { label: { en: "Chicago Botanic Garden", zh: "芝加哥植物园官网" }, url: "https://www.chicagobotanic.org/visit" },
        { label: { en: "Grand Tram Tours", zh: "大游览车" }, url: "https://www.chicagobotanic.org/tram" },
        { label: { en: "Open in Apple Maps", zh: "用 Apple 地图打开" }, url: "https://maps.apple.com/?q=Chicago%20Botanic%20Garden&ll=42.1489,-87.7896" },
      ],
      mustSee: [
        { emoji: "🚋", img: "botanic-lake.jpg", link: "https://www.chicagobotanic.org/tram",
          caption: { en: "Lakes, islands & the Grand Tram", zh: "湖泊、岛屿与大游览车" },
          desc: { en: "The garden is a chain of islands and lakes dotted with fountains. A narrated 35-minute tram loops it all — a comfortable, fully seated way to see the highlights. Senior discount.", zh: "植物园是一串点缀着喷泉的岛屿与湖泊。约35分钟的讲解游览车绕行全园——舒适、全程坐着看遍亮点。长者有优惠。" } },
        { emoji: "⛩️", img: "botanic-japanese.jpg", link: "https://www.chicagobotanic.org/gardens/japanese",
          caption: { en: "Japanese Garden", zh: "日本庭园" },
          desc: { en: "'Sansho-En,' the serene Garden of Three Islands, with bridges, pruned pines and still water — beautifully calm.", zh: "“三松园”——宁静的三岛之园，有桥梁、修剪的松树与静水——安宁怡人。" } },
        { emoji: "🌺", img: "botanic-greenhouse.jpg", link: "https://www.chicagobotanic.org/gardens/greenhouses",
          caption: { en: "The greenhouses", zh: "温室" },
          desc: { en: "Cool, air-conditioned glasshouses of tropical plants, desert cacti and orchids — a restful stop out of the sun.", zh: "凉爽有空调的玻璃温室，展示热带植物、沙漠仙人掌与兰花——避开烈日的休憩之地。" } },
        { emoji: "☕", img: "botanic-cafe.jpg", link: "https://www.chicagobotanic.org/visit/food",
          caption: { en: "Garden View Café", zh: "花园景观咖啡馆" },
          desc: { en: "An indoor café overlooking the water for a snack, a cold drink and a comfortable sit-down.", zh: "俯瞰水面的室内咖啡馆，可吃点心、喝冷饮、舒服地坐一坐。" } },
      ],
    },
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
        en: "Booked for Saturday: a 90-minute seated boat tour — no walking, and the best way to see the skyline.",
        zh: "已预订周六班次：90分钟全程坐着的游船——无需步行，是欣赏天际线的最佳方式。",
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
      hours: { en: "Our cruise: Sat Jul 11, 10:00–11:30am. Arrive by 9:30am.", zh: "我们的班次：7月11日周六 10:00–11:30。请9:30前到达。" },
      tips: {
        en: "This is booked for Saturday, 10:00–11:30am — arrive at the dock by 9:30 to check in and board without rushing (leave the hotel by ~8:30). The dock is at the Michigan Avenue Bridge; park in a garage nearby and it's a short, level walk. Boats are shaded and seated, and staff help with boarding. Bring a light jacket — it can be breezy on the water. Have the confirmation/tickets ready on your phone.",
        zh: "已预订周六 10:00–11:30 的班次——请9:30前到达码头，从容办理登船（约8:30离开酒店）。码头在密歇根大道桥；就近停在停车楼，步行一小段平路即到。船上有遮阳和座位，工作人员协助上船。带件薄外套——水上可能有风。请在手机上备好订票确认/电子票。",
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
    "bahai-temple": {
      emoji: "🕌",
      name: { en: "Baha'i House of Worship", zh: "巴哈伊灵曦堂" },
      area: { en: "Wilmette (near the hotel)", zh: "威尔米特（近酒店）" },
      summary: {
        en: "A serene domed temple and gardens by the lake — a calm, free last-morning stop.",
        zh: "湖畔宁静的圆顶圣殿与花园——宁静、免费的最后一个上午。",
      },
      intro: {
        en: "About 15 minutes from the hotel, the Baha'i House of Worship in Wilmette is one of the most beautiful and peaceful places on Chicago's North Shore. A gleaming white nine-sided dome rises above formal gardens and fountains, open to visitors of every background, free of charge. It's a gentle, unhurried way to spend the last morning before the flight.",
        zh: "距酒店约15分钟，威尔米特的巴哈伊灵曦堂是芝加哥北岸最美丽、最宁静的地方之一。洁白闪耀的九面圆顶高踞于规整的花园与喷泉之上，向各种背景的访客免费开放。这是航班前最后一个上午轻松从容的好去处。",
      },
      story: {
        en: "The Baha'i House of Worship in Wilmette is the oldest surviving Baha'i temple in the world and the only one in the United States. Its cornerstone was laid in 1912 and the building was dedicated in 1953, after decades of work.\n\nLike all Baha'i Houses of Worship, it has nine sides and nine entrances, symbolizing the unity of humanity and the welcome of people from all directions and all faiths. The intricate white surface, cast in concrete with clear and white quartz, is covered in lace-like patterns that weave together symbols of the world's great religions.\n\nInside, a quiet domed auditorium rises nearly 140 feet, with no clergy, sermons or rituals — just a peaceful space for prayer and reflection, open to all. Formal gardens with fountains radiate from each of the nine sides.\n\nThe temple sits near the shore of Lake Michigan and is one of the architectural landmarks of the Chicago area, welcoming visitors of every belief to sit quietly, walk the gardens, and admire the craftsmanship.",
        zh: "威尔米特的巴哈伊灵曦堂是世界上现存最古老的巴哈伊圣殿，也是美国唯一的一座。其奠基石于1912年安放，历经数十年建造，于1953年落成启用。\n\n与所有巴哈伊灵曦堂一样，它有九个面和九个入口，象征人类的统一，以及对来自四面八方、各种信仰之人的欢迎。洁白的表面以混凝土掺入透明和白色石英浇筑，覆盖着蕾丝般精细的花纹，交织着世界各大宗教的符号。\n\n殿内，宁静的圆顶大厅高近140英尺，没有神职人员、布道或仪式——只是一处向所有人开放、供祈祷与省思的安宁空间。规整的花园与喷泉自九个面向外舒展。\n\n圣殿临近密歇根湖畔，是芝加哥地区的建筑地标之一，欢迎各种信仰的访客静坐、漫步花园、欣赏其工艺。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Bah%C3%A1%CA%BC%C3%AD_House_of_Worship_(Wilmette,_Illinois)",
      walk: { en: "Very gentle — flat gardens and a step-free auditorium.", zh: "非常轻松——平坦的花园与无台阶的大厅。" },
      hours: { en: "Open daily 6am–6pm; admission free.", zh: "每日6:00–18:00开放；免费入场。" },
      tips: {
        en: "Address: 100 Linden Ave, Wilmette. Free on-site parking. Dress is casual but respectful; keep voices low inside the auditorium. The visitor center below the temple has restrooms and a short film. Keep the visit relaxed and leave in time to pick up the girls from camp and return the car at O'Hare before the 6pm flight.",
        zh: "地址：100 Linden Ave, Wilmette。现场免费停车。着装随意但需得体；在大厅内请轻声。圣殿下方的访客中心有洗手间和一部短片。参观从容即可，并留足时间去滑冰营接女孩、在傍晚6点航班前于奥黑尔还车。",
      },
      coords: [42.0741, -87.6856],
      mapQuery: "Baha'i House of Worship, 100 Linden Ave Wilmette IL",
      links: [
        { label: { en: "Baha'i House of Worship", zh: "巴哈伊灵曦堂" }, url: "https://www.bahai.us/bahai-temple/" },
        { label: { en: "Open in Apple Maps", zh: "用 Apple 地图打开" }, url: "https://maps.apple.com/?q=Baha'i%20House%20of%20Worship%20Wilmette&ll=42.0741,-87.6856" },
      ],
      mustSee: [
        { emoji: "🕌", img: "bahai-dome.jpg", link: "https://www.bahai.us/bahai-temple/",
          caption: { en: "The nine-sided dome", zh: "九面圆顶" },
          desc: { en: "A gleaming white temple with nine sides and nine entrances, covered in lace-like carved patterns — striking from every angle.", zh: "洁白闪耀的圣殿，有九面九门，覆盖着蕾丝般的雕花——从任何角度看都令人惊叹。" } },
        { emoji: "⛲", img: "bahai-gardens.jpg", link: "https://www.bahai.us/bahai-temple/",
          caption: { en: "The gardens & fountains", zh: "花园与喷泉" },
          desc: { en: "Formal gardens with fountains radiate from each of the nine sides — flat paths and benches for a quiet stroll.", zh: "规整的花园与喷泉自九个面舒展——平坦的步道与长椅，宜静静漫步。" } },
        { emoji: "🙏", img: "bahai-interior.jpg", link: "https://www.bahai.us/bahai-temple/",
          caption: { en: "The quiet auditorium", zh: "宁静的大厅" },
          desc: { en: "A soaring, peaceful domed hall open to all — a calm place to sit for a few minutes. No rituals or services required.", zh: "高耸宁静、向所有人开放的圆顶大厅——静坐片刻的安宁之地。无需仪式或礼拜。" } },
      ],
    },
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
        title: { en: "✈️ Arrival & Northwestern (Wed Jul 8)", zh: "✈️ 抵达与西北大学（7月8日 周三）" },
        body: {
          en: "United flight UA 2800 lands at O'Hare (ORD) around 9am. Pick up the rental car, then drive ~35 min to Northwestern in Evanston. Official campus tour 12–1pm (everyone except the grandparents), then the Engineering (McCormick) tour for Bridget and Sarah. The grandparents — and Brooke, during the engineering tour — wait at the air-conditioned Norris University Center. Check in at the hotel in the evening.",
          zh: "美联航 UA 2800 航班于上午9点左右抵达奥黑尔机场（ORD）。取租车后开约35分钟到埃文斯顿的西北大学。中午12–1点官方校园导览（除爷爷奶奶外全体参加），随后是 Bridget 和 Sarah 的工程学院（McCormick）导览。爷爷奶奶——以及工程导览期间的 Brooke——在有空调的诺里斯学生中心等候。傍晚入住酒店。",
        },
        mapQuery: "Norris University Center, 1999 Campus Dr Evanston IL",
      },
      {
        title: { en: "🚗 UIUC Day Trip (Thu Jul 9)", zh: "🚗 伊利诺伊大学一日游（7月9日 周四）" },
        body: {
          en: "About 2h30 each way (≈140 miles, mostly I-57). Two tours: campus 10–12:30 and engineering 1:30–3:45, lunch in between. Leave by 7:00am to park before the 10am start. Brooke and the grandparents wait at the cool Illini Union. Plan one rest stop each way at an Illinois highway oasis; keep water and snacks in the car and don't rush.",
          zh: "单程约2小时30分（约140英里，主要走57号州际公路）。两场导览：校园10:00–12:30、工程1:30–3:45，中间午餐。建议上午7:00前出发，在10点开始前停好车。Brooke 和爷爷奶奶在凉爽的伊利尼联合楼等候。往返各在伊利诺伊高速“绿洲”服务区休息一次；车上备好水和零食，不要赶路。",
        },
        mapQuery: "Illini Union, 1401 W Green St Urbana IL",
      },
      {
        title: { en: "🎓 UChicago & Botanic Garden (Fri Jul 10)", zh: "🎓 芝加哥大学与植物园（7月10日 周五）" },
        body: {
          en: "Morning admissions tour at the University of Chicago in Hyde Park, 8:30–11:30 (leave the hotel ~7:30; grandparents rest at the hotel). Back by early afternoon to drop Brooke and Sarah at skating camp by 2:30. Then a relaxed afternoon at the Chicago Botanic Garden in Glencoe, 10 min from the hotel.",
          zh: "上午在海德公园参加芝加哥大学招生导览，8:30–11:30（约7:30离开酒店；爷爷奶奶在酒店休息）。下午早些回来，于2:30前送 Brooke 和 Sarah 去滑冰营。随后到格伦科的芝加哥植物园度过轻松的下午，距酒店10分钟。",
        },
        mapQuery: "University of Chicago, 5801 S Ellis Ave Chicago",
      },
      {
        title: { en: "⛸️ Skating Camp (Fri 2:30 – Sun)", zh: "⛸️ 滑冰营（周五2:30 – 周日）" },
        body: {
          en: "Brooke and Sarah's skating camp runs from Friday 2:30pm through Sunday afternoon, near Northbrook. This frees Dad, Bridget and the grandparents for the Saturday river cruise and downtown, and a gentle Sunday-morning outing. Confirm exact drop-off and pick-up times the day before, and check when camp ends Sunday so you can leave for the airport in good time.",
          zh: "Brooke 和 Sarah 的滑冰营从周五下午2:30持续到周日下午，地点在诺斯布鲁克附近。这样爸爸、Bridget 和爷爷奶奶就能在周六游船与进城，以及周日上午轻松出游。请提前一天确认接送时间，并确认周日滑冰营的结束时间，以便从容出发去机场。",
        },
        mapQuery: "",
      },
      {
        title: { en: "🚤 Saturday Downtown (Sat Jul 11)", zh: "🚤 周六进城（7月11日 周六）" },
        body: {
          en: "Booked architecture river cruise 10:00–11:30am — arrive at the Michigan Avenue Bridge dock by 9:30 (leave the hotel ~8:30). Park in a garage near the dock. Then Chinatown for dim sum (Chinatown Square lot off Archer Ave), and the Field Museum / Museum Campus (Soldier Field North Garage). Have the cruise tickets ready on your phone.",
          zh: "已预订建筑游船 10:00–11:30——请9:30前到达密歇根大道桥码头（约8:30离开酒店）。就近停在码头附近的停车楼。之后到唐人街吃点心（阿彻大道旁的华埠广场停车场），再去菲尔德博物馆／博物馆园区（士兵球场北侧停车楼）。请在手机上备好游船电子票。",
        },
        mapQuery: "Chicago Architecture Center River Cruise dock, 112 E Wacker Dr Chicago",
      },
      {
        title: { en: "🕌 Sunday & Departure (Sun Jul 12)", zh: "🕌 周日与返程（7月12日 周日）" },
        body: {
          en: "A gentle morning at the Baha'i House of Worship in Wilmette (100 Linden Ave, ~15 min, free). Pick up the girls when camp ends in the afternoon, fill the gas tank, return the rental car at O'Hare, and arrive by ~3:30pm for the 6pm flight.",
          zh: "上午轻松游览威尔米特的巴哈伊灵曦堂（100 Linden Ave，约15分钟，免费）。下午滑冰营结束后接上女孩，加满油，在奥黑尔机场还车，约下午3:30抵达机场赶傍晚6点的航班。",
        },
        mapQuery: "Baha'i House of Worship, 100 Linden Ave Wilmette IL",
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
