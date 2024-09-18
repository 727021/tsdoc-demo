export const shorten = (text) => {
    const spaces = (text.match(/ /g) || []).length;
    return text.split(' ').slice(0, Math.min(10, spaces)).join(' ') + ' ...';
}
