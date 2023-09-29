import Component from "@glimmer/component";
import Service, { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class CategoryStats extends Component {
  @service site

  @action
  getCategoryPostCount(categoryId){
    //check if Id exists (assumes that categoryId's cannot exceed current map of categories)
    try {
      if (site.categoriesById.size() < categoryId) {
        throw "category Id does not exist";
      }
    }catch(err) {
        console.log(err);
    }
    return site.categoriesById.get(categoryId).post_count;
  }



}
