import { GoogleSpreadsheet } from 'google-spreadsheet';

// Load the Google Sheets API credentials
const creds = require('../../credentials.json'); // Substitua pelo caminho do seu arquivo de credenciais

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const doc = new GoogleSpreadsheet('SUA_PLANILHA_ID'); // Substitua pelo ID da sua planilha
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[0]; // ou use sheet ID
      await sheet.addRow(req.body);

      res.status(200).json({ message: 'Cadastro realizado com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao realizar o cadastro' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
