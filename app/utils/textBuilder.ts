import { Action, Activity, Type } from "../models/other/axios/Activity";

abstract class Handler {
  protected nextHandler?: Handler;

  abstract handle(data: Activity): string;

  get handler() {
    if (!this.nextHandler) throw new Error("No Handler to pass this request to!");
    return this.nextHandler;
  }

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }
}

class GroupHandler extends Handler {
  private actions: Action[] = [];
  constructor() {
    super();
    this.actions.push(Action.Created);
    this.actions.push(Action.Updated);
    this.actions.push(Action.Left);
    this.actions.push(Action.Added);
    this.actions.push(Action.Removed);
    this.actions.push(Action.Deleted);

    Object.setPrototypeOf(this, GroupHandler.prototype);
  }
  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(data: Activity): string {
    if (!this.canHandle(data)) return this.handler.handle(data);

    switch (data.action) {
      case Action.Created:
        return `${data.subject.name} گروه "${data.object.name}" را ایجاد کرد.`;
      case Action.Removed:
        return `${data.subject.name} ${data.object.name} از گروه "${data.parent?.name}" حذف کرد.`;
      case Action.Left:
        return `${data.subject.name} گروه "${data.object.name}" را ترک کرد.`;
      case Action.Added:
        return `${data.subject.name} ${data.object.name} به گروه "${data.parent?.name}" افزود`;
      case Action.Updated:
        return `${data.subject.name} گروه "${data.object.name}" را تغییر داد.`;
      case Action.Deleted:
        return `${data.subject.name} گروه "${data.object.name}" را حذف کرد.`;
      default:
        return this.handler.handle(data);
    }
  }

  private canHandle(data: Activity): boolean {
    if (this.actions.indexOf(data.action) === -1) return false;
    return data.parent ? data.parent.type === Type.Group : data.object.type === Type.Group;
  }
}
class PaymentHandler extends Handler {
  private actions: Action[] = [];

  constructor() {
    super();
    this.actions.push(Action.Paid);
    this.actions.push(Action.Updated);
    this.actions.push(Action.Deleted);
    this.actions.push(Action.Commented);
    this.actions.push(Action.Removed);

    Object.setPrototypeOf(this, PaymentHandler.prototype);
  }

  handle(data: Activity): string {
    if (!this.canHandle(data)) return this.handler.handle(data);

    switch (data.action) {
      case Action.Paid:
        return `${data.subject.name} ${data.data} تومان به ${data.object.name} پرداخت کرد.`;
      case Action.Updated:
        return `${data.subject.name} پرداخت را تغییر داد.`;
      case Action.Deleted:
        return `${data.subject.name} پرداخت را حذف کرد.`;
      case Action.Commented:
        return `${data.subject.name} روی پرداخت کامنت گذاشت`;
      case Action.Removed:
        return `${data.subject.name} پرداخت را حذف کرد.`;
      default:
        return this.handler.handle(data);
    }
  }

  private canHandle(data: Activity): boolean {
    if (this.actions.indexOf(data.action) === -1) return false;
    return data.parent ? data.parent.type === Type.Payment : data.object.type === Type.Payment;
  }
}
class ExpenseHandler extends Handler {
  private actions: Action[] = [];

  constructor() {
    super();
    this.actions.push(Action.Created);
    this.actions.push(Action.Updated);
    this.actions.push(Action.Added);
    this.actions.push(Action.Deleted);
    this.actions.push(Action.Commented);
    this.actions.push(Action.Removed);

    Object.setPrototypeOf(this, ExpenseHandler.prototype);
  }

  handle(data: Activity): string {
    if (!this.canHandle(data)) return this.handler.handle(data);

    switch (data.action) {
      case Action.Created:
        return `${data.subject.name} هزینه‌ی "${data.object.name}" را ساخت.`;
      case Action.Updated:
        return `${data.subject.name} هزینه‌ی "${data.object.name}" را تغییر داد.`;
      case Action.Added:
        return `${data.subject.name} ${data.object.name} را به هزینه‌ی "${data.parent?.name}" افزود.`;
      case Action.Deleted:
        return `${data.subject.name} هزینه‌ی "${data.object.name}" حذف کرد.`;
      case Action.Commented:
        return `${data.subject.name} برای هزینه‌ی "${data.object.name}" کامنت گذاشت.`;
      case Action.Removed:
        return `${data.subject.name} ${data.object.name} را از هزینه‌ی "${data.parent?.name}" حذف کرد.`;
      default:
        return this.handler.handle(data);
    }
  }

  private canHandle(data: Activity): boolean {
    if (this.actions.indexOf(data.action) === -1) return false;
    return data.parent ? data.parent.type === Type.Expense : data.object.type === Type.Expense;
  }
}

export const handler = new GroupHandler();
handler.setNext(new ExpenseHandler()).setNext(new PaymentHandler());
