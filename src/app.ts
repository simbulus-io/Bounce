import { Component, Vue } from 'vue-property-decorator';
import Bounce from './components/Bounce.vue';

@Component({
  components: {
    Bounce,
  },
})
export default class App extends Vue {}
