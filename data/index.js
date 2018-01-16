import personal from "./personal";
import biography from "./biography";
import skills from "./skills";
import title from "./title";
import picture from "./picture.jpg";

const defaultLang = "en";

export default {
  picture,
  personal,
  title: title[LANG] || title[defaultLang],
  biography: biography[LANG] || biography[defaultLang],
  skills
}