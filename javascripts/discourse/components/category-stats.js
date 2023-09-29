import Component from "@glimmer/component";
import Service, { inject as service } from "@ember/service";
import { action } from "@ember/object";

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
        linkText = this.site.categories[item].
        linkTitle,
        linkHref,
        device,
        target = "",
        keepOnScroll,
        locale,
      ] = item.split(",").map((s) => s.trim());

      if (!linkText || (locale && document.documentElement.lang !== locale)) {
        return result;
      }

      const linkClass = `${dasherize(linkText)}-custom-header-links`; // legacy name

      const anchorAttributes = {
        title: linkTitle,
        href: linkHref,
        target: target === "self" ? "" : "_blank",
      };

      result.push({
        device: `headerLink--${device}`,
        keepOnScroll: `headerLink--${keepOnScroll}`,
        locale: `headerLink--${locale}`,
        linkClass,
        anchorAttributes,
        linkText,
      });

      return result;
    }, []);
  }


}
