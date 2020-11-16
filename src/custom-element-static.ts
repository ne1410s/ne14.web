export function decode(b64: string): string {
  const bIndex = (b64 + '').indexOf('base64,');
  return bIndex === -1 ? b64 : window.atob(b64.substring(bIndex + 7));
}

export function reduceCss(cssIn: string): string {
  return cssIn
    .replace(/\s+/g, ' ')
    .replace(/([,{}:;])\s/g, '$1')
    .replace(/\s([{])/g, '$1');
}

export function reduceHtml(htmlIn: string): string {
  return htmlIn.replace(/\s+/g, ' ').replace(/>\s</g, '><');
}
