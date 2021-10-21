import React, {useEffect, useState} from "react";
import './main.global.sass';
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout/Layout";
import {Header} from "./shared/Header/Header";
import {Content} from "./shared/Content/Content";
import {CardsList} from "./shared/Content/CardsList/CardsList";
import {PostContextProvider} from "./shared/context/PostsContext";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {rootReducer} from "./store/reducer";
import {saveToken} from "./store/me/action";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom"
import {Post} from "./shared/Post";
import {RecoilRoot} from "recoil";


const store = createStore(rootReducer, composeWithDevTools(
   applyMiddleware(thunk)
));

function AppComponent() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        store.dispatch<any>(saveToken());
    });

    useEffect(() => {
        setMounted(true);
    });

    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>
                    <PostContextProvider>
                        <Layout>
                            <Header />
                            <Content>
                                <Switch>
                                    <Redirect exact from="/" to="/posts" />
                                    <Redirect from="/auth" to="/posts" />
                                    <Route path={"/posts"}>
                                        <CardsList />
                                        <Route path={"/posts/:id"}>
                                            <Post />
                                        </Route>
                                    </Route>
                                    <Route path={"/404"} render={() =>  <p>404 - Страница не найдена</p>} />
                                    <Redirect from="*" to="/404" />
                                </Switch>
                            </Content>
                        </Layout>
                    </PostContextProvider>
                </BrowserRouter>
            )}
        </Provider>
    );
}

export const App = hot(() => <AppComponent />)