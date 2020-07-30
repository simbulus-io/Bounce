// tslint:disable: no-console
// tslint:disable: variable-name
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Bounce extends Vue {

  private readonly height = 600;
  private x: number = 300;
  private y: number = 560;
  private down: boolean = false;
  private randomColor = '#FF0000';
  private left: boolean = false;


  private get circle(): Element {
    return this.$refs.circle as Element;
  }

  @Prop() private msg!: string;
  public mounted() {
    setInterval(this.bounce, 80);
  }

  public bounce() { // this gets called every x ms -> update the position iteratively
    if (this.down) {
      if (this.y > 50) {
        this.y = this.y - 40;
      } else {
        this.down = false,
        this.randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      }
    } else {
      if (this.y < 560) {
        this.y = this.y + 40;
      } else {
        this.down = true,
        this.randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      }
    }
    if (this.left) {
      if (this.x > 50) {
        this.x = this.x - 40;
      } else {
        this.left = false;
        this.randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      }
    } else {
      if (this.x < 600) {
        this.x = this.x + 40;
      } else {
        this.randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.left = true;
      }
    }
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
