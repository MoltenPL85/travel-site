class RevealOnScroll {
  constructor(selector, offset) {
    this.itemsToReveal = document.querySelectorAll(selector);
    this.heightOfScreen = document.documentElement.clientHeight;
    this.offset = offset;
    this.hideInitially();
    this.showInitially();
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => el.classList.add('reveal-item'));
  }

  showInitially() {
    document.addEventListener(
      'scroll',
      () => {
        this.itemsToReveal.forEach(el => {
          let box = el.getBoundingClientRect();
          if (this.heightOfScreen - box.top > box.height * this.offset / 100) {
            el.classList.add('reveal-item--is-visible');
          } else if (
            this.heightOfScreen - box.top <
            box.height * this.offset / 100
          ) {
            el.classList.remove('reveal-item--is-visible');
          }
        });
      },
      {
        capture: true,
        passive: true,
      },
    );
  }
}

export default RevealOnScroll;
