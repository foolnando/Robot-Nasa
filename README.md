# UME FULLSTACK SOFTWARE ENGINEER CHALLENGE - Robot Nasa


![robotnasa](https://user-images.githubusercontent.com/47675174/151618296-c6cc0238-8ab6-49dd-be57-1b6d87fadb77.png)

## Descrição do problema 

Escreva um programa que permita aos engenheiros da NASA enviar comandos para o Robô e saber onde ele se encontra. Os engenheiros irão rodar testes no seu software para garantir que ele se comporta da forma esperada, antes de enviar o Robô para marte.


## Configuração do ambiente

### Clonando o repositório:

O primeiro passo é clonar o repositório do projeto

```bash
$ git clone https://github.com/foolnando/Robot-Nasa.git
```

### Carregando o backend do projeto:

Na raíz do repositório:

```bash
# Entrar no repositorio correspondente
$ cd back/robotnasa-api/

# Instalar as dependências
$ npm install

# Antes de rodar a API, carregar o banco de dados
$ docker-compose up -d

# Execute as migrations:
$ npm run db:migration

# Rodar a aplicação:
$ npm start
```

Caso aconteça a mensagem de erro de que o banco não foi criado (ou não existe). Os volumes do conteiner precisam ser apagados.
Para isso, rode:

```bash
$ docker volumes ls

# se nao estiver vazio, remova todos os volumes

$ docker rm <volume_name>
```

Após isso volte ao passo de carregamento do banco.

### Carregando o frontend:

Na raiz do repositório:
```bash
# Entrar no repositorio correspondente
$ cd nasa

# Instalar as dependências
$ npm install


# Rodar a aplicação:
$ npm start
```

## Algumas considerações

### API

O programa interpreta os comandos de direita (R), esquerda (L) e mover-se para frente (M). Por isso, tem um endpoint que realiza todas as funções que engolbam
esses requisitos de movimentação, assim como foi pedido na especificação, ou seja, o endpoint ```url /robots``` é responsável por: 

* Computar a movimentação do robô. 
* Verificar se o comando é válido ou inválido.
* Retornar a posição final do robô em caso de comandos válidos. 
* Retornar uma mensagem ao frontend que indique que o comando é inválido em termos de sintaxe e movimentação.

Além disso, há uma decisão de implementação que foi adicionar mais um endpoint à aplicação para "resetar" do robô para o inicio do Grid.

### Esquema de Banco de dados 

O banco é constituido apenas de uma relação chamada 'Robot' com os campos: Id, inteiro auto-gerado não nulo; o command, que é o comando recebido em formato de
string; createdAt, a data de submissão do comando; initialPos, a posição do robô antes de processar o comando; finalPos, a posição do robô após processar o
comando; isValid, um booleano que diz se o comando enviado é válido ou não (semanticamente ou sintaticamente). O esquema da relação pode ser visto a seguir:

![Captura de tela de 2022-01-19 22-36-37](https://user-images.githubusercontent.com/47675174/150262006-3893c7a9-d16d-418e-b633-34151c1a042e.png)

Essa decisão de uma única relação foi tomada ao interpretar os requisitos e analisar o contexto da aplicação. Em realção aos requisitos era explicitado que não
poderiam ser guardados comandos para consultas posteriores, mesmo que ainda tivesse um histórico de comandos. E acerca da análise do contexto da aplicação, 
imagina-se que para uma simulção mais verossímil de enviar um robô à Marte considera-se que apenas um robô (por questões de recursos) seria enviado e por isso 
apenas seus comandos seriam em apenas uma relação que diz respeito à entidade robô. Por isso, foram desconsiderados criações de relações como histórico ou algo do 
tipo.


Acerca da escolha de tecnologias, foram todas priorizando as citadas na documentação e que melhor se adequavam as necessidades para implementar os requisitos.

### Frontend

Para os componentes do frontend, inicialmente foi pensado em adotar o padrão de atom design, porém por se tratar de uma tela muito simples e com poucos componetes
foi decido dividir cada elemento da tela como um componente. Onde cada componentes se junta pra formar uma parte da página que se juntam pra formar a página 
propriamente dita. Uma leve adaptação do padrão.

Para escolha do estilo nostáligo 8-bit, foi para criar um visual mais lúdica, como se fosse um programa de testes da NASA nos anos 80.

