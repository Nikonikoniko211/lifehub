# LifeHub

O LifeHub é um organizador pessoal em desenvolvimento. O projeto reúne uma API
REST em Spring Boot, uma interface em Angular e um banco de dados PostgreSQL.

## Tecnologias

- Java 27 e Spring Boot
- Angular 19 e TypeScript
- PostgreSQL 16
- Docker Compose

## Pré-requisitos

- JDK 27
- Node.js e npm
- Docker com Docker Compose

## Como executar

### 1. Configurar as variáveis de ambiente

Na raiz do projeto, crie o arquivo `.env` a partir do exemplo:

```powershell
Copy-Item .env.example .env
```

O exemplo usa valores locais de desenvolvimento. Altere-os se necessário e não
compartilhe credenciais reais.

### 2. Iniciar o banco de dados

Na raiz do projeto, execute:

```powershell
docker compose up -d db
```

O PostgreSQL ficará disponível na porta `5432`.

### 3. Iniciar a API

Em um terminal, dentro da pasta `backend`, execute:

```powershell
.\mvnw.cmd spring-boot:run
```

A API ficará disponível em `http://localhost:8080`. Para verificar o endpoint
de exemplo, acesse `http://localhost:8080/api/hello`.

### 4. Iniciar o frontend

Em outro terminal, dentro da pasta `frontend`, instale as dependências e inicie
o servidor de desenvolvimento:

```powershell
npm install
npm start
```

A interface ficará disponível em `http://localhost:4200`.

## Testes e compilação

Na pasta `backend`, execute os testes com:

```powershell
.\mvnw.cmd test
```

Na pasta `frontend`, compile a aplicação com:

```powershell
npm run build
```

## Estrutura do projeto

```text
backend/    API Spring Boot
frontend/   Aplicação Angular
docker-compose.yml
.env.example
```
