import Route from '@ember/routing/route';
import webpageContent from 'pearlface-web/constants/webpage-content';

export default class IndexRoute extends Route {
  model() {
    return webpageContent;
  }
}
