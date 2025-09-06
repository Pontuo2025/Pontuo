# Passo a passo para começar

## 1. Clonar o repositório
```bash
git clone <url-do-repo>
cd <nome-da-pasta>
```

## 2. Inicializar git-flow

```bash
git flow init -d
```

> O `-d` aceita os padrões já usados:
>
> * main → produção
> * develop → desenvolvimento
> * feature/ → prefixo de features

## 3. Baixar todas as branches remotas

```bash
git fetch --all
git branch -a
```

## 4. Entrar em uma branch existente

Exemplo:

```bash
git checkout feature/estrutura-de-navegacao-e-autenticacao
```

