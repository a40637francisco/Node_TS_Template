import { Express, RequestHandler } from 'express';

export interface EndpointPlugin {
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    path: string;
    handlers: RequestHandler[];
}

export function connectPlugin(
    app: Express,
    plugin: EndpointPlugin
) {
    app[plugin.method](plugin.path, plugin.handlers);
}