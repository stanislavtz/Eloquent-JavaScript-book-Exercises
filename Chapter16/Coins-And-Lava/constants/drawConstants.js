export const SCALE = 20;

export const ROW_ATTRS = {
    style: `height: ${SCALE}px`
}

export const TABLE_ATTRS = (level) => {
    return {
        class: "background",
        style: `width: ${level.width * SCALE}px`
    }
}