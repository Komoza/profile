import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./paths.ts";
import {Main} from "../pages/main/main.tsx";
import {NotFound} from "../pages/not-found/not-found.tsx";
import {About} from "../pages/about/about.tsx";
import {Portfolio} from "../pages/portfolio/portfolio.tsx";
import {Contact} from "../pages/contact/contact.tsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.main} element={<Main />} />
            <Route path={ROUTES.about} element={<About />} />
            <Route path={ROUTES.portfolio} element={<Portfolio />} />
            <Route path={ROUTES.contact} element={<Contact />} />

            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};