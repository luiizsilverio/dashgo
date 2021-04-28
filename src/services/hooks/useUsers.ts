import { useQuery } from 'react-query'
import { api } from '../api'

type User = {
    id: string
    name: string
    email: string
    created_at: string
}

async function getUsers() {
    //const response = await fetch('http://localhost:3000/api/users')
    //const data = await response.json()
    const { data } = await api.get('users')

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

    return users
}

export function useUsers() {
    return useQuery<User[]>('users', getUsers, { 
        staleTime: 1000 * 5 
    })
}

// Esse 3.o parâmetro staleTime é opcional.
// Se for informado, define o tempo que o react-query
// vai buscar novamente os dados. No caso, após 5 seg.
// Antes de 5 segundos, os dados são considerados "Fresh".
// Após 5 seg, são considerados stale (antigo), e faz refresh.
