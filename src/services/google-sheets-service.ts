import axios from 'axios';
const GOOGLE_SHEETS_API_KEY = process.env.REACT_APP_GOOGLE_SHEET_KEY;
const SHEETS_BASE_URL = 'https://sheets.googleapis.com';

export const getSheetProperties = (sheetId: string) => {
    const url = `${SHEETS_BASE_URL}/v4/spreadsheets/${sheetId}?key=${GOOGLE_SHEETS_API_KEY}`;
    return axios.get(url);
}

export const getSheetData = (sheetId: string, sheetName: string) => {
    const url = `${SHEETS_BASE_URL}/v4/spreadsheets/${sheetId}/values/${sheetName}?valueRenderOption=FORMATTED_VALUE&key=${GOOGLE_SHEETS_API_KEY}`;
    return axios.get(url);
}