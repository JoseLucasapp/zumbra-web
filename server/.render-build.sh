#!/usr/bin/env bash
set -e

echo "📦 Instalando dependências Node..."
npm install --omit=dev

echo "⬇️  Downloading Zumbra for Linux..."
curl -L https://github.com/JoseLucasapp/Zumbra-lang/releases/download/v0.1.0/zumbra-linux -o zumbra-linux
chmod +x zumbra

echo "✅ Build completed!"
