const TextUtil = {
    truncateText: (text: string, maxLength = 21, visibleLength = 19) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.slice(0, visibleLength) + '..';
    },
}

export { TextUtil };