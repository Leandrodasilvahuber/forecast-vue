# 🌊 Forecast - Previsão das Condições do Mar

Aplicação web para visualização de previsão do tempo e condições do mar para a Praia do Moçambique, Florianópolis - SC.

## 🚀 Tecnologias
- Vue 3 (Composition API)
- TypeScript
- Vuetify 3
- Vite
- Axios

## 📋 Pré-requisitos
- Node.js 22+
- npm ou yarn

## ⚙️ Configuração

1. Clone o repositório
2. Instale as dependências:
```sh
npm install
```

3. Configure as variáveis de ambiente:
```sh
cp .env.example .env
```

Edite o arquivo `.env` com a URL da API:
```
VITE_URL_API='http://sua-api.com/forecast'
```

## 🏃 Executando

### Modo Desenvolvimento
```sh
npm run start
```

### Build de Produção
```sh
npm run build
```

### Preview da Build
```sh
npm run preview
```

## 📦 Estrutura do Projeto
```
src/
├── components/
│   ├── Top.vue       # Barra superior com localização
│   ├── Today.vue     # Condições atuais
│   ├── Partial.vue   # Detalhes de vento e ondas
│   └── Week.vue      # Previsão semanal
├── composables/
│   └── useWeather.ts # Lógica reutilizável de weather
├── services/
│   └── weatherService.ts # Camada de API
├── types/
│   └── weather.ts    # Tipos TypeScript
├── config/
│   ├── constants.ts  # Constantes da aplicação
│   └── env.ts        # Validação de variáveis ambiente
├── utils/
│   └── temperature.ts # Utilitários de temperatura
├── App.vue           # Componente principal
└── main.ts           # Entrada da aplicação
```

## 🎯 Funcionalidades
- ✅ Visualização de condições atuais
- ✅ Previsão semanal detalhada
- ✅ Informações de vento e ondas
- ✅ Links para câmeras ao vivo
- ✅ Interface responsiva com tema dark
- ✅ Cache de dados (5 minutos)
- ✅ Tratamento de erros
- ✅ Loading states

## 📸 Câmeras Ao Vivo
- Praia dos Ingleses (Zinga)
- Praia Mole

## 🔧 Scripts Disponíveis

```json
{
  "start": "vite",
  "build": "run-p type-check \"build-only {@}\" --",
  "preview": "vite preview",
  "build-only": "vite build",
  "type-check": "vue-tsc --build"
}
```

## 🧪 Testes

Para adicionar testes no futuro:
```bash
npm install -D vitest @vue/test-utils happy-dom
```

## 📚 Documentação Adicional

- [Vue 3 Documentation](https://vuejs.org/)
- [Vuetify 3 Documentation](https://vuetifyjs.com/)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [Vite Documentation](https://vitejs.dev/)

---

**Última atualização:** 5 de fevereiro de 2026
