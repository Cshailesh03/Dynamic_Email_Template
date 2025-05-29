export function wrapLinesInParagraphs(text) {
  return text
    .split(/\r?\n/)
    .filter(line => line.trim() !== '')
    .map(line => `<p>${line.trim()}</p>`)
    .join('\n');
}

