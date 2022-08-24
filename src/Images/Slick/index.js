function importAll(r) {
    return r.keys().map(r);
}

export const ImagesSlick = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
