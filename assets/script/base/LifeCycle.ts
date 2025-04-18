import { _decorator, Component, Material, Node, MeshRenderer } from "cc";
const { ccclass, property, executeInEditMode, requireComponent, menu } =
  _decorator;

@ccclass("LifeCycle")
@requireComponent(MeshRenderer)
@executeInEditMode(true)
@menu("/base/next")
export class LifeCycle extends Component {
  private __init = false;

  @property
  public foo = 1;

  @property(Material)
  public ma: Material = null;

  start() {
    console.log("start");
  }

  update(deltaTime: number) {
    console.log("update");
  }

  protected lateUpdate(dt: number) {
    console.log("lateUpdate");
  }

  onLoad() {
    console.log("onLoad");
  }

  onEnable() {
    console.log("onEnable");
  }

  onDisable() {
    console.log("onDisable");
  }

  onDestroy() {
    console.log("onDestroy");
  }
}
