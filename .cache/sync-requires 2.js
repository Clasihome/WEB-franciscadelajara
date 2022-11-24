const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/vigbe/Documents/projects/work/web_pages/WEB-franciscadelajara/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/vigbe/Documents/projects/work/web_pages/WEB-franciscadelajara/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/vigbe/Documents/projects/work/web_pages/WEB-franciscadelajara/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/vigbe/Documents/projects/work/web_pages/WEB-franciscadelajara/src/pages/index.js"))),
  "component---src-pages-properties-js": hot(preferDefault(require("/Users/vigbe/Documents/projects/work/web_pages/WEB-franciscadelajara/src/pages/properties.js"))),
  "component---src-pages-property-js": hot(preferDefault(require("/Users/vigbe/Documents/projects/work/web_pages/WEB-franciscadelajara/src/pages/property.js")))
}

