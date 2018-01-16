import personal from "./personal";
import biography from "./biography";
import skills from "./skills";
import title from "./title";

const defaultLang = "en";

export default {
  personal,
  title: title[LANG] || title[defaultLang],
  biography: biography[LANG] || biography[defaultLang],
  skills
}