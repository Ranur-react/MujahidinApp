import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export const BASE_URL = "https://lorus.gunungmas-seluler.com/";
export const WARNA_UTAMA = '#38B000';
export const WARNA_DISABLE = '#B1B1B1';
export const WARNA_TEKS = '#292929';
export const WARNA_SEKUNDER = '#CBFFB2';
export const TEKS_SIZE = RFPercentage(1.5); ``
export const TEKS_SIZE_TITTLE = (TEKS_SIZE * 2) * (0.9);
export const USTADZ_ICON="https://qurancall.id/images/pengajar_icon.png";
export function currencyFormat(num) {
    return 'Rp. ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }