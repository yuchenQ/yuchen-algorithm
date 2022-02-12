class EventEmitter {
  constructor() {
    this.eventMap = new Map();
  }

  on(event, cb) {
    if (this.eventMap.has(event)) {
      this.eventMap.get(event).push(cb);
    } else {
      this.eventMap.set(event, [cb]);
    }
  }

  emit(event, ...args) {
    if (!this.eventMap.has(event)) return;

    const cbs = this.eventMap.get(event);
    for (const cb of cbs) {
      cb(...args);
    }
  }

  off(event, cb) {
    if (!this.eventMap.has(event)) {
      return;
    }

    if (!cb) {
      this.eventMap.delete(event);
      return;
    }

    const cbs = this.eventMap.get(event);
    const i = cbs.indexOf(cb);
    if (i === -1) {
      return;
    } else {
      cbs.splice(i, 1);
    }
  }

  once(event, cb) {
    const cbOnce = (...args) => {
      this.off(event, cbOnce);
      cb(...args);
    };

    this.on(event, cbOnce);
  }
}

function user1 (content) {
  console.log('用户1订阅了:', content);
}

function user2 (content) {
  console.log('用户2订阅了:', content);
}

function user3 (content) {
  console.log('用户3订阅了:', content);
}

function user4 (content) {
  console.log('用户4订阅了:', content);
}

const eventEmitter = new EventEmitter();
// 订阅
eventEmitter.on('article1', user1);
eventEmitter.on('article1', user2);
eventEmitter.on('article1', user3);

// 取消user2方法的订阅
eventEmitter.off('article1', user2);

eventEmitter.once('article2', user4)

// 发布
eventEmitter.emit('article1', 'Javascript 发布-订阅模式');
eventEmitter.emit('article1', 'Javascript 发布-订阅模式');
eventEmitter.emit('article2', 'Javascript 观察者模式');
eventEmitter.emit('article2', 'Javascript 观察者模式');
