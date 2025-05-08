import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("bullet01")
export class bullet01 extends Component {
  @property(Node)
  public SelfPlane: Node = null;

  @property(Node)
  public speed = 1;

  start() {
    this.node.setPosition(this.SelfPlane.position);
  }

  _emitBullet() {
    // TODO 超出屏幕消失
    this.node.setPosition(this.node.position.x, this.node.position.y, this.node.position.z - this.speed);
    if (this.node.position.z < -100) {
      this.node.destroy();
    }
  }


  update(deltaTime: number) {
    this._emitBullet();
  }
}
