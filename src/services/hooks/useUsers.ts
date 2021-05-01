import { useQuery } from 'react-query'
import { api } from '../api'

type User = {
    id: string
    name: string
    email: string
    created_at: string
}

type UsersResponse = {
    totalCount: number
    users: User[]
}

async function getUsers(page: number): Promise<UsersResponse> {
    //const response = await fetch('http://localhost:3000/api/users')
    //const data = await response.json()
    const { data, headers } = await api.get('users', {
        params: { page }
    })

    const totalCount = Number(headers['x-total-count'])

    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: new Date(user.created_at)
                .toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
        })

    return {
        users,
        totalCount
    }
}

export function useUsers(page: number) {
    //return useQuery('users', () => getUsers(page), { 
    return useQuery(['users', page], () => getUsers(page), { 
        staleTime: 1000 * 60 * 10, //10 minutos
    })
}

// Esse 3.o parâmetro staleTime é opcional.
// Se for informado, define o tempo que o react-query
// vai buscar novamente os dados. No caso, após 5 seg.
// Antes de 5 segundos, os dados são considerados "Fresh".
// Após 5 seg, são considerados stale (antigo), e faz refresh.
