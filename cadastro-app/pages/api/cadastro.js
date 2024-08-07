import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';


const serviceAccountAuth = new JWT({
    email: process.env.EMAIL,
    key: process.env.KEY.split(String.raw`\n`).join('\n'),
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
    ],
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const doc = new GoogleSpreadsheet('1bYZNB2t_nHNc7EucUNhjTTRlOR1pk4HvCLNWinmrOeY', serviceAccountAuth);
      await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0]; // ou use sheet ID

    const rows = await sheet.getRows();

    // const unRow = rows[0].get('unidade');
    // const unForm = req.body.unidade;

    // console.log("Unidade >> "+unRow);
    // console.log("Form >> "+unForm);
    // const novo = unRow == unForm ? false:true;


    const newRow = await sheet.addRow({ 
        unidade: req.body.unidade, 
        nome: req.body.nome, 
        email: req.body.email,
        celular: req.body.celular,
        cpf: req.body.cpf,
        rg: req.body.rg,
        proprietario: req.body.proprietario,
    });
   
      

      res.status(200).json({ message: 'Cadastro realizado com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao realizar o cadastro' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
