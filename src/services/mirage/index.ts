import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs'
import faker from 'faker'

type User = {
    name: string
    email: string
    created_at: string
}

export function myServer() {
    const server = createServer({

        // Tabelas do banco
        models: {
            user: Model.extend<Partial<User>>({})
        },

        // Permite gravar/obter dados de 2 tabelas de 1 vez
        serializers: {  
            application: ActiveModelSerializer
        },

        // Geração de dados aleatórios
        factories: {  
            user: Factory.extend({
                name(i: number) {
                    return faker.name.firstName() +' '+ faker.name.lastName()
                    //return `Usuário ${i + 1}`
                },
                email() {
                    return faker.internet.email()
                },
                created_at() {
                    return faker.date.recent(90) //últimos 90 dias
                }
            })
        },

        // Inclusão de dados em massa (200 usuários)
        seeds(server) {  
            server.createList('user', 200)
        },

        routes() {
            this.namespace = 'api' 
            this.timing = 750     // delay na chamada da API, p/ testar
            
            this.post('/users')   // rota POST api/users              
            //this.get('/users')  // rota GET api/users

            // GET com paginação de 10 em 10
            this.get('/users', function (schema, request) {
                const { page = 1, per_page = 10} = request.queryParams
                const totalUsers = schema.all('user').length //retorna 200
                const pageStart = (Number(page) - 1) * Number(per_page)
                const pageEnd = pageStart + Number(per_page)
                
                const users = this.serialize(schema.all('user'))
                    .users
                    //.sort((a, b) => b.name < a.name) não funciona
                    .slice(pageStart, pageEnd)

                return new Response(
                    200, // status code
                    { 'x-total-count': String(totalUsers) }, //header
                    { users }
                )
            })
            
            this.get('/users/:id')
            
            this.namespace = ''   // se o namespace não for 'api', não precisa disso.
            this.passthrough()    
        }

    })
}
