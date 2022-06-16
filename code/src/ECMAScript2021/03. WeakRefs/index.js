var aa = document.createElement('DIV');
aa.setAttribute('id', 'counter');
aa.style.color = '#00ff00';
aa.style.fontSize = '18px';
aa.style.fontWeight = 'bold';
aa.innerHTML = 'Test DIV';
document.body.appendChild(aa);

class Counter {
  constructor(element) {
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      const element = this.ref.deref();
      if (element) {
        element.textContent = ++this.count;
      } else {
        console.log('The element is gone.');
        this.stop();
        this.ref = null;
      }
    };

    tick();
    this.timer = setInterval(tick, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

const counter = new Counter(document.getElementById('counter'));
counter.start();
setTimeout(() => {
  document.getElementById('counter').remove();
}, 5000);
