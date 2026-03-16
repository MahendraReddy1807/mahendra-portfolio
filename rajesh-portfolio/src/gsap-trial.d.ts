declare module "gsap/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: gsap.DOMTarget, vars?: object);
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: object): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTop(position?: number): number;
    scrollTo(target: gsap.DOMTarget | string | number, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean | ScrollSmoother;
  }
}
