import { Stack } from '@chakra-ui/react'
import { RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink href="/dashboard" icon={RiDashboardLine}>
                    Dashboard
                </NavLink>
                <NavLink href="/users" icon={RiInputMethodLine}>
                    Usuários
                </NavLink>
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <NavLink href="/forms" icon={RiInputMethodLine}>
                    Formulários
                </NavLink>
                <NavLink href="/automation" icon={RiGitMergeLine}>
                    Automação
                </NavLink>
            </NavSection>
        </Stack>
    )
}
