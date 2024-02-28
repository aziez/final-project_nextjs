// utils/fgetHeading.ts

export function getHeading(pathname: string): string {
  const lastSlashIndex = pathname.lastIndexOf('/');
  const wordAfterLastSlash = lastSlashIndex !== -1 ? pathname.slice(lastSlashIndex + 1) : pathname;

  return wordAfterLastSlash.charAt(0).toUpperCase() + wordAfterLastSlash.slice(1);
}
