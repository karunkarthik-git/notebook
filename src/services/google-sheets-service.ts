import axios from 'axios';
const GOOGLE_SHEETS_API_KEY = process.env.REACT_APP_GOOGLE_SHEET_KEY;
const DSA_SHEET = process.env.REACT_APP_DSA_SHEET_ID;
const SHEETS_BASE_URL = 'https://sheets.googleapis.com';

export const getDSASheetProperties = () => {
    const url = `${SHEETS_BASE_URL}/v4/spreadsheets/${DSA_SHEET}?key=${GOOGLE_SHEETS_API_KEY}`;
    return axios.get(url);
}

export const getDSASheetData = (sheetName: string) => {
    const url = `${SHEETS_BASE_URL}/v4/spreadsheets/${DSA_SHEET}/values/${sheetName}?valueRenderOption=FORMATTED_VALUE&key=${GOOGLE_SHEETS_API_KEY}`;
    return axios.get(url);
}