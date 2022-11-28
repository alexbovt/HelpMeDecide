export function splitBorderProps(
  width: number,
  color: string,
  radius: number,
): string {
  return `
        border-width: ${width}px;
        border-bottom-color: ${color};
        border-right-color: ${color};
        border-left-color: ${color};
        border-top-color: ${color};
        border-top-left-radius: ${radius}px;
        border-top-right-radius: ${radius}px;
        border-bottom-left-radius: ${radius}px;
        border-bottom-right-radius: ${radius}px;
    `;
}
