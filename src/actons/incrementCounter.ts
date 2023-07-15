type IncrementCounterType = {
  selector: string;
  current: number;
  target: number;
  duration: number;
  letter?: string;
};

export const incrementCounter = ({
  selector,
  current,
  target,
  duration,
  letter = "",
}: IncrementCounterType) => {
  let counter = document.getElementById(selector);
  let stepTime = Math.abs(Math.floor(duration / target));

  if (current < target && counter) {
    current++;
    counter.innerText = current.toString() + letter;

    setTimeout(
      () => incrementCounter({ selector, current, target, duration, letter }),
      stepTime
    );
  }
};
