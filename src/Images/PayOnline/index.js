function importAll(r) {
    return r.keys().map(r);
}

export const ImagesSliderPayOnline = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
