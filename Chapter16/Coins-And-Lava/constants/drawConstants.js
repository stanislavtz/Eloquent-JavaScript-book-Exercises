export const scale = 20;

export const rowAttrs = {
    style: `height: ${scale}px`
}

export const tableAttrs = (level) => {
    return {
        class: "background",
        style: `width: ${level.width * scale}px`
    }
}