function importAll(r) {
    return r.keys().map(r);
}

export const ImageHeaderTop = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
