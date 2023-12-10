<template>
  <div class="lang_select">
    <ul id="lang_select" :class="{ active: isUlActive }">
      <li
        v-for="langKey in Object.keys(languages)"
        :class="[langKey, { active: selectedLanguage === langKey }]"
        :key="langKey"
        @click="changeLanguage(langKey)"
      >
        <span> {{ languages[langKey] }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: "en", // 默认选中的语言
      languages: {
        en: "English",
        vi: "Tiếng Việt",
        th: "อักษรไทย",
        id: "Indonesia",
        cn: "中文",
      },
      isUlActive: false, // 控制ul的class
    };
  },
  methods: {
    changeLanguage(lang) {
      this.selectedLanguage = lang; // 更新选中的语言
      this.$i18n.locale = lang; // 切换语言
      localStorage.setItem("selectedLanguage", lang); // 保存选中的语言到本地存储
      this.isUlActive = !this.isUlActive; // 点击时切换ul的class
    },
    loadLanguage() {
      const selectedLanguage = localStorage.getItem("selectedLanguage");
      if (selectedLanguage) {
        this.selectedLanguage = selectedLanguage;
        this.$i18n.locale = selectedLanguage;
      }
    },
  },
  created() {
    this.loadLanguage();
  },
};
</script>

<style lang="less" scoped>
</style>
