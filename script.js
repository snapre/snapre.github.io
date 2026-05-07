const stops = [
  {
    name: "杭州",
    lat: 30.2741,
    lng: 120.1551,
    date: "4月10日",
    drive: "约490公里",
    tag: "启程",
    sights: ["西湖出发", "长途北上", "蚌埠夜宿"],
    foods: ["海底捞"],
    egg: "从杭州出发。导航终点是蚌埠，但蚌埠只是第一个坐标。真正的目的，是在中国地图上画一个环。",
  },
  {
    name: "蚌埠",
    lat: 32.9163,
    lng: 117.3897,
    date: "4月11日",
    drive: "约480公里",
    tag: "淮河短停",
    sights: ["珍珠女雕像", "龙子湖公园", "南北分界线雕塑", "蚌埠市博物馆"],
    foods: ["烧饼夹里脊", "淮河小吃"],
    egg: "第一晚落在淮河边。珍珠女、龙子湖、南北分界线像几枚路标，提醒你们已经离开江南。",
  },
  {
    name: "郑州",
    lat: 34.7466,
    lng: 113.6254,
    date: "4月11日-4月13日",
    drive: "连住两晚",
    tag: "中原补给",
    sights: ["河南省博物馆", "郑州记忆1952油化厂文化街区"],
    foods: ["郑州烩面", "眷茶", "巧媳妇手擀面", "伟伟杯酒酿"],
    egg: "郑州让旅程第一次停下来。河南博物院把三千年摊开，烩面和酒酿把长途驾驶重新填满。",
  },
  {
    name: "洛阳",
    lat: 34.6197,
    lng: 112.454,
    date: "4月13日",
    drive: "约136公里",
    tag: "神都入场",
    sights: ["白马寺", "龙门石窟", "应天门"],
    foods: ["洛阳水席", "牛肉汤", "盛唐夜色"],
    egg: "龙门的卢舍那大佛低垂着眼，看了伊河水一千五百年。你们只是开车路过，却被她看见。",
  },
  {
    name: "登封",
    lat: 34.4539,
    lng: 113.0506,
    date: "4月14日",
    drive: "山路游览",
    tag: "少林嵩山",
    sights: ["少林寺", "嵩山书册崖"],
    foods: ["虎牙炒鸡"],
    egg: "从洛阳切进嵩山，城市声浪突然被山吸走。少林寺和书册崖让这段路有了石头的硬度。",
  },
  {
    name: "兰考",
    lat: 34.8223,
    lng: 114.8213,
    date: "4月15日",
    drive: "洛阳折返后东行",
    tag: "牡丹之后",
    sights: ["王城公园牡丹", "兰考夜宿"],
    foods: ["虎牙炒鸡", "小方茶卖铺"],
    egg: "折返洛阳看牡丹，再向东去兰考。这不是回头路，是路线在河南腹地打出的一个漂亮回旋。",
  },
  {
    name: "开封",
    lat: 34.7972,
    lng: 114.3076,
    date: "4月16日",
    drive: "途经开封",
    tag: "汴梁一日",
    sights: ["焦裕禄纪念馆", "清明上河园", "大相国寺"],
    foods: ["兰考驴肉", "艾青伤心凉皮"],
    egg: "兰考到开封，中原的叙事从焦裕禄纪念馆切到汴梁城。现实和古画在同一天里并排出现。",
  },
  {
    name: "安阳",
    lat: 36.0976,
    lng: 114.3924,
    date: "4月16日-4月17日",
    drive: "北上住宿",
    tag: "甲骨回声",
    sights: ["殷墟博物馆", "殷墟王宫遗址", "袁林"],
    foods: ["道口烧鸡", "扁粉菜"],
    egg: "殷墟把时间推回三千年前。甲骨文的刻痕还嵌在龟甲上，问题没人记得，答案还在。",
  },
  {
    name: "邯郸",
    lat: 36.6256,
    lng: 114.5391,
    date: "4月17日-4月18日",
    drive: "约69公里后再转场480公里",
    tag: "赵都转场",
    sights: ["邯郸市博物馆", "丛台公园", "学步桥", "赵都遗风"],
    foods: ["邯郸本地小吃"],
    egg: "邯郸像一个短暂停顿。赵都、丛台、学步桥之后，真正的长途开始把你们往山里推。",
  },
  {
    name: "五台山",
    lat: 39.008,
    lng: 113.596,
    date: "4月18日-4月19日",
    drive: "约480公里抵达，后转场388公里",
    tag: "5-15℃多云",
    sights: ["五台山景区", "显通寺", "塔院寺"],
    foods: ["台蘑", "烤姥姥", "面饺", "山中冷空气"],
    egg: "海拔拉高，气温骤降。五台山的云不是云，是撞进山谷的白色巨兽，金顶在雾里浮沉。",
  },
  {
    name: "隰县",
    lat: 36.692,
    lng: 110.935,
    date: "4月19日-4月20日",
    drive: "约388公里后继续310公里",
    tag: "黄土小城",
    sights: ["小西天", "鼓楼", "千佛庵"],
    foods: ["隰县面皮", "碗托", "大卷饼", "黄土碳水"],
    egg: "隰县小西天像突然打开的隐藏宝盒。黄土高原的外壳朴素，里面却藏着密不透风的颜色。",
  },
  {
    name: "壶口瀑布",
    lat: 36.147,
    lng: 110.443,
    date: "4月20日",
    drive: "隰县至延安途中",
    tag: "黄河轰鸣",
    sights: ["壶口瀑布", "黄河峡谷", "孟门山"],
    foods: ["洋芋擦擦", "山西刀削面", "馍馍"],
    egg: "壶口不给你准备时间。黄河水砸下去，泥浆飞溅，轰鸣震得胸腔发麻。这不是风景，是暴力。",
  },
  {
    name: "延安",
    lat: 36.585,
    lng: 109.489,
    date: "4月20日-4月21日",
    drive: "约320公里前往潼关",
    tag: "红色主题",
    sights: ["延安革命纪念馆", "王家坪", "枣园", "杨家岭旧址"],
    foods: ["延安八大碗", "小白菜熬洋芋", "油馍馍", "延安沾沾", "子长煎饼"],
    egg: "延安把路线从地理拉进历史。纪念馆、王家坪、枣园、杨家岭，让一段公路突然有了重量。",
  },
  {
    name: "潼关",
    lat: 34.544,
    lng: 110.247,
    date: "4月21日-4月22日",
    drive: "约320公里抵达",
    tag: "关河一线",
    sights: ["潼关古城", "黄河风景区", "岳渎阁"],
    foods: ["潼关肉夹馍", "凉皮"],
    egg: "从延安到潼关，车轮靠近关中。黄河、古关和肉夹馍一起出现，像进入下一章前的重音。",
  },
  {
    name: "风陵渡",
    lat: 34.625,
    lng: 110.31,
    date: "4月22日",
    drive: "途经渡口",
    tag: "黄河渡口",
    sights: ["风陵渡口", "黄河岸线", "渡口公路"],
    foods: ["羊肉泡馍"],
    egg: "风陵渡现实里安静得像睡着了。黄河拐弯，村庄和农田铺开，武侠世界在这里和真实世界重叠。",
  },
  {
    name: "华山",
    lat: 34.483,
    lng: 110.083,
    date: "4月22日",
    drive: "潼关至蓝田途中",
    tag: "险峰电门",
    sights: ["华山景区", "西峰", "北峰索道"],
    foods: ["华山附近羊肉泡馍"],
    egg: "华山的花岗岩绝壁在阳光下泛白。栈道挂在峭壁上，风很大，脚下是几百米的垂直落差。",
  },
  {
    name: "蓝田",
    lat: 34.151,
    lng: 109.324,
    date: "4月22日-4月23日",
    drive: "前往咸阳",
    tag: "秦岭入口",
    sights: ["水陆庵", "蓝田县住宿", "秦岭山色"],
    foods: ["蓝田印象油泼鱼"],
    egg: "蓝田是进入长安前的缓冲。秦岭的影子压下来，水陆庵和油泼鱼给关中段落加了注脚。",
  },
  {
    name: "西安",
    lat: 34.3416,
    lng: 108.9398,
    date: "4月23日",
    drive: "经西安至咸阳",
    tag: "长安穿越",
    sights: ["秦始皇兵马俑", "西安城区", "关中平原"],
    foods: ["关中面食"],
    egg: "兵马俑面朝东方，仿佛随时会眨眼。帝国两年就碎了，陶俑却站了两千年。",
  },
  {
    name: "咸阳",
    lat: 34.3296,
    lng: 108.7089,
    date: "4月23日-4月24日",
    drive: "约620公里至九寨沟",
    tag: "长距离转场",
    sights: ["咸阳夜宿", "经甘肃陇南", "秦岭蜀道"],
    foods: ["青稞饼", "青稞酒", "牦牛肉火锅", "冷夜热锅"],
    egg: "从咸阳到九寨沟，是一次硬转场。翻秦岭、穿陇南，补能窗口提前锁死，不是在冒险，是在执行。",
  },
  {
    name: "陇南",
    lat: 33.401,
    lng: 104.922,
    date: "4月24日",
    drive: "咸阳至九寨沟途中",
    tag: "甘肃山路",
    sights: ["陇南山地", "转场公路", "白龙江流域"],
    foods: ["路餐补给"],
    egg: "陇南不是长停点，却是关键折点。它把关中平原接到九寨沟山水之间，像地图上的暗扣。",
  },
  {
    name: "九寨沟",
    lat: 33.252,
    lng: 104.243,
    date: "4月24日-4月26日",
    drive: "景区休整后约305公里至绵阳",
    tag: "海子蓝",
    sights: ["九寨沟风景区", "五花海", "诺日朗瀑布", "长海"],
    foods: ["青稞饼", "青稞酒", "牦牛肉火锅"],
    egg: "九寨沟的水是另一个物种。不是水，是溶解的蓝宝石，是液态翡翠，是地质化学作弊的结果。",
  },
  {
    name: "绵阳",
    lat: 31.467,
    lng: 104.679,
    date: "4月26日",
    drive: "约305公里后继续乐山",
    tag: "川北转场",
    sights: ["圣水寺", "罗汉寺", "越王楼"],
    foods: ["绵阳米粉", "路途补给"],
    egg: "从九寨沟出来，山路慢慢松开。绵阳像一口气，圣水寺和罗汉寺让南下前的节奏重新落地。",
  },
  {
    name: "乐山",
    lat: 29.552,
    lng: 103.766,
    date: "4月26日-4月27日",
    drive: "前往峨眉山",
    tag: "大佛江风",
    sights: ["乐山大佛", "嘉定坊", "苏稽古镇"],
    foods: ["六月雪干锅", "鸡丝凉面", "纸皮烧麦", "钵钵鸡", "跷脚牛肉"],
    egg: "乐山把四川段彻底打开。大佛临江，钵钵鸡的红油在竹签上发亮，跷脚牛肉的汤热得刚好。",
  },
  {
    name: "峨眉山",
    lat: 29.52,
    lng: 103.333,
    date: "4月27日",
    drive: "游览后前往重庆",
    tag: "大雾山路",
    sights: ["峨眉山景区", "金顶", "山间雾气"],
    foods: ["乐山跷脚牛肉", "烤鱼"],
    egg: "峨眉山给了大雾。远处什么都看不见，只能看见脚下三步，然后三步又三步。",
  },
  {
    name: "重庆",
    lat: 29.563,
    lng: 106.551,
    date: "4月27日-4月28日",
    drive: "约810公里至岳阳",
    tag: "返程起点",
    sights: ["西南大学心理学部", "山城道路", "重庆夜色", "810公里返程"],
    foods: ["耙牛肉火锅", "重庆火锅", "巧克力补给"],
    egg: "返程从重庆开始。810 公里，一天拉到岳阳。她盯路况、选充电站，在你犯困时递来巧克力。",
  },
  {
    name: "岳阳",
    lat: 29.357,
    lng: 113.128,
    date: "4月28日-4月29日",
    drive: "约320公里至景德镇",
    tag: "洞庭湖面",
    sights: ["岳阳楼", "洞庭湖景区", "君山岛"],
    foods: ["洞庭湖鱼", "返程简餐", "湖风"],
    egg: "岳阳楼真正的建筑材料不是木头，是文字。洞庭湖面铺开，回家的方向终于变得清晰。",
  },
  {
    name: "景德镇",
    lat: 29.268,
    lng: 117.178,
    date: "4月29日-4月30日",
    drive: "约480公里返回杭州",
    tag: "瓷都收尾",
    sights: ["景德镇夜宿", "陶溪川", "御窑博物馆"],
    foods: ["冷粉", "碱水粑", "饺子粑"],
    egg: "景德镇是最后一夜。瓷都的窑火和烈焰红车漆彼此照应，像返程前最后一次亮灯。",
  },
  {
    name: "杭州",
    lat: 30.2741,
    lng: 120.1551,
    date: "4月30日",
    drive: "约480公里",
    tag: "顺利返程",
    sights: ["返回杭州", "行程收官", "华东落点"],
    foods: ["回家后的杭州味道"],
    egg: "4月30日，景德镇到杭州。带着七千公里的尘土、几千张照片、一堆舔干净的碗，回到出发点。",
  },
];

const driveToggle = document.querySelector("#driveToggle");
const shareGenerate = document.querySelector("#shareGenerate");
const shareRegenerate = document.querySelector("#shareRegenerate");
const shareDownload = document.querySelector("#shareDownload");
const shareModal = document.querySelector("#shareModal");
const sharePreview = document.querySelector("#sharePreview");
const timelineStrip = document.querySelector("#timelineStrip");
const panel = {
  index: document.querySelector("#panelIndex"),
  tag: document.querySelector("#panelTag"),
  city: document.querySelector("#panelCity"),
  meta: document.querySelector("#panelMeta"),
  egg: document.querySelector("#panelEgg"),
  sights: document.querySelector("#panelSights"),
  foods: document.querySelector("#panelFoods"),
};

const teslaLogoUrl = "./assets/tesla-t-logo.svg";

document.querySelector("#cityCount").textContent = stops.length;

let activeIndex = 0;
let progress = 0;
let isDriving = true;
let lastTime = 0;
let totalDistance = 0;
let stopMarkers = [];
let labelMarkers = [];
let activeCards = [];
let segmentDistances = [];
let stopDistanceRatios = [];
let routeGlowLine;
let routeLine;
let progressLine;
let carMarker;
let lastFocusedIndex = -1;
let lastFollowPanTime = 0;
let lastFocusTime = 0;
let shareImageUrl = "";
let autoShareShown = false;
const h5Query = window.matchMedia("(max-width: 620px)");
const focusZoom = h5Query.matches ? 8 : 7;

const map = L.map("routeMap", {
  zoomControl: false,
  attributionControl: true,
  preferCanvas: false,
}).setView([33.8, 111.8], 5);

L.control.zoom({ position: "bottomleft" }).addTo(map);

L.tileLayer("https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
  maxZoom: 18,
  subdomains: "1234",
  attribution: '&copy; <a href="https://lbs.amap.com/">高德地图</a>',
  crossOrigin: true,
  detectRetina: true,
  errorTileUrl:
    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Crect width='256' height='256' fill='%23101722'/%3E%3Cpath d='M0 128H256M128 0V256' stroke='%23232f42'/%3E%3C/svg%3E",
}).addTo(map);

function outOfChina(lat, lng) {
  return lng < 72.004 || lng > 137.8347 || lat < 0.8293 || lat > 55.8271;
}

function transformLat(x, y) {
  let ret = -100 + 2 * x + 3 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
  ret += ((20 * Math.sin(6 * x * Math.PI) + 20 * Math.sin(2 * x * Math.PI)) * 2) / 3;
  ret += ((20 * Math.sin(y * Math.PI) + 40 * Math.sin((y / 3) * Math.PI)) * 2) / 3;
  ret += ((160 * Math.sin((y / 12) * Math.PI) + 320 * Math.sin((y * Math.PI) / 30)) * 2) / 3;
  return ret;
}

function transformLng(x, y) {
  let ret = 300 + x + 2 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
  ret += ((20 * Math.sin(6 * x * Math.PI) + 20 * Math.sin(2 * x * Math.PI)) * 2) / 3;
  ret += ((20 * Math.sin(x * Math.PI) + 40 * Math.sin((x / 3) * Math.PI)) * 2) / 3;
  ret += ((150 * Math.sin((x / 12) * Math.PI) + 300 * Math.sin((x / 30) * Math.PI)) * 2) / 3;
  return ret;
}

function wgs84ToGcj02(lat, lng) {
  if (outOfChina(lat, lng)) {
    return { lat, lng };
  }
  const a = 6378245;
  const ee = 0.00669342162296594323;
  let dLat = transformLat(lng - 105, lat - 35);
  let dLng = transformLng(lng - 105, lat - 35);
  const radLat = (lat / 180) * Math.PI;
  let magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180) / (((a * (1 - ee)) / (magic * sqrtMagic)) * Math.PI);
  dLng = (dLng * 180) / ((a / sqrtMagic) * Math.cos(radLat) * Math.PI);
  return { lat: lat + dLat, lng: lng + dLng };
}

const displayStops = stops.map((stop) => ({ ...stop, ...wgs84ToGcj02(stop.lat, stop.lng) }));
const routeLatLngs = displayStops.map((stop) => L.latLng(stop.lat, stop.lng));
const routeBounds = L.latLngBounds(routeLatLngs);

routeGlowLine = L.polyline(routeLatLngs, {
  className: "route-glow-line",
  color: "#ff3b2f",
  weight: 18,
  opacity: 0.36,
  lineCap: "round",
  lineJoin: "round",
  interactive: false,
}).addTo(map);

routeLine = L.polyline(routeLatLngs, {
  className: "route-dash-line",
  color: "#ffe9c7",
  weight: 4,
  opacity: 0.78,
  dashArray: "3 18",
  lineCap: "round",
  lineJoin: "round",
  interactive: false,
}).addTo(map);

progressLine = L.polyline([routeLatLngs[0]], {
  className: "route-progress-line",
  color: "#ff3b2f",
  weight: 8,
  opacity: 0.96,
  lineCap: "round",
  lineJoin: "round",
  interactive: false,
}).addTo(map);

function padIndex(index) {
  return String(index + 1).padStart(2, "0");
}

function renderList(target, items) {
  target.replaceChildren(
    ...items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    }),
  );
}

function markerIcon(index) {
  return L.divIcon({
    className: "",
    html: `<div class="stop-marker" data-stop="${index}" aria-hidden="true"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
}

function labelIcon(stop) {
  return L.divIcon({
    className: "",
    html: `<div class="stop-label">${stop.name}</div>`,
    iconSize: [70, 24],
    iconAnchor: [-13, 30],
  });
}

function carIcon() {
  return L.divIcon({
    className: "",
    html: `
      <div class="tesla-marker">
        <span class="tesla-marker__halo"></span>
        <img class="tesla-marker__image" src="${teslaLogoUrl}" alt="" />
      </div>
    `,
    iconSize: [58, 74],
    iconAnchor: [29, 37],
  });
}

function setMarkerActive(index) {
  stopMarkers.forEach((marker, markerIndex) => {
    const element = marker.getElement()?.querySelector(".stop-marker");
    element?.classList.toggle("is-active", markerIndex === index);
  });
  labelMarkers.forEach((marker, markerIndex) => {
    const element = marker.getElement()?.querySelector(".stop-label");
    element?.classList.toggle("is-active", markerIndex === index);
  });
  activeCards.forEach((card, cardIndex) => {
    const isActive = cardIndex === index;
    card.classList.toggle("is-active", isActive);
    if (isActive) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  });
}

function focusStop(index, zoom = focusZoom) {
  lastFocusedIndex = index;
  lastFocusTime = performance.now();
  const stop = displayStops[index];
  map.flyTo([stop.lat, stop.lng], Math.max(map.getZoom(), zoom), {
    animate: true,
    duration: 0.9,
    easeLinearity: 0.22,
  });
}

function selectStop(index, shouldMoveCar = false, shouldFocus = false) {
  activeIndex = index;
  const stop = stops[index];
  panel.index.textContent = padIndex(index);
  panel.tag.textContent = stop.tag;
  panel.city.textContent = stop.name;
  panel.meta.replaceChildren(
    ...[stop.date, stop.drive].filter(Boolean).map((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      return span;
    }),
  );
  panel.egg.textContent = stop.egg;
  renderList(panel.sights, stop.sights);
  renderList(panel.foods, stop.foods);
  setMarkerActive(index);

  if (shouldMoveCar) {
    progress = index / (stops.length - 1);
    updateCar();
    focusStop(index);
  } else if (shouldFocus) {
    focusStop(index);
  }
}

function makeTimelineCard(stop, index) {
  const button = document.createElement("button");
  button.className = "city-card";
  button.type = "button";
  button.innerHTML = `<span>${padIndex(index)}</span><strong>${stop.name}</strong><small>${stop.date} · ${stop.tag}</small>`;
  button.addEventListener("click", () => selectStop(index, true));
  button.addEventListener("pointerenter", () => selectStop(index));
  return button;
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawTag(ctx, text, x, y, color = "rgba(255,255,255,.12)", textColor = "#f7f1e6") {
  ctx.font = "34px Songti SC, STSong, serif";
  const width = ctx.measureText(text).width + 42;
  roundedRect(ctx, x, y, width, 56, 28);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,.16)";
  ctx.stroke();
  ctx.fillStyle = textColor;
  ctx.fillText(text, x + 21, y + 38);
  return width;
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = Infinity) {
  const chars = [...text];
  let line = "";
  let lines = 0;
  for (const char of chars) {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      y += lineHeight;
      lines += 1;
      line = char;
      if (lines >= maxLines) return y;
    } else {
      line = test;
    }
  }
  if (line && lines < maxLines) {
    ctx.fillText(line, x, y);
    y += lineHeight;
  }
  return y;
}

function getPosterPoint(stop, bounds, box) {
  const x = box.x + ((stop.lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * box.width;
  const y = box.y + (1 - (stop.lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * box.height;
  return { x, y };
}

function projectMercator(lat, lng, zoom) {
  const tileSize = 256;
  const scale = tileSize * 2 ** zoom;
  const sin = Math.sin((lat * Math.PI) / 180);
  return {
    x: ((lng + 180) / 360) * scale,
    y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * scale,
  };
}

function createMapTransform(rawStops, box, zoom) {
  const projected = rawStops.map((stop) => projectMercator(stop.lat, stop.lng, zoom));
  const minX = Math.min(...projected.map((point) => point.x));
  const maxX = Math.max(...projected.map((point) => point.x));
  const minY = Math.min(...projected.map((point) => point.y));
  const maxY = Math.max(...projected.map((point) => point.y));
  const sourceWidth = maxX - minX;
  const sourceHeight = maxY - minY;
  const scale = Math.min((box.width * 0.84) / sourceWidth, (box.height * 0.84) / sourceHeight);
  const drawnWidth = sourceWidth * scale;
  const drawnHeight = sourceHeight * scale;
  return {
    zoom,
    minX,
    maxX,
    minY,
    maxY,
    scale,
    offsetX: (box.width - drawnWidth) / 2,
    offsetY: (box.height - drawnHeight) / 2,
  };
}

function mapPosterPoint(stop, transform, box) {
  const point = projectMercator(stop.lat, stop.lng, transform.zoom);
  return {
    x: box.x + transform.offsetX + (point.x - transform.minX) * transform.scale,
    y: box.y + transform.offsetY + (point.y - transform.minY) * transform.scale,
  };
}

function loadTile(url, timeout = 4200) {
  return new Promise((resolve) => {
    const image = new Image();
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(result);
    };
    const timer = window.setTimeout(() => finish(null), timeout);
    image.crossOrigin = "anonymous";
    image.referrerPolicy = "no-referrer";
    image.onload = () => finish(image);
    image.onerror = () => finish(null);
    image.src = url;
  });
}

function loadImage(url, timeout = 3000) {
  return new Promise((resolve) => {
    const image = new Image();
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(result);
    };
    const timer = window.setTimeout(() => finish(null), timeout);
    image.onload = () => finish(image);
    image.onerror = () => finish(null);
    image.src = url;
  });
}

function drawTeslaMark(ctx, centerX, centerY, size, color = "#e82127") {
  const viewBox = { x: -38.0376, y: -63.1255, width: 329.6592, height: 378.753 };
  const scale = size / viewBox.height;
  const paths = [
    "M126.806 252.502l35.476-199.519c33.815 0 44.481 3.708 46.021 18.843 0 0 22.684-8.458 34.125-25.636-44.646-20.688-89.505-21.621-89.505-21.621l-26.176 31.882.059-.004-26.176-31.883s-44.86.934-89.5 21.622c11.431 17.178 34.124 25.636 34.124 25.636 1.549-15.136 12.202-18.844 45.79-18.868l35.762 199.548",
    "M126.792 15.36c36.09-.276 77.399 5.583 119.687 24.014 5.652-10.173 7.105-14.669 7.105-14.669C207.357 6.416 164.066.157 126.787 0 89.51.157 46.221 6.417 0 24.705c0 0 2.062 5.538 7.1 14.669 42.28-18.431 83.596-24.29 119.687-24.014h.005",
  ];

  ctx.save();
  ctx.translate(centerX - (viewBox.width * scale) / 2, centerY - (viewBox.height * scale) / 2);
  ctx.scale(scale, scale);
  ctx.translate(-viewBox.x, -viewBox.y);
  ctx.fillStyle = color;
  paths.forEach((path) => ctx.fill(new Path2D(path)));
  ctx.restore();
}

async function drawRealMapTiles(ctx, transform, box) {
  const tileSize = 256;
  const visibleMinX = transform.minX - transform.offsetX / transform.scale;
  const visibleMaxX = transform.maxX + (box.width - transform.offsetX - (transform.maxX - transform.minX) * transform.scale) / transform.scale;
  const visibleMinY = transform.minY - transform.offsetY / transform.scale;
  const visibleMaxY = transform.maxY + (box.height - transform.offsetY - (transform.maxY - transform.minY) * transform.scale) / transform.scale;
  const minTileX = Math.floor(visibleMinX / tileSize) - 1;
  const maxTileX = Math.ceil(visibleMaxX / tileSize) + 1;
  const minTileY = Math.floor(visibleMinY / tileSize) - 1;
  const maxTileY = Math.ceil(visibleMaxY / tileSize) + 1;
  const maxTile = 2 ** transform.zoom;
  const tasks = [];

  for (let x = minTileX; x <= maxTileX; x += 1) {
    for (let y = minTileY; y <= maxTileY; y += 1) {
      if (x < 0 || y < 0 || x >= maxTile || y >= maxTile) continue;
      tasks.push(
        loadTile(`https://tile.openstreetmap.org/${transform.zoom}/${x}/${y}.png`).then((image) => ({ image, x, y })),
      );
    }
  }

  const tiles = await Promise.all(tasks);
  tiles.forEach(({ image, x, y }) => {
    if (!image) return;
    const dx = box.x + transform.offsetX + (x * tileSize - transform.minX) * transform.scale;
    const dy = box.y + transform.offsetY + (y * tileSize - transform.minY) * transform.scale;
    const size = tileSize * transform.scale;
    ctx.drawImage(image, dx, dy, size + 1, size + 1);
  });
}

function drawShareRouteFromPoints(ctx, points) {
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.strokeStyle = "rgba(255, 59, 47, .28)";
  ctx.lineWidth = 42;
  ctx.shadowColor = "rgba(255, 59, 47, .95)";
  ctx.shadowBlur = 54;
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = "#ff342c";
  ctx.lineWidth = 13;
  ctx.stroke();
  ctx.setLineDash([12, 28]);
  ctx.strokeStyle = "rgba(255, 239, 205, .9)";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.setLineDash([]);
  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.fillStyle = index === 0 || index === points.length - 1 ? "#ff3b2f" : "#ffd166";
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 20;
    ctx.arc(point.x, point.y, 9, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

function drawShareRoute(ctx, bounds, box) {
  const points = displayStops.map((stop) => getPosterPoint(stop, bounds, box));
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.strokeStyle = "rgba(255, 59, 47, .24)";
  ctx.lineWidth = 34;
  ctx.shadowColor = "rgba(255, 59, 47, .9)";
  ctx.shadowBlur = 42;
  ctx.stroke();

  ctx.shadowBlur = 0;
  ctx.strokeStyle = "#ff3b2f";
  ctx.lineWidth = 10;
  ctx.stroke();

  ctx.setLineDash([8, 22]);
  ctx.strokeStyle = "rgba(255, 237, 202, .85)";
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.setLineDash([]);

  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.fillStyle = index === 0 || index === points.length - 1 ? "#ff3b2f" : "#ffd166";
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 18;
    ctx.arc(point.x, point.y, index === activeIndex ? 12 : 7, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();

  return points;
}

async function generateShareImage(useRealMapTiles = true) {
  const canvas = document.createElement("canvas");
  canvas.width = 3840;
  canvas.height = 2160;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 3840, 2160);
  gradient.addColorStop(0, "#09111d");
  gradient.addColorStop(0.45, "#101722");
  gradient.addColorStop(1, "#05070c");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 3840, 2160);

  for (let y = 0; y < 2160; y += 56) {
    ctx.strokeStyle = "rgba(255,255,255,.035)";
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(3840, y);
    ctx.stroke();
  }
  for (let x = 0; x < 3840; x += 56) {
    ctx.strokeStyle = "rgba(255,255,255,.03)";
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 2160);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(255, 59, 47, .18)";
  ctx.beginPath();
  ctx.arc(480, 250, 560, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(35, 213, 171, .13)";
  ctx.beginPath();
  ctx.arc(2920, 1650, 620, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#fff7e7";
  ctx.font = "900 112px Songti SC, STSong, serif";
  ctx.fillText("七千公里，二十一天，一辆特斯拉。", 110, 155);

  ctx.save();
  ctx.beginPath();
  ctx.arc(3650, 145, 82, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 248, 238, .96)";
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 59, 47, .82)";
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.shadowColor = "rgba(255, 59, 47, .75)";
  ctx.shadowBlur = 32;
  drawTeslaMark(ctx, 3650, 145, 118);
  ctx.restore();

  ctx.fillStyle = "#ffd166";
  ctx.font = "700 42px DIN Condensed, Arial Narrow, sans-serif";
  ctx.fillText("HANGZHOU ROUND TRIP · 2026.04.10 - 04.30 · ULTRA RED MODEL 3", 116, 238);

  const tagY = 292;
  let tagX = 110;
  ["7000+ 公里", "21 天", `${stops.length} 站`, "烈焰红 Model 3"].forEach((tag) => {
    tagX += drawTag(ctx, tag, tagX, tagY, "rgba(255, 255, 255, .1)") + 14;
  });

  const mapBox = { x: 95, y: 430, width: 2630, height: 1430 };
  const mapTransform = createMapTransform(stops, mapBox, 7);
  roundedRect(ctx, mapBox.x, mapBox.y, mapBox.width, mapBox.height, 34);
  ctx.fillStyle = "rgba(255,255,255,.055)";
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,.16)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.save();
  roundedRect(ctx, mapBox.x, mapBox.y, mapBox.width, mapBox.height, 34);
  ctx.clip();
  ctx.fillStyle = "#101722";
  ctx.fillRect(mapBox.x, mapBox.y, mapBox.width, mapBox.height);
  if (useRealMapTiles) {
    await drawRealMapTiles(ctx, mapTransform, mapBox);
  }
  ctx.fillStyle = "rgba(5, 8, 13, .34)";
  ctx.fillRect(mapBox.x, mapBox.y, mapBox.width, mapBox.height);
  ctx.strokeStyle = "rgba(255,255,255,.05)";
  for (let y = mapBox.y; y < mapBox.y + mapBox.height; y += 44) {
    ctx.beginPath();
    ctx.moveTo(mapBox.x, y);
    ctx.lineTo(mapBox.x + mapBox.width, y);
    ctx.stroke();
  }

  const routePoints = stops.map((stop) => mapPosterPoint(stop, mapTransform, mapBox));
  drawShareRouteFromPoints(ctx, routePoints);
  ctx.font = "700 30px Songti SC, STSong, serif";
  stops.forEach((stop, index) => {
    const point = routePoints[index];
    const label = index === 0 ? "杭州出发" : index === stops.length - 1 ? "杭州返程" : stop.name;
    const offsetY = index % 2 === 0 ? -24 : 40;
    const offsetX = index % 3 === 0 ? 18 : -10;
    ctx.strokeStyle = "rgba(5, 8, 13, .86)";
    ctx.lineWidth = 7;
    ctx.strokeText(label, point.x + offsetX, point.y + offsetY);
    ctx.fillStyle = "#fff7e7";
    ctx.fillText(label, point.x + offsetX, point.y + offsetY);
  });
  ctx.restore();

  const sideX = 2820;
  ctx.font = "700 62px Songti SC, STSong, serif";
  ctx.fillStyle = "#fff7e7";
  ctx.fillText("完整路线", sideX, 480);

  ctx.font = "34px Songti SC, STSong, serif";
  ctx.fillStyle = "rgba(247,241,230,.86)";
  wrapCanvasText(ctx, stops.map((stop) => stop.name).join(" → "), sideX, 550, 870, 50, 13);

  ctx.font = "700 56px Songti SC, STSong, serif";
  ctx.fillStyle = "#fff7e7";
  ctx.fillText("路线高光", sideX, 1165);
  ctx.font = "34px Songti SC, STSong, serif";
  ctx.fillStyle = "rgba(247,241,230,.86)";
  const highlights = [
    "殷墟：甲骨刻痕把时间推回三千年前",
    "龙门：卢舍那大佛看了伊河水一千五百年",
    "壶口：黄河不是风景，是仍在发生的地质暴力",
    "延安：纪念馆和旧址让一段公路突然有了重量",
    "华山：花岗岩绝壁在阳光下泛白，风从栈道下穿过",
    "兵马俑：帝国两年就碎了，陶俑却站了两千年",
    "九寨沟：水像溶解的蓝宝石和液态翡翠",
    "岳阳楼：真正的建筑材料不是木头，是文字",
  ];
  let y = 1230;
  highlights.forEach((line) => {
    y = wrapCanvasText(ctx, `· ${line}`, sideX, y, 850, 48, 2) + 10;
  });

  ctx.font = "700 52px Songti SC, STSong, serif";
  ctx.fillStyle = "#fff7e7";
  ctx.fillText("吃过什么", 110, 2030);
  const foods = ["郑州烩面", "虎牙炒鸡", "潼关肉夹馍", "延安八大碗", "牦牛肉火锅", "乐山跷脚牛肉", "钵钵鸡", "重庆火锅", "洞庭湖鱼"];
  let foodX = 365;
  let foodY = 1992;
  foods.forEach((food) => {
    const width = drawTag(ctx, food, foodX, foodY, "rgba(255, 255, 255, .09)");
    foodX += width + 14;
    if (foodX > 2640) {
      foodX = 365;
      foodY += 58;
    }
  });

  ctx.fillStyle = "rgba(247,241,230,.78)";
  ctx.font = "35px Songti SC, STSong, serif";
  wrapCanvasText(
    ctx,
    "从杭州出发，一路向北、向西，再经川渝、湖南、江西回到杭州。电车长途的本质不是勇气，是计算；而两个人能一起跑完这 21 天，是另一种答案。",
    sideX,
    1835,
    850,
    52,
    4,
  );

  ctx.fillStyle = "#ffd166";
  ctx.font = "700 30px DIN Condensed, Arial Narrow, sans-serif";
  ctx.fillText("REAL MAP BACKGROUND · GENERATED FROM THE ULTRA RED MODEL 3 ROADTRIP MAP", 2820, 2080);

  try {
    return canvas.toDataURL("image/png");
  } catch (error) {
    if (useRealMapTiles) {
      console.warn("Map tiles blocked canvas export, retrying poster without tile layer", error);
      return generateShareImage(false);
    }
    throw error;
  }
}

function openShareModal(url) {
  shareImageUrl = url;
  sharePreview.src = url;
  shareModal.classList.add("is-open");
  shareModal.setAttribute("aria-hidden", "false");
}

async function createSharePoster() {
  shareGenerate.disabled = true;
  shareRegenerate.disabled = true;
  shareGenerate.textContent = "生成中...";
  shareRegenerate.textContent = "生成中...";
  try {
    const url = await generateShareImage();
    openShareModal(url);
  } catch (error) {
    console.error("Failed to generate share poster", error);
    window.alert("分享图生成失败，请稍后重试。");
  } finally {
    shareGenerate.textContent = "生成分享图";
    shareRegenerate.textContent = "重新生成";
    shareGenerate.disabled = false;
    shareRegenerate.disabled = false;
  }
}

async function downloadSharePoster() {
  if (!shareImageUrl) {
    try {
      shareImageUrl = await generateShareImage();
    } catch (error) {
      console.error("Failed to generate share poster before download", error);
      window.alert("分享图生成失败，请稍后重试。");
      return;
    }
  }
  const link = document.createElement("a");
  link.href = shareImageUrl;
  link.download = "tesla-model3-7000km-roadtrip.png";
  link.click();
}

function interpolateLatLng(start, end, ratio) {
  return L.latLng(
    start.lat + (end.lat - start.lat) * ratio,
    start.lng + (end.lng - start.lng) * ratio,
  );
}

function getRoutePosition(ratio) {
  const targetDistance = ratio * totalDistance;
  let traveled = 0;

  for (let index = 0; index < segmentDistances.length; index += 1) {
    const segmentDistance = segmentDistances[index];
    if (targetDistance <= traveled + segmentDistance) {
      const segmentRatio = segmentDistance === 0 ? 0 : (targetDistance - traveled) / segmentDistance;
      const latlng = interpolateLatLng(routeLatLngs[index], routeLatLngs[index + 1], segmentRatio);
      return { latlng, segmentIndex: index };
    }
    traveled += segmentDistance;
  }

  return { latlng: routeLatLngs[routeLatLngs.length - 1], segmentIndex: routeLatLngs.length - 2 };
}

function getProgressLatLngs(ratio) {
  const targetDistance = ratio * totalDistance;
  const latlngs = [routeLatLngs[0]];
  let traveled = 0;

  for (let index = 0; index < segmentDistances.length; index += 1) {
    const segmentDistance = segmentDistances[index];
    if (targetDistance >= traveled + segmentDistance) {
      latlngs.push(routeLatLngs[index + 1]);
      traveled += segmentDistance;
      continue;
    }

    const segmentRatio = segmentDistance === 0 ? 0 : (targetDistance - traveled) / segmentDistance;
    latlngs.push(interpolateLatLng(routeLatLngs[index], routeLatLngs[index + 1], Math.max(0, segmentRatio)));
    break;
  }

  return latlngs;
}

function getNearestStopIndex(ratio) {
  let nearestIndex = 0;
  let nearestDistance = Infinity;
  stopDistanceRatios.forEach((stopRatio, index) => {
    const distance = Math.abs(stopRatio - ratio);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });
  return nearestIndex;
}

function getBearing(from, to) {
  const fromPoint = map.latLngToLayerPoint(from);
  const toPoint = map.latLngToLayerPoint(to);
  return Math.atan2(toPoint.y - fromPoint.y, toPoint.x - fromPoint.x) * (180 / Math.PI);
}

function rotateCar(angle) {
  const element = carMarker.getElement()?.querySelector(".tesla-marker");
  if (element) {
    element.style.transform = `scale(${h5Query.matches ? 0.82 : 1})`;
  }
}

function updateCar() {
  const { latlng, segmentIndex } = getRoutePosition(progress);
  const nextIndex = Math.min(segmentIndex + 1, routeLatLngs.length - 1);
  const angle = getBearing(latlng, routeLatLngs[nextIndex]);
  carMarker.setLatLng(latlng);
  rotateCar(angle);
  progressLine.setLatLngs(getProgressLatLngs(progress));

  const nearest = getNearestStopIndex(progress);
  if (nearest !== activeIndex) {
    selectStop(nearest);
  }
  if (nearest !== lastFocusedIndex) {
    focusStop(nearest);
  } else if (isDriving) {
    const now = performance.now();
    if (now - lastFollowPanTime > 450 && now - lastFocusTime > 1100) {
      lastFollowPanTime = now;
      map.panTo(latlng, {
        animate: true,
        duration: 0.38,
        easeLinearity: 0.22,
        noMoveStart: true,
      });
    }
  }
}

function animate(time) {
  if (!lastTime) lastTime = time;
  const delta = time - lastTime;
  lastTime = time;

  if (isDriving) {
    const nextProgress = (progress + delta / 220000) % 1;
    if (progress > 0.98 && nextProgress < 0.02 && !autoShareShown) {
      autoShareShown = true;
      createSharePoster();
    }
    progress = nextProgress;
    updateCar();
  }

  requestAnimationFrame(animate);
}

segmentDistances = routeLatLngs.slice(0, -1).map((latlng, index) => latlng.distanceTo(routeLatLngs[index + 1]));
totalDistance = segmentDistances.reduce((sum, distance) => sum + distance, 0);
stopDistanceRatios = routeLatLngs.map((_, index) => {
  const distance = segmentDistances.slice(0, index).reduce((sum, value) => sum + value, 0);
  return totalDistance === 0 ? 0 : distance / totalDistance;
});

stopMarkers = displayStops.map((stop, index) => {
  const marker = L.marker([stop.lat, stop.lng], {
    icon: markerIcon(index),
    keyboard: true,
    title: stop.name,
  }).addTo(map);
  marker.on("mouseover", () => selectStop(index));
  marker.on("click", () => selectStop(index, true));
  return marker;
});

labelMarkers = displayStops.map((stop) =>
  L.marker([stop.lat, stop.lng], {
    icon: labelIcon(stop),
    interactive: false,
    keyboard: false,
  }).addTo(map),
);

carMarker = L.marker(routeLatLngs[0], {
  icon: carIcon(),
  interactive: false,
  keyboard: false,
  zIndexOffset: 1000,
}).addTo(map);

activeCards = stops.map((stop, index) => makeTimelineCard(stop, index));
timelineStrip.append(...activeCards);

driveToggle.addEventListener("click", () => {
  isDriving = !isDriving;
  driveToggle.setAttribute("aria-pressed", String(isDriving));
  driveToggle.lastChild.textContent = isDriving ? " 自动巡航" : " 暂停巡航";
});

shareGenerate.addEventListener("click", createSharePoster);
shareRegenerate.addEventListener("click", createSharePoster);
shareDownload.addEventListener("click", downloadSharePoster);
shareModal.querySelectorAll("[data-share-close]").forEach((element) => {
  element.addEventListener("click", () => {
    shareModal.classList.remove("is-open");
    shareModal.setAttribute("aria-hidden", "true");
  });
});

map.fitBounds(routeBounds, { padding: [34, 34] });
selectStop(0);
updateCar();
requestAnimationFrame(animate);

window.addEventListener("resize", () => {
  map.invalidateSize({ pan: false });
});
