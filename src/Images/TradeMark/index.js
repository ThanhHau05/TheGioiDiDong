function importAll(r) {
    return r.keys().map(r);
}

export const ImagesTradeMark = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
