import {
  _decorator,
  Component,
  Node,
  input,
  Input,
  EventKeyboard,
  EventTouch,
  math,
} from "cc";
const { ccclass, property, menu } = _decorator;

// docs: https://docs.cocos.com/creator/3.8/manual/zh/engine/event/event-emit.html

@ccclass("Events")
@menu("/base/next")
export class Events extends Component {
  private _location: math.Vec2 = new math.Vec2(0, 0);
  private _UILocation: math.Vec2 = new math.Vec2(0, 0);

  onEnable() {
    input.on(Input.EventType.KEY_DOWN, this._onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this._onKeyUp, this);

    input.on(Input.EventType.TOUCH_START, this._touchStart, this);
    input.on(Input.EventType.TOUCH_MOVE, this._touchMove, this);
    input.on(Input.EventType.TOUCH_END, this._touchEnd, this);
    input.on(Input.EventType.TOUCH_CANCEL, this._touchCancel, this);
  }

  onDestroy() {
    input.off(Input.EventType.KEY_DOWN, this._onKeyDown, this);
    input.off(Input.EventType.KEY_UP, this._onKeyUp, this);

    input.off(Input.EventType.TOUCH_START, this._touchStart, this);
    input.off(Input.EventType.TOUCH_MOVE, this._touchMove, this);
    input.off(Input.EventType.TOUCH_END, this._touchEnd, this);
    input.off(Input.EventType.TOUCH_CANCEL, this._touchCancel, this);
  }

  _touchStart(event: EventTouch) {
    console.log("touch start location", event.getLocation(this._location));
    console.log(
      "touch start uiLocation",
      event.getUILocation(this._UILocation)
    );
  }

  _touchMove(event: EventTouch) {
    console.log("touch move location", event.getLocation(this._location));
    console.log("touch move uiLocation", event.getUILocation(this._UILocation));
  }

  _touchEnd(event: EventTouch) {
    console.log("touch end location", event.getLocation(this._location));
    console.log("touch end uiLocation", event.getUILocation(this._UILocation));
  }

  _touchCancel(event: EventTouch) {
    console.log("touch cancel location", event.getLocation(this._location));
    console.log(
      "touch cancel uiLocation",
      event.getUILocation(this._UILocation)
    );
  }

  _onKeyDown(event: EventKeyboard) {
    console.log("key down", event, event.keyCode);
  }

  _onKeyUp(event: EventKeyboard) {
    console.log("key up", event, event.keyCode);
  }

  update(deltaTime: number) {}
}
