$(function(){$(document).on("click","#lang_select li.active",function(){$("#lang_select").toggleClass("active")}),$(document).on("click","#lang_select li:not(.active)",function(){var e=$(this).data("val");$(this).addClass("active").siblings().removeClass("active"),$("#lang_select").toggleClass("active"),changeLang(e),"function"==typeof changQALang&&changQALang(language[e])})});var language={en:"en","zh-CN":"cn",vi:"vi",th:"th",id:"id"};function setLang(e){$("[i18n]").i18n({defaultLang:language[e],filePath:"/js/i18n/",filePrefix:"i18n_",fileSuffix:"",forever:!0}),"function"==typeof errorCode&&errorCode(language[e])}