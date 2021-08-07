export function getRandomColorPair(): string[] {
  const colors: string[][] = [
    ['#F5E1FF', '#FFF8BC'],
    ['#CAF0F8', '#C9F2C7'],
    ['#D8E2DC', '#FAEDCD'],
    ['#EEEbff', '#F7D9C4'],
  ];

  const random: number = Math.round(Math.random() * (colors.length - 1));
  return colors[random];
}

export function getThemeClassName(className: string, theme?: string): string {
  return `${theme}-${className}`;
}
