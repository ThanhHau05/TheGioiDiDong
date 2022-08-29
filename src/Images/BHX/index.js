function importAll(r) {
    return r.keys().map(r);
}

export const ImagesBHX = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
