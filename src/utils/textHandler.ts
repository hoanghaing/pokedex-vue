export default function capitalizeText(text: string) {
  text = text.trim();
  text = text.replace(/(^|\s)\S/g, (match) => match.toUpperCase());
  text = text.replace('-', ' ');
  return text;
}