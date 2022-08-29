function importAll(r) {
    return r.keys().map(r);
}

export const ImagesSliderDealKhung = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
