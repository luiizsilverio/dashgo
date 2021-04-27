import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { ReactElement, useMemo } from "react"
import { cloneElement } from 'react'

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
    exactHref?: boolean
}

// ReactElement é diferente do ReactNode:
// ReactNode: aceita Tags, Texto, número e outros componentes dentro
// ReactElement: só aceita outros componentes dentro.

// cloneElement: permite clonar o primeiro elemento (no caso, o children),
// que vem dentro do componente (no caso, Link) e modificar alguma 
// propriedade dele (no caso, a cor).

export function ActiveLink({ children, exactHref = false, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter()
    
    const isActive = useMemo(() => {
        if (exactHref) {
            return (asPath === rest.href || asPath === rest.as)
        } else {
            return (asPath.startsWith(String(rest.href)) || 
                asPath.startsWith(String(rest.as)))
        }
    }, [asPath])
   
/* 
    let isActive = false
    if (asPath === rest.href || asPath === rest.as ||
        asPath.startsWith(String(rest.href)) ||
        asPath.startsWith(String(rest.as))) {
        isActive = true
    }
*/

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'messenger.400' : 'gray.50'
            })}
        </Link>
    )
}
