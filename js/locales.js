/**
 * Senara Locale Loader
 * Reads the user's language preference from localStorage and synchronously
 * injects only the needed locale file (id.js or en.js) into the page.
 * Using document.write here is intentional: it runs synchronously during
 * HTML parsing, ensuring LOCALES is defined before i18n-simple.js executes.
 */
(function () {
  var lang;
  try { lang = localStorage.getItem('senara_language'); } catch (e) {}
  if (lang !== 'id' && lang !== 'en') lang = 'id';
  // Extract the version query string from this script's own src so split
  // files share the same cache-bust token automatically.
  var ver = '';
  try {
    var scripts = document.getElementsByTagName('script');
    var me = scripts[scripts.length - 1];
    var m = me.src.match(/\?(.+)$/);
    if (m) ver = '?' + m[1];
  } catch (e) {}
  document.write('<script src="js/locales/' + lang + '.js' + ver + '"><\/script>');
})();
