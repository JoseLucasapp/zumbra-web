set -e

npm install --omit=dev

echo "Baixando binário do Zumbra..."
curl -L https://github.com/1315jlfont/zumbra/releases/latest/download/zumbra -o zumbra
chmod +x zumbra

echo "Build concluído."
