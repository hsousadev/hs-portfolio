export function placeOnPath(
  node: SVGGElement,
  path: SVGPathElement,
  t: number,
  extraRotate = 90,
) {
  const len = path.getTotalLength();
  const d = ((t % 1) + 1) % 1;
  const dist = d * len;
  const p = path.getPointAtLength(dist);
  const look = path.getPointAtLength(Math.min(dist + 2, len));
  const prev = path.getPointAtLength(Math.max(dist - 2, 0));
  const angle =
    (Math.atan2(look.y - prev.y, look.x - prev.x) * 180) / Math.PI + extraRotate;
  node.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${angle})`);
}

export function pointOnPath(path: SVGPathElement, t: number) {
  const len = path.getTotalLength();
  const d = ((t % 1) + 1) % 1;
  return path.getPointAtLength(d * len);
}
