export const logJSON = x => JSON.stringify(x, null, 2)

export const mergeStyle = (props, style) => ({...props, style})
