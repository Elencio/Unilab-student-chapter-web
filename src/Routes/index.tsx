import Analytics from '@/components/Analytics'
import Cards from '@/components/Cards'
import Hero from '@/components/Hero'
import Members from '@/components/Members'
import { DefaultLayout } from '@/layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'




const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Hero />
            },
            {
                path: '/editais',
                element: <Analytics />
            },
            {
                path: '/cards',
                element: <Cards />
            },
            {
                path: '/members',
                element: <Members />
            },

        ],
    },


])

export function Routes() {
    return <RouterProvider router={router} />
}