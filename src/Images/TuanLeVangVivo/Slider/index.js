function importAll(r) {
    return r.keys().map(r);
}

export const ImagesSliderTuanLeVangVivo = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
