import routes from "../routes";

const config = (app) => {
    app.use(routes);
};

export default config;