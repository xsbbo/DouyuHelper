// 创建容器
const container = document.createElement('div');
container.setAttribute('id', 'dy-helper');
const shadowDOM = container.attachShadow?.({ mode: 'open' }) || container;

// 创建菜单区域
const dyMenu = document.createElement('div');
dyMenu.setAttribute('id', 'dy-helper-menu');
const menuBtn = '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M199.111111 0h625.777778c109.795556 0 199.111111 89.315556 199.111111 199.111111v625.777778c0 109.795556-89.315556 199.111111-199.111111 199.111111H199.111111c-109.795556 0-199.111111-89.315556-199.111111-199.111111V199.111111C0 89.315556 89.315556 0 199.111111 0z" fill="#FE7702"></path><path d="M804.408889 327.111111c54.044444-51.768889 138.24-63.715556 138.24-63.715555s-5.12-63.715556-85.902222-90.453334c-116.053333-36.977778-180.337778 16.497778-180.337778 16.497778s-145.066667-110.933333-290.133333-35.271111-247.466667 282.168889-247.466667 282.168889c55.751111 68.835556 199.111111 70.542222 199.111111 69.404444-17.066667 3.982222-43.804444 24.462222-42.097778 24.462222-60.871111-17.635556-200.817778 63.715556-179.2 120.604445 22.186667 56.888889 219.022222 42.097778 219.022222 42.097778s40.391111 30.151111 31.857778 30.151111C261.688889 714.524444 244.622222 770.275556 244.622222 771.982222c26.737778 0 188.871111 43.804444 188.871111 43.804445s26.737778 115.484444 52.337778 117.191111c25.031111 1.706667 47.217778-42.097778 47.217778-43.804445 31.857778-31.857778 23.324444-98.986667 20.48-102.4 15.36-8.533333 85.902222-30.151111 208.782222-159.288889s47.217778-296.96 42.097778-300.373333zM119.466667 642.844444c0-68.835556 158.151111-119.466667 158.72-105.813333-20.48 48.355556 0 81.92 0 81.92l-31.857778 28.444445 43.804444 1.706666s25.031111 35.271111 26.737778 36.977778C204.8 696.32 122.311111 674.133333 119.466667 642.844444z m162.133333-11.946666v7.395555h-6.826667l6.826667-7.395555zM455.111111 733.866667c-1.706667 5.12-17.635556 10.24-17.635555 10.24l-3.413334-10.24s22.755556-4.551111 21.048889 0z" fill="#999999"></path><path d="M399.36 181.475556c-41.528889 0-75.093333 31.288889-75.093333 70.542222s33.564444 70.542222 75.093333 70.542222 75.093333-31.288889 75.093333-70.542222-33.564444-70.542222-75.093333-70.542222z m0 120.604444c-9.671111 0-19.911111-2.844444-27.875556-8.533333 9.671111 0 17.635556-7.964444 17.635556-17.635556 0-9.671111-7.964444-17.635556-17.635556-17.635555-9.102222 0-16.497778 6.826667-17.635555 15.36-3.413333-6.826667-5.12-14.222222-5.12-22.186667 0-27.875556 22.755556-50.062222 50.631111-50.062222h4.551111c-9.671111 5.12-16.497778 15.36-16.497778 27.306666 0 17.066667 14.222222 31.288889 31.288889 31.288889 13.653333 0 25.6-8.533333 29.582222-21.048889 1.137778 3.982222 1.706667 8.533333 1.706667 12.515556 0 28.444444-22.755556 50.631111-50.631111 50.631111zM380.586667 475.591111s23.324444 15.36 64.284444 0l-15.36-21.617778-48.924444 21.617778z m97.848889-53.475555c-11.946667 11.946667-42.097778 26.737778-42.097778 26.737777s43.804444 25.031111 54.044444 18.204445c10.24-6.257778-8.533333-43.235556-11.946666-44.942222z m36.977777-28.444445c-10.24 9.671111-31.857778 25.031111-31.857777 25.031111l40.391111 30.151111c8.533333-10.24-1.706667-55.182222-8.533334-55.182222z m18.773334-26.737778c-1.706667 7.964444-11.377778 19.911111-14.791111 22.186667 9.102222 4.551111 24.462222 21.048889 24.462222 21.048889 9.671111-13.653333-2.844444-40.96-9.671111-43.235556z" fill="#FFFFFF"></path><path d="M752.64 280.462222c6.826667-1.706667 45.511111 38.684444 40.391111 40.391111C859.022222 248.604444 917.617778 250.311111 917.617778 248.604444c-17.066667-43.804444-96.142222-63.715556-96.142222-63.715555-119.466667-21.617778-134.826667 31.857778-138.24 33.564444C544.995556 117.76 413.582222 178.062222 415.288889 176.355556c89.315556 19.911111 64.284444 92.16 64.284444 92.16s-11.946667 72.248889-94.435555 62.008888-68.835556-102.4-68.835556-102.4c-83.057778 67.128889-158.72 204.8-158.72 204.8 8.533333 13.653333 101.262222 45.511111 131.413334 47.217778 178.631111-3.413333 276.48-184.888889 279.893333-184.888889 38.115556 62.008889 28.444444 126.293333-10.24 159.288889-41.528889 35.271111-158.72 37.546667-158.72 37.546667 17.066667 44.373333 137.102222 26.168889 137.102222 26.168889-3.982222 60.871111-138.808889 80.782222-143.928889 80.782222 139.946667 62.008889 256-64.284444 257.706667-65.991111-7.964444 60.871111-95.573333 99.555556-97.28 99.555555 10.24 48.355556-84.195556 130.844444-119.466667 124.017778-85.902222-36.977778-145.066667 1.706667-145.066666 1.706667l79.075555 21.617778s82.488889 8.533333 85.902222 42.097777c3.413333 33.564444 31.857778 73.955556 35.271111 73.955556 82.488889-60.302222 40.391111-113.777778 40.391112-113.777778s157.013333-62.008889 244.622222-230.4-28.444444-269.653333-21.617778-271.36z m-39.822222-50.062222c-26.737778-6.826667-6.257778-20.48 15.36-31.857778 73.955556-24.462222 110.364444 5.688889 108.657778 5.688889-85.333333-35.271111-124.017778 26.168889-124.017778 26.168889z" fill="#D8D8D8"></path><path d="M373.76 597.333333c83.626667-23.324444 100.124444-42.666667 100.124444-42.666666S396.515556 506.88 354.986667 506.311111c-41.528889-0.568889-95.004444 58.026667-78.506667 89.884445 52.337778 112.64 151.893333 125.724444 151.893333 125.724444 75.662222-6.826667 91.022222-73.955556 92.728889-77.368889-91.591111 1.706667-144.497778-42.097778-147.342222-47.217778z m-68.266667 30.151111c8.533333-22.755556 60.302222-67.697778 60.302223-67.697777-9.102222-8.533333-60.302222-25.031111-60.302223-25.031111 11.946667-5.12 68.835556 17.635556 68.835556 17.635555 51.2-27.875556 56.32-14.222222 56.32-14.222222-34.702222 7.964444-125.155556 89.315556-125.155556 89.315555z" fill="#FFFFFF"></path><path d="M373.76 597.333333c83.626667-23.324444 100.124444-42.666667 100.124444-42.666666S396.515556 506.88 354.986667 506.311111c-41.528889-0.568889-79.644444 56.32-76.8 77.937778 7.964444 16.497778 16.497778 31.288889 25.6 43.804444 10.24-23.324444 59.733333-65.991111 59.733333-65.991111-9.102222-8.533333-60.302222-25.031111-60.302222-25.031111 11.946667-5.12 68.835556 17.635556 68.835555 17.635556 51.2-27.875556 56.32-14.222222 56.32-14.222223-32.995556 7.964444-113.777778 79.075556-124.586666 88.746667 53.475556 71.68 124.017778 81.351111 124.017777 81.351111 75.662222-6.826667 91.022222-62.008889 92.728889-65.422222-91.022222 1.137778-143.928889-42.666667-146.773333-47.786667z" fill="#FFFFFF"></path><path d="M805.546667 324.835556c54.044444-52.337778 138.808889-63.715556 138.808889-63.715556s-5.12-63.715556-85.902223-91.022222c-116.622222-36.977778-180.906667 17.066667-180.906666 17.066666s-145.635556-110.933333-291.271111-35.271111-248.035556 282.168889-248.035556 282.168889c55.751111 68.835556 199.111111 70.542222 199.111111 69.973334-17.066667 3.982222-43.804444 24.462222-42.097778 24.462222-60.871111-18.204444-200.817778 63.715556-179.2 120.604444 22.186667 56.888889 219.591111 42.097778 219.591111 42.097778s40.391111 30.151111 31.857778 30.151111C261.688889 713.386667 244.622222 768.568889 244.622222 770.275556c27.306667 0 189.44 43.804444 189.44 43.804444s27.306667 116.053333 52.337778 117.76c25.6 1.706667 47.217778-42.097778 47.217778-43.804444 31.857778-31.857778 23.893333-98.986667 20.48-102.4 15.36-8.533333 85.902222-30.151111 209.351111-159.857778 122.88-129.137778 47.217778-297.528889 42.097778-300.942222zM118.897778 641.137778c0-68.835556 158.151111-120.035556 158.72-105.813334-20.48 48.924444 0 82.488889 0 82.488889l-31.857778 28.444445 43.804444 1.706666s25.6 35.271111 27.306667 36.977778c-112.64 10.24-194.56-12.515556-197.973333-43.804444z m162.702222-11.946667v7.395556h-6.826667l6.826667-7.395556z m174.08 103.537778c-1.706667 5.12-17.635556 10.24-17.635556 10.24l-3.413333-10.24s22.755556-5.12 21.048889 0z" fill=""></path><path d="M399.36 178.631111C357.831111 178.631111 324.266667 210.488889 324.266667 249.173333s33.564444 70.542222 75.093333 70.542223 75.093333-31.857778 75.093333-70.542223-33.564444-70.542222-75.093333-70.542222z m0 121.173333c-10.24 0-19.911111-2.844444-27.875556-8.533333 9.671111 0 17.635556-7.964444 17.635556-17.635555S381.155556 256 371.484444 256c-9.102222 0-16.497778 6.826667-17.635555 15.36-3.413333-6.826667-5.12-14.222222-5.12-22.186667 0-27.875556 22.755556-50.631111 50.631111-50.631111h5.12c-9.671111 5.12-16.497778 15.36-16.497778 27.306667 0 17.066667 14.222222 31.288889 31.288889 31.288889 13.653333 0 25.6-9.102222 29.582222-21.048889 1.137778 3.982222 1.706667 8.533333 1.706667 12.515555-0.568889 28.444444-23.324444 51.2-51.2 51.2zM380.586667 473.884444s23.893333 15.36 64.284444 0l-15.36-21.617777-48.924444 21.617777z m98.417777-54.044444c-11.946667 11.946667-42.666667 26.737778-42.666666 26.737778s44.373333 25.031111 54.044444 18.773333c10.24-6.826667-7.964444-43.804444-11.377778-45.511111z m36.977778-28.444444c-10.24 9.671111-31.857778 25.031111-31.857778 25.031111l40.391112 30.151111c8.533333-9.671111-1.706667-55.182222-8.533334-55.182222z m18.773334-26.737778c-1.706667 7.964444-11.377778 19.911111-14.791112 22.186666 9.102222 4.551111 24.462222 21.048889 24.462223 21.048889 9.671111-13.653333-2.844444-40.96-9.671111-43.235555z" fill="#FFFFFF"></path><path d="M753.208889 278.186667c6.826667-1.706667 45.511111 38.684444 40.391111 40.391111 65.991111-72.248889 125.155556-70.542222 125.155556-72.248889-17.066667-43.804444-96.142222-63.715556-96.142223-63.715556-120.035556-21.617778-135.395556 31.857778-138.808889 33.564445-138.24-101.262222-270.222222-40.96-268.515555-42.666667C504.604444 193.422222 479.573333 266.24 479.573333 266.24s-11.946667 72.248889-94.435555 62.008889-69.404444-102.4-69.404445-102.4c-83.057778 67.128889-158.72 204.8-158.72 204.8 8.533333 13.653333 101.262222 45.511111 131.982223 47.217778 178.631111-3.413333 277.048889-184.888889 279.893333-184.888889 38.115556 62.008889 28.444444 126.862222-10.24 159.857778-41.528889 35.271111-158.72 37.546667-158.72 37.546666 17.066667 44.373333 137.671111 26.168889 137.671111 26.168889C533.617778 576.853333 398.222222 597.333333 393.671111 597.333333c140.515556 62.008889 256.568889-64.284444 258.275556-65.991111-8.533333 61.44-96.142222 100.124444-97.848889 100.124445 10.24 48.924444-84.195556 130.844444-120.035556 124.586666-85.902222-36.977778-145.066667 1.706667-145.066666 1.706667l79.644444 21.617778s83.057778 8.533333 85.902222 42.097778c3.413333 33.564444 31.857778 73.955556 35.271111 73.955555 83.057778-60.302222 40.391111-114.346667 40.391111-114.346667s157.013333-62.008889 245.191112-230.968888-29.013333-270.791111-22.186667-271.928889z m-39.822222-50.631111c-27.306667-6.826667-6.257778-20.48 15.36-31.857778 74.524444-24.462222 110.933333 5.688889 109.226666 5.688889-85.333333-35.271111-124.586667 26.168889-124.586666 26.168889z" fill="#D8D8D8"></path><path d="M373.76 595.626667c83.626667-23.324444 100.693333-42.666667 100.693333-42.666667s-77.937778-47.786667-118.897777-48.924444c-41.528889-0.568889-95.573333 58.026667-78.506667 89.884444 52.337778 112.64 151.893333 126.293333 151.893333 126.293333 76.231111-6.826667 91.022222-73.955556 92.728889-77.368889-92.16 1.706667-145.066667-42.097778-147.911111-47.217777z m-68.266667 30.151111c8.533333-22.755556 60.302222-68.266667 60.302223-68.266667-9.102222-8.533333-60.302222-25.031111-60.302223-25.031111 11.946667-5.12 69.404444 17.635556 69.404445 17.635556 51.768889-27.875556 56.32-14.222222 56.32-14.222223-35.271111 8.533333-125.724444 89.884444-125.724445 89.884445z" fill="#9A6E38"></path><path d="M373.76 595.626667c83.626667-23.324444 100.693333-42.666667 100.693333-42.666667s-77.937778-47.786667-118.897777-48.924444c-41.528889-0.568889-80.213333 56.32-77.368889 77.937777 7.964444 16.497778 16.497778 31.288889 25.6 43.804445 10.24-23.324444 59.733333-66.56 59.733333-66.56-9.102222-8.533333-60.302222-25.031111-60.302222-25.031111C315.164444 529.066667 372.622222 551.822222 372.622222 551.822222c51.768889-27.875556 56.32-14.222222 56.32-14.222222-32.995556 7.964444-113.777778 79.075556-124.586666 88.746667 53.475556 72.248889 124.586667 81.92 124.586666 81.92 76.231111-6.826667 91.022222-62.008889 92.728889-65.422223-92.16 1.706667-145.066667-42.097778-147.911111-47.217777z" fill="#FCB316"></path></svg>';
dyMenu.innerHTML = menuBtn;

// 创建菜单盒子
const menuWrapper = document.createElement('div');
menuWrapper.setAttribute('class', 'menu-wrapper');
dyMenu.append(menuWrapper);

// 创建样式
const style = document.createElement('style');
style.setAttribute('type', 'text/css');
style.innerHTML =
  `#dy-helper-menu {position: fixed;top: 50%;right: 0;transform: translateY(-50%);z-index: 999;}#dy-helper-menu .menu-wrapper {position: absolute;top: 0;bottom: 0;right: -240px;margin: auto 0;padding: 12px;height: fit-content;background-color: wheat;border: 1px solid #00B7AE;border-radius: 4px;opacity: 0;z-index: 999;transition: all 0.2s ease-out;}#dy-helper-menu:hover .menu-wrapper {opacity: 1;transform: translateX(-240px);}#dy-helper-menu .menu-wrapper > button {display: block;padding: 4px 8px;margin: 0 auto 8px;color: #00B7AE;background: #FFFFFF;border: 1px solid #00B7AE;text-align: center;border-radius: 4px;cursor: pointer;user-select: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;transition: all 0.2s;}#dy-helper-menu .menu-wrapper > button:last-of-type {margin-bottom: 0}#dy-helper-menu .menu-wrapper > button:hover {filter: brightness(0.9);}#dy-helper-menu .menu-wrapper > button.checked {color: #FFFFFF;background-color: #00B7AE;}`;

shadowDOM.append(dyMenu, style);
document.body.append(container);

let roomDataTimer = null;  // 获取房间信息的计时器
const Get_RoomData_Interval = 12 * 60 * 1000; // 获取房间信息的间隔

// 用户默认配置 name 显示名称 description 描述 checked 是否选中 action 点击事件 delay 首次执行延迟时间
const defaultConfig = {
  fullPageAuto: {
    name: '默认网页全屏',
    description: '进入页面时选择网页全屏',
    checked: false,
    delay: 0,
    onChange: async (value) => {
      if (!value) return;
      const fullPage = await getDomAsync('#room-html5-player [title="网页全屏"]');
      fullPage.click();
    },
  },
  headerSimplify: {
    name: '导航栏简化',
    description: '头部导航栏简化',
    checked: true,
    delay: 0,
    onChange: (value) => {
      document.querySelector('.layout-Header')?.classList[value ? 'add' : 'remove']('headerSimplify');
    },
  },
  pageSimplify: {
    name: '页面简化',
    description: '去除页面背景,侧边栏和一些活动',
    checked: true,
    delay: 0,
    onChange: (value) => {
      document.body.classList[value ? 'add' : 'remove']('pageSimplify');
      document.querySelector('.layout-Player')?.scrollIntoView(false);
    },
  },
  barrageHover: {
    name: '弹幕悬停',
    description: '播放器内弹幕被选中时悬停',
    checked: false,
    delay: 0,
    onChange: async (value) => {
      const player = await getDomAsync('#room-html5-player');
      player.classList[value ? 'remove' : 'add']('penetrate');
    },
  },
  barrageSimplify: {
    name: '弹幕横幅背景隐藏',
    description: '隐藏滚动弹幕的横幅背景',
    checked: false,
    delay: 0,
    onChange: async (value) => {
      const player = await getDomAsync('#room-html5-player');
      player.classList[value ? 'add' : 'remove']('barrageSimplify');
    },
  },
  giftSimplify: {
    name: '礼物栏简化',
    description: '播放器下方礼物栏简化',
    checked: true,
    delay: 0,
    onChange: (value) => {
      document.querySelector('.layout-Player-toolbar')?.classList[value ? 'add' : 'remove']('giftSimplify');
    },
  },
  chatSimplify: {
    name: '聊天框简化',
    description: '去除主播公告、贡献周榜、贵宾、粉丝团和主播通知',
    checked: true,
    delay: 0,
    onChange: (value) => {
      document.querySelector('.layout-Player-aside')?.classList[value ? 'add' : 'remove']('chatSimplify');
    },
  },
  nameplateShow: {
    name: '用户铭牌显示',
    description: '聊天框用户铭牌是否显示',
    checked: false,
    delay: 0,
    onChange: (value) => {
      document.querySelector('.layout-Player-aside')?.classList[value ? 'remove' : 'add']('barrageSimplify');
    },
  },
  roomDataShow: {
    name: '房间数据显示',
    description: '显示房间数据(时间范围今天00:00到今晚24:00),12分钟刷新数据一次',
    checked: true,
    delay: 5 * 1000,
    onChange: (value) => {
      clearInterval(roomDataTimer);
      if (value) {
        getRoomData();
        roomDataTimer = setInterval(getRoomData, Get_RoomData_Interval);
      } else {
        document.querySelector('.Title-row:last-child').innerHTML = '';
      }
    },
  },
  blackMode: {
    name: '暗黑模式',
    description: '暗黑模式',
    checked: false,
    delay: 0,
    onChange: (value) => {
      document.documentElement.classList[value ? 'add' : 'remove']('dark');
    },
  },
};

// 显示房间数据 
function getRoomData() {
  const [, roomId] = location.pathname.split('/');
  const rid = new URLSearchParams(location.search).get('rid') ?? roomId ?? null;
  chrome.runtime.sendMessage({ type: 'roomData', rid });
}

// 遍历默认配置创建按钮列表
for (const key in defaultConfig) {
  const { name, description, checked, delay: defaultDelay, onChange } = defaultConfig[key];
  chrome.storage.local.get().then(async (res) => {
    const localChecked = res[key] ?? checked;
    // 存储默认配置
    if (res[key] === undefined) {
      await chrome.storage.local.set({ [key]: localChecked });
    }

    const className = key + (localChecked ? ' checked' : '');
    menuWrapper.innerHTML += `<button class="${ className }" title="${ description }">${ name }</button>`;

    const delay = location.hostname.includes('yuba') ? 500 : defaultDelay;
    // 载入时执行一次change事件
    setTimeout(() => {
      onChange(localChecked);
      defaultConfig[key].delay = 0;
    }, delay);
    // if (delay) {
    //   setTimeout(() => {
    //     onChange(localChecked);
    //     defaultConfig[key].delay = 0;
    //   }, delay);
    // } else {
    //   onChange(localChecked);
    // }
  });
}

// 监听按钮点击事件
menuWrapper.addEventListener('click', async (e) => {
  const [className] = e.target.classList;
  if (!className || className === 'menu-wrapper') return;

  const { checked } = defaultConfig[className];
  const localChecked = (await chrome.storage.local.get())[className] ?? checked;

  const button = menuWrapper.querySelector('.' + className);
  button.classList[!localChecked ? 'add' : 'remove']('checked');
  chrome.storage.local.set({ [className]: !localChecked });
});

// 监听存储变化
chrome.storage.onChanged.addListener((changes) => {
  for (const [key, { newValue }] of Object.entries(changes)) {
    defaultConfig[key]?.onChange(newValue);
  }
});

// 监听消息
chrome.runtime.onMessage.addListener(async (message) => {
  if (message.type === 'roomData') {
    const {
      'gift.all.price': giftAllPrice = 0,
      'gift.all.uv': giftAllUv = 0,
      'gift.paid.price': giftPaidPrice = 0,
      'gift.paid.uv': giftPaidUv = 0,
      'chat.pv': chatPv = 0,
      'chat.uv': chatUv = 0,
      'online.minutes': onlineMinutes = 0,
      'active.uv': activeUv = 0,
    } = message.data;

    const firstRows = [
      ['弹幕数', chatPv],
      ['弹幕人数', chatUv],
      ['直播时间', onlineMinutes + '分'],
      ['活跃人数', activeUv],
    ];
    const secondRows = [
      ['礼物价值', formatPrice(giftAllPrice) + '元'],
      ['送礼人数', giftAllUv],
      ['付费礼物', formatPrice(giftPaidPrice) + '元'],
      ['付费人数', giftPaidUv],
    ];
    const lastTitleRow = document.querySelector('.Title-row:last-child');
    if (lastTitleRow) {
      lastTitleRow.innerHTML =
        `<div class="room-data">
          ${ firstRows.map(row => `<span>${ row[0] }：<strong>${ row[1] }</strong></span>`).join('') }
          </br>
          ${ secondRows.map(row => `<span>${ row[0] }：<strong>${ row[1] }</strong></span>`).join('') }
      </div>`;
    }
  }
});

// 金钱格式化
function formatPrice(price) {
  if (!price && Number.isNaN(+price)) return 0;
  return (price / 100).toFixed(2);
}

async function getDomAsync(str) {
  const selector = await new Promise((resolve) => {
    setTimeout(() => {
      const selectors = document.querySelectorAll(str);
      resolve(selectors.length > 1 ? selectors : selectors[0]);
    }, 100);
  });
  return selector || getDomAsync(str);
}
