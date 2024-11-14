export function useLayout(pathname : string){
    const routes = [
        {
            path: '/',
            name: 'about',
        },
        {
            path: '/resume',
            name: 'resume',
        },
        {
            path: '/portfolio',
            name: 'portfolio',
        },
        {
            path: '/contact',
            name: 'contact',
        },
    ]
    const title = pathname === "/"
    ? "about" : pathname === "/resume"
    ? "Resume" : pathname === "/contact"
    ? "Contact" : pathname === "/portfolio"
    ? "Portfolio"
    :"about"
    return {
        title,
        routes
    }
}
