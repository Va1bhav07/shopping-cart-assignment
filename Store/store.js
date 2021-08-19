import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./Reducers";
import rootSaga from "./Sagas";

const bindMiddleware = (middleware) => {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  return composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  );
};

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
// export const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);
