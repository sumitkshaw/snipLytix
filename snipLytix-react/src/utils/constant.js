import AppRouter from "../AppRouter";
import { SubDomainRouter } from "../AppRouter";

export const subDomainList = [
    {subdomain:"www", app: AppRouter, main: true},
    {subdomain:"url", app: SubDomainRouter, main: false}
];