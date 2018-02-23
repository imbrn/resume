import personal from "./personal";
import biography from "./biography";
import contact from "./contact";
import skills from "./skills";
import title from "./title";
import picture from "./picture.jpg";
import experience from "./experience";
import education from "./education";

const defaultLang = "en";

export default {
  picture,
  personal,
  contact,
  title: title[LANG] || title[defaultLang],
  biography: biography[LANG] || biography[defaultLang],
  skills,
  experience: experience[LANG] || experience[defaultLang],
  education: education[LANG] || education[defaultLang]
}