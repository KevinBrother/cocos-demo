import {
  _decorator,
  Component,
  EventKeyboard,
  Node,
  input,
  Input,
  KeyCode,
  EventTouch,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("SelfPlane")
export class SelfPlane extends Component {
  private _keyUpPressed: boolean = false;
  private _keyDownPressed: boolean = false;
  private _keyLeftPressed: boolean = false;
  private _keyRightPressed: boolean = false;

  @property(Node)
  public selfPlane: Node = null;

  @property
  public speed: number = 5;

  start() {
    input.on(Input.EventType.KEY_DOWN, this._keyDownEvent, this);
    input.on(Input.EventType.KEY_UP, this._keyUpEvent, this);
    input.on(Input.EventType.TOUCH_MOVE, this._touchMoveEvent, this);
  }

  private _keyDownEvent(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.ARROW_UP:
      case KeyCode.KEY_W:
        this._keyUpPressed = true;
        break;
      case KeyCode.ARROW_DOWN:
      case KeyCode.KEY_S:
        this._keyDownPressed = true;
        break;
      case KeyCode.ARROW_LEFT:
      case KeyCode.KEY_A:
        this._keyLeftPressed = true;
        break;
      case KeyCode.ARROW_RIGHT:
      case KeyCode.KEY_D:
        this._keyRightPressed = true;
        break;
    }
  }

  private _keyUpEvent = (event: EventKeyboard) => {
    switch (event.keyCode) {
      case KeyCode.ARROW_UP:
      case KeyCode.KEY_W:
        this._keyUpPressed = false;
        break;
      case KeyCode.ARROW_DOWN:
      case KeyCode.KEY_S:
        this._keyDownPressed = false;
        break;
      case KeyCode.ARROW_LEFT:
      case KeyCode.KEY_A:
        this._keyLeftPressed = false;
        break;
      case KeyCode.ARROW_RIGHT:
      case KeyCode.KEY_D:
        this._keyRightPressed = false;
        break;
    }
  };

  private _touchMoveEvent = (event: EventTouch) => {
    const touch = event.getTouches()[0];
    const delta = touch.getDelta();
    this.selfPlane.setPosition(
      this.selfPlane.position.x + 0.01 * delta.x * this.speed,
      this.selfPlane.position.y,
      this.selfPlane.position.z - 0.01 * delta.y * this.speed
    );
  }

  update(deltaTime: number) {
    let dx = 0;
    let dy = 0;
    if (this._keyUpPressed) {
      dy += this.speed;
    } else if (this._keyDownPressed) {
      dy -= this.speed;
    } else if (this._keyLeftPressed) {
      dx -= this.speed;
    } else if (this._keyRightPressed) {
      dx += this.speed;
    }

    if (dx !== 0 || dy !== 0) {
      this.selfPlane.setPosition(
        this.selfPlane.position.x + 0.05 * dx * this.speed,
        this.selfPlane.position.y,
        this.selfPlane.position.z + 0.05 * dy * this.speed 
      );
    }
  }

  onDestroy() {
    input.off(Input.EventType.KEY_DOWN, this._keyDownEvent, this);
    input.off(Input.EventType.KEY_UP, this._keyUpEvent, this);
    input.off(Input.EventType.TOUCH_MOVE, this._touchMoveEvent, this);
  }
}
