import Component from "@glimmer/component";
import Service, { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class CategoryStats extends Component {
  @service site

  postCount = 0;
  categoryId = 4;

  @action
  getCategoryPostCount(){
    //check if Id exists (assumes that categoryId's cannot exceed current map of categories)
    try {
      if (this.site.categoriesById.size < this.categoryId) {
        throw "category Id does not exist";
      }
    }catch(err) {
        console.log(err);
    }
    console.log(categoryId);
    console.log(this.site.cagetoriesById.size());
    console.log(this.site.categoriesById.get(categoryId));
    console.log(this.site.categoriesById.get(categoryId.post_count));
    this.postCount = this.site.categoriesById.get(categoryId).post_count;

  }



}
