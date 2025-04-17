import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("MovingBackground")
export class MovingBackground extends Component {
  private _bgRange = 10;

  @property
  speed: number = 1;

  @property(Node)
  bg01: Node = null;

  @property(Node)
  bg02: Node = null;

  start() {
    this._init();
  }

  private _init() {
    this.bg01.setPosition(0, 0, 0);
    this.bg02.setPosition(0, 0, -this._bgRange);
  }

  update(deltaTime: number) {
    this._moveBackground(deltaTime);
  }

  private _moveBackground(deltaTime: number) {
    this.bg01.setPosition(0, 0, this.bg01.position.z + this.speed * deltaTime);
    this.bg02.setPosition(0, 0, this.bg02.position.z + this.speed * deltaTime);

    if (this.bg01.position.z > this._bgRange) {
      this.bg01.setPosition(0, 0, this.bg02.position.z - this._bgRange);
    } else if (this.bg02.position.z > this._bgRange) {
      this.bg02.setPosition(0, 0, this.bg01.position.z - this._bgRange);
    }
  }
}
