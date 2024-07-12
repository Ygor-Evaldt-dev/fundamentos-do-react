# Fundamentos de React
React é uma biblioteca JavaScript desenvolvida pela Facebook, muito utilizada para construir insterfaces de usuário interativas com componentes reutilizáveis e dinâmicos em aplicações web.

Este documento contém informações para construção de uma base de conhecimento sólida sobre os fundamentos do React.

Não deixe de consultar a [documentação oficial.](https://react.dev/)

## Sessões
- [Introdução](#introducao)
- [Configurando novo projeto Next.js](#configuracao)
- [Rotas no Next.js](#rotas-no-nextjs)
- [Primeiro componente](#primeiro-componente)
- [O que é Componente?](#o-que-e-componente)
- [Componente com props](#componente-com-props)
- [Árvore de Componentes](#arvore-de-componentes)
- [Componentes com Filho(children)](#componente-com-filho)
- [Estado](#estado)
- [Componente com Estado](#componente-com-estado)
- [JSX dentro do JavaScript](#jsx-dentro-do-javascript)
- [Javascript dentro do JSX](#javascript-dentro-do-jsx)
- [Usando funções](#usando-funcoes)
- [Sobre a Pasta App no Next.js](#sobre-a-pasta-app)
- [Sobre a Pasta Pages no Next.js](#sobre-a-pasta-pages)
- [Navegação](#navegacao)
- [Evento básico](#evento-basico)
- [Ligação Unilateral](#ligacao-unilateral)
- [Comunicação Entre Componentes](#comunicacao-entre-componentes)

## Tecnologias utilizadas
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tabler icons](https://tabler.io/icons)

<a id="introducao"></a>
## Introdução

Embora este conteúdo seja focado nos fundamentos do React, hoje em dia já não é mais recomendado utilizar apenas o React para iniciar novos projetos web, conforme citado na [documentação oficial](https://react.dev/learn/start-a-new-react-project). Por este motivo, os conceitos vistos aqui já introduzem o NextJS, um framework do React que adiciona funcionalidades importantes para o mercado atual.

Este conteúdo irá abordar muitos fundamentos importantes, como: componentes, eventos, estado, comunicação direta e indireta, entre outros.

<a id="configuracao"></a>
## Configurando novo projeto Next.js

Siga as instruções da [documentação oficial](https://nextjs.org/docs/getting-started/installation) para criação de um novo projeto Next.js

### O que utilizar em um novo projeto
Ao executar o comando de terminal para criar um novo projeto Next.js, a CLI (Command Line Interface) irá questionar sobre quais você deseja adicionar ao projeto.

### Minha recomendação
- **`TypeScript` - sim**
    - Adicionar tipagem ao código javascript
- **`ESLint` - sim**
    - Validador de código para escrita de código mais correto
- **`Tailwind CSS` - sim**
    - Framework CSS para estilização dos componentes
- **`src/ directory` - sim**
    - Adiciona o diretorio src
- **`App Router` - sim**
    - Adiciona um diretório chamado App para trabalhar com o sistema de rotas do Next.js
- **`Customize the default import alias` - não**
    - Pode selecionar ‘não’, mas caso selecione ‘sim’ aqui seria o momento para customizar o alias dos imports que por padrão é ‘src/’

### package.json
Após o projeto ser criado, consulte o arquivo `package.json` para encontrar os scripts disponíveis para execução do projeto.

<a id="rotas-no-nextjs"></a>
## Rotas no Next.js

Existem duas formas de se trabalhar com rotas no Next.js. É possível definir rotas diretamente no diretório `app` ou, da forma mais tradicional, criando um diretório `pages` dentro do diretório `src` e adicionando os arquivos `.tsx `dentro de `pages`. 

### Rotas dentro do diretório `app`
Para definir rotas dentro do diretório `app`, é necessário criar um diretório com o nome da rota e adicionar um arquivo chamado `page.tsx` dentro deste diretório.

A presença do arquivo `page.tsx` é o que diz ao Next.js que o diretório é uma rota da aplicação.

### Rotas no diretório pages
O diretório `pages` criado dentro do diretório `src` diz ao Next.js que ele encontrará neste diretório arquivos de rotas que ele precisa definir na aplicação.

Para criar uma rota dentro do diretório `pages`, basta adicionar um arquivo `.tsx` com o nome da rota.

### Rotas aninhadas
Também é possível criar rotas aninhadas das duas formas descritas acima, basta adicionar diretórios de rotas dentro de outros diretórios de rotas, o Next.js irá entender e mapear as rotas definidas desta forma.

<a id="primeiro-componente"></a>
## Primeiro componente

Componentes são um conceito muito importante no cenário atual de desenvolvimento de aplicações.

Basicamente, um componente é uma uma parte da interface de usuário (UI), contendo lógica e linguagem de marcação, que pode ser reutilizado em diferentes pontos da aplicação.

### Exemplo de componente
```tsx
export default function Page() {
	return (
		<>
			<h1>Exemplo 01</h1>
		</>
	);
}
```
No React, os componentes são funções exportadas por padrão de arquivos `.tsx` / `.jsx` que retornam pedaços da interface de usuário construídas com uma linguagem de marcação chamada [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML).

### Nomenclatura

A convenção de nomenclatura para componentes em React/Next.js, é definir o nome do arquivo .tsx  e o nome da função que retorna o JSX do componente no padrão Pascal Case.

Header.tsx

### O que são arquivos `jsx` e `tsx`?
Os `jsx` / `tsx` são uma extensão a forma de escrever código em javascript/typescript, que permite retornar marcações HTML de funções.

Os arquivos `jsx` e `tsx` não permitem que você retorne múltiplos componentes HTML, por este motivo, é necessário embrulhá-los em um componente pai.
```tsx
// page.tsx

export default function Page() {
    return (
		// Isto é um wrapper (embrulho)    
        <>
            <h1>
                Exemplo 01
            </h1>
        </> 
    );
}
```
<a id="o-que-e-componente"></a>
## O que é Componente?

Um componente é um pedaço da UI que contêm dados, lógica e linguagem de marcação, mas o que isso quer dizer?

No mundo do desenvolvimento web, existem três tecnologias base, `HTML`, `CSS` e `JavaScript`. `HTML` defini a marcação, `CSS` os estilos e `JavaScript` os comportamentos.

A ideia dos componentes é dividir para conquistar. Realizando a construção de uma aplicação web componentizada, é desenvolvido pedaços da UI que juntos formam a aplicação como um todo, cada um desses ‘pedaços’ irá conter as tecnologias base do desenvolvimento web, `HTML`, `CSS`, `JavaScript`.

Esse tipo de desenvolvimento torna a aplicação mais escalável, mais fácil de implementar melhorias e corrigir bugs, deixa as páginas mais semânticas e ajuda os desenvolvedores a pensar na aplicação como a forma de atender a uma necessidade específica do cliente, ao invés de pensar apenas nas tecnologias que irão utilizar.

<a id="componente-com-props"></a>
## Componente com props

Os componentes podem receber propriedades através da sua tag. Para passar propriedades para o componente, basta escrever o nome da propriedade dentro da tag do componente seguida por seu valor.
```html
    <Header
        title="Minha aplicação"
        subtitle="Melhor aplicação da web!"
    />
```
As propriedades passadas para o componente pela sua tag podem ser recuperadas nos parâmetros da função que retorna o componente

```tsx
export default function Header(props: any) { 
	//... 
}
```
O parâmetro recebido na função do componente que da acesso as propriedades recebidas é comummente nomeado como `props`. Também é possível receber as propriedades utilizando destructuring.

```ts
type Props = {
    title: string,
    subtitle: string
}
```
```tsx
export default function Header({
	title,
	subtitle
}: Props) { 
	//... 
}
```

<a id="arvore-de-componentes"></a>
## Arvore de componentes

A arvore de componentes é a estrutura hierárquica de como os componentes estão organizados dentro de uma página da aplicação. Cada componentes pode conter outros componentes dentro dele, gerando assim uma relação de pai pra filho.

Essa relação permite a troca de dados entre os componentes geralmente seguindo um fluxo de cima pra baixo, isto é, entre o componente pai e o componente filho.

A troca de dados é possível utilizando `props`(propriedades) e o gerenciamento do estado dos componentes utilizando `state`(estado).

`props` e `state` são conceitos que podem ser melhor entendidos visitando as documentações de apoio abaixo.

### Documentações de apoio
- [Passando propriedades para um componente](https://react.dev/learn/passing-props-to-a-component)
- [State: A memória do componente](https://react.dev/learn/state-a-components-memory)

<a id="componente-com-filho"></a>
## Componentes com Filho(children)

Todo componente possue uma propriedade especial chamada `children`. Essa propriedade permite que o componente renderize os elementos que ele engloba. 

Para fazer com que um componente renderize seus componentes filhos, basta adicionar a propriedade children como conteúdo do componente pai. 

Exemplo:
```ts
type Props = {
    children: React.ReactNode
}
```
```tsx
//Componente Content recebe dois elementos HTML (children)
export default function Page() {
    return (
        <section>
            <Content>
                <h2 className="font-black">
                    Subtítulo
                </h2>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, commodi temporibus officiis non alias asperiores reprehenderit qui neque architecto. Sit nulla aperiam id nihil laborum vero, itaque rerum eligendi atque!
                </p>
            </Content>
        </section>
    )
}

//Renderizando os elementos dentro do componente Content (father)
export default function Content({ children }: Props) {
    return (
        <section>
            {children}
        </section>
    )
}
```

<a id="estado"></a>
## Estado

Em React, a memória de como o componente está no momento atual é chamada de state (estado). O estado de um componente tem a função de renderizar o componente novamente quando uma propriedade dele tiver seu valor atualizado.

<a id="componente-com-estado"></a>
## Componente com Estado

Para utilizar variáveis de estado, isto é, variáveis que causam uma nova renderização do componente para exibir seus valores atualizados na UI, é necessário importar `useState` de `‘react’` e utilizar seu retorno para definir um valor inicial da variável e o nome da função que atualiza seu valor. 

```'useState' retorna um array onde o primeiro elemento é a variável de estado e o segundo a função que atualiza o estado da variável.```

Sempre que for necessário atualizar o valor de uma variável de estado, será preciso utilizar a função definida pra esta finalidade. Esta é a forma de ensinar ao React que ele precisa monitorar essa variável e ao atualizar seu valor com a função correta, o componente será renderizado novamente com os valores atualizados.

### Convenção de nomenclatura

É comum em aplicações React, dar o nome da função que atualiza o estado de uma variável de estado utilizando o seguinte padrão: `setNomeDaVariavel()`. </br>
- [Exemplo](https://github.com/Ygor-Evaldt-dev/fundamentos-do-react/blob/master/my-app/src/pages/estado/com.tsx)

<a id="jsx-dentro-do-javascript"></a>
## JSX dentro do JavaScript

É possível adicionar trchos de código JSX dentro do JavaScript, podendo criar objetos, listas, constantes, etc…
```typescript
export default function Page() {
	const users = [
		<li key="1">Usuário 01</li>,
		<li key="2">Usuário 02</li>,
		<li key="3">Usuário 03</li>
	];

	return <ul>{users}</ul>; // escapando para o javascript
}
```

<a id="javascript-dentro-do-jsx"></a>
## Javascript dentro do JSX

É possível escapar para o JavaScript dentro de dentro do JSX envolvendo o código JavaScript em um par de chaves `{ }`.

<a id="usando-funcoes"></a>
## Usando funções

Para utilizar funções dentro do JSX basta invocar a função envolvendo a chamada dentro de chaves `{ }`.

**Dica:** Para nomear funções que renderizam pedaços do componente, utilize o padrão de nomenclatura `render`<br/> [Exemplo](https://github.com/Ygor-Evaldt-dev/fundamentos-do-react/blob/master/my-app/src/app/fundamentos/funcoes/page.tsx) 

<a id="sobre-a-pasta-app"></a>
## Sobre a Pasta App no Next.js

Dentro do diretório app, os diretórios que irão virar rotas na aplicação são somente os que possuem um arquivo `page.tsx`. Qualquer outro diretório ou arquivo dentro de app que não possua um arquivo chamado page.tsx, será interpretado como um arquivo comum pelo Next.js

### Componentes
A forma de construir aplicações com React é componentizada, portanto, não faz sentido que todo arquivo de componente da aplicação seja uma pagina. 

Uma ideia melhor seria criar um diretório chamado `components` dentro do diretório `src` e adicionar todos os componentes da aplicação la dentro. 

Também é válido criar componentes dentro dos diretórios de app que serão rotas da aplicação.

### Minha Sugestão
Para componentes que serão utilizados por várias páginas, faz mais sentido armazená-los dentro do diretório `components` no diretório `app`.

Para os componentes que serão utilizados apenas por uma pagina específica, faz mais sentido armazená-los dentro do diretório da página que serão exibidos.

<a id="sobre-a-pasta-pages"></a>
## Sobre a Pasta pages no Next.js

Todos os arquivos e diretórios armazenados dentro da pasta pages serão interpretados pelo Next.js como uma rota da aplicação. 

Isso era comummente utilizado pelos desenvolvedores nas versões passadas do Next.js, pois estas versões ainda não possuíam o sistema de criação de paginas e layouts mais recente (dentro do diretório app). 

A escolha da forma como criar rotas na aplicação vai da preferência do desenvolvedor ou equipe que está desenvolvendo o projeto.

### Página Dentro de Pages
Trabalhar com páginas dentro do diretório pages é muito parecido com criar páginas dentro do diretório app, porém, existem alguns detalhes que necessitam maior atenção.

### Estilos
Para conseguir utilizar os estilos do tailwind em todas as páginas criadas dentro do diretório pages, é necessário fazer a seguinte configuração.

Crie um arquivo chamado `_app.tsx` dentro do diretório `pages` e adicione o seguinte código:
```tsx
import '@/app/globals.css';

export default function App({
    Component,
    pageProps
}: any) {
    return <Component {...pageProps} />;
}
```
Pronto, agora todos os componentes, antes de serem renderizados na UI, irão passar por `_app.tsx` que já está fazendo o import do arquivo `globals.css`, assim tornando os estilos acessíveis por todas as páginas criadas em `pages`.

### Renderização
No Next.js, as páginas criadas dentro do diretório pages podem ser renderizadas tanto no lado do servidor quanto no lado do cliente (browser), dependendo da configuração definida para página.

Já os arquivos `.tsx` de dentro do diretório `app`, são renderizados principalmente no lado do servidor. 

Este e o motivo para o qual, quando escrevemos um console.log() dentro de um componente utilizado em uma página definida dentro do diretório `app`, este log pode ser visto apenas no console do servidor que está executando a aplicação. Porém, se o componente que contem a instrução console.log() é utilizado por uma página construída dentro do diretório pages, o log de saída pode ser visto também no DeevTools do browser.

<a id="navegacao"></a>
## Navegação

Em React, essencialemente não existe essa ideia de navegação entre páginas como em um site tradicional. Para isso, é utilizado uma biblioteca chamada [React Router](https://reactrouter.com/en/main), que fornece a navegação entre componentes.

<a id="evento-basico"></a>
## Evento básico

Um exemplo de evento básico pode ser apenas um evento de click disparado por um click em um botão da página. 
Para passar uma função que recebe parâmetros para o click de um botão, basta definir a função, e passa-la como callback a propriedade `onClick` do botão.<br/>
[Exemplo](
https://github.com/Ygor-Evaldt-dev/fundamentos-do-react/blob/master/my-app/src/pages/evento-basico.tsx)

Caso a função não tenha paramêtros definidos, não é necessario passa-la com callback, é possível passar diretamente o nome da função envolvida por um par de chaves. `{ }`

É importante perceber que, quando uma função que não contém parâmetros é passada para um evento como no exemplo abaixo, não se deve invoca-la diretamente '`onClick={handleClick()}`'<br/>

O motivo pelo qual você não deve passar uma função invocando-a diretamente no evento em React é que isso causará a execução imediata da função quando o componente for renderizado. Em vez disso, você deve passar a referência da função sem os parênteses

```tsx

export default function BasicEvent() {
    function handleClick() {
        console.log('Olá mundo');
    }

    return (
        <DinamicPage>
            <button
                onClick={handleClick}
                type="button"
            >
	            Clique aqui
            </button>
        </DinamicPage>
    );
}
```

<a id="ligacao-unilateral"></a>
## Ligação Unilateral

Em React, o fluxo de alteração do estado é unidirecional, os componentes refletem as mudanças de estado, mas o contrario não acontece. 

Quando é definido um campo de entrada de dados na interface, esse campo precisa receber um valor mas, este valor estar ligado a uma variável de estado não irá fazer o campo de entrada refletir o valor atualizado, pois a mudança é sempre do estado para o componente, não do componente para o estado.

Os estados geralmente são alterados por algum evento, logo o fluxo do estado do componente será: evento `→` altera estado `→` atualiza componente.

### Utilizando Evento Para Alterar Estado (Campo de Entrada)
Utilizando um campo de entrada de formulário como exemplo, para refletir as mudanças de estado no componente de input, é preciso primeiro capturar um evento e a partir deste evento, utilizar uma função que altera o estado da variável definida como o valor do componente. 
- [Exemplo](https://github.com/Ygor-Evaldt-dev/fundamentos-do-react/blob/master/my-app/src/pages/campo-de-entrada.tsx)

<a id="comunicacao-entre-componentes"></a>
## Comunicação Entre Componentes

### Comunicação Direta

A comunicação do componente pai para o componente filho é chamada de comunicação direta. Este tipo de comunicação é estabelecida entre os componentes utilizando as `props`

- [Exemplo](https://github.com/Ygor-Evaldt-dev/fundamentos-do-react/tree/master/my-app/src/components/comunication/direct)

### Comunicação Indireta

A comunicação indireta só acontece através de uma comunicação direta, mas o que isto significa?

Para ser possível estabelecer uma comunicação do componente filho para o componente pai, primeiro é preciso utilizar a comunicação direta do componente pai para o componente filho enviando uma função(com ou sem parâmetros) via props que poderá ser utilizada pelo componente filho para alterar estados do componente pai.

- [Exemplo](https://github.com/Ygor-Evaldt-dev/fundamentos-do-react/tree/master/my-app/src/components/comunication/indirect)