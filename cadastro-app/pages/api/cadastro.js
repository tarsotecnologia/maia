import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Load the Google Sheets API credentials
const creds = require('../../credentials.json'); // Substitua pelo caminho do seu arquivo de credenciais
// const creds = {
//     client_email: "tarso-maia@vibrant-beanbag-403213.iam.gserviceaccount.com",
//     private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDciaWCV7nFkI6K\nbKSyin1FkvM+iPgA+k5TJc6fYuFsijEm1qdJj2dxs6rcLvB6Ama2gGmoJE/bLxCG\nfzt75RfDURgXVwffYt3EvGeONHwPYY2CdWSW01Maz9l6bK0VqtznvjgxhiWoT8DN\nSys5jgfXpfQHSoUmYQtrLMvifcfxk/1COTBvXSwgc4VlxOAWzGQO/a0UzKfNzQ9f\nGZlM8Wyx2VsRixzeLvo8+V5+yXDYXQLICr6ZhezN5FsrJtItlCDmvB0/naMRaOMN\ng+/WpQyZ3k6GDg7MFSqrLNYIGrbHVsRlTHGv8qxHng9pT9ORXdiTtpx4j3IL75Ew\nkxZZQFAFAgMBAAECggEAGnj6tpYxil8V/9TBwl1wYyPGx2i+nbNuJ89KfwRqEH2C\nypQ1WYBOx63BopOPMejMNo0HNx6WEraSvRT/FBoFtmArdvsZ9VJ9/L8sORGLcMyM\n0C5SSEPkCRG5G9fOwQ0/s3ZjHW1qY3VLV06gyNRdPvbAlQgjdTNsoPgBc1XA5KUI\ntnV0zf3VqkkH/hoGjOftiL9cuS/U8kCp10V1cYZ08wsbKN8tyHpBFh5KpKcT+gU3\n1iTVKuqZPZ2Om5vRauTs70s6EjB/1iD7si3sDj34CSU9PMtycjf/T+EA3KaaVAkk\ntruS+oD69x9+3cTzPSyJ3HClk4sU0xjSRix/N8qIAwKBgQD9O1zevxZ82O+j9ETA\n66TBp661UH8FA1mA+CTDaTvy7hcq14jiO+GKVZBbP5Ino2QwbN/ycbVwcxuCPP8y\ngqHk/WHVT5svL1n+BXaCB3wrzwgK9hSXtzEtPsvi6mE4C61QwTK2A7MXARJZLoZB\nOve8NLkKyNzP+RzmC/SNyqfymwKBgQDe8ssNdhIejT7fVEnOAwgZF/hEUy/Dg6BT\nPPObszbUZKzk400c/okGN9dIUusNiHp6VHaohQsHT75E/YtCk0skurLrCKQvGh36\nXjrWsO7echN0+dDS2ABjEN9Am+7oUMILjLRb3330puGZvHdvp6V8D4HW81YB61Qu\n5ihUS+oh3wKBgQC4azMHRUKrSZG8ZXhsxzAFmIizoxveGsJkGlMrvMfb82kL2kvl\n9pYamJW43mMiWuvsGF4/wm/QpQOzpZh0wI4GpkFJh+AMTP/M702PBMR5Yx0IXo5A\nrzkxKjpx1x9WIarm1MyJocgbSLyEFk3P05H3jq30HLQzAcj6AFrpqF0HYQKBgDTE\nNAi4lCtE9Md4tIscrpL52FmbcqeMhKqOt313WhfEyCLYJU0idR3So5JLhbRLQ+mm\nCftymZyeZAMCGy6jm9pSkbwM7Ib1YHj8SmK7t51QVIiQA7uTQewwdxZckZvMWVDQ\neXNxHueDg8uWDpKPlBwbs3hDWWzU3LTI5mylFwHzAoGBANe5fEZCjB+vJfSm5j2Q\nsy3NR3RdWB7Hxbh73ODrUnYkg81ATI5OWXTd8XuHSP2TK+BlQiUbGhMMTeDxGoKm\n9LpmKOY7UKYdYtxDSr86lioMCWFdvBU3V/Nx+gBHhEtPZ52ko9aH5ze8AHbK4w7n\n8PfHeUOWS4bfLds3GzEy+brT\n-----END PRIVATE KEY-----\n"
//   };
console.log("Creds >> "+creds);

const serviceAccountAuth = new JWT({
    email: "tarso-maia@vibrant-beanbag-403213.iam.gserviceaccount.com",
    key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDciaWCV7nFkI6K\nbKSyin1FkvM+iPgA+k5TJc6fYuFsijEm1qdJj2dxs6rcLvB6Ama2gGmoJE/bLxCG\nfzt75RfDURgXVwffYt3EvGeONHwPYY2CdWSW01Maz9l6bK0VqtznvjgxhiWoT8DN\nSys5jgfXpfQHSoUmYQtrLMvifcfxk/1COTBvXSwgc4VlxOAWzGQO/a0UzKfNzQ9f\nGZlM8Wyx2VsRixzeLvo8+V5+yXDYXQLICr6ZhezN5FsrJtItlCDmvB0/naMRaOMN\ng+/WpQyZ3k6GDg7MFSqrLNYIGrbHVsRlTHGv8qxHng9pT9ORXdiTtpx4j3IL75Ew\nkxZZQFAFAgMBAAECggEAGnj6tpYxil8V/9TBwl1wYyPGx2i+nbNuJ89KfwRqEH2C\nypQ1WYBOx63BopOPMejMNo0HNx6WEraSvRT/FBoFtmArdvsZ9VJ9/L8sORGLcMyM\n0C5SSEPkCRG5G9fOwQ0/s3ZjHW1qY3VLV06gyNRdPvbAlQgjdTNsoPgBc1XA5KUI\ntnV0zf3VqkkH/hoGjOftiL9cuS/U8kCp10V1cYZ08wsbKN8tyHpBFh5KpKcT+gU3\n1iTVKuqZPZ2Om5vRauTs70s6EjB/1iD7si3sDj34CSU9PMtycjf/T+EA3KaaVAkk\ntruS+oD69x9+3cTzPSyJ3HClk4sU0xjSRix/N8qIAwKBgQD9O1zevxZ82O+j9ETA\n66TBp661UH8FA1mA+CTDaTvy7hcq14jiO+GKVZBbP5Ino2QwbN/ycbVwcxuCPP8y\ngqHk/WHVT5svL1n+BXaCB3wrzwgK9hSXtzEtPsvi6mE4C61QwTK2A7MXARJZLoZB\nOve8NLkKyNzP+RzmC/SNyqfymwKBgQDe8ssNdhIejT7fVEnOAwgZF/hEUy/Dg6BT\nPPObszbUZKzk400c/okGN9dIUusNiHp6VHaohQsHT75E/YtCk0skurLrCKQvGh36\nXjrWsO7echN0+dDS2ABjEN9Am+7oUMILjLRb3330puGZvHdvp6V8D4HW81YB61Qu\n5ihUS+oh3wKBgQC4azMHRUKrSZG8ZXhsxzAFmIizoxveGsJkGlMrvMfb82kL2kvl\n9pYamJW43mMiWuvsGF4/wm/QpQOzpZh0wI4GpkFJh+AMTP/M702PBMR5Yx0IXo5A\nrzkxKjpx1x9WIarm1MyJocgbSLyEFk3P05H3jq30HLQzAcj6AFrpqF0HYQKBgDTE\nNAi4lCtE9Md4tIscrpL52FmbcqeMhKqOt313WhfEyCLYJU0idR3So5JLhbRLQ+mm\nCftymZyeZAMCGy6jm9pSkbwM7Ib1YHj8SmK7t51QVIiQA7uTQewwdxZckZvMWVDQ\neXNxHueDg8uWDpKPlBwbs3hDWWzU3LTI5mylFwHzAoGBANe5fEZCjB+vJfSm5j2Q\nsy3NR3RdWB7Hxbh73ODrUnYkg81ATI5OWXTd8XuHSP2TK+BlQiUbGhMMTeDxGoKm\n9LpmKOY7UKYdYtxDSr86lioMCWFdvBU3V/Nx+gBHhEtPZ52ko9aH5ze8AHbK4w7n\n8PfHeUOWS4bfLds3GzEy+brT\n-----END PRIVATE KEY-----\n",
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

    console.log(req.body.unidade);
    const rows = await sheet.getRows();
    
    const larryRow = await sheet.addRow({ 
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
