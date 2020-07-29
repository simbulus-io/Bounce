// tslint:disable: no-console
// tslint:disable: variable-name
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Bounce extends Vue {

  private readonly height = 600;
  private x: number = 300;
  private y: number = 560;

  private get circle(): Element {
    return this.$refs.circle as Element;
  }

  @Prop() private msg!: string;
  public mounted() {
    setInterval(this.bounce, 100);
  }

  public bounce() { // this gets called every x ms -> update the position iteratively
    console.log(`called bounce function`);
    console.log(`after ${this.y}`);
  }

  public get cx() {
    return this.x.toString();
  }

  public get cy() {
    return this.y.toString();
  }


}
