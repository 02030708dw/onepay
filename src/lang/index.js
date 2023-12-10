import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getCookie } from "@/util";
// 引入自定义中文包
import customCN from './locale/cn.json'
// 引入自定义英文包
import customEN from './locale/en.json'
import customID from './locale/id.json'
import customTH from './locale/th.json'
import customVI from './locale/vi.json'


Vue.use(VueI18n)

const langKey = {
  // https://gist.github.com/wpsmith/7604842
  // https://www.itread01.com/articles/1495793960.html
  // 中文 -> zh-CN
  cn: 'zh-CN',
  zh: 'zh-CN',
  'zh-cn': 'zh-CN',
  'zh-CN': 'zh-CN',
  // 'zh-hk': 'cn', // 香港(hk)
  // 'zh-sg': 'cn', // 新加坡(sg)
  'zh-tw': 'zh-CN', // 台灣
  // 'zh-mo': 'cn', // 澳門(mo)
  // 英文 -> en
  us: 'en',
  en: 'en',
  // 'en-au': 'en', //'English (Australia)',
  // 'en-bz': 'us', //'English (Belize)',
  // 'en-ca': 'en', // 加拿大(ca)
  // 'en-ie': 'en', // 愛爾蘭(ie)
  // 'en-jm': 'en', //'English (Jamaica)',
  // 'en-nz': 'en', //'English (New Zealand)',
  // 'en-ph': 'en', // 菲律賓(ph)
  // 'en-za': 'en', //'English (South Africa)',
  // 'en-tt': 'en', //'English (Trinidad & Tobago)',
  // 'en-gb': 'en', // 英國(gb)
  'en-us': 'en' //'English (United States)',
  // 'en-zw': 'en', //'English (Zimbabwe)',
  // 'gi': 'en', //直布羅陀(gi)
  // 泰國
  // th: 'th',
  // 越南
  // vi: 'vn',
  // vn: 'vn',
  // 日文
  // ja: 'jp',
  // jp: 'jp'
  // 印尼
  // 'id': 'id'
  // 柬埔寨
  // 'km': 'kh',
  /*
  // 寮國(找不到)
  'la': 'la',
  // 緬甸
  'my': 'mm',
  // 馬來西亞
  'ms': 'my',
  // 印度
  'pa-in': 'in',
  // 奧地利
  'at': 'at',
  'de-at': 'at', // 奧地利德語
  // 瑞典
  'sv': 'se',
  // 丹麥
  'da': 'dk',
  // 芬蘭
  'fi': 'fi',
  // 西班牙
  'es': 'es',
  'es-es': 'es',
  // 挪威
  'no': 'no',
  // 德國
  'de': 'de',
  'de-de': 'de',
  // 馬爾他
  'mt': 'mt'
  */
}

// 准备翻译的语言环境信息
const messages = {
  en: {
    ...customEN // 将自定义英文包加入
  },
  cn: {
    ...customCN
  },
  id:{
    ...customID
  },
  th:{
    ...customTH
  },
  vi:{
    ...customVI
  }
}

const locale =
    langKey[getCookie('hl')] ||
    langKey[window.navigator.userLanguage] ||
    langKey[window.navigator.language] ||
    langKey['en']

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale,
  messages, // 设置地区信息
  silentTranslationWarn: true,
})

export default i18n

