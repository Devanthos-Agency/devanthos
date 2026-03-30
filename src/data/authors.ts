export interface Author {
    id: string;
    name: string;
    role: string;
    bio: string;
    avatar: string;
    social?: {
        linkedin?: string;
        github?: string;
        instagram?: string;
    };
}

export const authors: Author[] = [
    {
        id: 'devanthos-team',
        name: 'Devanthos Team',
        role: 'Equipo de Desarrollo & Marketing',
        bio: 'Somos un equipo multidisciplinario de desarrolladores, diseñadores y especialistas en marketing digital. Creamos contenido basado en nuestra experiencia real desarrollando proyectos para empresas de toda Latinoamérica.',
        avatar: 'https://avatars.githubusercontent.com/u/85465719?v=4',
        social: {
            instagram: 'https://www.instagram.com/devanthos',
        },
    },
];

export function getAuthorById(id: string): Author | undefined {
    return authors.find((a) => a.id === id);
}

export function getAuthorByName(name: string): Author | undefined {
    return authors.find((a) => a.name === name);
}
