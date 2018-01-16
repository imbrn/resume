import skills from "./skills";
import biography from "./biography";

export default {
  skills,
  biography: biography[LANG] || biography["en"]
}