export function getImage(imageName) {
    return new URL(`../../../assets/Images/${imageName}`, import.meta.url).href;
}