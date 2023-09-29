import Component from "@glimmer/component";
import Service, { inject as service } from "@ember/service";
import { dasherize } from "@ember/string";

export default class CategoryStats extends Component {
  @service site

  categoryIds = settings.category_ids.split("|");

  //code assumes that (category_Id - 1) is equal to their position in the site.categories array
  get shouldShow() {
    for(let x; x < this.categoryIds.length; x++){
      if(!this.categoryExists(this.categoryIds[x])){
        return false;
      }
    }
    return this.categoryIds.length > 0;
  }

  categoryExists(categoryId){
    if(!Number.isInteger(categoryId)){
      return false;
    }
    return this.categoryIds.length < categoryId;

  }

  get links() {
    return this.categoryIds.reduce((result, item) => {
      let [
        linkText = this.site.categories[item-1].name,
        linkTitle = this.site.categories[item-1].description_text,
        linkHref = this.site.categories[item-1].url,
        device = "vdo",
        target = "self",
        keepOnScroll = "keep",
      ] = [];

      const linkClass = `${dasherize(linkText)}-custom-header-links`; // legacy name

      const anchorAttributes = {
        title: linkTitle,
        href: linkHref,
        target: target === "self" ? "" : "_blank",
      };

      result.push({
        device: `headerLink--${device}`,
        keepOnScroll: `headerLink--${keepOnScroll}`,
        linkClass,
        anchorAttributes,
        linkText,
      });

      return result;
    }, []);
  }


}
