import Component from "@glimmer/component";
import Service, { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class CategoryStats extends Component {
  @service site

  postCount = 0;

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
    console.log(categoryId);
    console.log(site.cagetoriesById.size());
    console.log(site.categoriesById.get(categoryId));
    console.log(site.categoriesById.get(categoryId.post_count));
    this.postCount = site.categoriesById.get(categoryId).post_count;

  }



}
